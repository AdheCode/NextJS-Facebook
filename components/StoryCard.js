import Image from "next/image";

export default function StoryCard({ data }) {
  return (
    <div className="relative p-3 transition duration-200 ease-in transform cursor-pointer h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 overflow-x hover:scale-105 hover:animate-pulse">
      <Image
        className="absolute z-50 rounded-full opacity-0 lg:opacity-100 top-10"
        src={data?.profile}
        width={40}
        height={40}
        layout="fixed"
        objectFit="cover"
        alt=""
      />
      <Image
        className="object-cover rounded-full filter brightness-75 lg:rounded-3xl"
        src={data?.src}
        layout="fill"
        alt=""
      />
      <p className="absolute w-4/5 text-sm font-bold text-white truncate opacity-0 lg:opacity-100 bottom-4">
        {data?.name}
      </p>
    </div>
  );
}
