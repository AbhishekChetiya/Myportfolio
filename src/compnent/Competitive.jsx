import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Codechef from '/codechef.png'
import codeforces from '/codeforces.png'
import leetcode from '/leetcode.jpg'
import gfg from '/gfg.png'
import github from '/github.jpg'
import link from '/link.jpg'
import {Tilt} from 'react-tilt';

const cards = [
    {
      title: "CodeForces",
      description: "Expert Highest Rating - 1633",
      image: codeforces,
      link: "https://codeforces.com/profile/abhishek_0123"
    },
    {
      title: "CodeChef",
      description: "4 ⭐ Highest Rating - 1858",
      image: Codechef,
      link: "https://www.codechef.com/users/abhishek_072"
    },
    {
      title: "LeetCode",
      description: "Knight | Highest Rating - 2145",
      image: leetcode,
      link: "https://leetcode.com/u/abhishek_iet/"
    },
    {
      title: "GeekForGeek",
      description: "5 ⭐ Highest Rating - 2098",
      image: gfg,
      link: "https://www.geeksforgeeks.org/user/abhishek_0123/"
    },
    {
      title: "GitHub",
      description: "Visit To See My Projects",
      image: github,
      link: "https://github.com/AbhishekChetiya"
    },{
      
        title: "Linkedin",
        description: "",
        image: link,
        link: "https://www.linkedin.com/in/abhishek-pandey-0b41a9229/"
    }
  ];

const CodingProfilesSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length)
    }
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length)
    }
  
    return (
      <section id="project-section" className="py-20 bg-gray-300">
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-500">Profiles</h2>
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
               View
              </a>
            )}
            {secondLink && (
              <a
                href={secondLink}
                className="text-purple-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            )}
          </div>
        </div>
      </div>
      </Tilt>
    )
  }
  

export default CodingProfilesSection;