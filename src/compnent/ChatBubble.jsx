import React, { useState, useRef, useEffect } from 'react';
import { FaComments, FaPaperPlane, FaTimes } from 'react-icons/fa';
import { GoogleGenerativeAI } from '@google/generative-ai';
import envfile from '../envimport.js';
const apiKey = envfile.apiKey
const genAI = new GoogleGenerativeAI(apiKey);
const generationConfig = {
  temperature: 0.4,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: 'text/plain',
};

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});
async function run(user_input) {
  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          { text: envfile.data },
        ],
      },
    ],
  });
  const result = await chatSession.sendMessage(user_input);
  return result.response.text();
}

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([

  ]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null); // Updated to plain JavaScript

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() === "") return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: inputMessage, isBot: false },
    ]);
    async function get() {
      const randomResponse = await run(inputMessage);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: randomResponse, isBot: true },
      ]);
    }
    get();
    // Clear the input message after sending
    setInputMessage("");

  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8">
      {!isOpen && (
       <button
       onClick={() => setIsOpen(true)}
       className="rounded-full w-16 h-16 bg-blue-500 text-white shadow-lg flex items-center justify-center"
     >
       <FaComments className="h-6 w-6" />
          <span className="sr-only">Open chat</span>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-0 right-0 h-full w-full sm:h-[80vh] sm:w-[40vw] md:w-[40vw] bg-white shadow-xl flex flex-col rounded-t-lg">
          <div className="border-b flex flex-row items-center justify-between p-4">
            <h2 className="text-lg font-bold">Chat Assistant</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-2 hover:bg-gray-200"
            >
              <FaTimes className="h-4 w-4" />
              <span className="sr-only">Close chat</span>
            </button>
          </div>
          <div className="flex-grow overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? "justify-start" : "justify-end"} items-start space-x-2`}
              >
                {message.isBot && (
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-sm font-bold">Bot</span>
                  </div>
                )}
                <div
                  className={`rounded-lg p-3 max-w-[70%] ${message.isBot ? "bg-gray-200 text-gray-800" : "bg-blue-500 text-white"
                    }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="border-t p-4">
            <form onSubmit={handleSendMessage} className="flex w-full space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-grow border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="rounded-full bg-blue-500 text-white p-2"
              >
                <FaPaperPlane className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBubble;
