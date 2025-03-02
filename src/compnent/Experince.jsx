import React from 'react';
import { Briefcase, Building } from 'lucide-react'; // Added Building Icon

const ExperiencesSection = () => {
    const experiences = [
        {
          company: "GeeksforGeeks",
          role: "Problem Setter Intern",
          duration: "Feb 2024 - Present",
          description: "Creating coding problems and reviewing technical articles for contests, practice modules, and job challenges."
        }
      ];

  return (
    <section id="experience-sections" className="py-20 bg-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center text-blue-700">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Experience Section (Using Building Icon) */}
          <Card icon={<Building size={28} />} title="Work Experience" className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500 transition-all hover:scale-105 hover:shadow-xl"
                >
                  <h4 className="font-semibold text-xl text-gray-800 flex items-center gap-2">
                    <Briefcase size={20} className="text-blue-600"/> {exp.company}
                  </h4>
                  <p className="text-md text-gray-600">{exp.role}</p>
                  <p className="text-xs text-gray-500">{exp.duration}</p>
                  <p className="text-sm mt-3 text-gray-700">{exp.description}</p>
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
  <div className={`bg-white p-6 rounded-lg shadow-xl ${className}`}>
    <div className="flex items-center mb-4">
      <div className="bg-blue-100 p-3 rounded-full mr-4">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
    </div>
    {children}
  </div>
);

export default ExperiencesSection;
