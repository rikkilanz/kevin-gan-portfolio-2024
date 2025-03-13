import PageHeading from "../_components/PageHeading";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="px-8 mx-auto max-w-screen-2xl">
        <PageHeading />
        <section>
          <div className="bg-main-500 border-2 border-black text-white p-8 grid grid-cols-3 gap-16 relative text-sm">
            <div className="absolute left-4 right-0 top-4 bottom-0 w-full h-full bg-black border-2 border-black z-[-1]" />
            <div className="w-full h-auto aspect-square border-2 border-black col-span-3 md:col-span-1 bg-white relative">
              <Image
                src="/images/images/kevin-gan-profile.jpg"
                alt="Kevin Gan Profile Photo"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="col-span-3 md:col-span-2 flex flex-col justify-center">
              <h2 className="text-5xl font-bold font-teko mb-2">
                Hi, I'm Kevin Gan!
              </h2>
              <div className="flex flex-col gap-4 text-base mb-4">
                <p>
                  I played the guitar and drums and dreamt of becoming a
                  musician when I was in High School, so I dived into the audio
                  industry as my curiosity grew about the "How and Why" Sound
                  works. One day, I was introduced to Art of Foley and The
                  Deception Of Sound Design on YouTube and I was immediately
                  enthralled and inspired to pursue a career in the audio
                  industry combining my passion for both creative and technical
                  aspects of Sound Design.
                </p>

                <p>
                  Since graduating from Vancouver Film School's Sound Design For
                  Visual Media Program in March of 2022 and Certified as an Avid
                  Pro Tool User, I've been focusing on my crafts & skills in
                  terms of Sound Design, Foley, Dialogue, Audio Recording and
                  mixing for a variety of different projects.
                </p>

                <p>
                  In my free time, I enjoy improving my guitar fingerstyle
                  skills, practicing Japanese and Chinese, going to the gym or
                  finishing off lists of animes, games and movies which I swore
                  to finish "someday".
                </p>

                <p>
                  I will be updating this website as my audio journey continues.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-3 gap-8 mt-8">
          <div className="bg-white border-2 border-black p-8 gap-16 relative text-sm col-span-3 text-center">
            <div className="absolute left-4 right-0 top-4 bottom-0 w-full h-full bg-black border-2 border-black z-[-1]" />
            <div className="flex flex-col justify-center">
              <h2 className="text-5xl font-bold font-teko mb-2 text-main-500">
                My Mission
              </h2>
              <div className="flex flex-col gap-4 text-base mb-4">
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
            </div>
          </div>
          <div className="bg-white border-2 border-black p-8 gap-16 relative text-sm col-span-3 md:col-span-1">
            <div className="absolute left-4 right-0 top-4 bottom-0 w-full h-full bg-black border-2 border-black z-[-1]" />
            <div className="flex flex-col justify-center">
              <h2 className="text-5xl font-bold font-teko mb-2 text-main-500">
                Studio Equipment
              </h2>
              <div className="flex flex-col gap-4 text-base mb-4">
                <ul className="list-none">
                  <li>
                    <strong>Computer:</strong>
                  </li>
                  <ul className="ml-4 list-disc">
                    <li>Mac (Retina 5K, 27-inch, 2020)</li>
                    <li>Processor: 3.1 GHz 6-Core Intel Core i5</li>
                    <li>Ram: 32 GB 2667 MHz DDR4</li>
                    <li>Storage: 500 GB</li>
                  </ul>
                  <li className="mt-2">
                    <strong>Dell G7 15-7500 Computer:</strong>
                  </li>
                  <ul className="ml-4 list-disc">
                    <li>Processor: 5.0GHz, 6 cores, Intel i7-10750H 2.60GHz</li>
                    <li>Ram: 32G 2x16G, DDR4, 2933MHz</li>
                    <li>Storage: 1TB</li>
                  </ul>
                  <li className="mt-2">
                    <strong>Hardware:</strong>
                  </li>
                  <ul className="ml-4 list-disc">
                    <li>Focusrite Scarlette 2i2</li>
                    <li>2 X JBL 306PMKII Professional Monitor</li>
                    <li>Audio-Technica ATH-M50x Headphones</li>
                    <li>Apple Magic Keyboard + Numeric Pad</li>
                    <li>Seagate HDD 1TB External Hard Drive</li>
                    <li>ABIWAZY Dual HDMI Monitor Adapter Docking Station</li>
                    <li>Logitech MX Ergo Wireless Trackball Mouse</li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-white border-2 border-black p-8 gap-16 relative text-sm col-span-3 md:col-span-1">
            <div className="absolute left-4 right-0 top-4 bottom-0 w-full h-full bg-black border-2 border-black z-[-1]" />
            <div className="flex flex-col justify-center">
              <h2 className="text-5xl font-bold font-teko mb-2 text-main-500">
                Software
              </h2>
              <div className="flex flex-col gap-4 text-base mb-4">
                <ul className="list-none">
                  <li>
                    <strong>DAWS:</strong> Pro Tools (IOS), Reaper (PC)
                  </li>
                  <li>
                    <strong>Audio Library:</strong> Soundly, Sound Q
                  </li>
                  <li>
                    <strong>Plug-ins:</strong>
                  </li>
                  <ul className="ml-4 list-disc">
                    <li>Soundtoys Complete Bundle</li>
                    <li>
                      RX 9 advanced/Dialogue Match/Loudness Control/Neoverb
                    </li>
                    <li>Fabiliter Complete Bundle</li>
                    <li>GRM Tools Complete 2</li>
                    <li>Valhalla Supermassive/FreEcho</li>
                    <li>Kontakt</li>
                    <li>Kilohearts Essentials Bundle</li>
                    <li>Xfer: Serum</li>
                    <li>UVI: Whoosh FX</li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-white border-2 border-black p-8 gap-16 relative text-sm col-span-3 md:col-span-1">
            <div className="absolute left-4 right-0 top-4 bottom-0 w-full h-full bg-black border-2 border-black z-[-1]" />
            <div className="flex flex-col justify-center">
              <h2 className="text-5xl font-bold font-teko mb-2 text-main-500">
                Studio Equipment
              </h2>
              <div className="flex flex-col gap-4 text-base mb-4">
                <ul className="list-none">
                  <li>
                    <strong>Recorders:</strong> Zoom H8
                  </li>
                  <li>
                    <strong>Microphones & Lav Kits:</strong>
                  </li>
                  <ul className="ml-4 list-disc">
                    <li>Sennheiser MKE 600 Shotgun Microphone</li>
                    <li>Lewitt LCT 240 Pro Compact Condenser Microphone</li>
                    <li>Zoom XYH-6 microphone Capsule</li>
                    <li>Korg CM300WHBK Contact Mic</li>
                  </ul>
                  <li>
                    <strong>Microphone Accessories:</strong>
                  </li>
                  <ul className="ml-4 list-disc">
                    <li>Rode Blimp</li>
                    <li>KOENIG & MEYER 210/9-BLACK Compact Tripod Mic Stand</li>
                    <li>Zoom Outdoor Microphone Windscreen</li>
                    <li>JOBY GorillaPod & Manfrotto EVO2 Mini Tripod</li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
