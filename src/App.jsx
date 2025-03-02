import AboutSection from "./compnent/About.jsx";
import ChatBubble from "./compnent/Chat.jsx";
import Competitive from "./compnent/Competitive.jsx";
import ContactSection from "./compnent/Contact.jsx";
import ExperiencesSection from "./compnent/Experince.jsx";
import Footer from "./compnent/Footer.jsx";
import HomeSection from "./compnent/homepage.jsx";
import Navbar from "./compnent/Navbar.jsx";
import ProjectsSection from "./compnent/Project.jsx";
import Skill from "./compnent/Skill.jsx";


const App = () => {
  return (
    <div className="font-sans">
      <Navbar/>
      <HomeSection/>
      <AboutSection/>
      <ExperiencesSection/>
      <ProjectsSection/>
      <Competitive/>
      <Skill/>
      <ContactSection/>
      <ChatBubble/>
      <Footer/>
    </div>
  );
};

export default App;