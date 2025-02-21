import { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import { FaPlus } from "react-icons/fa";

const StatsSection = () => {
  const stats = [
    { label: "States", value: 4 },
    { label: "Edu Inspectors", value: 4 },
    { label: "Divisions", value: 9 },
    { label: "Zones", value: 35 },
    { label: "Edu Officers", value: 33 },
    { label: "PECs", value: 731 },
    { label: "Teachers", value: 862 },
    { label: "Students", value: 22714 },
  ];

  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  // Click-and-drag functionality
  useEffect(() => {
    const container = containerRef.current;
    let isDragging = false;
    let startX;
    let scrollLeft;

    const startDragging = (e) => {
      isDragging = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      container.style.cursor = "grabbing"; // Change cursor to grabbing
    };

    const stopDragging = () => {
      isDragging = false;
      container.style.cursor = "grab"; // Change cursor back to grab
    };

    const whileDragging = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2; // Adjust scroll speed
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener("mousedown", startDragging);
    container.addEventListener("mouseup", stopDragging);
    container.addEventListener("mouseleave", stopDragging);
    container.addEventListener("mousemove", whileDragging);

    return () => {
      container.removeEventListener("mousedown", startDragging);
      container.removeEventListener("mouseup", stopDragging);
      container.removeEventListener("mouseleave", stopDragging);
      container.removeEventListener("mousemove", whileDragging);
    };
  }, []);

  return (
    <div id="stats" ref={sectionRef} className="py-12 bg-gray-100 select-none">
      {/* Stats Container */}
      <div className="flex justify-center items-center mb-10  text-2xl font-extrabold text-[#394f51]">
        <h1>Empowering the Future</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Horizontal Scrollable Stats */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto pb-4 cursor-grab scrollbar-hide" // Add scrollbar-hide class
          style={{ scrollBehavior: "smooth" }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex-shrink-0 min-w-[200px] mx-2 flex flex-col items-center justify-center text-center"
            >
              <div className="text-4xl font-extrabold text-[#1e929b] mb-2 flex items-center gap-1">
                {hasAnimated ? (
                  <CountUp start={0} end={stat.value} duration={3} />
                ) : (
                  stat.value
                )}
                <FaPlus className="text-lg text-[#1e929b]" />
              </div>
              <div className="text-lg font-semibold text-gray-700">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Add CSS to hide scrollbar */}
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none; /* Hide scrollbar for Chrome, Safari, and Edge */
          }

          .scrollbar-hide {
            -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */
            scrollbar-width: none; /* Hide scrollbar for Firefox */
          }
        `}
      </style>
    </div>
  );
};

export default StatsSection;
