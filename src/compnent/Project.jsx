import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import todo from '/todo.png'
import tele from '/Telegram.png'
import socail from '/Social.png'
import casino from '/casino.png'
import calculator from '/calculator.png'
import sudoko from '/sudoko.png'
import {Tilt} from 'react-tilt';

const cards = [
  {
    title: "Social-Media-Website",
    description: `This project is an Instagram clone built with the MERN stack, featuring a React front-end and Node/Express back-end with MongoDB. It enables real-time chat via Socket.io and allows users to post images, videos, comment, and like content. Secure authentication is managed with JWT and Bcrypt, while Cloudinary handles image storage and Postman is used for API testing`,
    image: socail,
    secondLink : `https://social-media-website-rust.vercel.app/`,
    link: "https://github.com/AbhishekChetiya/Social-Media-Website"
  },
  {
    title: "full-stack To-Do List application",
    description: `This project enables users to register, manage, and delete tasks through an intuitive interface. Built with the MERN stack, it features robust backend APIs using Express.js and efficient database management with MongoDB, enhancing my Node.js skills and simplifying task management.`,
    image: todo,
    secondLink : "https://to-do-list-full-stack-nu.vercel.app/",
    link: "https://github.com/AbhishekChetiya/To-Do-List-Full-Stack"
  },
  {
    title: "Calculator",
    description: `Developed a user-friendly calculator using HTML, CSS, and JavaScript to perform basic mathematical operations. The application features a responsive design with a visually appealing interface, allowing users to easily input values and view results in real time. This project showcases my skills in front-end development and dynamic functionality.`,
    secondLink : "https://calculator-lovat-alpha.vercel.app/",
    image: calculator,
    link: "https://github.com/AbhishekChetiya/Calculator"
  },
  {
    title: "Sudoko Solver",
    description: `Developed a Sudoku solver that efficiently solves puzzles using recursion and backtracking techniques. The application validates input data to ensure solvability, providing accurate solutions when valid puzzles are entered. Built with HTML, CSS, and JavaScript for a user-friendly interface and seamless interaction.`,
    image: sudoko,
    secondLink : "https://sudoku-solver-murex.vercel.app/",
    link: "https://github.com/AbhishekChetiya/SudokuSolver"
  },
  {
    title: "Casino Game",
    description: `A card game where players draw from a deck of thirteen cards to reach a winning value of 21. Players can continue drawing cards until their total exceeds 21, resulting in a loss. Each loss deducts money, and sound effects enhance the gaming experience, signaling wins and losses.`,
    image: casino,
    secondLink :"https://casino-dusky-eta.vercel.app/",
    link: "https://github.com/AbhishekChetiya/CASINO"
  },
  {
    title: "Telegram Bot",
    description: `This personalized Telegram bot, built with Gemini AI, introduces my skills, interests, and achievements. It answers user questions and provides tailored insights about my software development background, competitive programming, and ongoing projects, enhancing user interaction in a friendly manner.`,
    image: tele,
    secondLink: "https://github.com/AbhishekChetiya/MyTeleChat_bot",
    link: "https://github.com/AbhishekChetiya/MyTeleChat_bot"
  },
  // Add more projects as needed
];



export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length)
  }

  return (
    <section id="project-section" className="py-20 bg-gray-300">
    <h2 className="text-4xl font-bold text-center mb-8 text-blue-500">Projects</h2>
    <div className="container mx-auto px-4 py-8">
      {/* Large screens: Three cards in a row */}
      <div className="hidden lg:grid lg:grid-cols-3 lg:gap-4">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      {/* Medium screens: Two cards in a row */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-4 lg:hidden">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      {/* Small screens: Slideable single card */}
      <div className="md:hidden relative">
        <Card {...cards[currentIndex]} />
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            onClick={prevSlide}
            className="bg-white/30 hover:bg-white/50 rounded-full p-2  transition"
            aria-label="Previous card"
          >
            <ChevronLeft className="h-6 w-6 text-black" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            onClick={nextSlide}
            className="bg-white/30 hover:bg-white/50 rounded-full p-2 transition"
            aria-label="Next card"
          >
            <ChevronRight className="h-6 w-6 text-black" />
          </button>
        </div>
      </div>
    </div>
    </section>
  )
}


function Card({ title, description, image, link, secondLink }) {
  return (
    <Tilt options={{ max: 10, scale: 1.05, speed: 300 }}>
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4">
        <h1 className="text-xl font-bold text-white">{title}</h1>
      </div>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="flex space-x-4 mt-auto">
          {link && (
            <a
              href={link}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          )}
          {secondLink && (
            <a
              href={secondLink}
              className="text-purple-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
    </Tilt>
  )
}
