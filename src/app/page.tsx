import ProjectsList from "./_components/ProjectsList";
import Link from "next/link";

export default function App() {
  return (
    <>
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-screen-2xl mx-auto px-8">
        <section className="w-full h-full border-2 border-black">
          <iframe
            height="100%"
            width="100%"
            src="https://www.youtube.com/embed/wDchsz8nmbo?si=iRtfJ0oCAREADAaR"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full aspect-video"
          ></iframe>
        </section>
        <section className="w-full h-full">
          <ProjectsList categoryTitle="Projects" />
        </section>
        <section>
          <div className="bg-main-500 border-2 border-black text-white p-8 grid grid-cols-3 gap-16 relative text-sm">
            <div className="absolute left-4 right-0 top-4 bottom-0 w-full h-full bg-black border-2 border-black z-[-1]" />
            <div className="w-full h-auto aspect-square border-2 border-black col-span-1 bg-white"></div>
            <div className="col-span-2 flex flex-col justify-center">
              <h2 className="text-5xl font-bold font-teko mb-2">
                Hi, I'm Kevin Gan!
              </h2>
              <div className="flex flex-col gap-4 text-bas mb-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  facilisis orci vitae magna efficitur, ut vulputate est
                  suscipit. Fusce efficitur euismod orci, vitae tincidunt elit
                  dictum sed. Integer euismod arcu id enim dictum, quis posuere
                  magna vestibulum.
                </p>
                <p>
                  Curabitur convallis felis a libero volutpat, at vulputate
                  felis feugiat. In facilisis justo vitae justo accumsan, in
                  sodales neque fringilla. Aliquam tincidunt, turpis ut varius
                  lacinia, lectus lorem fermentum ipsum, id faucibus metus
                  turpis at velit. Etiam vehicula auctor tellus at condimentum.
                </p>
              </div>
              <Link
                href="#"
                className="uppercase p-3 font-bold text-black bg-white self-start hover:bg-black hover:text-white"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
