import PageHeading from "../_components/PageHeading";
import BlogCardList from "./_components/BlogCardList";

export default function Blog() {
  return (
    <>
      <div className="px-8 mx-auto max-w-screen-2xl">
        <PageHeading title="Blog" />
        <BlogCardList />
      </div>
    </>
  );
}
