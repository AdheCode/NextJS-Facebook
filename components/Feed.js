import Stories from "@components/Stories";
import InputBox from "@components/InputBox";
import Posts from "@components/Posts";

export default function Feed({ posts }) {
  return (
    <div className="flex-grow h-screen pt-6 mr-4 overflow-y-auto pb-44 xl:mr-40 scrollbar-hide">
      <div className="max-w-md mx-auto md:max-w-lg lg:max-w-2xl">
        {/* Stories */}
        <Stories />
        <InputBox />
        <Posts posts={posts} />
      </div>
    </div>
  );
}
