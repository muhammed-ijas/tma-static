import { motion } from "framer-motion";
import image2 from "/image8.jpg"; // Import your image
import { fadeIn } from "../varients";

const Qoute = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, backgroundColor: "black", y: 20 },
    visible: { 
      opacity: 1, 
      backgroundColor: "transparent", 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
    
  };
  

  return (
    <motion.div
      id="qoute"
      className="relative text-white flex items-center justify-center px-6 sm:px-12 md:px-20 lg:px-60 xl:px-64 overflow-hidden w-full min-h-screen select-none"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      style={{
        backgroundImage: `url(${image2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Wrapper for fixed content width with fixed margins */}
      <div className="relative z-10 w-full max-w-screen-lg mx-auto mt-5 mb-5">
        {/* Background Animation */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="absolute inset-0 w-full h-full flex items-center justify-center"
        >
          <svg
            id="visual"
            viewBox="0 0 900 600"
            className="max-w-[900px] max-h-[600px]" // Prevents SVG from stretching
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            preserveAspectRatio="xMidYMid slice"
          >
            <g transform="translate(404.8532250928495 316.24756292001223)">
              <path
                d="M160.9 -153.4C210.1 -111.7 252.5 -55.9 260 7.4C267.4 70.7 239.8 141.4 190.6 172.8C141.4 204.1 70.7 196 4.1 191.9C-62.5 187.8 -124.9 187.6 -149.9 156.3C-174.9 124.9 -162.5 62.5 -164.2 -1.8C-166 -66 -182 -132 -157 -173.7C-132 -215.3 -66 -232.7 -5.1 -227.6C55.9 -222.5 111.7 -195.1 160.9 -153.4"
                fill="#0bd1a6"
                opacity="0.2"
              />
            </g>
          </svg>
        </motion.div>

        {/* Quote Content */}
        <div className="relative z-20 text-center px-6">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight"
          >
          Education is not just about filling minds with knowledge; it&apos;s about{" "}
            <span className="text-[#29ccd8]">igniting curiosity</span>,{" "}
            <span className="text-[#29ccd8]">nurturing dreams</span>, and{" "}
            <span className="text-[#29ccd8]">empowering individuals</span> to create a brighter future for themselves and the world
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
};

export default Qoute;
