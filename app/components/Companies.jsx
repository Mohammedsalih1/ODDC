"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import InsuranceSection from "./Soon";

const Company = () => {
        const Companies = [
        "/images/insurance1.jpg",
        "/images/insurance2.jpg",
        "/images/insurance3.jpg",
        // "/images/insurance4.png",
        // "/images/insurance5.png",
        // "/images/insurance6.png",
        ];
  return (
    <section className="w-full py-16 bg-gray-50" id="insurance">
      <div className="container mx-auto px-4">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          شركات التأمين المتعاقدة معنا <Image src="/images/companies.png" alt="" width={42} height={42} className="inline-block w-14 h-14 mb-1" />
        </h2>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
              <div
                
                className="group flex-1/2 bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-[#3bb7dc] hover:shadow-xl transition duration-300 flex flex-col items-center justify-center"
              >
                <div className="">
                  <Image
                    src="/insurance3.JPG"
                    // width={896}
                    // height={305}
                    width={400} 
                    height={300}
                    alt="Insurance Logo"
                    className="object-cover w-full rounded-2xl"
                  />

                </div>
                <h3 className="text-sm text-center text-black md:text-xl py-3">الشركة المتخصصة للتأمين</h3>
              </div>
              <div
                
                className="group bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-[#3bb7dc] hover:shadow-xl transition duration-300 flex flex-col items-center justify-center"
              >
                <div>
                <Image
                  src="/images/insurance5.JPG"
                  width={100} 
                  height={100}
                  // width={518}
                  // height={587}
                  alt="Insurance Logo"
                  className="object-cover w-full h-full rounded-2xl"
                />
                  
                </div>
                <h3 className="text-sm text-center md:text-xl py-3">الشركة المتحدة للتأمين</h3>
              </div>
              <div
                
                className="group bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-[#3bb7dc] hover:shadow-xl transition duration-300 flex flex-col items-center justify-center"
              >
                <Image
                  src="/images/insurance1.JPG"
                  // width={447}
                  // height={447}
                  width={300} 
                  height={300}
                  alt="Insurance Logo"
                  className="object-cover w-full h-full rounded-2xl"
                />
                <h3 className="text-sm md:text-xl pt-2">شركة كهرباء السودان القابضة المحدودة</h3>
              </div>
              <div
                
                className="group bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-[#3bb7dc] hover:shadow-xl transition duration-300 flex flex-col items-center justify-center"
              >
                <Image
                  src="/images/insurance2.JPG"
                  width={447}
                  height={447}
                  // width={300} 
                  // height={300}
                  alt="Insurance Logo"
                  className="object-cover w-full h-full rounded-2xl"
                />
                <h3 className="text-sm md:text-xl pt-2">ديوان الذكاة</h3>
              </div>
              <div
                
                className="group flex-1/2 bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-[#3bb7dc] hover:shadow-xl transition duration-300 flex flex-col items-center justify-center"
              >
                <div className="">
                  <Image
                    src="/images/insurance4.JPG"
                    // width={896}
                    // height={305}
                    width={100} 
                    height={100}
                    alt="Insurance Logo"
                    className="object-cover w-full rounded-2xl"
                  />

                </div>
                <h3 className="text-sm text-center md:text-xl py-3">البركة للتأمين</h3>
              </div>
        </div>
        {/* Desktop Grid */}
        <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: 0.3, duration: 0.5}} className="md:hidden flex flex-col  text-black gap-6 mt-4">
          <div className="flex gap-3">
              <div
                
                className="group flex-1/2 bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-[#3bb7dc] hover:shadow-xl transition duration-300 flex flex-col items-center justify-center"
              >
                <div className="">
                  <Image
                    src="/insurance3.JPG"
                    // width={896}
                    // height={305}
                    width={400} 
                    height={300}
                    alt="Insurance Logo"
                    className="object-cover w-full rounded-2xl"
                  />

                </div>
                <h3 className="text-sm text-center md:text-xl py-3">الشركة المتخصصة للتأمين</h3>
              </div>
              <div
                
                className="group bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-[#3bb7dc] hover:shadow-xl transition duration-300 flex flex-col items-center justify-center"
              >
                <div>
                <Image
                  src="/images/insurance5.JPG"
                  width={100} 
                  height={100}
                  // width={518}
                  // height={587}
                  alt="Insurance Logo"
                  className="object-cover w-full h-full rounded-2xl"
                />
                  
                </div>
                <h3 className="text-sm text-center md:text-xl py-3">الشركة المتحدة للتأمين</h3>
              </div>
          </div>
          <div className="flex gap-3">
            <div
              
              className="group bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-[#3bb7dc] hover:shadow-xl transition duration-300 flex flex-col items-center justify-center"
            >
              <Image
                src="/images/insurance1.JPG"
                // width={447}
                // height={447}
                width={300} 
                height={300}
                alt="Insurance Logo"
                className="object-cover w-full h-full rounded-2xl"
              />
              <h3 className="text-sm md:text-xl pt-2">شركة كهرباء السودان القابضة المحدودة</h3>
            </div>
            <div
              
              className="group bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-[#3bb7dc] hover:shadow-xl transition duration-300 flex flex-col items-center justify-center"
            >
              <div>
              <Image
                src="/images/insurance2.JPG"
                // width={447}
                // height={447}
                width={300} 
                height={300}
                alt="Insurance Logo"
                className="object-cover w-full h-full rounded-2xl"
              />
              </div>

              <h3 className="text-sm md:text-xl pt-2">ديوان الذكاة</h3>
            </div>
          </div>
              <div
                
                className="group flex-1/2 bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-[#3bb7dc] hover:shadow-xl transition duration-300 flex flex-col items-center justify-center"
              >
                <div className="">
                  <Image
                    src="/images/insurance4.JPG"
                    // width={896}
                    // height={305}
                    width={100} 
                    height={100}
                    alt="Insurance Logo"
                    className="object-cover w-full rounded-2xl"
                  />

                </div>
                <h3 className="text-sm text-center md:text-xl py-3">البركة للتأمين</h3>
              </div>
        </motion.div>

            <InsuranceSection />
      </div>
    </section>
  );
};

export default Company;
