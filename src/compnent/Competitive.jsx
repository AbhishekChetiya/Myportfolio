import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Codechef from '/codechef.png'
import codeforces from '/codeforces.png'
import leetcode from '/leetcode.jpg'
import gfg from '/gfg.png'
import github from '/github.jpg'
import {Tilt} from 'react-tilt';

let Card, CardContent, CardHeader, CardTitle, Button;
try {
  ({ Card, CardContent, CardHeader, CardTitle } = require('../components/ui/card'));
  ({ Button } = require('../components/ui/button'));
} catch (error) {
  // Fallback components if imports fail
  Card = ({ children, className }) => <div className={`border rounded-lg ${className}`}>{children}</div>;
  CardHeader = ({ children }) => <div className="p-4 border-b">{children}</div>;
  CardTitle = ({ children }) => <h3 className="text-lg font-semibold">{children}</h3>;
  CardContent = ({ children }) => <div className="p-4">{children}</div>;
  Button = ({ children, onClick, className }) => (
    <button onClick={onClick} className={`px-4 py-2 bg-blue-500 text-white rounded ${className}`}>
      {children}
    </button>
  );
}

const CodingProfilesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const profiles = [
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
    }
  ];

  const nextProfile = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
  };

  const prevProfile = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + profiles.length) % profiles.length);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextProfile();
    }

    if (touchStart - touchEnd < -75) {
      prevProfile();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        prevProfile();
      } else if (event.key === 'ArrowRight') {
        nextProfile();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
   
const ProfileCard = ({ profile, isActive }) => (
    <Tilt options={{ max: 10, scale: 1.05, speed: 300 }}>
      <Card 
        className={`w-full ${isActive ? 'block' : 'hidden lg:block'} mb-4 lg:mb-0 transition-all duration-300 ease-in-out overflow-hidden rounded-lg`}
      >
        <div className="relative h-64">
          <img 
            src={profile.image} 
            alt={profile.title} 
            className="w-full h-full object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
            <CardTitle className="text-white mb-2">{profile.title}</CardTitle>
            <p className="text-white text-sm mb-2 line-clamp-2">{profile.description}</p>
            <div className="flex justify-start gap-4">
              <a href={profile.link} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 text-sm">
                View Profile
              </a>
            </div>
          </div>
        </div>
      </Card>
    </Tilt>
  );
  return (
    <section id="Profile-section" className="py-20 bg-gray-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Profiles</h2>
        <div 
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {profiles.map((profile, index) => (
              <ProfileCard
                key={index}
                profile={profile}
                isActive={index === currentIndex}
              />
            ))}
          </div>
          <Button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 lg:hidden"
            onClick={prevProfile}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 lg:hidden"
            onClick={nextProfile}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex justify-center mt-4 lg:hidden">
          {profiles.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 mx-1 rounded-full ${
                index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfilesSection;