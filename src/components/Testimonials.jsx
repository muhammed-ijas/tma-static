import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      name: "Sophia Lewis",
      role: "Educational Innovator",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
      text: "The dedication to student growth and learning here is phenomenal. The unique teaching methodologies create an engaging and effective learning experience.",
    },
    {
      name: "Daniel Carter",
      role: "Youth Mentor",
      image: "https://randomuser.me/api/portraits/men/18.jpg",
      text: "I was truly impressed with the curriculum and the holistic approach to education. It's refreshing to see such passion for fostering young minds.",
    },
    {
      name: "Olivia Martinez",
      role: "Academia Researcher",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      text: "The balance of modern education and core values is outstanding. Students here are equipped with skills that prepare them for real-world challenges.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-12 bg-gray-100 flex justify-center">
      <div className="max-w-4xl w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">
          Hear From Our Guests
        </h2>
        <div className="relative bg-white shadow-lg rounded-xl p-6 text-center transition-all duration-500">
          <img
            className="w-16 h-16 mx-auto rounded-full object-cover border-2 border-gray-300"
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
          />
          <h4 className="mt-4 text-lg font-semibold text-gray-800">
            {testimonials[currentIndex].name}
          </h4>
          <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
          <p className="mt-4 text-gray-600 leading-relaxed text-sm">
            "{testimonials[currentIndex].text}"
          </p>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentIndex === index ? "bg-gray-800" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
