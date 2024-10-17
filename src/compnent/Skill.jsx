import laguage from '/Langauage.png'
import backend from '/Backend.png'
import frontend from '/Forntend.png'
import Coding from '/Coding.png'
import Develop from '/Development.png'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const profiles = [
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
    <Card 
      className={`w-full ${isActive ? 'block' : 'hidden lg:block'} mb-4 lg:mb-0 transition-all duration-300 ease-in-out`}
    >
      <CardHeader>
        <CardTitle>{profile.title}</CardTitle>
      </CardHeader>
      <CardContent>
         <img src={profile.image} alt={profile.title} className="w-full h-70 object-cover" />
      </CardContent>
    </Card>
  );

  return (
    <section id="Skills-section" className="py-20 bg-gray-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
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

export default Skills;