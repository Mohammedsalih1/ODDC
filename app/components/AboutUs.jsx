"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// import { motion } from "motion/react"

// import { assets } from "@/assets/assets";


export default function AboutUsSection() {
  return (
    <motion.section 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    className="bg-[#eee] mt-0 py-20 border-b " id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Images */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: 0.3, duration: 0.7}} className="rounded-xl overflow-hidden shadow-md">
            <Image 
              src="/aboutus-1.jpg"
              alt="عيادة الأسنان"
              width={1280}
              height={960}
              // fill
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: 0.3, duration: 0.7}} className="rounded-xl overflow-hidden shadow-md">
            <Image
              src="/aboutus-2.jpg"
              width={960}
              height={1280}
              // fill
              alt="الفريق الطبي"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Right Content */}
        <div className="space-y-6 text-right">
          <motion.h2 initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: 0.5, duration: 0.7}} className="text-2xl md:text-3xl font-bold text-gray-900">
            من نحن؟ <Image src="/images/tooth-service.png" alt="" width={42} height={42} className="inline-block w-12 h-12 mb-1" />
          </motion.h2>

          <motion.p initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: 0.8, duration: 0.7}} className="text-gray-600 leading-relaxed text-lg">
            في عيادة <span className="font-semibold">عثمان دقنة لطب الأسنان</span>،
نحن نمنحك العناية التي تستحقها، ونقدم لك تجربة فريدة تجمع بين الجودة والتميّز من داخل عيادتنا💎.
          </motion.p>
          {/* <motion.p initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: 1, duration: 0.7}} className="text-gray-600 leading-relaxed text-lg">
            يضم فريقنا مجموعة من الأطباء المتخصصين في مختلف مجالات طب الأسنان،
            لتقديم كافة الخدمات العلاجية
الجراحة-التجميل-العلاج التحفظي-التركيبات الثابته والمتحركة-تبيض الأسنان-إزالة التصبغات و المواد الجيرية-التقويم-الأطفال
          </motion.p> */}

          <motion.ul initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: 1, duration: 0.7}} className="space-y-2 text-gray-700 text-lg">
            <li>✓ خبرة تتجاوز 10 سنوات في المجال</li>
            <li>✓ أحدث الأجهزة والتقنيات الطبية</li>
            <li>✓ بيئة علاجية مريحة وآمنة</li>
            <li>✓ متابعة دقيقة لحالة كل مريض</li>
          </motion.ul>

            <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: 1.2, duration: 0.5}}>
            <Link href="/more" className="mt-6 bg-[#3bb7dc] cursor-pointer text-white px-4 py-2 rounded-lg transition font-semibold">
            اعرف اكثر عن العيادة
            </Link>
            </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
