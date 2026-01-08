import Image from "next/image";

export default function GallerySection() {
  const images = [
    "/images/gallary1.jpg",
    "/images/gallary2.jpg",
    "/images/gallary3.jpg",
    "/images/gallary4.jpg",
    "/images/gallary5.jpg",
    // "/images/gallery/clinic-2.jpg",
    // "/images/gallery/equipment-1.jpg",
    // "/images/gallery/equipment-2.jpg",
    // "/images/gallery/before-after-1.jpg",
    // "/images/gallery/before-after-2.jpg",
  ];

  return (
    <section className="py-20 bg-gray-50 mt-5 border-b border-blue-400" id="gallery">
      <div className="max-w-7xl mx-auto px-6">

        {/* Headline */}
        <div className="text-center mb-14">
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            نعرض لكم لمحة من داخل العيادة، أجهزتنا الحديثة، ونماذج من جودة خدماتنا
           
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-md bg-white"
            >
              <div className="relative w-full h-72">
                <Image
                  src={img}
                  alt="معرض صور العيادة"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0
                              group-hover:opacity-100 transition duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
