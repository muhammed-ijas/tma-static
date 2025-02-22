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
        "Thaiba Moral Academy, established under the Thaiba Garden Group of Institutions, is dedicated to redefining primary education across multiple states. With a structured curriculum and a strong administrative system, we empower students and educators alike. By integrating modern and traditional learning, we ensure academic excellence and holistic development. Our network spans hundreds of madrasas, supported by dedicated ustads and educational officers. Through digital innovation and real-time monitoring, we uphold quality education standards. With a commitment to nurturing young minds, Thaiba Moral Academy continues to shape future generations, fostering knowledge, discipline, and community growth.",
    },
    ml: {
      title: "ഞങ്ങളെക്കുറിച്ച്",
      description:
        "തൈബ ഗാർഡൻ ഗ്രൂപ്പിന്റെ കീഴിൽ പ്രവർത്തിക്കുന്ന തൈബ മോറൽ അക്കാദമി പ്രാഥമിക വിദ്യാഭ്യാസത്തെ നവീകരിക്കുന്നതിൽ പ്രതിജ്ഞാബദ്ധമാണ്. ഘടനാബദ്ധമായ അധ്യയന പദ്ധതി, ശക്തമായ ഭരണസമ്പ്രദായം എന്നിവയിലൂടെ വിദ്യാർത്ഥികളെയും അധ്യാപകരെയും ശക്തിപ്പെടുത്തുകയാണ് ഞങ്ങളുടെ ലക്ഷ്യം. ആധുനികവും പരമ്പരാഗതവുമായ പഠന രീതികളെ സംയോജിപ്പിച്ച്, ശാസ്ത്രീയ മികവ് ഉറപ്പാക്കുന്നതിനൊപ്പം ഹോളിസ്റ്റിക് ഡവലപ്‌മെന്റിനും മുൻഗണന നൽകുന്നു. നൂറുകണക്കിന് മദ്റസകളിൽ വ്യാപിച്ചുകിടക്കുന്ന ഞങ്ങളുടെ ശൃംഖല അധ്യാപകരുടെയും വിദ്യാഭ്യാസ ഉദ്യോഗസ്ഥരുടെയും നിശ്ചയദാർഢ്യത്തോടെ പിന്തുണയ്ക്കുന്നു. ഡിജിറ്റൽ നവീകരണവും തത്സമയ നിരീക്ഷണ സംവിധാനവും വഴി നിലവാരമുള്ള വിദ്യാഭ്യാസം ഉറപ്പാക്കുന്നു. യുവ മനസ്സുകളെ വളർത്തി, ശാസ്ത്രീയ വിജ്ഞാനം, ക്രമശീലം, സമൂഹ വികസനം എന്നിവയ്ക്ക് പ്രോത്സാഹനം നൽകുകയാണ് തൈബാ മോറൽ അക്കാദമി ലക്ഷ്യമിടുന്നത്.",
    },
    ar: {
      title: "ہمارے بارے میں",
      description:
        "تھیبا گارڈن گروپ کے تحت کام کرنے والی تھیبا مورل اکیڈمی ابتدائی تعلیم کو جدید بنانے کے لیے پُرعزم ہے۔ منظم تعلیمی منصوبہ بندی، مضبوط انتظامی نظام، اور جدید و روایتی تدریسی طریقوں کے امتزاج کے ذریعے، ہم طلباء اور اساتذہ کو بااختیار بنانے کا عہد رکھتے ہیں۔ معیاری تعلیم کو یقینی بنانے کے ساتھ ساتھ، ہم ہمہ جہتی ترقی پر بھی خصوصی توجہ دیتے ہیں۔ ہماری تعلیمی نیٹ ورک سیکڑوں مدارس پر مشتمل ہے، جو اساتذہ اور تعلیمی افسران کی انتھک محنت اور لگن سے پروان چڑھ رہی ہے۔ ڈیجیٹل ٹیکنالوجی اور ریئل ٹائم مانیٹرنگ سسٹم کے ذریعے، تعلیمی معیار کی بلندی کو یقینی بنایا جاتا ہے۔ تھیبا مورل اکیڈمی کا مقصد نوجوان ذہنوں کی تربیت کرنا، علمی ترقی کو فروغ دینا، اور سماجی بہبود میں معاون کردار ادا کرنا ہے۔",
    },
    ur: {
      title: "معلومات عنا",
      description:
        "تعمل أكاديمية ثيبا مورال، تحت إشراف مجموعة ثيبا جاردن، على تحديث التعليم الابتدائي من خلال التخطيط التعليمي المنظم، والنظام الإداري القوي، ودمج الأساليب التعليمية الحديثة والتقليدية. نحن ملتزمون بتمكين الطلاب والمعلمين، مع ضمان التعليم عالي الجودة والتركيز على التنمية الشاملة. تمتد شبكتنا التعليمية عبر مئات المدارس، وتزدهر بفضل تفاني وجهود المعلمين والمسؤولين التربويين. من خلال استخدام التكنولوجيا الرقمية ونظام المراقبة في الوقت الفعلي، نحرص على تحقيق أعلى معايير الجودة الأكاديمية. تهدف أكاديمية ثيبا مورال إلى إعداد العقول الشابة، وتعزيز التقدم العلمي، والمساهمة في رفاهية المجتمع."
    },
    ba: {
      title: "আমাদের সম্পর্কে",
      description:
        "থাইবা মোরাল একাডেমি, থাইবা গার্ডেন গ্রুপের অধীনে পরিচালিত, একটি সংগঠিত শিক্ষাব্যবস্থা, শক্তিশালী প্রশাসনিক কাঠামো এবং আধুনিক ও ঐতিহ্যবাহী শিক্ষার সমন্বয়ের মাধ্যমে প্রাথমিক শিক্ষাকে আধুনিকীকরণ করছে। আমরা ছাত্র-শিক্ষকদের ক্ষমতায়ন নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ, যেখানে মানসম্পন্ন শিক্ষার পাশাপাশি সামগ্রিক উন্নয়নের উপর গুরুত্ব দেওয়া হয়। আমাদের শিক্ষাগত নেটওয়ার্ক শত শত প্রতিষ্ঠান জুড়ে বিস্তৃত, যা শিক্ষকদের নিষ্ঠা ও শিক্ষাগত কর্মকর্তাদের প্রচেষ্টার মাধ্যমে সমৃদ্ধ হচ্ছে। ডিজিটাল প্রযুক্তি ও রিয়েল-টাইম পর্যবেক্ষণ ব্যবস্থার মাধ্যমে আমরা শিক্ষার সর্বোচ্চ মান নিশ্চিত করি। থাইবা মোরাল একাডেমি তরুণ মেধাবীদের প্রস্তুত করতে, একাডেমিক উৎকর্ষতা অর্জনে এবং সমাজের উন্নয়নে গুরুত্বপূর্ণ ভূমিকা রাখে। ",
    },
  };

  return (
    <div
      id="About"
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
              fill="#1ebcff"
              opacity="0.3"
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
              fill="#1ebcff"
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
              fill="#1ebcff"
              opacity="0.3"
            />
          </g>
        </svg>
      </motion.div>
  
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          {/* Language Selector */}
          <div className="flex justify-center">
            <div className="flex items-center b rounded-full p-1 border-none text-[#8c9696] w-auto  bg-gradient-to-r from-[#1b82ad] to-[#125978]">
              {["en", "ml", "ar", "ur", "ba"].map((lang) => (
                <button
                  key={lang}
                  className={`text-sm font-light px-3 py-1 sm:px-4 sm:py-2 rounded-full transition-all duration-300 cursor-pointer ${
                    language === lang
                      ? "text-[#1b82ad] bg-gradient-to-r from-[#e5eaea] to-[#eef1f1] shadow-sm"
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
              <p className="text-[#394f51] text-sm sm:text-sm leading-relaxed max-w-xl text-justify">
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