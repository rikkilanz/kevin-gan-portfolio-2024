import ProjectsList from "../_components/ProjectsList";
import PageHeading from "../_components/PageHeading";

const category = [
  {
    title: "Personal Projects",
    projects: [
      {
        title: "Project Title",
        tags: ["Tag 1", "Tag 2", "Tag 3"],
        image: "https://dummyimage.com/1280x720/fff/aaa",
      },
    ],
  },
  {
    title: "Client Projects",
    projects: [
      {
        title: "Project Title",
        tags: ["Tag 1", "Tag 2", "Tag 3"],
        image: "https://dummyimage.com/1280x720/fff/aaa",
      },
    ],
  },
  {
    title: "Interactive Media",
    projects: [
      {
        title: "Project Title",
        tags: ["Tag 1", "Tag 2", "Tag 3"],
        image: "https://dummyimage.com/1280x720/fff/aaa",
      },
    ],
  },
];

export default function Work() {
  return (
    <>
      <div className="px-8 mx-auto max-w-screen-2xl">
        <PageHeading />
        {category.map((category) => (
          <ProjectsList categoryTitle={category.title} />
        ))}
      </div>
    </>
  );
}
