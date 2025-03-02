import React, {useState} from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    return (
      <nav className="bg-gray-300 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <a href="#" className="text-xl font-bold">Abhishek Pandey</a>
            <div className="hidden md:flex space-x-4">
              <a href="#home-section" className="nav-link">Home</a>
              <a href="#about-section" className="nav-link">About</a>
              <a href="#experience-sections" className="nav-link">Experience </a>
              <a href="#project-section" className="nav-link">Projects</a>
              <a href="#Profile-section" className="nav-link">Profiles</a>
              <a href="#Skills-section" className="nav-link">Skills</a>
              <a href="#contact-section" className="nav-link">Contact</a>
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden py-2">
              <a href="#home-section" className="block py-2">Home</a>
              <a href="#about-section" className="block py-2">About</a>
              <a href='#experience-sections' className='block py-2'>Experience</a>
              <a href="#project-section" className="block py-2">Projects</a>
              <a href="#Profile-section" className="block py-2">Profiles</a>
              <a href="#Skills-section" className="block py-2">Skills</a>
              <a href="#contact-section" className="block py-2">Contact</a>
            </div>
          )}
        </div>
      </nav>
    );
  };

export default Navbar;