import BlogCard from "./BlogCard";

export default function BlogCardList() {
  return (
    <>
      <div>
        <ul className="flex flex-col gap-8">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </ul>
      </div>
    </>
  );
}
