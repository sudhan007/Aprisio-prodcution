import About from "../components/About";
import Events from "../components/Events";
import FAQ1 from "../components/FAQ1";
import FAQ2 from "../components/FAQ2";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Testimonial from "../components/Testimonials";
import Join from "../components/Join"
import { ToastContainer } from 'react-toastify';


export default function Home() {
  return (
    <>
      <NavBar />
      <ToastContainer />
      <section id="home" className="pt-5">
      <div >
        <Hero />
      </div>
      </section>
      <div id="about">
        <About />
      </div>
      <FAQ1 />
      <FAQ2 />
      <div id="events">
        <Events />
      </div>
      <Testimonial />
      <div id="join">
        <Join />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

