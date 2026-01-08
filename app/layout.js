import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const cairo = Cairo({ subsets: ["latin"], weight: ["400", "600", "700"] });


export const metadata = {
  title: "ODDC",
  description: "تقديم كافة الخدمات العلاجيةو الجراحة-التجميل-العلاج التحفظي-التركيبات الثابته والمتحركة-تبيض الأسنان-إزالة التصبغات و المواد الجيرية-التقويم-الأطفال",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body
        className={cairo.className}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
