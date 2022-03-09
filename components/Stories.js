import StoryCard from "@components/StoryCard";

const stories = [
  {
    name: "Harry Potter",
    src: "http://links.papareact.com/d0c",
    profile: "http://links.papareact.com/d0c",
  },
  {
    name: "Elon Musk",
    src: "http://links.papareact.com/4zn",
    profile: "http://links.papareact.com/kxk",
  },
  {
    name: "Jeff Bezoz",
    src: "http://links.papareact.com/k2j",
    profile: "http://links.papareact.com/f0p",
  },
  {
    name: "Mark Zuckerberg",
    src: "http://links.papareact.com/xql",
    profile: "http://links.papareact.com/snf",
  },
  {
    name: "James Bond",
    src: "http://links.papareact.com/r57",
    profile: "http://links.papareact.com/r57",
  },
  {
    name: "Bill Gates",
    src: "http://links.papareact.com/4u4",
    profile: "http://links.papareact.com/zvy",
  },
];

export default function Stories() {
  return (
    <div className="flex justify-center mx-auto space-x-3 overflow-x-auto md:overflow-hidden">
      {stories.map((story, i) => (
        <StoryCard key={i} data={story} />
      ))}
    </div>
  );
}
