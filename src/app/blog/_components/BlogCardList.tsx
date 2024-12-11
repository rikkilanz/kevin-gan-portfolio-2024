import BlogCard from "./BlogCard";
import Link from "next/link";
import { wpGetPostsByCategory } from "@/app/_services/wpService";

interface BlogCardListProps {
  query?: {
    page?: number;
  };
}

export default async function BlogCardList({
  query: { page = 1 } = {},
}: BlogCardListProps) {
  const categoryId = 7;
  const limit = 5;
  const { posts, totalPages } = await wpGetPostsByCategory(
    categoryId,
    limit,
    page
  );
  return (
    <>
      <div>
        <ul className="flex flex-col gap-8">
          {posts.map((post: any) => (
            <BlogCard post={post} key={post.id} />
          ))}
        </ul>
        <div className="w-full flex justify-center mt-16">
          {page > 1 && (
            <a href={`?page=${page - 1}`} className="mr-4 font-bold underline">
              Previous
            </a>
          )}
          {page < totalPages && (
            <a href={`?page=${page + 1}`} className="font-bold underline">
              Next
            </a>
          )}
        </div>
      </div>
    </>
  );
}
