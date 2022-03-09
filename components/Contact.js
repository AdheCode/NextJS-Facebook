import Image from "next/image";

export default function Contact({ src, name }) {
  return (
    <div className="relative flex items-center mb-2 space-x-3 cursor-pointer hover:bg-gray-200 rounded-xl">
      <Image
        src={src}
        className="rounded-full"
        objectFit="cover"
        width={50}
        height={50}
        layout="fixed"
        alt=""
      />
      <p>{name}</p>
      <div className="absolute w-3 h-3 bg-green-400 rounded-full bottom-2 left-7 hover:animate-bounce" />
    </div>
  );
}
