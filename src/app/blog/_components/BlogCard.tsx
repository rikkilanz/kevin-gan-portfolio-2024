import Link from "next/link";
import Image from "next/image";
import { convertDate } from "@/app/_helpers/convertDate";
export default function BlogCard({ post }: { post: any }) {
  return (
    <>
      <div className="bg-white relative border-2 border-black flex">
        <div className="absolute bg-black top-2 left-2 right-0 bottom-0 z-[-1] w-full h-full" />
        <div className="relative min-w-[25%] h-auto aspect-square border-r-2 border-black col-span-1 bg-white">
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

        <div className="p-8 flex flex-col justify-center gap-4">
          <time className="text-sm uppercase" dateTime={convertDate(post.date)}>
            {convertDate(post.date)}
          </time>

          <h2 className=" font-teko text-main-500 font-bold text-5xl ">
            {post.title.rendered}
          </h2>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          <Link
            href={`/blog/${post.slug}`}
            className="uppercase p-3 font-bold text-white bg-main-500 self-start hover:bg-black"
          >
            Read More
          </Link>
        </div>
      </div>
    </>
  );
}
