// import Image from "next/image";
// import { Amiri } from "next/font/google";

// const amiri = Amiri({
//   subsets: ["arabic"],
//   weight: ["400", "700"],
// });

// export default function DentalHero() {
//   return (
//     <section className="w-full flex justify-center p-6 bg-[#3bb7dc]">
//         <div className="relative w-full صh-65 rounded-3xl overflow-hidden">

//         {/* Background Image */}
//         <Image
//         src="/images/smile.png"
//         alt="smile"
//         fill
//         priority
//         className="object-cover"
//         />

//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/10 to-transparent"></div>

//         {/* Blue tint overlay (مثل التصميم الأصلي) */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#3fb4c7]/70 to-[#5cc6d6]/70 mix-blend-multiply"></div>

//         {/* Content */}
//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">

//         {/* Logo */}
//         <Image
//             src="/images/logo.png"
//             alt="logo"
//             width={90}
//             height={90}
//             className="mb-2"
//         />

//         {/* Title */}
//         <h2 className={`${amiri.className} text-3xl md:text-4xl font-bold drop-shadow-xl`}>
//             إبتسامة صحية تبدأ من هنا
//         </h2>

//         {/* Button */}
//         <button className="mt-5 bg-white text-[#3fb4c7] font-semibold px-7 py-2.5 rounded-full shadow-xl hover:scale-105 transition">
//             ✔ احجز موعدك الآن
//         </button>

//         </div>

//         {/* Decorative shape */}
//         <div className="absolute right-[-40px] bottom-[-40px] w-48 h-48 bg-white/20 rounded-full blur-3xl"></div>

//         </div>
//     </section>
//   );
// }

// import Logo from "./Logo";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="px-4 md:px-6">
      {/* Hero card */}
      <div className="relative max-w-6xl mx-auto rounded-[2rem] md:rounded-[2.5rem] mt-2 bg-gradient-to-bl from-[#69d3da] via-[#4ec1c8] to-[#3aa8af] overflow-hidden shadow-[0_20px_60px_-20px_rgba(78,193,200,0.5)]">
        <div className="grid grid-cols-5 items-stretch min-h-[280px] md:min-h-[420px]">
          {/* Smile image (visually left) */}
          <div className="relative col-span-2 order-2">
            <img
              src="/images/smile.png"
              alt="ابتسامة صحية"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* soft fade into the teal background on the inner edge */}
            <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-[#4ec1c8] to-transparent pointer-events-none" />
          </div>
          {/* Content (visually right) */}
          <div className="col-span-3 order-1 px-4 md:px-10 py-6 md:py-12 text-white text-center flex flex-col items-center justify-center">
            <div className="mb-3 md:mb-5">
              <Image src="/images/logo.png" alt="website logo" width={584} height={509} className="w-18 brightness-50" />
            </div>
            <h1 className="text-lg sm:text-2xl md:text-4xl font-extrabold leading-snug mb-4 md:mb-6 drop-shadow-sm">
              ابتسامة صحية تبدأ من هنا
            </h1>
            <a href="#appointment"
              type="button"
              className="group cursor-pointer inline-flex items-center gap-2 md:gap-3 bg-white text-[#3aa8af] font-bold text-sm md:text-lg px-5 md:px-7 py-2.5 md:py-3 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <span className="inline-flex items-center justify-center w-6 h-6 md:w-7 md:h-7 rounded-full bg-[#4ec1c8] text-white">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
              احجز موعدك الآن
            </a>
          </div>
        </div>
      </div>
      {/* Info bar */}
      <div className="max-w-6xl mx-auto mt-6">
        <div className="rounded-[1.75rem] bg-gradient-to-l from-[#69d3da] to-[#4ec1c8] text-white px-4 md:px-8 py-5 shadow-md">
          <div className="grid grid-cols-3 gap-2 md:gap-6 text-center">
            <InfoItem
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/>
                </svg>
              }
              label="رقم التواصل"
              value="0111155569"
            />
            <InfoItem
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              }
              label="الموقع"
              value=""
            />
            <InfoItem
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              }
              label="ساعات العمل"
              value="8 صباحاً - 8 مساءً"
            />
          </div>
        </div>
      </div>
      {/* Clinic image */}
      <div className="max-w-6xl mx-auto mt-6 mb-10">
        <div className="rounded-[1.75rem] overflow-hidden shadow-lg aspect-[16/10] md:aspect-[16/8]">
          <Image width={500} height={500}
            src="/images/gallary1.jpg"
            alt="عيادة الأسنان"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
function InfoItem({ icon, label, value }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center backdrop-blur-sm">
        {icon}
      </div>
      <div className="text-[13px] md:text-sm font-bold leading-tight">{label}</div>
      {value && (
        <div className="text-[11px] md:text-xs opacity-95 leading-tight" dir="ltr">
          {value}
        </div>
      )}
    </div>
  );
}