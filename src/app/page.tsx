import ProjectsList from "./_components/ProjectsList";
import Link from "next/link";
import { wpGetPostsByCategory, wpGetTagById } from "./_services/wpService";
import Image from "next/image";

export default async function App() {
  const categoryId = 8;
  const limit = 3;
  const page = 1;
  const reelCategoryId = 18;
  const { posts } = await wpGetPostsByCategory(categoryId, limit, page);
  const { posts: reelPost } = await wpGetPostsByCategory(reelCategoryId, 1, 1);

  const tagIds: any = [...new Set(posts.flatMap((post: any) => post.acf.role))];
  const tags = await Promise.all(tagIds.map((id: any) => wpGetTagById(id)));
  const tagsMap = Object.fromEntries(tags.map((tag) => [tag.id, tag]));

  return (
    <>
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-screen-2xl mx-auto px-8">
        <section className="w-full h-full border-2 border-black">
          <div
            className="text-center"
            dangerouslySetInnerHTML={{ __html: reelPost[0].content.rendered }}
          />
        </section>
        <section>
          <div className="bg-main-500 border-2 border-black text-white p-8 grid grid-cols-3 gap-16 relative text-sm">
            <div className="absolute left-4 right-0 top-4 bottom-0 w-full h-full bg-black border-2 border-black z-[-1]" />
            <div className="w-full h-auto aspect-square border-2 border-black col-span-3 md:col-span-1 bg-white relative">
              <Image
                src="/images/images/kevin-gan-profile.jpg"
                alt="Kevin Gan Profile Photo"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="col-span-3 md:col-span-2 flex flex-col justify-center">
              <h2 className="text-5xl font-bold font-teko mb-2">
                Hi, I'm Kevin Gan!
              </h2>
              <div className="flex flex-col gap-4 text-base mb-4">
                <p>
                  Hi! My name is Kevin, a 23-year-old Sound Editor& Audio
                  Engineer from the beautiful city of Vancouver, British
                  Columbia in Canada.
                </p>
              </div>
              <Link
                href="/about"
                className="uppercase p-3 font-bold text-black bg-white self-start hover:bg-black hover:text-white"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full h-full">
          <ProjectsList categoryTitle="Projects" posts={posts} tags={tagsMap} />
        </section>
      </div>
    </>
  );
}
