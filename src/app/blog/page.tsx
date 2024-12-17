import PageHeading from "../_components/PageHeading";
import BlogCardList from "./_components/BlogCardList";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Blog({ searchParams }: Props) {
  const pageParam = await searchParams;
  const page = parseInt((pageParam.page as string) || "1", 10);
  return (
    <>
      <div className="px-8 mx-auto max-w-screen-2xl">
        <PageHeading />
        <BlogCardList query={{ page }} />
      </div>
    </>
  );
}
