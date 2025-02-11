
import image6 from "/image6.jpg";


const ThirdScreen = () => {
    return (
      <section className="relative pt-16 min-h-screen flex items-center bg-blueGray-50 px-4 md:px-0">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-center">
            {/* Left Side Image Card */}
            <div className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12 px-4 mb-10 md:mb-0">
              <div className="relative flex flex-col min-w-0 break-words  shadow-lg rounded-lg bg-[#0F4D51]">
                <img
                  alt="Project Preview"
                  src={image6}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <blockquote className="relative p-6 sm:p-8">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-16 sm:h-20 -top-14"
                  >
                    <polygon points="-30,95 583,95 583,65" className="text-[#0F4D51] fill-current"></polygon>
                  </svg>
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    Great for your awesome project
                  </h4>
                  <p className="text-sm sm:text-md font-light mt-2 text-white leading-relaxed">
                    Putting together a page has never been easier than matching pre-made components. 
                    From landing pages to login areas, you can easily customize and build your pages.
                  </p>
                </blockquote>
              </div>
            </div>
  
            {/* Right Side Features */}
            <div className="w-full md:w-6/12 px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: "sitemap", title: "CSS Components", desc: "A huge number of fully coded CSS components." },
                  { icon: "drafting-compass", title: "JavaScript Components", desc: "Many dynamic components for React, Next.js, Vue, and Angular." },
                  { icon: "newspaper", title: "Pages", desc: "Includes 3 sample pages, fully coded to start instantly." },
                  { icon: "file-alt", title: "Documentation", desc: "Built for developers. Easy to work with Notus JS." },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 mb-4 bg-white shadow-lg rounded-full ">
                      <i className={`fas fa-${item.icon} text-xl text-[#0F4D51]`}></i>
                    </div>
                    <h6 className="text-lg sm:text-xl font-semibold text-[#0F4D51]">{item.title}</h6>
                    <p className="text-sm sm:text-md text-[#0F4D51]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ThirdScreen;
  