import React, { useState } from "react";
import { motion } from "framer-motion";

const Leaders = () => {
  const [showDivisionalHeads, setShowDivisionalHeads] = useState(false);

  const leaders = [
    { id: 1, name: "Sheikh Abubakr Ahmad", role: "Grand Mufti of India", image: "/apusthad.jpg" },
    { id: 2, name: "Dr. Muhammed Abdul Hakkim Al-Azhari", role: "Rector - Jamia Markaz", image: "/hakeemusthad.jpg" },
    { id: 3, name: "Suhairudeen Nurani", role: "Director - Thaiba Garden", image: "/zuhairudeenusthad.jpg" },
    { id: 4, name: "Umar Mushthak Azhari", role: "Chief - Thaiba Moral Academy", image: "/mushthaqusthad.jpg" },
  ];

  const officeBearers = [
    { id: 1, name: "Muhammed Shamayil Zuhri", role: "Office Secretary", image: "/shamau.jpg" },
    { id: 2, name: "PC Midlaj Mueeni", role: "Edu Inspector", image: "/Midlaj .jpg" },
  ];

  const divisionalHeads = [
    { id: 1, name: "Muhammed Thameem K", division: "Buniadpur", image: "/Thameem.jpg" },
    { id: 2, name: "Suhaib", division: "Darjeeling", image: "/Shuhaib.jpg" },
    { id: 3, name: "Sayyid Sajjad Ali MP", division: "Islampur", image: "/sayyidsajjad.jpg" },
    { id: 4, name: "Fasalu Rahman AK", division: "Kaliachak", image: "/Fasalu.jpg" },
    { id: 5, name: "Abdul Rahman M", division: "Katihar", image: "/abdu.jpg" },
    { id: 6, name: "Thajudeen", division: "Murshidabad", image: "/taju.jpg" },
    { id: 7, name: "Muhammed Ajmal Lifah A", division: "Raigainj", image: "/Ajmal.jpg" },
    { id: 8, name: "Mohammed Sherief N", division: "Samsi", image: "/shareef.jpg" },
  ];

  return (
    <div className="w-full bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Leaders Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
            Our <span className="text-[#158288]">Leadership</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6 ">
            {leaders.map((leader) => (
              <motion.div
                key={leader.id}
                whileHover={{ backgroundColor: "#E6F4EA"  }}
                className="bg-white shadow-lg rounded-lg p-6 transition duration-300 flex flex-col items-center hover:cursor-pointer hover:bg-gradient-to-r from-[#11838A] to-[#158288] text-gray-800 hover:text-white "
                style={{ width: "240px" }}
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-40 h-40 rounded-full object-cover shadow-md"
                />
                <h3 className="text-lg font-semibold   mt-4 text-center">
                  {leader.name}
                </h3>
                <p className="text-sm  text-center mt-2">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Office Bearers Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
            Office <span className="text-[#158288]">Bearers</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {officeBearers.map((bearer) => (
              <motion.div
                key={bearer.id}
                className="bg-white shadow-lg rounded-lg p-5 transition duration-300 flex flex-col items-center  hover:cursor-pointer hover:bg-gradient-to-r from-[#11838A] to-[#158288] text-gray-800 hover:text-white"
                style={{ width: "200px" }}
              >
                <img
                  src={bearer.image}
                  alt={bearer.name}
                  className="w-32 h-32 rounded-full object-cover shadow-md"
                />
                <h3 className="text-lg font-semibold  mt-4 text-center">
                  {bearer.name}
                </h3>
                <p className="text-sm  text-center mt-2">{bearer.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowDivisionalHeads(!showDivisionalHeads)}
            className="px-5 py-1 bg-white border border-gray-300 text-[#105256]  rounded-lg text-sm font-medium transition duration-300   hover:bg-[#105256] hover:text-white  hover:cursor-pointer"
          >
            {showDivisionalHeads ? "Hide Divisional Heads" : "View More"}
          </button>
        </div>

        {/* Divisional Heads Section */}
        {showDivisionalHeads && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
              Divisional <span className="text-[#158288]">Heads</span>
            </h2>
            <div className="w-full flex justify-center">
              <div className="w-full max-w-4xl">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 justify-items-center">
                  {divisionalHeads.map((head) => (
                    <motion.div
                      key={head.id}
                      className="bg-white shadow-lg rounded-lg p-4 transition duration-300 flex flex-col items-center w-full max-w-[160px]  hover:cursor-pointer hover:bg-gradient-to-r from-[#11838A] to-[#158288] text-gray-800 hover:text-white"
                    >
                      <img
                        src={head.image}
                        alt={head.name}
                        className="w-24 h-24 rounded-full object-cover shadow-md"
                      />
                      <h3 className="text-sm font-semibold  mt-3 text-center">
                        {head.name}
                      </h3>
                      <p className="text-xs  text-center mt-1">{head.division}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Leaders;