import { useState } from "react";
import image3 from "/image3.jpg";
import image5 from "/image5.jpg";
import image2 from "/image2.jpg";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../varients";

const AboutSection = () => {
  const [language, setLanguage] = useState("en");

  const content = {
    en: {
      title: "About Us",
      description:
        "Donec porttitor, enim ut dapibus lobortis, lectus sem tincidunt dui, eget ornare lectus ex non libero. Nam rhoncus diam ultrices porttitor laoreet. Ut mollis fermentum ex, vel viverra lorem volutpat sodales. In ornare porttitor odio sit amet laoreetDonec porttitor, enim ut dapibus lobortis, lectus sem tincidunt dui, eget ornare lectus ex non libero. Nam rhoncus diam ultrices porttitor laoreet. Ut mollis fermentum ex, vel viverra lorem volutpat sodales. In ornare porttitor odio sit amet laoreet.",
    },
    ml: {
      title: "ഞങ്ങളെക്കുറിച്ച്",
      description:
        "ഡോണക് പോർട്ടിറ്റോർ, എനിം ഉത് ഡാപിബസ് ലോബോർട്ടിസ്, ലക്ടസ് സെം ടിൻസിഡന്റ് ഡുയി, എഗെറ്റ് ഓർണാർ ലക്ടസ് എക്സ് നോൺ ലിബറോ. നാം റൊങ്കസ് ഡിയം അൾട്രിസസ് പോർട്ടിറ്റോർ ലയോറെറ്റ്. ഉത് മോളിസ് ഫെർമെന്റും എക്സ്, വേൽ വിവെറ ലോറേം വോൾപുഡത് സൊഡാലസ്.ഡോണക് പോർട്ടിറ്റോർ, എനിം ഉത് ഡാപിബസ് ലോബോർട്ടിസ്, ലക്ടസ് സെം ടിൻസിഡന്റ് ഡുയി, എഗെറ്റ് ഓർണാർ ലക്ടസ് എക്സ് നോൺ ലിബറോ. നാംട്രിളിസ് ഫെർമെന്റും എക്സ്, വേൽ.",
    },
    ar: {
      title: "معلومات عنا",
      description:
        "دونيك بورتتيتور، أنيم أوت دابيبيس لوبورتيس، ليكتوس سيم تينسيدونت دوي، إيجيت أورناري ليكتوس إكس نون ليبيرو. نام رونكوس ديام ألتريسيس بورتتيتور لاوريت. أوت موليس فيرمينتوم إكس، فيل فيفيرا لوريم فولبوت سودالس. دونيك بورتتيتور، أنيم أوت دابيبيس لوبورتيس، ليكتوس سيم تينسيدونت دوي، إيجيت أورناري ليكتوس إكس نون ليبيرو. نام رونكوس ديام ألتريسيس بورتتيتور لاوريت. أوت موليس فيرمينتوم إكس، فيل فيفيرا لوريم فولبوت سودالس.دونيك بورتتيتور، أنيم أوت دابيبيس لوبورتيس، ليكتوس سيم تينسيدونت دوي، إيجيت أورناري ليكتوس إكس نون ليبيرو. نام رونكوس ديام ألتريسيس بورتتيتور لاوريت. أوت موليس فيرمينتوم إكس، فيل فيفيرا لوريم  سودالس.دونيك بورتتيتور، أنيم أوت دابيبيس لوبورتيس، ليكتوس سيم تينسيونت دوي،  ألتريسيس  . أوت موليس فيرمينتوم إكس، فيل فيفيرا   سودالس.",
    },
    ur: {
      title: "ہمارے بارے میں",
      description:
        "ڈونک پورٹیٹر، انیم اوٹ ڈیببس لوبورٹس، لیکٹس سیم ٹینسڈنٹ دوئ، ایگٹ اورنار لیکٹس ایکس نون لیبرو۔ نام رونکس ڈائم آلٹریسز پورٹیٹر لاریٹ۔ اوٹ مولس فرمنٹم ایکس، ویل ویورا لوریم وولپٹ سوڈالسڈونک پورٹیٹر، انیم اوٹ ڈیببس لوبورٹس، لیکٹس سیم ٹینسڈنٹ دوئ، ایگٹ اورنار لیکٹس ایکس نون لیبرو۔ نام رونکس ڈائم آلٹریسز پورٹیٹر لاریٹ۔ اوٹ مولس فرمنٹم ایکس، ویل ویورا لوریم وولپٹ سوڈالڈونک پورٹیٹر، انیم اوٹ ڈیببس لوبورٹس،  سیم ٹینسڈنٹ دوئ، ایگٹ اورنار لیکٹس ایکس نون لیبرو۔ نام رونکس ڈائم آلٹریسز پورٹیٹر لاریٹ۔ اوٹ مولس فرمنٹم ایکس، ویل ویورا لوریم وولپٹ سوڈالسڈونک پورٹیٹر، انیم اوٹ ڈیببس لوبورٹس، لیکٹس سیم ٹینسڈنٹ دوئ، ایگٹ اورنار لیکٹس ایکس نون لیبرو۔ نام رونکس ڈائم آلٹریسز پورٹیٹر لاریٹ۔ اوٹ مولس فرمنٹم ایکس، ویل ویورا لوریم وولپٹ سوڈالس۔",
    },
    ba: {
      title: "আমাদের সম্পর্কে",
      description:
        "ডোনেক পোর্টিটর, এনিম উট ড্যাপিবাস লোবোর্টিস, লেক্টাস সেম টিনসিডেন্ট ডুই, ইগেট অর্নার লেক্টাস এক্স নন লিবেরো। নাম রোনকাস ডায়াম আল্ট্রিসেস পোর্টিটর লোরেট। উট মোলিস ফার্মেন্টাম এক্স, ভেল ভিভেরা লোরেম ভোলুপাট সোডালস।  পোর্টিটর, এনিম উট ড্যাপিবাস লোবোর্টিস, লেক্টাস সেম টিনসিডেন্ট ডুই, ইগেট অর্নার লেক্টাস এক্স নন লিবেরো। নাম রোনকাস ডায়াম আল্ট্রিসেস পোর্টিটর লোরেট। উট মোলিস ফার্মেন্টাম এক্স, ভেল ভিভেরা লোরেম ভোলুপাট সোডালস। ডোনেক পোর্টিটর, এনিম উট ড্যাপিবাস ,   টিনসিডেন্ট ডুই, ইগেট অর্নার লেক্টাস এক্স নন লিবেরো। নাম রোনকাস ডায়াম আল্ট্রিসেস পোর্টিটর লোরেট। উট   , ভেল ",
    },
  };

  return (
    <div
      id="about"
      className="relative bg-white overflow-hidden mt-16 mb-25 select-none"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          {/* Language Selector (Line within a Shape) */}
          <div className="flex justify-center">
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="flex items-center bg-[#016f77] rounded-full p-1 border-none text-[#8c9696]"
            >
              {["en", "ml", "ar", "ur" , "ba" ].map((lang, index) => (
                <React.Fragment key={lang}>
                  <button
                    className={`text-sm font-light px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                      language === lang
                        ? "text-[#016f77] bg-gradient-to-r from-[#e5eaea] to-[#eef1f1] shadow-sm"
                        : "text-[#d4e3e4] hover:bg-[#518f94]"
                    }`}
                    onClick={() => setLanguage(lang)}
                  >
                    {lang === "en" && "English"}
                    {lang === "ml" && "മലയാളം"}
                    {lang === "ar" && "العربية"}
                    {lang === "ur" && "اردو"}
                    {lang === "ba" && "বাংলা"}
                  </button>
                  {index < 4 && ( // Add separator between buttons (except the last one)
                    <div className="w-px h-6 bg-gray-300 mx-1"></div>
                  )}
                </React.Fragment>
              ))}
            </motion.div>
          </div>

          
          {/* Main Content */}
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <motion.div
              variants={fadeIn("up", 0.9)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }} className="sm:text-center lg:text-left flex items-center flex-col justify-center">
              <h2 className="my-6 text-2xl tracking-tight font-extrabold text-[#016f77] sm:text-3xl md:text-4xl">
                {content[language].title}
              </h2>
              <p className="text-[#016f77] text-lg leading-relaxed max-w-2xl">
                {content[language].description}
              </p>
            </motion.div>
          </main>
        </div>
      </div>

      {/* Right Section - Image (Fixed Size) */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex justify-center items-center">
        <div className="flex justify-center items-center h-[300px] w-full gap-1">
          {/* First Image - Comes from Top */}
          <motion.img
            variants={fadeIn("down", 0.3)} // Comes from top
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }} // Only animate once
            src={image3}
            alt="Image 3"
            className="w-32 h-65 object-cover rounded-3xl"
          />

          {/* Second Image - Comes from Bottom */}
          <motion.img
            variants={fadeIn("up", 0.9)} // Comes from bottom
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }} // Only animate once
            src={image5}
            alt="Image 5"
            className="w-32 mb-23 h-65 object-cover rounded-3xl"
          />

          {/* Third Image - Comes from Top */}
          <motion.img
            variants={fadeIn("down", 0.7)} // Comes from top
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }} // Only animate once
            src={image2}
            alt="Image 2"
            className="w-32 h-65 object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
