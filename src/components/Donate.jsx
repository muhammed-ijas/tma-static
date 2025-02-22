import React from 'react';
import { motion } from "framer-motion";
import image2 from "/image9.jpg";
import qrCode from "/qrcode1.jpg";
import upi from "/upi.png";
import { fadeIn } from "../varients";
import { Smartphone, Building2 } from 'lucide-react';

const Donate = () => {
  return (
    <motion.section
      id="donate"
      className="relative text-white w-full py-16 md:py-20 flex items-center select-none"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{
        backgroundImage: `url(${image2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0   bg-gradient-to-r from-[#000000] to-[#00000000] opacity-90"></div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 lg:gap-12">
          
          {/* QR Code Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6">
            <img 
              src={qrCode} 
              alt="Donation QR Code" 
              className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-lg"
            />
          </div>

          {/* Payment Details Section */}
          <div className="space-y-4 md:space-y-6 max-w-xl">
            {/* UPI Section */}
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <Smartphone className="w-6 h-6 text-blue-400" />
                <span className="text-sm">+91 96794 50238</span>
              </div>
              <div className="flex items-center gap-4">
                <img 
                  src={upi} 
                  alt="UPI" 
                  className="w-6 h-6 object-contain"
                />
                <span className="text-sm">9679450238@okbizaxis</span>
              </div>
            </div>

            {/* Bank Details Section */}
            <div>
              <div className="flex items-start gap-4">
                <Building2 className="w-6 h-6 text-green-400" />
                <div className="space-y-2">
                  <p className="text-sm">account holder: THAIBA MORAL ACADEMY</p>
                  <p className="text-sm">account number: 50200064921947</p>
                  <p className="text-sm">ifsc code: HDFC0001255</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Donate;