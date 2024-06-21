import { client } from "@/utils/sanity/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Button from "@/components/Button";
import ColorSplotches from "@/components/ColorSplotches";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Typewriter from "@/components/Typewriter";
import PortfolioNavButton from "@/components/PortfolioNavButton";

type TechSkills = {
  _key: string;
  name: string;
  imageUrl: string;
};

type Projects = {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  tags: string[];
  year: string;
  url: string;
};

const pastelGradients = {
  0: "from-violet-300/75 to-purple-300/75 dark:from-violet-600/75 dark:to-purple-600/75",
  1: "from-orange-300/75 to-rose-300/75 dark:from-orange-600/75 dark:to-rose-600/75",
  2: "from-sky-300/75 to-sky-300/75 dark:from-sky-600/75 dark:to-sky-600/75",
  3: "from-emerald-300/75 to-lime-300/75 dark:from-emerald-600/75 dark:to-lime-600/75",
  4: "from-indigo-300/75 to-cyan-300/75 dark:from-indigo-600/75 dark:to-cyan-600/75",
  5: "from-teal-300/75 to-violet-300/75 dark:from-teal-600/75 dark:to-violet-600/75",
  6: "from-neutral-300/75 to-red-300/75 dark:from-neutral-600/75 dark:to-red-600/75",
  7: "from-rose-300/75 to-fuchsia-300/75 dark:from-rose-600/75 dark:to-fuchsia-600/75",
  8: "from-emerald-300/75 to-lime-300/75 dark:from-emerald-600/75 dark:to-lime-600/75",
  9: "from-sky-300/75 to-purple-300/75 dark:from-sky-600/75 dark:to-purple-600/75",
  default: "",
};

export default async function Home() {
  const techSkills = await client.fetch<TechSkills[]>(
    `*[_type == "techSkillsBanner"][0]["listItems"][]{name, _key, "imageUrl": image.asset->url}`
  );

  const summary = await client.fetch(
    `*[_type == "textBlocks" && title == "Summary"][0]{text}`
  );

  const bio = await client.fetch(
    `*[_type == "textBlocks" && title == "Bio"][0]{text}`
  );

  const projects = await client.fetch<Projects[]>(
    `*[_type == "projects"]{_id, name, description, "imageUrl": image.asset->url, tags, year, url}`
  );

  return (
    <>
      <main className="py-8">
        <section className="px-4">
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
              <Typewriter />
            </h1>
            {/* Tech Skills Banner */}
            <div className="relative">
              {/* Fade out overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-fade-out dark:bg-dark-fade-out pointer-events-none select-none print:hidden"></div>
              <div className="w-full h-full overflow-x-auto no-scrollbar">
                <ul className="flex items-center gap-4 py-8 w-max">
                  {techSkills.map((techSkill) => (
                    <li
                      key={techSkill._key}
                      className="flex items-center gap-2"
                    >
                      <Image
                        src={techSkill.imageUrl}
                        width={32}
                        height={32}
                        alt={techSkill.name}
                        className="w-8 h-auto"
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
            <div className="flex flex-col items-center gap-8 justify-center py-16">
              <Image
                src={"/hero.jpg"}
                width={300}
                height={300}
                alt="hero image"
                className="rounded-full aspect-square object-cover object-center shadow-md"
                priority
              />
              <PortableText value={bio.text} />
            </div>
          </section>
        </section>
        {/* Portfolio */}
        <section>
          <div className="px-4">
            <h1 className="text-accent font-semibold text-lg">Portfolio</h1>
            <h2 className="text-black dark:text-white text-4xl font-bold">
              Checkout my work.
            </h2>
          </div>
          <div
            className="flex gap-8 overflow-x-scroll no-scrollbar px-8 py-12 [&>*:nth-child(odd)]:rotate-2 [&>*:nth-child(even)]:-rotate-2 snap-x snap-mandatory"
            id="portfolio-container"
          >
            {projects.map((project, index) => (
              // Card
              <div
                className={`flex flex-col gap-2 rounded-xl h-[380px] w-[340px] min-w-[340px] p-4 shadow-xl bg-gradient-to-br border-gray-400/50 dark:border-gray-800/50 dark:text-white transition ${pastelGradients[index as keyof typeof pastelGradients] || pastelGradients.default} snap-center`}
                key={project._id}
              >
                <Image
                  src={project.imageUrl}
                  width={308}
                  height={160}
                  alt="project screenshot"
                  className="rounded-t-lg [mask-image:linear-gradient(180deg,#fff_16.35%,rgb(255_255_255_/_0%)_91.66%)] w-full h-auto"
                />
                <h3 className="font-bold text-2xl">{project.name}</h3>
                {/* Tags */}
                <div className="flex overflow-x-scroll no-scrollbar gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="whitespace-nowrap text-sm rounded py-0.5 px-1.5 border border-gray-700/10 bg-gray-200/30 dark:bg-gray-900/20 dark:text-gray-50/80 hover:bg-gray-200/60 select-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p>{project.description}</p>
                <div className="flex justify-between mt-auto">
                  <span>{project.year}</span>
                  <span>
                    <Link href={project.url} target="_blank">
                      <FontAwesomeIcon icon={faLink} />
                    </Link>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between px-8">
            <PortfolioNavButton direction="prev" />
            <PortfolioNavButton direction="next" />
          </div>
        </section>
      </main>

      <ColorSplotches />
    </>
  );
}
