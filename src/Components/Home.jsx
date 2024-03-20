import About from "./About/About";
import Hero from "./Banner/Hero";
import Experience from "./Experience/Experience";
import Footer from "./Footer/Footer";
import Nav from "./NavBar/Nav";
import Project from "./Projects/Project";
import Service from "./Service/Service";
import Testimonial from "./Testimonial/Testimonial";


const Home = () => {
    return (
        <div id="/">
            <Nav></Nav>
            <Hero></Hero>
            <About></About>
            <Project></Project>
            <Service></Service>
            <Testimonial></Testimonial>
            <Experience></Experience>
            <Footer></Footer>
        </div>
    );
};

export default Home;