"use client";
import { usePathname } from "next/navigation";
export default function PageHeading() {
  const pathname = usePathname();
  const title = pathname.slice(1);
  return (
    <section>
      <h1 className="font-teko text-6xl p-16 pt-0 text-center font-bold capitalize">
        {title}
      </h1>
    </section>
  );
}
