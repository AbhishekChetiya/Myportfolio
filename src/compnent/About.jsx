import React from 'react';
import { User, Book, Code, Trophy, Star, Briefcase } from 'lucide-react';

const AboutSection = () => {
  const personalInfo = [
    { label: 'Profile', value: 'Final-Year Student' },
    { label: 'Domain', value: 'Computer Science' },
    { label: 'Education', value: 'Bachelor of Engineering' },
    { label: 'Language', value: 'English, Hindi' },
    { label: 'College', value: 'Institute of Engineering & Technology, Lucknow' },
  ];

  const skills = [
    'C++', 'JavaScript', 'SQL', 'HTML', 'React', 'Node.js', 'MongoDB', 'Python', 'CSS', 'MERN stack',
    
  ];

  const projects = [
    {
      title: "Social-Media-Website",
      description: "Instagram clone with MERN stack, real-time chat, and secure authentication.",
      link: "https://github.com/AbhishekChetiya/Social-Media-Website",
      demo: "https://social-media-website-rust.vercel.app/"
    },
    {
      title: "Full-stack To-Do List",
      description: "MERN stack application for task management with user registration.",
      link: "https://github.com/AbhishekChetiya/To-Do-List-Full-Stack"
    },
    {
      title: "Calculator",
      description: "Responsive calculator with HTML, CSS, and JavaScript for basic operations.",
      link: "https://github.com/AbhishekChetiya/Calculator"
    },
    {
      title: "Sudoku Solver",
      description: "Efficient Sudoku solver using recursion and backtracking techniques.",
      link: "https://github.com/AbhishekChetiya/Sudoko"
    },
    {
      title: "Casino Game",
      description: "Card game aiming for 21, with sound effects for an enhanced experience.",
      link: "https://github.com/AbhishekChetiya/CASINO"
    },
    {
      title: "Telegram Bot",
      description: "Personalized bot with Gemini AI, showcasing skills and achievements.",
      link: "https://github.com/AbhishekChetiya/MyTeleChat_bot"
    }
  ];

  const achievements = [
    { platform: 'Codeforces', status: 'Expert', rating: 1633 },
    { platform: 'LeetCode', status: 'Knight', rating: 2145 },
    { platform: 'CodeChef', status: '4-Star', rating: 1858 },
    { platform: 'GeeksforGeeks', status: '5-Star', rating: 2098 },
    { platform: 'TCS CodeVita Season 11', achievement: 'Ranked 175 out of 10,000 participants' },
    { achievement: 'Solved 2000+ questions on various platforms' }
  ];

  return (
    <section id="about-section" className="py-20 bg-gray-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center text-blue-600">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card icon={<User size={24} />} title="Personal Info">
            <ul className="space-y-2">
              {personalInfo.map((item, index) => (
                <li key={index}>
                  <strong>{item.label}:</strong> <span className="text-blue-600">{item.value}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card icon={<Code size={24} />} title="Skills">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </Card>

          <Card icon={<Briefcase size={24} />} title="Projects" className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-lg mb-2">{project.title}</h4>
                  <p className="text-sm mb-3">{project.description}</p>
                  <div className="flex space-x-2">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                      GitHub
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline text-sm">
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card icon={<Trophy size={24} />} title="Achievements" className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow">
                  {achievement.platform && (
                    <h4 className="font-semibold text-lg mb-2">{achievement.platform}</h4>
                  )}
                  <p className="text-blue-600">
                    {achievement.status && `${achievement.status} • `}
                    {achievement.rating && `Rating: ${achievement.rating}`}
                    {achievement.achievement}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

const Card = ({ icon, title, children, className = '' }) => (
  <div className={`bg-white p-6 rounded-lg shadow-lg ${className}`}>
    <div className="flex items-center mb-4">
      <div className="bg-blue-100 p-2 rounded-full mr-3">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    {children}
  </div>
);

export default AboutSection;