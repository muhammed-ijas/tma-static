import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const LeadersMessage = () => {
  const leaders = [
    {
      id: 1,
      name: "Sheikh Abubakr Ahmad",
      role: "Grand Mufti of India",
      message: "Knowledge is the light that guides us. We must strive to learn and teach with sincerity. The pursuit of knowledge is a lifelong journey, and every step brings us closer to the truth.",
      image: "/apusthad.jpg",
    },
    {
      id: 2,
      name: "Dr. Muhammed Abdul Hakkim Al-Azhari",
      role: "",
      message: "True success lies in understanding the divine wisdom and applying it in our lives. The Quran and Sunnah are our guiding principles, and we must adhere to them with devotion.",
      image: "/hakeemusthad.jpg",
    },
    {
      id: 3,
      name: "Suhairudeen Nurani",
      role: "SDirector - Thaiba Garden",
      message: "Patience and perseverance are the keys to overcoming life's challenges. Trust in Allah's plan, and He will guide you through every difficulty.",
      image: "/zuhairudeenusthad.jpg",
    },
    {
      id: 4,
      name: "Umar Mushthak Azhari",
      role: "Quranic Recitation Expert",
      message: "The Quran is a timeless guide. Let us recite it with devotion and understand its teachings. Every verse is a source of wisdom and guidance for humanity.",
      image: "/mushthaqusthad.jpg",
    }
  ];

  const [currentLeader, setCurrentLeader] = useState(0);
  const [direction, setDirection] = useState(0);

  

  const handleNext = () => {
    setDirection(1);
    setCurrentLeader((prev) => (prev + 1) % leaders.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentLeader((prev) => (prev - 1 + leaders.length) % leaders.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  return (
    <div id="leaders" className="relative bg-white py-16 select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold text-center text-[#394f51] mb-12"
        >
          Leadership Messages
        </motion.h2>

        <div className="relative min-h-[600px] sm:min-h-[400px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentLeader}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="absolute w-full"
            >
              <div className="flex flex-col md:flex-row items-center gap-8 p-4 bg-white rounded-lg ">
                <div className="w-full md:w-1/2 h-64 md:h-96 relative overflow-hidden rounded-lg">
                  <img
                    src={leaders[currentLeader].image}
                    alt={leaders[currentLeader].name}
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                <div className="w-full md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-bold text-[#016f77]">
                    {leaders[currentLeader].name}
                  </h3>
                  <p className="text-sm text-[#04838C]">
                    {leaders[currentLeader].role}
                  </p>
                  <p className="text-[#394f51] leading-relaxed text-justify">
                    {leaders[currentLeader].message}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-20 sm:relative sm:bottom-0 sm:left-0 sm:transform-none">
          <div className="flex items-center justify-center gap-6 p-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="p-2 sm:p-3 md:p-4 rounded-full bg-[#016f77] text-white hover:bg-[#04838C] transition-colors duration-300 shadow-lg hover:shadow-xl"
              aria-label="Previous"
            >
              <FaChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </motion.button>
            
            {/* Optional: Add dots indicator for current slide */}
            <div className="hidden sm:flex items-center gap-2">
              {leaders.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentLeader === index 
                      ? 'bg-[#016f77] w-4' 
                      : 'bg-[#016f77]/40'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="p-2 sm:p-3 md:p-4 rounded-full bg-[#016f77] text-white hover:bg-[#04838C] transition-colors duration-300 shadow-lg hover:shadow-xl"
              aria-label="Next"
            >
              <FaChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadersMessage;