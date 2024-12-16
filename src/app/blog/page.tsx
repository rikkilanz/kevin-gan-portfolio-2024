import PageHeading from "../_components/PageHeading";
import BlogCardList from "./_components/BlogCardList";

export default async function Blog({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const pageParam = await searchParams.page; // Await the property
  const page = parseInt(pageParam || "1", 10); // Default to page 1 if not provided
  return (
    <>
      <div className="px-8 mx-auto max-w-screen-2xl">
        <PageHeading />
        <BlogCardList query={{ page }} />
      </div>
    </>
  );
}
