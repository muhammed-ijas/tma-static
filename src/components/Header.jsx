import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#D0F0FD] to-[#B8E7F9] shadow-md select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left: Logo */}
          <div className="flex items-center">
            <img
              className="h-14 w-auto"
              src="/logo.png"
              alt="Logo"
            />
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#D0F0FD] shadow-md">
          <div className="flex flex-col space-y-3 py-4 px-4">
            {["Home", "About", "Gallery", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-lg text-[#084C61] hover:text-[#05668D] transition"
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              className="bg-gradient-to-r from-[#0F4D51] to-[#04838C] text-white text-center py-2 rounded-lg shadow-md hover:scale-105 transition"
            >
              Donate
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
