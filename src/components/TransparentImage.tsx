import React, { useEffect, useState } from "react";

interface TransparentImageProps {
  src: string;
  alt: string;
  className?: string;
  keyColor?: [number, number, number]; // [R, G, B]
  tolerance?: number;
  softness?: number;
}

export default function TransparentImage({
  src,
  alt,
  className = "",
  keyColor = [246, 246, 244], // Default to our off-white hex #f6f6f4
  tolerance = 30,
  softness = 10,
}: TransparentImageProps) {
  const [processedSrc, setProcessedSrc] = useState<string>("");

  useEffect(() => {
    let active = true;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.referrerPolicy = "no-referrer";
    img.src = src;

    img.onload = () => {
      if (!active) return;

      const width = img.naturalWidth || img.width;
      const height = img.naturalHeight || img.height;
      if (!width || !height) return;

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);
      try {
        const imageData = ctx.getImageData(0, 0, width, height);
        const data = imageData.data;
        const [kr, kg, kb] = keyColor;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const a = data[i + 3];

          if (a === 0) continue;

          // Euclidean color distance
          const dist = Math.sqrt(
            (r - kr) ** 2 +
            (g - kg) ** 2 +
            (b - kb) ** 2
          );

          if (dist < tolerance) {
            if (dist < tolerance - softness) {
              data[i + 3] = 0; // fully transparent
            } else {
              // smooth transition
              const ratio = (dist - (tolerance - softness)) / softness;
              data[i + 3] = Math.round(ratio * 255);
            }
          }
        }

        ctx.putImageData(imageData, 0, 0);
        setProcessedSrc(canvas.toDataURL("image/png"));
      } catch (e) {
        console.error("Failed to make background transparent", e);
        // Fallback to original image if getImageData is blocked (CORS etc)
        setProcessedSrc(src);
      }
    };

    img.onerror = () => {
      if (active) {
        setProcessedSrc(src);
      }
    };

    return () => {
      active = false;
    };
  }, [src, keyColor[0], keyColor[1], keyColor[2], tolerance, softness]);

  const displaySrc = processedSrc || src;

  return (
    <img
      src={displaySrc}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
    />
  );
}
