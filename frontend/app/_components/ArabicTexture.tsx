import Image from "next/image";
import sectionBg from "@/public/textures.jpg";

const ArabicTexture = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Image
        src={sectionBg}
        alt="Arabic texture background"
        fill
        priority
        className="object-cover brightness-90"
      />
    </div>
  );
};

export default ArabicTexture;
