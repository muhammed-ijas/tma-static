import { useState } from "react";
import image3 from "/image3.jpg";
import image5 from "/image5.jpg";
import image2 from "/image2.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../varients";

const AboutSection = () => {
  const [language, setLanguage] = useState("en");

  const content = {
    en: {
      title: "About Us",
      description:
        "Donec porttitor, enim ut dapibus dapibusdapibusdapibuslobortis, lectus sem tincidunt dui, eget ornare lectus ex non libero. Nam rhoncus diam ultrices porttitor laoreet. Ut mollis fermentum ex, vel viverra lorem volutpat sodales. In ornare porttitor odio sit amet laoreetDonec porttitor, enim ut dapibus lobortis, lectus sem tincidunt dui, eget ornare lectus ex non libero. Nam rhoncus diam ultrices porttitor laoreet. Ut mollis fermentum ex, vel viverra lorem volutpat sodales. In ornare porttitor odio sit amet laoreet.",
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
      className="relative bg-white overflow-hidden mt-16   select-none"
    >
      {/* SVG Background */}
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.2 }}
        className="absolute  z-0  "
      >
        <svg
          id="visual"
          viewBox="-100 0 400 700"
          width="2000"
          height="600"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <g transform="translate(404.8532250928495 316.24756292001223)">
            <path
              d="M160.9 -153.4C210.1 -111.7 252.5 -55.9 260 7.4C267.4 70.7 239.8 141.4 190.6 172.8C141.4 204.1 70.7 196 4.1 191.9C-62.5 187.8 -124.9 187.6 -149.9 156.3C-174.9 124.9 -162.5 62.5 -164.2 -1.8C-166 -66 -182 -132 -157 -173.7C-132 -215.3 -66 -232.7 -5.1 -227.6C55.9 -222.5 111.7 -195.1 160.9 -153.4"
              fill="#0bd1a6"
              opacity="0.2"
            />
          </g>
        </svg>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        className="absolute  z-0"
      >
        <svg
          id="visual"
          viewBox="-100 0 600 900"
          width="2000"
          height="600"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <g transform="translate(404.8532250928495 316.24756292001223)">
            <path
              d="M160.9 -153.4C210.1 -111.7 252.5 -55.9 260 7.4C267.4 70.7 239.8 141.4 190.6 172.8C141.4 204.1 70.7 196 4.1 191.9C-62.5 187.8 -124.9 187.6 -149.9 156.3C-174.9 124.9 -162.5 62.5 -164.2 -1.8C-166 -66 -182 -132 -157 -173.7C-132 -215.3 -66 -232.7 -5.1 -227.6C55.9 -222.5 111.7 -195.1 160.9 -153.4"
              fill="#0bd1a6"
              opacity="0.3"
            />
          </g>
        </svg>
      </motion.div>

      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.2 }}
        className="absolute inset-0 z-0 mt-10"
      >
        <svg
          id="visual"
          viewBox="500 140 300 50"
          width="800"
          height="900"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <g transform="translate(404.8532250928495 316.24756292001223)">
            <path
              d="M160.9 -153.4C210.1 -111.7 252.5 -55.9 260 7.4C267.4 70.7 239.8 141.4 190.6 172.8C141.4 204.1 70.7 196 4.1 191.9C-62.5 187.8 -124.9 187.6 -149.9 156.3C-174.9 124.9 -162.5 62.5 -164.2 -1.8C-166 -66 -182 -132 -157 -173.7C-132 -215.3 -66 -232.7 -5.1 -227.6C55.9 -222.5 111.7 -195.1 160.9 -153.4"
              fill="#0bd1a6"
              opacity="0.2"
            />
          </g>
        </svg>
      </motion.div>
  
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          {/* Language Selector */}
          <div className="flex justify-center">
            <div className="flex items-center b rounded-full p-1 border-none text-[#8c9696] w-auto  bg-gradient-to-r from-[#0F4D51] to-[#04838C]">
              {["en", "ml", "ar", "ur", "ba"].map((lang) => (
                <button
                  key={lang}
                  className={`text-sm font-light px-3 py-1 sm:px-4 sm:py-2 rounded-full transition-all duration-300 cursor-pointer ${
                    language === lang
                      ? "text-[#016f77] bg-gradient-to-r from-[#e5eaea] to-[#eef1f1] shadow-sm"
                      : "text-[#d4e3e4] hover:bg-[#518f94]"
                  } text-xs sm:text-sm`}
                  onClick={() => setLanguage(lang)}
                >
                  {lang === "en" && "English"}
                  {lang === "ml" && "മലയാളം"}
                  {lang === "ar" && "العربية"}
                  {lang === "ur" && "اردو"}
                  {lang === "ba" && "বাংলা"}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <main className="mt-10 max-w-3xl mx-auto text-center sm:text-left">
            <div className="flex flex-col items-center sm:items-start">
              <h2 className="my-6 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#394f51]">
                {content[language].title}
              </h2>
              <p className="text-[#394f51] text-base sm:text-lg leading-relaxed max-w-xl text-justify">
                {content[language].description}
              </p>
            </div>
          </main>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex justify-center items-center">
        <div className="flex justify-center items-center h-auto sm:h-[300px] w-full gap-2 mt-6 sm:mt-0 mb-16">
          <motion.img
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            src={image3}
            alt="Image 3"
            className="w-26 h-50 sm:w-32 sm:h-65 object-cover rounded-3xl  relative z-0   "
          />
          <motion.img
            variants={fadeIn("up", 0.9)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            src={image5}
            alt="Image 5"
            className="w-26 h-50 sm:w-32 sm:h-65 object-cover rounded-3xl relative z-0  "
          />
          <motion.img
            variants={fadeIn("down", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            src={image2}
            alt="Image 2"
            className="w-26 h-50 sm:w-32 sm:h-65 object-cover rounded-3xl relative z-0  " 
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;