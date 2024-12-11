import Link from "next/link";
import Image from "next/image";

interface ProjectsListProps {
  categoryTitle: string;
  posts: any[];
}
export default function ProjectsList({
  categoryTitle,
  posts,
}: ProjectsListProps) {
  console.log(posts);
  return (
    <>
      <div className="py-6 w-full">
        <h2 className="text-4xl font-black font-teko">{categoryTitle}</h2>
        <ul className="grid grid-cols-3 gap-8 mt-4">
          {posts.map((post) => (
            <li
              className="border-2 border-black col-span-1 relative group"
              key={post.id}
            >
              <div className="bg-main-500 absolute inset-0 opacity-0 group-hover:opacity-75">
                <div className="flex flex-col justify-center items-center h-full text-white">
                  <h3 className="text-2xl font-bold">{post.title.rendered}</h3>
                  <ul className="flex">
                    <li>Tag 1</li>
                    <li>Tag 2</li>
                    <li>Tag 3</li>
                  </ul>
                </div>
              </div>
              <div className="relative min-w-[25%] h-auto aspect-video border-r-2 border-black col-span-1 bg-white">
                <Image
                  src={
                    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                    "/images/placeholder-image.jpg"
                  }
                  alt={post.title.rendered}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </li>
          ))}
        </ul>
        <Link href="/projects" className="w-full flex justify-center my-4">
          <span className="uppercase font-bold text-sm underline">
            See More
          </span>
        </Link>
      </div>
    </>
  );
}
