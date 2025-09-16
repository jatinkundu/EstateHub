import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "motion/react"

function Projects() {
  const [currentIndex, setcurrentIndex] = useState(0);
  const [cardsToShow, setcardsToShow] = useState(1);
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setcardsToShow(projectsData.length);
      } else {
        setcardsToShow(1);
      }
    };
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
    // React ka rule hai: agar tu event listener add kare, to component unmount hote waqt usko remove bhi karna chahiye
    // Ye memory leak aur duplicate listeners ko prevent karta hai.
    // Matlab: jab Projects component DOM se remove hoga, resize listener bhi clean ho jayega.
  }, []);

  // how this slider is responsive :useEffect mount hote hi ek function chalata hai → decide karta hai kitne cards dikhane hain.
  // Resize event listener lagata hai → taaki live screen resize pe cardsToShow update ho.
  // Cleanup karta hai jab component unmount ho.
  // Yehi wajah hai ki tera slider responsive aur smart lagta hai.

  const nextProject = () => {
    setcurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    // Modulus lagakar  (4 + 1) % 5 = 5 % 5 = 0 ,  (wapas first project pe aa gaya) , circular increment m use hota h
  };
  const prevProject = () => {
    setcurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div
          initial={{opacity:0,x:-100}}
         transition={{duration:1.5}}
         whileInView={{opacity:1, x:0}}
         viewport={{once:true}}

      className=" container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-2  font-light">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting Spaces, Building Legacies-Explore Our Portfolio
      </p>
      {/* slider buttons here */}
      <div className="flex items-center justify-end mb-8">
        <button
          onClick={prevProject}
          className="p-3 bg-gray-300 rounded mr-2"
          aria-label="Previous Project"
        >
          <img src={assets.left_arrow} alt="" />
        </button>
        <button
          onClick={nextProject}
          className="p-3 bg-gray-300 rounded mr-2"
          aria-label="Previous Project"
        >
          <img src={assets.right_arrow} alt="" />
        </button>
      </div>
      {/* project slider container  */}
      <div className="overflow-hidden">
        <div
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
          }}
          className=" flex gap-8 transition-transform duration-500 ease-in-out"
        >
          {projectsData.map((project, index) => (
            <div className="flex-shrink-0 relative w-full sm:w-1/4" key={index}>
              <img
                src={project.image}
                className="mx-auto w-full mb-14"
                alt={project.title}
              />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {" "}
                    {project.price} <span> | </span> {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
