import { headerData } from "./header.data";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center max-w-screen-2xl mx-auto py-8">
        <Link href="/">
          <Image src={"/images/logos/kevin-gan-logo-no-bg.png"} alt="Kevin Gan logo 2024" width={100} height={100}/>
        </Link>
        <nav className="flex gap-8">
          {headerData.map((item) => (
            <Link href={item.href} key={item.id}>
              {item.title}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
