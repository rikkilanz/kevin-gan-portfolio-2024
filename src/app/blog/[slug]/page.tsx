import { wpGetPostsBySlug } from "@/app/_services/wpService";
import { convertDate } from "@/app/_helpers/convertDate";

export default async function BlogPage({ params }: { params: any }) {
  const { slug } = await params;
  const postContent = await wpGetPostsBySlug(slug);
  const post = postContent[0];
  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="wp-blog bg-white border-2 border-black mx-auto max-w-screen-2xl py-16 relative">
        <div className="absolute bg-black top-2 left-2 right-0 bottom-0 z-[-1] w-full h-full" />
        <div className="max-w-4xl mx-auto">
          <div className="w-full mx-auto text-center">
            <time
              className="text-sm uppercase"
              dateTime={convertDate(post.date)}
            >
              Published on {convertDate(post.date)}
            </time>
          </div>
          <h1 className="text-center">{post.title.rendered}</h1>
          <h6
            className="text-center"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      </div>
    </>
  );
}
