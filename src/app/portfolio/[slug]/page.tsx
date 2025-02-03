import { wpGetPostsBySlug } from "@/app/_services/wpService";
import Image from "next/image";
import { wpGetTagById, wpGetPostsByCategory } from "@/app/_services/wpService";
import ProjectsList from "@/app/_components/ProjectsList";

export default async function PortfolioPage({ params }: { params: any }) {
  const categoryId = 8;
  const limit = 3;
  const page = 1;
  const { posts } = await wpGetPostsByCategory(categoryId, limit, page);
  const { slug } = await params;

  const tagIds: any = [...new Set(posts.flatMap((post: any) => post.tags))];
  const otherProjectTags = await Promise.all(
    tagIds.map((id: any) => wpGetTagById(id))
  );
  const otherProjectsTagsMap = Object.fromEntries(
    otherProjectTags.map((tag) => [tag.id, tag])
  );

  const postContent = await wpGetPostsBySlug(slug);
  const post = postContent[0];
  const allTagIds = [
    ...new Set(
      Object.values(post.acf)
        .flat()
        .map((id: any) => id)
    ),
  ];
  const tags = await Promise.all(allTagIds.map((id: any) => wpGetTagById(id)));
  const tagsMap = Object.fromEntries(tags.map((tag) => [tag.id, tag]));
  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="px-8 flex flex-col">
        <div className="p-8 max-w-screen-2xl mx-auto w-full h-full">
          <h1 className="text-center text-6xl font-bold font-teko">
            {post.title.rendered}
          </h1>
          <h6
            className="text-center text-base"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
        </div>
        <div className="mb-8 max-w-screen-2xl mx-auto w-full h-full">
          <div className="relative min-w-[25%] h-auto aspect-video border-r-2 col-span-1 bg-white ">
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
        </div>

        <div className="grid grid-cols-5 mx-auto max-w-screen-2xl w-full gap-4">
          <div className="col-span-5 md:col-span-2 flex flex-col gap-4">
            <div className="bg-white border-2 border-black p-4 relative w-full">
              <div className="absolute bg-black top-2 left-2 right-0 bottom-0 z-[-1] w-full h-full" />
              <div className="grid grid-cols-2 gap-4">
                {Object.keys(post.acf).map((key, index) => {
                  const ids = post.acf[key];
                  return (
                    <div key={index} className="col-span-1">
                      <h3 className="bg-main text-white font-teko font-bold p-2 text-2xl inline-block capitalize">
                        {key}
                      </h3>
                      <ul className="flex flex-wrap">
                        {ids.map((id: number, subIndex: number) => (
                          <li
                            key={subIndex}
                            className="text-black mt-2 text-lg"
                          >
                            {tagsMap[id]?.name || `Unknown (${id})`}
                            {subIndex < ids.length - 1 && <>, &nbsp;</>}{" "}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bg-white border-2 border-black p-4 relative w-full md:block hidden">
              <div className="absolute bg-black top-2 left-2 right-0 bottom-0 z-[-1] w-full h-full" />
              <ProjectsList
                posts={posts}
                categoryTitle="Other Projects"
                tags={otherProjectsTagsMap}
                projectsPage={true}
              />
            </div>
          </div>
          <div className="wp-blog bg-white border-2 border-black py-16 px-8 relative w-full col-span-5 md:col-span-3">
            <div className="absolute bg-black top-2 left-2 right-0 bottom-0 z-[-1] w-full h-full" />
            <div className="max-w-3xl mx-auto">
              <div
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
            </div>
          </div>
          <div className="bg-white border-2 border-black p-4 relative w-full block md:hidden col-span-5">
            <div className="absolute bg-black top-2 left-2 right-0 bottom-0 z-[-1] w-full h-full" />
            <ProjectsList
              posts={posts}
              categoryTitle="Other Projects"
              tags={otherProjectsTagsMap}
              projectsPage={true}
            />
          </div>
        </div>
      </div>
    </>
  );
}
