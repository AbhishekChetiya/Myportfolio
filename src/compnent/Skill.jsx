import laguage from '/Langauage.png'
import backend from '/Backend.png'
import frontend from '/Forntend.png'
import Coding from '/Coding.png'
import Develop from '/Development.png'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {Tilt} from 'react-tilt';
const cards = [
    {
      title: "Language",
      image: laguage
    },{
      title: "Backend Technologies",
      image: backend
    },{
      title: "Frontend Technologies",
      image: frontend
    },{
      title: "Coding PlatForms",
      image: Coding
    },{
      title: "Development Tools",
      image: Develop
    }
  ];
  export default function Skills() {
    const [currentIndex, setCurrentIndex] = useState(0)
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length)
    }
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length)
    }
  return (
      <section id="Skills-section" className="py-20 bg-gray-300">
    <h2 className="text-4xl font-bold text-center mb-8 text-blue-500">Skills</h2>
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
  
  
  function Card({ title,  image}) {
    return (
      <Tilt options={{ max: 10, scale: 1.05, speed: 300 }}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4">
          <h1 className="text-xl font-bold text-white">{title}</h1>
        </div>
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      </Tilt>
    )
  }
