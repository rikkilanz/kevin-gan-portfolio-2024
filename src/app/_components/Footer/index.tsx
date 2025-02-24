import { footerData } from "./footer.data";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="bg-black px-8 mt-32">
        <div className="max-w-screen-2xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center py-8 text-white">
          <div className="flex flex-col items-center justify-center md:justify-start md:items-start gap-16">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-teko font-bold">Let's chat! </h3>
              <p className="text-md">
                Whether it's a project, a question, or just to say hi— I'd love
                to hear from you!
              </p>
              <p>
                You can reach out at:{" "}
                <a href="mailto:kevingan122@icloud.com" className="underline">
                  kevingan122@icloud.com
                </a>
              </p>
            </div>
            <nav className="flex gap-8">
              {footerData.map((item) => (
                <Link href={item.href} key={item.id}>
                  <Image
                    src={item.icon}
                    width={100}
                    height={100}
                    className="filter invert h-8 w-8"
                    alt={`${item.title} icon`}
                  />
                </Link>
              ))}
            </nav>
          </div>
          <Link href="/">
            <Image
              src={"/images/logos/kevin-gan-logo-black-bg.png"}
              alt="Kevin Gan logo 2024"
              width={800}
              height={800}
              className="w-auto md:h-48 h-24 md:mb-0 mb-8"
            />
          </Link>
        </div>
      </footer>
    </>
  );
}
