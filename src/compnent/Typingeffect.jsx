import React, { useState, useEffect } from 'react';

const TypingEffect = () => {
  const [typingText, setTypingText] = useState('');

  useEffect(() => {
    const typingTexts = [' MERN Stack Developer', ' Competitive Programmer', ' Aspiring Student'];
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let typingTimeout; 

    const typeText = () => {
      // Get the current text to be typed
      const currentText = typingTexts[currentTextIndex];

      if (currentCharIndex+1 < currentText.length) {
        // Use functional update to avoid race conditions
        setTypingText(prev => prev + currentText[currentCharIndex]);
        currentCharIndex++;

        // Set a timeout to type the next character
        typingTimeout = setTimeout(typeText, 100); // Typing speed (100ms)
      } else {
        // When the word is fully typed, wait 5 seconds and move to the next word
        typingTimeout = setTimeout(() => {
          setTypingText(''); // Clear the current text
          currentCharIndex = 0; // Reset character index for the new word
          currentTextIndex = (currentTextIndex + 1) % typingTexts.length; // Move to the next text
          typeText(); // Start typing the next word
        }, 1000); // Wait 5 seconds before starting the next word
      }
    };

    typeText(); // Start the typing effect

    // Clean up the timeout if the component unmounts
    return () => {
      clearTimeout(typingTimeout);
    };
  }, []);

  return <div className="text-2xl mb-4">{typingText}</div>; // Render the typing text
};

export default TypingEffect;
