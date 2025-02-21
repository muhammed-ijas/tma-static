import { useState  , useEffect } from "react";
import { motion , AnimatePresence  } from "framer-motion";
import { fadeIn } from "../varients";

const leaders = [
  {
    id: 1,
    name: "Sheikh Abubakr Ahmad",
    role: "Chief Patron - Thaiba Garden",
    message:
      "Knowledge is the light that guides us. We must strive to learn and teach with sincerity. The pursuit of knowledge is a lifelong journey, and every step brings us closer to the truth.",
    image: "/apusthad.jpg",
  },
  {
    id: 2,
    name: "Dr. Muhammed Abdul Hakkim Al-Azhari",
    role: "Patron - Thaiba Garden",
    message:
      "True success lies in understanding the divine wisdom and applying it in our lives. The Quran and Sunnah are our guiding principles, and we must adhere to them with devotion.",
    image: "/hakeemusthad.jpg",
  },
  {
    id: 3,
    name: "Suhairudeen Nurani",
    role: "Director - Thaiba Garden",
    message:
      "Patience and perseverance are the keys to overcoming life's challenges. Trust in Allah's plan, and He will guide you through every difficulty.",
    image: "/zuhairudeenusthad.jpg",
  },
  {
    id: 4,
    name: "Umar Mushthak Azhari Assaqafi",
    role: "Chief - Thaiba Moral Academy",
    message:
      "The Quran is a timeless guide. Let us recite it with devotion and understand its teachings. Every verse is a source of wisdom and guidance for humanity.",
    image: "/mushthaqusthad.jpg",
  },
];

const ModernCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => 
        prevIndex === leaders.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? leaders.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === leaders.length - 1 ? 0 : prevIndex + 1
    );
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const slideTransition = {
    duration: 0.5,
    ease: "easeInOut"
  };

  return (
    <div
    id="message"
    className="w-full flex flex-col items-center text-center p-6 relative mt-10 mb-20 overflow-hidden select-none">
      {/* SVG Background */}
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="absolute -left-10 z-0 opacity-20 hidden md:block"
      >
        <svg width="400" height="400" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
          <path fill="#0bd1a6"
              opacity="0.2" d="M150 0C230 0 300 70 300 150S230 300 150 300 0 230 0 150 70 0 150 0Z" />
        </svg>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="absolute -left-10 z-0 opacity-20 hidden md:block"
      >
        <svg width="400" height="400" viewBox="100 0 600 600" xmlns="http://www.w3.org/2000/svg">
          <path fill="#0bd1a6"
              opacity="0.2" d="M150 0C230 0 300 70 300 150S230 300 150 300 0 230 0 150 70 0 150 0Z" />
        </svg>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="absolute top-40 right-0 z-0 opacity-30 hidden md:block"
      >
        <svg width="500" height="500" viewBox=" 0 600 600" xmlns="http://www.w3.org/2000/svg">
          <path fill="#0bd1a6"
              opacity="0.2" d="M150 0C230 0 300 70 300 150S230 300 150 300 0 230 0 150 70 0 150 0Z" />
        </svg>
      </motion.div>

      {/* Carousel Content */}
      <div className="w-full max-w-5xl flex flex-col-reverse md:flex-row items-center justify-center gap-10 p-6 mb-20 relative z-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
              className="text-center md:text-left"
            >
              <h3 className="text-2xl font-semibold text-[#105256]">{leaders[currentIndex].name}</h3>
              <p className="text-[#105256] text-sm font-medium">{leaders[currentIndex].role}</p>
              <p className="text-[#105256] mt-2 text-justify">{leaders[currentIndex].message}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Image Section */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.img 
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
              src={leaders[currentIndex].image} 
              alt={leaders[currentIndex].name} 
              className="w-50 h-50 sm:w-85 sm:h-85 md:w-80 md:h-80 lg:w-100 lg:h-100 object-cover rounded-full md:rounded-lg shadow-lg"
            />
          </AnimatePresence>
        </div>
      </div>
      
      {/* Navigation Icons */}
      <div className="flex justify-center gap-4 mt-10 absolute bottom-3 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={prevSlide} 
          className="p-2 border border-[#105256] rounded-full text-[#105256] text-sm hover:bg-[#105256] hover:text-white transition-all w-8 h-8 flex items-center justify-center"
        >
         {"<"}
        </button>
        <button 
          onClick={nextSlide} 
          className="p-2 border border-[#105256] rounded-full text-[#105256] text-sm hover:bg-[#105256] hover:text-white transition-all w-8 h-8 flex items-center justify-center"
        >
         {">"}
         </button>
      </div>
    </div>
  );
};

export default ModernCarousel;