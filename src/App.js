import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import { useEffect, useState } from "react";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Contact from "./components/Contact";
import Particles from "react-tsparticles";
import GridLoader from "react-spinners/CircleLoader";
function App() {

  const particlesInit = (main) => {

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
  };
  const [loading, setLoading] = useState(true);
  

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    AOS.init({
      offset: 120, 
  delay: 0,
  duration: 400, 
    });
    AOS.refresh();
    },3000)
  },[])
  return (
    
    <>
    <div className={loading? "loading":"d-none"}>
    <GridLoader color={"rgb(93, 253, 93)"} loading={loading} style={{display: "block",margin:"0 auto"}} size={150} />
    </div>
    <div className={loading? "d-none":"App"} >
    <div className="particle">
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
    </div>

     <Header/>
     <Home/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
    </div>
    </>
  )
}

export default App;
