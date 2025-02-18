import { motion } from "framer-motion";
import image2 from "/image5.jpg"; // Import your image
import { fadeIn } from "../varients";
import Icon from "/icon.png";



const Goals = () => {
 

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-8 bg-gradient-to-r  from-[#11838A] to-[#105256]">
      {/* Left Side: SVG with Image */}
      <motion.div
      variants={fadeIn("left", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.3 }}
      className="relative w-full md:w-1/2">
        <svg 
          viewBox="0 0 500 500" 
          className="w-full max-w-[500px] mx-auto"
        >
          <defs>
            <clipPath id="blob-shape">
              <path d="M416.5,309.5Q422,369,371,401.5Q320,434,266.5,423Q213,412,162.5,389Q112,366,87.5,313Q63,260,82,205.5Q101,151,146.5,113Q192,75,252.5,73.5Q313,72,363.5,107.5Q414,143,412.5,201.5Q411,260,416.5,309.5Z" />
            </clipPath>
          </defs>
          <image
            href={image2}
            width="500"
            height="500"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#blob-shape)"
          />
        </svg>
      </motion.div>
      
      
      {/* Right Side: Text */}
      <motion.div
      variants={fadeIn("right", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8 flex flex-col justify-end md:p-20 relative"
    >
      {/* Background Icon */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img 
          src={Icon} 
          alt="background icon" 
          className="w-[60%] h-auto opacity-10 object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Our Goals
        </h1>
        <p className="text-white text-base sm:text-lg leading-relaxed max-w-xl text-justify">
          At our core, we strive to innovate, inspire, and impact lives through
          our work. Our goals are centered around creating sustainable
          solutions, fostering creativity, and empowering communities to achieve
          their full potential.
          At our core, we strive to innovate, inspire, and impact lives through
          our work. Our goals are centered around creating sustainable
          solutions, fostering creativity, and empowering communities to achieve
          their full potential.
          
        </p>
      </div>
    </motion.div>
    </div>
  );
};

export default Goals;