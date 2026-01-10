'use client";'
import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function InsuranceSection() {
  // const companies = [
  //   {
  //     name: 
  //   }
  //   "شركة النيلين للتأمين",
  //   "الصندوق الطبي لشركة ارباب للتعدين",
  //   "حزمة الخدمات الطبية الاضافية",
  //   "سي اي اس هيلث كير CIS Healthcare",
  // ];

  return (
    <section className="py-20 bg-white" id="insurance">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            وقريبا...
        </h2>

        <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: 0.6, duration: 0.5}} className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {/* {companies.map((company, i) => ( */}
            <div className="group bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-[#3bb7dc] hover:shadow-xl transition duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-[#3bb7dc] transition">
                <Image
                      src="/images/may2.JPG"
                      width={1080}
                      height={1080}
                      alt="Insurance Logo"
                      className="object-cover w-full"
                    />
              </div>

              <h3 className="text-sm md:text-xl font-semibold text-gray-900 mb-2">
                شركة النيلين للتأمين
              </h3>

              <span className="inline-block mt-2 px-4 py-1 text-sm rounded-full
                               bg-blue-50 text-blue-600 font-medium">
                قريبًا
              </span>
            </div>
            <div className="group bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-[#3bb7dc] hover:shadow-xl transition duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-[#3bb7dc] transition">
                <Image
                      src="/images/may1.JPG"
                      width={512}
                      height={512}
                      alt="Insurance Logo"
                      className="object-cover w-full"
                    />
              </div>

              <h3 className="text-sm md:text-xl font-semibold text-gray-900 mb-2">
               حزمة الخدمات الطبية الاضافية
              </h3>

              <span className="inline-block mt-2 px-4 py-1 text-sm rounded-full
                               bg-blue-50 text-blue-600 font-medium">
                قريبًا
              </span>
            </div>
            <div className="group bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-[#3bb7dc] hover:shadow-xl transition duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-[#3bb7dc] transition">
                <Image
                      src="/images/may3.JPG"
                      width={820}
                      height={685}
                      alt="Insurance Logo"
                      className="object-cover w-full"
                    />
              </div>

              <h3 className="text-sm md:text-xl font-semibold text-gray-900 mb-2">
              مطاحن سين للغلال
              </h3>

              <span className="inline-block mt-2 px-4 py-1 text-sm rounded-full
                               bg-blue-50 text-blue-600 font-medium">
                قريبًا
              </span>
            </div>
            <div className="group bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-[#3bb7dc] hover:shadow-xl transition duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-[#3bb7dc] transition">
                <Image
                      src="/images/may4.jpeg"
                      width={340}
                      height={340}
                      alt="Insurance Logo"
                      className="object-cover w-full"
                    />
              </div>

              <h3 className="text-sm md:text-xl font-semibold text-gray-900 mb-2">
             شركة ارباب للتعدين
              </h3>

              <span className="inline-block mt-2 px-4 py-1 text-sm rounded-full
                               bg-blue-50 text-blue-600 font-medium">
                قريبًا
              </span>
            </div>
            <div className="group bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-[#3bb7dc] hover:shadow-xl transition duration-300"
            >
              <div className="w-14  mx-auto mb-6 text-black rounded-full bg-blue-100 flex items-center justify-center transition">
                    <Image
                      src="/images/may5.png"
                      width={469}
                      height={532}
                      alt="Insurance Logo"
                      className="object-cover w-full"
                    />
              </div>

              <h3 className="text-sm md:text-xl font-semibold text-gray-900 mb-2">
                  سي اي اس هيلث كير CIS Healthcare
              </h3>

              <span className="inline-block mt-2 px-4 py-1 text-sm rounded-full
                               bg-blue-50 text-blue-600 font-medium">
                قريبًا
              </span>
            </div>
          {/* ))} */}
        </motion.div>

      </div>
    </section>
  );
}
