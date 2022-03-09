import Image from "next/image";
import { ThumbUpIcon, ChatAltIcon, ShareIcon } from "@heroicons/react/outline";

export default function Post({
  name,
  message,
  email,
  timestamp,
  image,
  postImage,
}) {
  return (
    <div className="flex flex-col">
      <div className="p-5 mt-5 bg-white shadow-sm rounded-t-2xl">
        <div className="flex items-center space-x-2">
          <img
            src={image}
            className="rounded-full"
            width={40}
            height={40}
            alt=""
          />
          <div>
            <p className="font-medium">{name}</p>
            {timestamp ? (
              <p className="text-xs text-gray-400">
                {new Date(timestamp?.toDate()).toLocaleString()}
              </p>
            ) : (
              <p className="text-xs text-gray-400">Loading...</p>
            )}
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 bg-white md:h-96">
          <Image src={postImage} objectFit="cover" layout="fill" alt="" />
        </div>
      )}

      {/* Footer of post */}
      <div className="flex items-center justify-between text-gray-400 bg-white border-t shadow-md rounded-b-2xl">
        <div className="rounded-none inputIcon rounded-bl-2xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="rounded-none inputIcon">
          <ChatAltIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="rounded-none inputIcon">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base rounded-br-2xl">Share</p>
        </div>
      </div>
    </div>
  );
}
