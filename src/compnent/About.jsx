import React from 'react';
import { User, Code, Trophy, Briefcase } from 'lucide-react';

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
    'Django', 'Git' , 'Express.js', 'RESTful APIs', 'Data Structures', 'Algorithms', 'Competitive Programming',
    'Python ORM', 'Socket.io' , 'JWT', 'Bcrypt', 'Cloudinary', 'Postman',
  ];
  const projects = [
    {
      title: "Connectify",
      description: `Social Media built with MERN stack, featuring real-time chat and Post like and comments Features.`,
      secondLink: `https://social-media-website-rust.vercel.app/`,
      link: "https://github.com/AbhishekChetiya/Social-Media-Website"
    },
    {
      title: "Finance Analyser",
      description: ` A full-stack finance management application allowing users to record, track, and analyze financial transactions with features like custom date range selection and interactive charts for detailed insights.`,
      secondLink: "https://financial-anaylser.vercel.app/",
      link: "https://github.com/AbhishekChetiya/Finance-Manager"
    },
    {
      title: "full-stack To-Do List application",
      description: `MERN-based To-Do app allowing task management with robust Express.js backend APIs.`,
      secondLink: "https://to-do-list-full-stack-nu.vercel.app/",
      link: "https://github.com/AbhishekChetiya/To-Do-List-Full-Stack"
    },
    {
      title: "Calculator",
      description: `Simple calculator using HTML, CSS, JavaScript for basic operations and responsive design.`,
      secondLink: "https://calculator-lovat-alpha.vercel.app/",
      link: "https://github.com/AbhishekChetiya/Calculator"
    },
    {
      title: "Sudoku",
      description: `A Sudoku solver using recursion and backtracking, with real-time validation.`,
      secondLink: "https://sudoku-solver-murex.vercel.app/",
      link: "https://github.com/AbhishekChetiya/SudokuSolver"
    },
    {
      title: "Casino",
      description: `Card game where players try to reach 21, featuring sound effects and penalties.`,
      secondLink: "https://casino-dusky-eta.vercel.app/",
      link: "https://github.com/AbhishekChetiya/CASINO"
    }
    // Add more projects as needed
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
                    {project.secondLink && (
                      <a href={project.secondLink} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline text-sm">
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