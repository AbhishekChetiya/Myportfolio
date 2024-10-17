import AboutSection from "./compnent/About";
import ChatBubble from "./compnent/Chatbubble";
import Competitive from "./compnent/Competitive";
import ContactSection from "./compnent/Contact";
import Footer from "./compnent/Footer";
import HomeSection from "./compnent/homepage";
import Navbar from "./compnent/Navbar";
import ProjectsSection from "./compnent/Project";
import Skill from "./compnent/Skill";


const App = () => {
  return (
    <div className="font-sans">
      <Navbar/>
      <HomeSection/>
      <AboutSection/>
      <ProjectsSection/>
      <Competitive/>
      <Skill/>
      <ContactSection/>
      <Footer/>
    </div>
  );
};

export default App;