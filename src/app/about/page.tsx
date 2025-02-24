import PageHeading from "../_components/PageHeading";

export default function About() {
  return (
    <>
      <div className="px-8 mx-auto max-w-screen-2xl">
        <PageHeading />
        <section>
          <div className="bg-main-500 border-2 border-black text-white p-8 grid grid-cols-3 gap-16 relative text-sm">
            <div className="absolute left-4 right-0 top-4 bottom-0 w-full h-full bg-black border-2 border-black z-[-1]" />
            <div className="w-full h-auto aspect-square border-2 border-black col-span-3 md:col-span-1 bg-white"></div>
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
                Skills
              </h2>
              <div className="flex flex-col gap-4 text-base mb-4">
                <ul>
                  <li>- Skill 1</li>
                  <li>- Skill 2</li>
                  <li>- Skill 3</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-white border-2 border-black p-8 gap-16 relative text-sm col-span-3 md:col-span-1">
            <div className="absolute left-4 right-0 top-4 bottom-0 w-full h-full bg-black border-2 border-black z-[-1]" />
            <div className="flex flex-col justify-center">
              <h2 className="text-5xl font-bold font-teko mb-2 text-main-500">
                Tools
              </h2>
              <div className="flex flex-col gap-4 text-base mb-4">
                <ul>
                  <li>- Tools 1</li>
                  <li>- Tools 2</li>
                  <li>- Tools 3</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-white border-2 border-black p-8 gap-16 relative text-sm col-span-3 md:col-span-1">
            <div className="absolute left-4 right-0 top-4 bottom-0 w-full h-full bg-black border-2 border-black z-[-1]" />
            <div className="flex flex-col justify-center">
              <h2 className="text-5xl font-bold font-teko mb-2 text-main-500">
                Equipment
              </h2>
              <div className="flex flex-col gap-4 text-base mb-4">
                <ul>
                  <li>- Equipment 1</li>
                  <li>- Equipment 2</li>
                  <li>- Equipment 3</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
