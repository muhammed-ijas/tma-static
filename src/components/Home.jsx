import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import { fadeIn } from "../varients";
import { TypeAnimation } from "react-type-animation";

// Import images from the assets folder
import image1 from "/image1.jpg";
import image2 from "/image2.jpg";
import image3 from "/image3.jpg";
import image4 from "/image4.jpg";
import image5 from "/image5.jpg";

const images = [image1, image2, image3, image4, image5];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative h-screen flex items-center justify-center select-none "
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#000000] to-[#166662] opacity-80"></div>

      {/* Content */}
      <div className="container mx-auto z-10 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side */}
        <div className="flex-1 text-center font-secondary lg:text-left text-white max-w-md md:ml-16 lg:ml-40">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }} // Only animate once
          >
            <TypeAnimation
              sequence={[
                "Every Child Deserves a Chance to Learn",
                5000,
                "Education is a right, not a privilege",
                5000,
                "Empowering young minds today will shape a better tomorrow",
                5000,
              ]}
              speed={20}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary leading-[1]"
              wrapper="span"
              repeat={Infinity}
            />
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }} // Only animate once
          >
            <button className="  h-auto relative z-0 scale-110 transition-all duration-300 hover:scale-100 bg-gradient-to-r from-[#0F4D51] to-[#04838C] text-white px-8 py-3 mt-10 rounded-full hover:bg-blue-700 mb-8">
              Explore More
            </button>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }} // Only animate once
            className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
          >
            <FaInstagram className="w-6 h-6 hover:text-[#04838C] cursor-pointer " />
            <FaFacebook className="w-6 h-6 hover:text-[#04838C] cursor-pointer" />
            <FaYoutube className="w-6 h-6 hover:text-[#04838C] cursor-pointer" />
            <FaTwitter className="w-6 h-6 hover:text-[#04838C] cursor-pointer" />
          </motion.div>
        </div>

        {/* Right Side - Image Slider */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hidden md:block md:mr-16 lg:mr-40"
        >
          <div
            className="w-96 h-96 bg-cover bg-center rounded-tl-[50%] rounded-br-[50%] lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto "
            style={{
              backgroundImage: `url(${images[(currentImageIndex + 1) % images.length]})`,
            }}
          ></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;