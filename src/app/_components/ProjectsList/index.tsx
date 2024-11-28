import Link from "next/link";
import Image from "next/image";

interface ProjectsListProps {
  categoryTitle: string;
}
export default function ProjectsList({ categoryTitle }: ProjectsListProps) {
  return (
    <>
      <div className="py-6 w-full">
        <h2 className="text-4xl font-black font-teko">{categoryTitle}</h2>
        <ul className="grid grid-cols-3 gap-8 mt-4">
          <li className="border-2 border-black col-span-1 relative group">
            <div className="bg-main-500 absolute inset-0 opacity-0 group-hover:opacity-75">
              <div className="flex flex-col justify-center items-center h-full text-white">
                <h3 className="text-2xl font-bold">Project Title</h3>
                <ul className="flex">
                  <li>Tag 1</li>
                  <li>Tag 2</li>
                  <li>Tag 3</li>
                </ul>
              </div>
            </div>
            <Image
              src="https://dummyimage.com/1280x720/fff/aaa"
              alt="placeholder image"
              width={0}
              height={0}
              className="w-full h-auto"
            />
          </li>
          <li className="border-2 border-black col-span-1 relative group">
            <div className="bg-main-500 absolute inset-0 opacity-0 group-hover:opacity-75">
              <div className="flex flex-col justify-center items-center h-full text-white">
                <h3 className="text-2xl font-bold">Project Title</h3>
                <ul className="flex">
                  <li>Tag 1</li>
                  <li>Tag 2</li>
                  <li>Tag 3</li>
                </ul>
              </div>
            </div>
            <Image
              src="https://dummyimage.com/1280x720/fff/aaa"
              alt="placeholder image"
              width={0}
              height={0}
              className="w-full h-auto"
            />
          </li>
          <li className="border-2 border-black col-span-1 relative group">
            <div className="bg-main-500 absolute inset-0 opacity-0 group-hover:opacity-75">
              <div className="flex flex-col justify-center items-center h-full text-white">
                <h3 className="text-2xl font-bold">Project Title</h3>
                <ul className="flex">
                  <li>Tag 1</li>
                  <li>Tag 2</li>
                  <li>Tag 3</li>
                </ul>
              </div>
            </div>
            <Image
              src="https://dummyimage.com/1280x720/fff/aaa"
              alt="placeholder image"
              width={0}
              height={0}
              className="w-full h-auto"
            />
          </li>
        </ul>
        <Link href="/projects" className="w-full flex justify-center my-4">
          <span className="uppercase font-bold text-sm underline">
            See More
          </span>
        </Link>
      </div>
    </>
  );
}
