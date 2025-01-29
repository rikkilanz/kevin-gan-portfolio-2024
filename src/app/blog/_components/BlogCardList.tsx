import BlogCard from "./BlogCard";
import { wpGetPosts, wpGetPostsByCategory } from "@/app/_services/wpService";
import DateFilter from "@/app/_components/DateFilter";

interface BlogCardListProps {
  query?: {
    page?: number;
    before?: string;
    after?: string;
  };
}

export default async function BlogCardList({
  query: { page = 1, before = "", after = "" } = {},
}: BlogCardListProps) {
  const categoryId = 7;
  const limit = 5;
  const { posts, totalPages } = await wpGetPostsByCategory(
    categoryId,
    limit,
    page,
    before,
    after
  );

  var dates: string[] = [];

  await wpGetPosts().then((data) => {
    data.forEach((post: any) => {
      dates.push(post.date);
    });
  });

  const groupedByMonthYear = dates.reduce((acc: any, date) => {
    const dateObj = new Date(date);
    const key = `${dateObj.getFullYear()}-${String(
      dateObj.getMonth() + 1
    ).padStart(2, "0")}`; // Format: YYYY-MM

    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(date);

    return acc;
  }, {});

  // Extract unique month/year keys as an array
  const monthYearArray = Object.keys(groupedByMonthYear);

  console.log(totalPages);

  return (
    <>
      <div>
        <DateFilter monthYearArray={monthYearArray} />
        <ul className="flex flex-col gap-8">
          {posts.map((post: any) => (
            <BlogCard post={post} key={post.id} />
          ))}
        </ul>
        <div className="w-full flex justify-center mt-16 gap-4">
          {page > 1 && (
            <a
              href={`?page=${page - 1}${before ? `&before=${before}` : ""}${
                after ? `&after=${after}` : ""
              }`}
              className="mr-4 font-bold underline"
            >
              Previous
            </a>
          )}

          {Array.from({ length: totalPages }, (_, i) => (
            <a
              key={i + 1}
              href={`?page=${i + 1}${before ? `&before=${before}` : ""}${
                after ? `&after=${after}` : ""
              }`}
              className={`font-bold underline ${
                i + 1 === page ? "text-blue-500" : ""
              }`}
            >
              {i + 1}
            </a>
          ))}
          {page < totalPages && (
            <a
              href={`?page=${page + 1}${before ? `&before=${before}` : ""}${
                after ? `&after=${after}` : ""
              }`}
              className="font-bold underline"
            >
              Next
            </a>
          )}
        </div>
      </div>
    </>
  );
}
