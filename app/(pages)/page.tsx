import { client } from "@/utils/sanity/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Button from "@/components/Button";

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
          <p className="text-xl">Welcome...</p>
          <h1 className="text-2xl font-black">
            I&apos;m{" "}
            <span className="bg-main bg-clip-text text-transparent">
              Kunal Gala
            </span>
            ,
            <br />
            Musician & Full-stack Web Developer
          </h1>

          {/* Tech Skills Banner */}
          <div className="overflow-clip relative">
            {/* Fade out overlay */}
            <div className="absolute w-full h-full bg-fade-out"></div>

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
          <div className="flex justify-center pt-16">
            <Image
              src={"/hero.jpg"}
              width={300}
              height={300}
              alt="hero image"
              className="rounded-full aspect-square object-cover object-center shadow-md"
            />
          </div>
        </section>
      </main>
    </>
  );
}
