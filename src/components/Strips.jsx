import { useEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
const Strips = () => {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Get the elements you want to animate
    const images = document.querySelectorAll(".slide-track");

    // Set up GSAP timeline
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Create the animation
    timeline.to(images, {
      x: -1500, // Adjust the distance to scroll
      duration: 10,
      ease: "linear",
      // Adjust the stagger for each image
    });
  }, []);

  return (
    <div className="w-full flex flex-col items-center my-12">
      
      <div className="h-16 scroll-container stripe1 w-full flex items-center overflow-hidden gap-12 bg-white">
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track  font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
      </div>

      <div className="h-16 stripe2 w-full flex items-center justify-start overflow-hidden gap-12 bg-white">
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track  font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track  font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
      </div>   
      
         <div className="h-16 stripe3 w-full flex items-center justify-start overflow-hidden gap-12 bg-white">
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track  font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track  font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
      </div>

         <div className="h-16 stripe4 w-full flex items-center justify-start overflow-hidden gap-12 bg-white">
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track  font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track  font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
        <h1 className="text-5xl slide-track font-bold text-red-600">
          TED<span className=" text-black font-semibold p-1">x</span>JEC
        </h1>
      </div>

    </div>
  );
};

export default Strips;
