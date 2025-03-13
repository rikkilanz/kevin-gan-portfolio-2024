import PageHeading from "../_components/PageHeading";
import Link from "next/link";

export default async function Library() {
  const response = await fetch(
    "http://kevinganportfolio.opusspace.ca/wp-json/wp/v2/pages/1817"
    // { next: { revalidate: 60 } } // Optional: Revalidates data every 60 seconds for ISR.
  );
  const data = await response.json();
  return (
    <>
      {/* <div className="px-8 mx-auto max-w-screen-2xl">
        <PageHeading />
        <section>
          <div>
            <ul className="flex flex-col gap-8">
              <li className="bg-main-500 relative border-2 border-black flex flex-col md:flex-row">
                <div className="absolute bg-black top-2 left-2 right-0 bottom-0 z-[-1] w-full h-full" />
                <div className="min-w-[40%] h-auto aspect-square border-r-2 border-black bg-white"></div>
                <div className="p-8 flex flex-col justify-center gap-4 text-white">
                  <div >
                    {}
                  </div>
                  <h3 className="font-teko font-bold text-5xl ">
                    The Sound Pack
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Orci ut vel sed sed
                    elementum. Elementum velit felis fermentum maecenas justo
                    euismod nisl. Ornare risus lorem neque ipsum donec praesent
                    risus.
                  </p>
                  <p>
                    Sit leo urna lorem aliquet in vitae commodo. Morbi sit
                    placerat dictumst risus aliquet nec. Feugiat suspendisse
                    vitae sed id fames ut sed nisl. Ipsum donec mi feugiat
                    etiam. Leo id magna leo elementum vel faucibus dolor.
                  </p>
                  <ul className="flex flex-col gap-2">
                    <li>- Audio 1</li>
                    <li>- Audio 2</li>
                    <li>- Audio 3</li>
                  </ul>
                  <Link
                    href="#"
                    className="uppercase p-3 font-bold text-black bg-white self-start hover:bg-black hover:text-white"
                  >
                    Download Pack
                  </Link>
                </div>
              </li>
              <li className="bg-main-500 relative border-2 border-black flex flex-col-reverse md:flex-row">
                <div className="absolute bg-black top-2 left-2 right-0 bottom-0 z-[-1] w-full h-full" />
                <div className="p-8 flex flex-col justify-center gap-4 text-white">
                  <h3 className="font-teko font-bold text-5xl ">
                    The Audio Pack
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Orci ut vel sed sed
                    elementum. Elementum velit felis fermentum maecenas justo
                    euismod nisl. Ornare risus lorem neque ipsum donec praesent
                    risus.
                  </p>
                  <p>
                    Sit leo urna lorem aliquet in vitae commodo. Morbi sit
                    placerat dictumst risus aliquet nec. Feugiat suspendisse
                    vitae sed id fames ut sed nisl. Ipsum donec mi feugiat
                    etiam. Leo id magna leo elementum vel faucibus dolor.
                  </p>
                  <ul className="flex flex-col gap-2">
                    <li>- Audio 1</li>
                    <li>- Audio 2</li>
                    <li>- Audio 3</li>
                  </ul>
                  <Link
                    href="#"
                    className="uppercase p-3 font-bold text-black bg-white self-start hover:bg-black hover:text-white"
                  >
                    Download Pack
                  </Link>
                </div>
                <div className="min-w-[40%] h-auto aspect-square border-r-2 border-black col-span-1 bg-white"></div>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2 className="font-teko font-bold text-5xl pt-16 text-center">
            Extensive Audo Library
          </h2>
          <p className="text-center max-w-4xl mx-auto mt-4">
            Lorem ipsum dolor sit amet 500+ consectetur. Eu etiam 800+ auctor
            malesuada. Ultrices lorem purus mauris semper ultrices purus. Id in
            senectus vel 00kHz / 00-bit sapien consectetur. Quisque tincidunt
            cursus at condimentum sit. Pellentesque tortor velit congue sit.
          </p>
          <div className="text-center mt-8">
            <Link
              href="#"
              className="uppercase p-3 font-bold text-white bg-black text-center"
            >
              View Full Library List
            </Link>
          </div>
        </section>
        <section className="mt-16">
          <iframe
            width="100%"
            height="450"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1613819257&color=%23adb7bb&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
          <div
            style={{
              fontSize: "10px",
              color: "#cccccc",
              lineBreak: "anywhere",
              wordBreak: "normal",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontFamily:
                "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
              fontWeight: 100,
            }}
          >
            <a
              href="https://soundcloud.com/sc-playlists"
              title="Discovery Playlists"
              target="_blank"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              Discovery Playlists
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/sc-playlists/sets/wildhearts"
              title="Wildhearts"
              target="_blank"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              Wildhearts
            </a>
          </div>
        </section>
      </div> */}
      <PageHeading />
      <div
        className="library-page px-8 mx-auto max-w-screen-2xl"
        dangerouslySetInnerHTML={{ __html: data.content.rendered }}
      ></div>
    </>
  );
}
