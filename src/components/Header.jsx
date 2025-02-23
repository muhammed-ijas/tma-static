import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Transition } from "@headlessui/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full bg-[#dff5ff] backdrop-blur-md border-none z-50  fixed top-0 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#Home"
              className="hover:scale-105 transition-transform duration-300"
            >
              <img className="h-12 w-auto" src="/logo.png" alt="Logo" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Gallery", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-sm font-medium text-[#192f67] hover:text-[#3e4f7b] 
                  transition-all duration-300 hover:-translate-y-[2px]"
              >
                {item}
              </a>
            ))}
            <a
              href="#donate"
              className="ml-4 bg-gradient-to-r from-[#1b82ad] to-[#136385] text-white 
    px-4 py-1 rounded-lg shadow-md hover:scale-105 transition-all duration-300 text-1xl"
            >
              Donate
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#084C61] hover:bg-white/20 transition-all duration-300"
            >
              {isOpen ? (
                <X className="h-6 w-6" strokeWidth={2} />
              ) : (
                <Menu className="h-6 w-6" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Transition */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-4"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-4"
      >
        <div className="md:hidden bg-white/20 backdrop-blur-md border-b border-white/20">
          <div className="flex flex-col space-y-2 px-4 pb-4">
            {["Home", "About", "Gallery", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={handleMobileClick}
                className="py-2 px-4 rounded-lg text-[#1b82ad] hover:bg-white/30 
                  transition-all duration-300"
              >
                {item}
              </a>
            ))}
            <a
              href="#donate"
              onClick={handleMobileClick}
              className="mt-2 bg-gradient-to-r from-[#1b82ad] to-[#125978] text-white 
                py-2 px-4 rounded-lg shadow-md hover:scale-[1.02] transition-all duration-300"
            >
              Donate
            </a>
          </div>
        </div>
      </Transition>
    </nav>
  );
}
