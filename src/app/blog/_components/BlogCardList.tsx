import BlogCard from "./BlogCard";
import Link from "next/link";
import { wpGetPostsByCategory } from "@/app/_services/wpService";

export default async function BlogCardList() {
  const categoryId = 7;
  const posts = await wpGetPostsByCategory(categoryId);
  return (
    <>
      <div>
        <ul className="flex flex-col gap-8">
          {posts.map((post: any) => (
            <BlogCard post={post} key={post.id} />
          ))}
        </ul>
        <Link href="/projects" className="w-full flex justify-center mt-16">
          <span className="uppercase font-bold text-sm underline">
            See More
          </span>
        </Link>
      </div>
    </>
  );
}
