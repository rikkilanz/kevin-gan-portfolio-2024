"use client";
import { headerData } from "./header.data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const path = usePathname();
  console.log(path);
  return (
    <>
      <header className="flex justify-between items-center max-w-screen-2xl mx-auto p-8">
        <Link href="/">
          <Image
            src={"/images/logos/kevin-gan-logo-no-bg.png"}
            alt="Kevin Gan logo 2024"
            width={100}
            height={100}
          />
        </Link>
        <nav className="flex gap-8">
          {headerData.map((item) => (
            <Link
              href={item.href}
              key={item.id}
              className={`${
                path === item.href
                  ? "bg-main-500 text-white border-black border-2"
                  : ""
              } text-md py-2 px-4 relative`}
            >
              {path === item.href && (
                <div className="absolute top-2 left-2 right-0 bottom-0 bg-black w-full h-full z-[-1]" />
              )}
              {item.title}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
