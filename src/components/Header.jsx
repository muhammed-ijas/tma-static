import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#D0F0FD] to-[#B8E7F9] shadow-md select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left: Logo */}
          <div className="flex items-center">
            <img className="h-14 w-auto" src="/logo.png" alt="Logo" />
          </div>

          {/* Center: Nav Links */}
          <div className="hidden md:flex space-x-8 ml-[10%]">
            {["Home", "About", "Gallery", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-[#084C61] hover:text-[#05668D] transition"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right: Donate Button */}
          <div className="hidden md:block">
            <a
              href="#"
              className="bg-gradient-to-r from-[#0F4D51] to-[#04838C] text-white px-5 py-2 rounded-lg shadow-md hover:scale-105 transition"
            >
              Donate
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#084C61] hover:text-[#05668D] focus:outline-none"
            >
              {isOpen ? <X className="size-7" /> : <Menu className="size-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }} // Start from the right, hidden
            animate={{ x: 0, opacity: 1 }} // Slide into view
            exit={{ x: "100%", opacity: 0 }} // Slide out on close
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#D0F0FD]/40 backdrop-blur-lg shadow-md md:hidden flex flex-col items-center justify-center space-y-6 p-6 z-50"
          >
            {/* Close Button (Fixed inside menu) */}
            <div className="absolute top-5 right-5">
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#084C61] hover:text-[#05668D] focus:outline-none"
              >
                <X className="size-8" />
              </button>
            </div>

            {["Home", "About", "Gallery", "Contact"].map((item) => (
              <motion.a
                key={item}
                href="#"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-xl font-semibold text-[#084C61] hover:text-[#05668D] transition"
              >
                {item}
              </motion.a>
            ))}

            {/* Donate Button */}
            <motion.a
              href="#"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-r from-[#0F4D51] to-[#04838C] text-white text-center px-6 py-3 rounded-lg shadow-md hover:scale-105 transition"
            >
              Donate
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
