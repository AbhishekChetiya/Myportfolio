import photo1 from '/Photo3.png'
const AboutSection = () => {
  return (
    <section id="about-section" className="py-20 bg-gray-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img src={photo1} alt="About Me" className="rounded-lg w-full h-auto" />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <p className="mb-4">
              Final-year B.Tech student in Computer Engineering at IET, Lucknow.
            </p>
            <p className="mb-4">
              Strong foundation in competitive programming and full-stack development.
            </p>
            <p className="mb-4">
              Proficient in C++, JavaScript, SQL, HTML, React, Node.js, Mongodb,Python and CSS.
            </p>
            <p className="mb-4">
              Experienced with the MERN stack (MongoDB, Express.js, React.js, Node.js).
            </p>
            <p className="mb-4">
              Developed a full-stack To-Do List application with a user-friendly interface.
            </p>
            <p className="mb-4">
              Built a social media website (Social Media website) with real-time chat and secure authentication.
            </p>
            <p className="mb-4">
              Created a personalized Telegram bot using Gemini AI for user interaction.
            </p>
            <p className="mb-4">
              Achieved Expert status on Codeforces with a highest rating of 1633.
            </p>
            <p className="mb-4">
              Achieved Knight status on LeetCode with a highest rating of 2145.
            </p>
            <p className="mb-4">
              Attained 4-Star status on CodeChef with a highest rating of 1858.
            </p>
            <p className="mb-4">
              Achieved 5-Star status on GeeksforGeeks with a highest rating of 2098.
            </p>
            <p className="mb-4">
              Ranked 175 out of 10,000 participants in TCS CodeVita Season 11.
            </p>

            <ul className="mb-4">
              <li><strong>Profile:</strong> Final-Year-Student</li>
              <li><strong>Domain:</strong> Computer Science</li>
              <li><strong>Education:</strong>Bachelor of Engineering</li>
              <li><strong>Language:</strong> English, Hindi</li>
              <li><strong>College:</strong> Institute of Engineering & Technology, Lucknow</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;