"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface ProjectsListProps {
  categoryTitle: string;
  posts: any[];
  tags: any[];
  projectsPage?: boolean;
}
export default function ProjectsList({
  categoryTitle,
  posts,
  tags,
  projectsPage,
}: ProjectsListProps) {
  const pathname = usePathname();
  const [postCount, setPostCount] = useState(3);

  console.log(posts.length);

  const handleSeeMore = () => {
    setPostCount((prev) => prev + 3);
  };

  useEffect(() => {}, [postCount]);

  return (
    <>
      <div className="py-6 w-full">
        <h2 className="text-4xl font-black font-teko">{categoryTitle}</h2>
        <div
          className={`grid gap-4 grid-cols-1 md:-cols-3 ${
            projectsPage ? "md:grid-cols-1" : "md:grid-cols-3"
          }`}
        >
          {posts.slice(0, postCount).map((post) => (
            <Link
              className="col-span-1 relative group"
              key={post.id}
              href={`/portfolio/${post.slug}`}
            >
              <div className="relative min-w-[25%] h-auto aspect-video col-span-1 bg-white border-2 border-black">
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
              <div className="text-center text-black py-4">
                <h3 className="text-xl font-bold group-hover:underline">
                  {post.title.rendered}
                </h3>
                <hr className="my-2 w-[30px] mx-auto border-t-2 border-neutral-500" />
                <ul className="flex gap-2 justify-center text-sm text-neutral-500 p-2">
                  {post.tags.map((tagId: number) => {
                    const tag = tags[tagId];
                    return tag ? <li key={tag.id}>{tag.name}</li> : null;
                  })}
                </ul>
              </div>
            </Link>
          ))}
        </div>
        {pathname !== "/portfolio" ? (
          <Link href="/portfolio" className="w-full flex justify-center my-4">
            <span className="uppercase font-bold text-sm underline">
              See More
            </span>
          </Link>
        ) : posts.length > 3 ? (
          <button
            onClick={handleSeeMore}
            className="w-full flex justify-center my-4"
          >
            <span className="uppercase font-bold text-sm underline">
              See More
            </span>
          </button>
        ) : null}
      </div>
    </>
  );
}
