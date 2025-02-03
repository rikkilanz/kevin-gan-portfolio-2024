import ProjectsList from "../_components/ProjectsList";
import PageHeading from "../_components/PageHeading";
import { wpGetPostsByCategory, wpGetTagById } from "../_services/wpService";

const categories = [
  {
    title: "Personal Projects",
    categoryId: 9,
  },
  {
    title: "Team Projects",
    categoryId: 10,
  },
  {
    title: "Interactive Media",
    categoryId: 11,
  },
];

export default async function Portfolio() {
  const limit = 100;
  const page = 1;
  const postsByCategory = await Promise.all(
    categories.map(async (category) => {
      const { posts } = await wpGetPostsByCategory(
        category.categoryId,
        limit,
        page
      );
      const tagIds: any = [...new Set(posts.flatMap((post: any) => post.tags))];
      const tags = await Promise.all(tagIds.map((id: any) => wpGetTagById(id)));
      const tagsMap = Object.fromEntries(tags.map((tag) => [tag.id, tag]));

      return {
        categoryTitle: category.title,
        posts,
        tagsMap,
      };
    })
  );

  return (
    <>
      <div className="px-8 mx-auto max-w-screen-2xl">
        <PageHeading />
        {postsByCategory.map((categoryPosts, index) => {
          return (
            <ProjectsList
              categoryTitle={categoryPosts.categoryTitle}
              posts={categoryPosts.posts}
              key={index}
              tags={categoryPosts.tagsMap}
            />
          );
        })}
      </div>
    </>
  );
}
