// "use client";
// import { useState } from "react";
// // import { assets } from "@/assets/assets";
// import Image from "next/image";
// import Link from "next/link";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="w-full bg-white shadow-sm fixed top-0 right-0 z-10">
//       <div className="max-w-7xl mx-auto px-4 lg:px-8">
//         <div className="flex justify-between items-center py-2">

//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-2">
//             <Image src="/mainlogo.jpg" alt="website logo" width={584} height={509} className="w-18" />
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
//             <a href="#" className="hover:text-blue-500">الرئيسية</a>
//             <a href="#about" className="hover:text-blue-500">من نحن</a>
//             <a href="#services" className="hover:text-blue-500">الخدمات</a>
//             <a href="#doctors" className="hover:text-blue-500">الأطباء</a>
//             <a href="#appointment" className="hover:text-blue-500">حجز موعد</a>
//             <a href="#contact" className="hover:text-blue-500">تواصل معنا</a>
//           </div>

//           {/* Mobile Button */}
//           <button
//             onClick={() => setOpen(!open)}
//             className="md:hidden text-gray-600 focus:outline-none text-2xl cursor-pointer hover:text-blue-500"
//           >
//             {open ? "✕" : "☰"}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {open && (
//           <div className="md:hidden flex flex-col space-y-3 py-4 text-gray-600 font-medium">
//             <a href="#" className="hover:text-blue-500">الرئيسية</a>
//             <a href="#about" className="hover:text-blue-500">من نحن</a>
//             <a href="#services" className="hover:text-blue-500">الخدمات</a>
//             <a href="#doctors" className="hover:text-blue-500">الأطباء</a>
//             <a href="#appointment" className="hover:text-blue-500">حجز موعد</a>
//             <a href="#contact" className="hover:text-blue-500">تواصل معنا</a>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import Logo from "./Logo";
const navLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "من نحن", href: "#about" },
  { label: "الخدمات", href: "#services" },
  { label: "الأطباء", href: "#doctors" },
  { label: "حجز موعد", href: "#appointment" },
  { label: "تواصل معنا", href: "#contact" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full bg-[#ffffff] border-b border-[#e5e7eb]">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Desktop nav links */}
        {/* Logo on the right (RTL) */}
        <Link href="/" className="flex items-center space-x-2">
            <Image src="/mainlogo.jpg" alt="website logo" width={584} height={509} className="w-18" />
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[15px] font-semibold text-[#2c3e50] hover:text-[#3aa8af] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
                {/* Mobile: hamburger button */}
                <button
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-lg hover:bg-[#f3f4f6] transition-colors"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2c3e50"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="13" x2="14" y2="13" />
                <line x1="4" y1="19" x2="20" y2="19" />
              </>
            )}
          </svg>
        </button>
      </div>
      {/* Mobile dropdown menu */}
      {open && (
        <div className="md:hidden border-t border-[#e5e7eb] bg-[#ffffff]">
          <ul className="max-w-6xl mx-auto px-5 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 rounded-lg text-[15px] font-semibold text-[#2c3e50] hover:bg-[#f3f4f6] hover:text-[#3aa8af] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}