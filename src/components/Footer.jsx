import { 
    FaFacebookF, 
    FaInstagram, 
    FaYoutube, 
    FaPhone, 
    FaEnvelope, 
    FaMapMarkerAlt 
  } from "react-icons/fa";
  
  const Footer = () => {
    return (
      <footer id="Contact" className="w-full bg-[#056b7c] text-white py-12 px-6 sm:px-12">
        {/* Main Container */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 md:gap-16">
          
          {/* Left Section - Address & Contact */}
          <div className="w-full md:w-1/3 space-y-4">
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-blue-400 mt-1 hover:cursor-pointer" />
              <p className="ml-2 text-sm leading-5">
                <strong>Thaiba Moral Academy</strong> <br />
                Tapn (PS), Daralhat (PO), Majhi Khanda, West Bengal - 733127
              </p>
            </div>
  
            <div className="flex items-center">
              <FaPhone className="text-blue-400 hover:cursor-pointer" />
              <p className="ml-2 font-bold">+91 96794 50238</p>
            </div>
  
            <div className="flex items-center">
              <FaEnvelope className="text-blue-400 hover:cursor-pointer" />
              <p className="ml-2 break-words">moraledu@thaibagarden.com</p>
            </div>
  
            {/* Social Icons */}
            <p className="font-semibold">Follow Us</p>
            <div className="flex space-x-3">
              <FaFacebookF className="text-blue-400 cursor-pointer hover:scale-110 transition-transform" />
              <FaInstagram className="text-blue-400 cursor-pointer hover:scale-110 transition-transform" />
              <FaYoutube className="text-blue-400 cursor-pointer hover:scale-110 transition-transform" />
            </div>
          </div>
  
          {/* Middle Section - Quick Links */}
          <div className="w-full md:w-1/3">
            <p className="font-bold mb-3 text-lg">Quick Links</p>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Institutions", "Gallery", "Downloads", "Contact"].map((link, index) => (
                <li key={index} className="hover:text-blue-300 cursor-pointer transition-all">
                  {link}
                </li>
              ))}
            </ul>
          </div>
  
          {/* Right Section - Contact Form */}
          <div className="w-full md:w-1/3">
            <p className="font-bold text-blue-300 mb-3 text-lg">Reach Us</p>
            <textarea
              placeholder="Message"
              className="w-full h-28 p-3 bg-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-3 mt-3 bg-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="mt-4 bg-blue-500 px-6 py-3 rounded-md text-white hover:bg-blue-600 transition-all w-full sm:w-auto">
              Send
            </button>
          </div>
        </div>
  
        {/* Bottom Text - Centered on Mobile */}
        <div className="mt-10 text-center text-sm opacity-75">
          &copy; {new Date().getFullYear()} Thaiba Moral Academy. All Rights Reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  