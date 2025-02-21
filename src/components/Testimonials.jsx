import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      name: "Dr. Ahmed Khan",
      role: "Education Researcher",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      text: "Thaiba Moral Academy is a beacon of knowledge and growth. Their innovative approach to education is truly inspiring, and I was amazed by the impact they have had on students from remote areas.",
    },
    {
      name: "Fatima Bano",
      role: "Community Leader",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      text: "Visiting this institution was a heartwarming experience. The dedication of the educators and the well-structured curriculum are paving the way for a brighter future.",
    },
    {
      name: "Ravi Sharma",
      role: "Social Activist",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
      text: "The transformation brought by Thaiba Moral Academy in the North Indian madrasa system is commendable. Their efforts in integrating modern and traditional education are truly remarkable.",
    },
    {
      name: "Meera Joshi",
      role: "Educational Consultant",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
      text: "I was deeply moved by the institution's commitment to holistic education. The balance of academic and extracurricular activities is exceptional.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (testimonials.length / 2));
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Section - Content */}
        <div className="lg:w-2/5">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What Our Visitors Say
          </h2>
          <p className="text-sm text-gray-600 leading-8 text-justify">
            Since 2010, Thaiba Moral Academy has been redefining primary
            education through innovation and dedication. Visitors from various
            fields have shared their experiences and admiration for the
            academy’s commitment to academic excellence and social
            transformation.
          </p>
        </div>

        {/* Right Section - Auto-Sliding Cards */}
        <div className="lg:w-3/5 relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-1/2 px-2 flex-shrink-0 flex"
                style={{ flex: "0 0 50%" }}
              >
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-full flex flex-col">
                  <div className="flex items-center gap-5 mb-6">
                    <img
                      className="w-12 h-12 rounded-full object-cover"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div>
                      <h5 className="text-lg font-semibold text-gray-900">
                        {testimonial.name}
                      </h5>
                      <span className="text-sm text-gray-500">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-7 text-justify mt-2 text-xs">
                    {testimonial.text}
                  </p>
                  <div className="flex-grow"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
