import { motion } from "framer-motion";
import Link from "next/link";

export default function Projects() {
  const projects: { title: string, description: string, link: string, image?: string, logo?: string }[] = [
    {
      title: "coucou",
      description: "My fork of a tiny notch companion that keeps an eye on your coding agents",
      link: "https://github.com/PythonTilk/coucou",
      logo: "/coucou-logo.png"
    },
    {
      title: "Notevault",
      description: "A note-sharing website that grew out of a school project",
      link: "https://github.com/PythonTilk/notevault-svelte",
      logo: "/notevault-logo.svg"
    },
    {
      title: "Galaxy",
      description: "A website that simulates a galaxy and our solar system in the browser",
      link: "https://pythontilk.github.io/Galaxy/",
      logo: "/galaxy-logo.svg"
    },
    {
      title: "Valentines Day",
      description: "A simple site to ask someone out for Valentine's Day",
      link: "https://pythontilk.github.io/Valintines-day-askout-webiste/",
      image: "/cats-cat-with-flower.png"
    },
    {
      title: "anarlog",
      description: "Open source AI notepad for meetings, where I worked on Linux support",
      link: "https://github.com/fastrepl/anarlog",
      logo: "/anarlog-logo.png"
    }
  ];

  return (
    <>
      <section id='projects' className="max-w-4xl w-full flex flex-col mx-auto">
        <motion.h1
          className="text-center font-bold text-5xl mt-16"
          initial={{ transform: 'translateY(-30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
          viewport={{ amount: 0.1, once: true }}
        >
          My Projects
        </motion.h1>
        <ul className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
          {projects.map((project, index) => (
            <motion.li
              key={project.title}
              className="group flex"
              initial={{ transform: 'translateY(-30px)', opacity: 0 }}
              whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
              transition={{ duration: 0.5, delay: 0.1 + (index * 0.1), ease: [0.39, 0.21, 0.12, 0.96], }}
              viewport={{ amount: 0.1, once: true }}
            >
              <Link href={project.link} target="_blank" className="p-4 flex flex-col bg-gradient-to-br from-primary to-secondary rounded-lg border-1 border-accent shadow-2xl shadow-background hover:scale-105 transition-transform duration-300 w-full">
                {project.image
                  ? <img alt="" draggable={false} className="rounded-lg border-1 border-accent mb-4 w-full h-48 object-cover" src={project.image} />
                  : <div className="rounded-lg border-1 border-accent mb-4 w-full h-48 flex items-center justify-center bg-gradient-to-tr from-secondary to-primary font-bold text-5xl text-neutral-400">
                      {project.logo
                        ? <img alt="" draggable={false} className="h-28 w-28 object-contain" src={project.logo} />
                        : project.title}
                    </div>
                }
                <h2 className="text-center font-semibold text-3xl">
                  {project.title}
                </h2>
                <p className="text-center text-lg">
                  {project.description}
                </p>
              </Link>
            </motion.li>
          ))}
        </ul>
      </section>
    </>
  );
}
