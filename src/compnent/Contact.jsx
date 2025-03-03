import { Tilt } from "react-tilt";

const ContactSection = () => {
    return (
      <section id="contact-section" className="py-20 bg-gray-300">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-500">Contact Me</h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p>Lucknow, India</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Contact Number</h3>
              <p>+91-7068493259</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Email Address</h3>
              <p>a1.bhishek.p1.andey@gmail.com</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2" >Resume</h3>
              <a href="https://drive.google.com/file/d/1c98ennzEblDXO9wRaFjkK_BU3aim8hRm/view?usp=drive_link"  target = "_blank" className="text-blue-500 hover:text-blue-600">Resume</a>
            </div>
          </div>
          <div className="text-center mt-10">
            <a href="https://forms.gle/xYthhy3j8NdQ9EWc8" target = "_blank" className= "btn-primary">Have a Question?</a>
          </div>
          <div className="flex justify-center space-x-4 mt-10">
           <Tilt options={{ max: 10, scale: 1.05, speed: 300 }}>
          <a href="https://www.linkedin.com/in/abhishek-pandey-0b41a9229/" target="_blank" className="btn-primary bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300 ease-in-out">Linkedin</a>
          </Tilt>
          <Tilt options={{ max: 10, scale: 1.05, speed: 300 }}>
          <a href="https://www.instagram.com/aabbhishek_pandey/" target="_blank" className="btn-primary bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300 ease-in-out">Instagram</a>
          </Tilt>
            </div>
        </div>
      </section>
    );
  };
  
export default ContactSection;