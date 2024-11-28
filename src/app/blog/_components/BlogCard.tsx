import Link from "next/link";
import Image from "next/image";
export default function BlogCard() {
  return (
    <>
      <div className="bg-white relative border-2 border-black flex">
        <div className="absolute bg-black top-2 left-2 right-0 bottom-0 z-[-1] w-full h-full" />
        <div className="min-w-[25%] h-auto aspect-square border-r-2 border-black col-span-1 bg-white"></div>

        <div className="p-8 flex flex-col justify-center gap-4">
          <p className="text-sm">PUBLISHED ON OCTOBER 1, 2024</p>

          <h2 className=" font-teko text-main-500 font-bold text-5xl ">
            This is a sample title of a blog page
          </h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur. Orci ut vel sed sed
            elementum. Elementum velit felis fermentum maecenas justo euismod
            nisl. Ornare risus lorem neque ipsum donec praesent risus.{" "}
          </p>
          <Link
            href="#"
            className="uppercase p-3 font-bold text-white bg-main-500 self-start hover:bg-black"
          >
            Read More
          </Link>
        </div>
      </div>
    </>
  );
}
