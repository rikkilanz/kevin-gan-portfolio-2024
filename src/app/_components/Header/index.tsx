"use client";
import { useState } from "react";
import { headerData } from "./header.data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from 'lucide-react';

export default function Header() {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="max-w-screen-2xl mx-auto p-4 md:p-8">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            src={"/images/logos/kevin-gan-logo-no-bg.png"}
            alt="Kevin Gan logo 2024"
            width={100}
            height={100}
          />
        </Link>
        <nav className="hidden md:flex gap-8">
          {headerData.map((item) => (
            <Link
              href={item.href}
              key={item.id}
              className={`${
                path?.includes(`${item.href}/`) || path === item.href
                  ? "bg-main-500 text-white border-black border-2"
                  : "hover:underline"
              } text-md py-2 px-4 relative `}
            >
              {(path?.includes(`${item.href}/`) || path === item.href) && (
                <div className="absolute top-2 left-2 right-0 bottom-0 bg-black w-full h-full z-[-1]" />
              )}
              {item.title}
            </Link>
          ))}
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden mt-4">
          {headerData.map((item) => (
            <Link
              href={item.href}
              key={item.id}
              className={`${
                path?.includes(`${item.href}/`) || path === item.href
                  ? "bg-main-500 text-white border-black border-2"
                  : "hover:bg-gray-100"
              } block py-2 px-4 mb-2`}
              onClick={toggleMenu}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

