import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Work from "./components/Work";
import IntroOverlay from "./components/IntroOverlay";


function App() {
  useGSAP(() =>{
        // create timeline
        // gsap.to("body", {
        //   duration: 0,
        //   css:{
        //     visibility: "visible"
        //   }
        // });

        gsap.from(".line span", {
          duration: 1.8,
          y: 100,
          ease: 'power4.out',
          delay: 1,
          skewY: 7,
          stagger: {
            amount: 0.3,
          },
        });

        gsap.to(".overlay-top", {
          duration: 1.6,
          delay: 2,
          height: 0,
          ease: 'expo.inOut',
          stagger: { amount: 0.4,},
        });

        gsap.to(".overlay-bottom", {
          duration: 1.6,
          width: 0,
          ease: 'expo.inOut',
          delay: 2.8,
          stagger: { amount: 0.4,},
        });
  });

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);
  
  return (
    <div className="max-w-screen min-h-screen flex flex-col justify-between gap-20 sm:gap-0">
      <IntroOverlay/>
      <Header/>
      <Banner/>
      <Work/>
    </div>
  );
}

export default App;
