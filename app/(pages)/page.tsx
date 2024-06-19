import { client } from "@/utils/sanity/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Button from "@/components/Button";
import ColorSplotches from "@/components/ColorSplotches";

type TechSkills = {
  _key: string;
  name: string;
  imageUrl: string;
};

export default async function Home() {
  const techSkills = await client.fetch<TechSkills[]>(
    `*[_type == "techSkillsBanner"][0]["listItems"][]{name, _key, "imageUrl": image.asset->url}`
  );

  const summary = await client.fetch(
    `*[_type == "textBlocks" && title == "Summary"][0]{text}`
  );

  return (
    <>
      <main className="px-4 py-8">
        {/* Welcome */}
        <section>
          <p className="text-xl mt-4">Welcome...</p>
          <h1 className="text-4xl font-black">
            I&apos;m{" "}
            <span className="bg-gradient bg-clip-text text-transparent">
              Kunal Gala
            </span>
            ,
            <br />
            <span
              className={
                "relative whitespace-nowrap " +
                // Reveal text
                "before:absolute before:h-full before:top-0 before:right-0 before:bg-white dark:before:bg-dark before:animate-typewriter " +
                // Caret
                "after:absolute after:h-full after:w-0.5 after:left-0 after:top-0 after:bg-primary dark:after:bg-secondary after:animate-caret"
              }
            >
              Musician & Full-stack Web Developer.
            </span>
          </h1>

          {/* Tech Skills Banner */}
          <div className="relative">
            {/* Fade out overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-fade-out dark:bg-dark-fade-out pointer-events-none select-none print:hidden"></div>

            <div className="w-full h-full overflow-x-auto no-scrollbar">
              <ul className="flex items-center gap-4 py-8 w-max">
                {techSkills.map((techSkill) => (
                  <li key={techSkill._key} className="flex items-center gap-2">
                    <Image
                      src={techSkill.imageUrl}
                      width={32}
                      height={32}
                      alt={techSkill.name}
                    />
                    <span className="font-bold text-secondary">
                      {techSkill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Summary */}
          <PortableText value={summary.text} />

          {/* Buttons */}
          <div className="flex gap-4 pt-7">
            <Button theme="dark" effect="rainbow-boxshadow">
              Let&apos;s Work
            </Button>
            <Button theme="light">Resume</Button>
          </div>

          {/* Hero */}
          <div className="flex justify-center py-16">
            <Image
              src={"/hero.jpg"}
              width={300}
              height={300}
              alt="hero image"
              className="rounded-full aspect-square object-cover object-center shadow-md"
            />
          </div>
        </section>

        {/* Portfolio */}
        <section>
          <h1 className="text-accent font-semibold">Portfolio</h1>
          <h2 className="text-black dark:text-white text-4xl font-bold">
            Checkout my work.
          </h2>
        </section>
      </main>
      <ColorSplotches />
    </>
  );
}
