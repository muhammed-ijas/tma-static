import { useEffect, useState } from "react";
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";

// Import your images
import image1 from "/image1.jpg";
import image2 from "/image2.jpg";
import image3 from "/image3.jpg";
import image4 from "/image4.jpg";
import image5 from "/image5.jpg";

const images = [image1, image2, image3, image4, image5];
const texts = [
  "Every Child Deserves a Chance to Learn",
  "Education is a right, not a privilege",
  "Building Future Leaders Through Education" 
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/thaibamoral?igsh=MWtoaWNvaDVuaHdrbg==");
  };
  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/thaibamoralacademy/");
  };
  const handleYoutubeClick = () => {
    window.open("https://www.youtube.com/@thaibamoralacademy");
  };
  const handleTwitterClick = () => {
    window.open("https://www.youtube.com/@thaibamoralacademy");
  };

  return (
    <div
      id="Home"
      className="relative h-screen flex items-center justify-center select-none"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.5s ease-in-out"
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#000000] to-[#00000000] opacity-90"></div>
      
      {/* Content */}
      <div className="container mx-auto z-10 flex flex-col md:flex-row items-center">
        {/* Left Side Content */}
        <div className="flex-1 text-center font-secondary lg:text-left text-white w-full max-w-xl md:ml-16 lg:ml-40">
          <div className="h-[150] g:h-[240px] overflow-hidden flex items-center"> {/* Added flex and items-center */}
            <div
              key={currentTextIndex}
              className=" text-[28px] sm:text-[32px] lg:text-[48px] font-secondary leading-[1.2] animate-slide-up"
            >
              {texts[currentTextIndex]}
            </div>
          </div>
          
          {/* Smaller button */}
          <button className="h-auto relative z-0 scale-105 transition-all duration-300 hover:scale-100 bg-gradient-to-r from-[#1b82ad] to-[#125978] text-white px-6 py-2 text-sm mt-6 rounded-full hover:bg-blue-700 mb-6">
            Explore More
          </button>

          {/* Smaller social med
          ia icons with better spacing */}
          <div className="flex text-[16px] gap-x-4 max-w-max mx-auto lg:mx-0 items-center">
            <FaInstagram onClick={handleInstagramClick} className="w-5 h-5 hover:text-[#1b82ad] cursor-pointer" />
            <FaFacebook onClick={handleFacebookClick} className="w-5 h-5 hover:text-[#1b82ad] cursor-pointer" />
            <FaYoutube onClick={handleYoutubeClick} className="w-5 h-5 hover:text-[#1b82ad] cursor-pointer" />
            <FaTwitter onClick={handleTwitterClick} className="w-5 h-5 hover:text-[#1b82ad] cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Add this to your global CSS or tailwind.config.js
const style = document.createElement('style');
style.textContent = `
  @keyframes slideUp {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-slide-up {
    animation: slideUp 0.5s ease-out forwards;
  }
`;
document.head.appendChild(style);

export default Home;