import React from "react";
import { motion } from "framer-motion";

import apusthad from "/apusthad.jpg";
import hakeemusthad from "/hakeemusthad.jpg";
import mushthaqusthad from "/mushthaqusthad.jpg";
import zuhairudeenusthad from "/zuhairudeenusthad.jpg";

import midlaj from "/Midlaj .jpg";
import shamau from "/shamau.jpg";

import thameem from "/Thameem.jpg";
import abdu from "/abdu.jpg";
import shareef from "/shareef.jpg";
import shuhaib from "/Shuhaib.jpg";
import taju from "/taju.jpg";
import fasalu from "/Fasalu.jpg";
import ajmal from "/Ajmal.jpg";
import sayyidsajjad from "/sayyidsajjad.jpg";

// Leader Data
const leaders = [
    { id: 1, name: "Sheikh Abubakr Ahmad", role: "Grand Mufti of India", image: apusthad },
    { id: 2, name: "Dr. Muhammed Abdul Hakkim Al-Azhari", role: "Rector - Jamia Markaz", image: hakeemusthad },
    { id: 3, name: "Suhairudeen Nurani", role: "Director - Thaiba Garden", image: zuhairudeenusthad },
    { id: 4, name: "Umar Mushthak Azhari", role: "Chief - Thaiba Moral Academy", image: mushthaqusthad },
  ];
  
  // Office Bearers Data
  const officeBearers = [
    { id: 1, name: "Muhammed Shamayil Zuhri", role: "Office Secretary", image: shamau },
    { id: 2, name: "PC Midlaj Mueeni", role: "Edu Inspector", image: midlaj },
  ];
  
  // Divisional Heads Data
  const divisionalHeads = [
    { id: 1, name: "Muhammed Thameem K", division: "Buniadpur", image: thameem },
    { id: 2, name: "Suhaib", division: "Darjeeling", image: shuhaib },
    { id: 3, name: "Sayyid Sajjad Ali MP", division: "Islampur", image: sayyidsajjad },
    { id: 4, name: "Fasalu Rahman AK", division: "Kaliachak", image: fasalu },
    { id: 5, name: "Abdul Rahman M", division: "Katihar", image: abdu },
    { id: 6, name: "Thajudeen", division: "Murshidabad", image: taju },
    { id: 7, name: "Muhammed Ajmal Lifah A", division: "Raigainj", image: ajmal },
    { id: 8, name: "Mohammed Sherief N", division: "Samsi", image: shareef },
  ];
  
  // Card Component
  const Card = ({ name, role, division, image, isCircle = false }) => {
    return (
      <motion.div
        className="group relative bg-white rounded-xl shadow-lg hover:bg-green-600 transition-all duration-300 overflow-hidden"
        style={{ width: "200"}} 
      >
        {/* Image Container */}
        <div className="w-full h-40 flex items-center justify-center overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className={`w-full h-full object-cover rounded-lg"}`}
          />
        </div>
        
        {/* Text Content */}
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white mb-1">{name}</h3>
          {(role || division) && (
            <p className="text-sm text-gray-600 group-hover:text-white/90">
              {role || division}
            </p>
          )}
        </div>
      </motion.div>
    );
  };
  
  // Mentors Component
  const Mentors = () => {
    return (
      <div id="Mentors" className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-16 bg-green-50">
        <div className="max-w-7xl mx-auto">
          {/* Leaders Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
              Our <span className="text-green-600">Leadership</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
              {leaders.map((leader) => (
                <Card key={leader.id} {...leader} />
              ))}
            </div>
          </div>
  
          {/* Office Bearers Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
              Office <span className="text-green-600">Bearers</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto justify-center">
              {officeBearers.map((bearer) => (
                <Card key={bearer.id} {...bearer} />
              ))}
            </div>
          </div>

           {/* View More Button */}
          <div className="flex justify-center mt-12">
            <motion.button
              whileHover={{ y: -2 }}
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium shadow-md hover:bg-green-700 transition-colors duration-300"
            >
              View All Members
            </motion.button>
          </div>
  
          {/* Divisional Heads Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
              Divisional <span className="text-green-600">Heads</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
              {divisionalHeads.map((head) => (
                <Card key={head.id} {...head} isCircle={true} />
              ))}
            </div>
          </div>
  
         
        </div>
      </div>
    );
  };
  
  export default Mentors;