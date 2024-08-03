import Contact from "../Components/Contact.jsx";
import Featured from "../Components/Featured.jsx";
import Footer from "../Components/Footer.jsx";
import Hero from "../Components/Hero.jsx";
import Navbar from "../Components/Navbar.jsx";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="featured">
        <Featured />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>

      <Footer />
    </div>
  );
};

export default Home;
