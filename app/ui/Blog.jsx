import Image from "next/image";
import Link from "next/link";

export default function BlogSection() {

    const blogs = [
  {
    id: 1,
    title: "الشتاء دخل وحاسي أسنانك بتوجعك؟! ",
    description:
    "كتير مننا في الشتاء بنحس بألم مفاجئ في الأسنان لما نشرب شيء ساخن أو نطلع في الجو البارد الحاجة دي سببها حساسية الأسنان.",
    //   "التدريب المنتظم يساعد على تحسين اللياقة البدنية، تقوية العضلات، ورفع مستوى الطاقة.",
    image: "/blog/blog1.jpg",
    date: "10 يناير 2026",
  },
  {
    id: 2,
    title: "أشهر 5 خرافات شائعة عن الأسنان ",
    description:
      "1.تنظيف الأسنان بقوة تصبح أنضف. 🔻الحقيقة: تسبب القوة تدمر طبق المينا و تراجع اللثة.",
    image: "/blog/blog2.jpg",
    date: "5 يناير 2026",
  },
  {
    id: 3,
    title: "هل تعلم؟",
    description:
      "أن الحليب ممكن ينقذ سنك الساقط!🥛 لو عملت حادث ووقع سنك، لا تتركه..",
    image: "/blog/blog3.jpg",
    date: "1 يناير 2026",
  },
];


  return (
    <section className="py-20 bg-[#eee] text-white">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            مقالات ونصائح رياضية
          </h2>
          <p className="text-gray-900 max-w-2xl mx-auto">
            اكتشف أحدث المقالات والنصائح من خبرائنا لمساعدتك على تحقيق أفضل
            أداء بدني وحياة صحية متوازنة.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-red-600/20 transition"
            >
              <div className="relative h-52">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <span className="text-sm text-blue-500">{blog.date}</span>

                <h3 className="text-xl text-gray-900 font-bold mt-2 mb-3">
                  {blog.title}
                </h3>

                <p className="text-gray-700 text-sm mb-5">
                  {blog.description}
                </p>

                <a
                  href="https://web.facebook.com/profile.php?id=100083420886478"
                  className="inline-block text-blue-500 font-semibold hover:underline"
                >
                  اقرأ المزيد →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}

      </div>
    </section>
  );
}
