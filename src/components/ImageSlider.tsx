import React from "react";

const images = [
  "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2152&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2126&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?q=80&w=1965&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524799526615-766a9833dec0?q=80&w=1935&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
];

const duplicated = [...images, ...images];

export default function ImageSlider() {
  return (
    <div className="w-full overflow-hidden slider-mask">
      <div className="animate-scroll-right flex gap-4 w-max">
        {duplicated.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-48 h-36 md:w-64 md:h-48 rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          >
            <img
              src={src}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
