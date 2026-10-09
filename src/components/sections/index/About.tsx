import AboutCard from "@/components/AboutCard";
import { Tech } from "../../../../typings";
import { motion } from "framer-motion";

export default function About() {
  let frontendTech: Tech[] = [
    { title: "HTML", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { title: "CSS", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { title: "TailwindCSS", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />, link: "https://tailwindcss.com/" },
    { title: "React", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />, link: "https://react.dev/" },
    { title: "NextJS", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />, link: "https://nextjs.org/" },
    { title: "Vue", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" />, link: "https://vuejs.org/" },
    { title: "Svelte", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg" />, link: "https://svelte.dev/" },
    { title: "Figma", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />, link: "https://figma.com"},
    { title: "Sass", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />, link: "https://sass-css.org/" },
  ]

  let backendTech: Tech[] = [
    { title: "JavaScript", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />, link: "https://www.javascript.com/" },
    { title: "TypeScript", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />, link: "https://www.typescriptlang.org" },
    { title: "NodeJS", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />, link: "https://nodejs.org/" },
    { title: "Python", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />, link: "https://www.python.org/" },
    { title: "Swift", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" />, link: "https://swift.org/" },
    { title: "Java", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />, link: "https://www.java.com/" },
    { title: "MongoDB", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />, link: "https://www.mongodb.com/" },
    { title: "Redis", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" />, link: "https://redis.io/" },
    { title: "DiscordJS", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg" />, link: "https://discord.js.org/" },
    { title: "Bun", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg" />, link: "https://bun.sh/" },
  ]

  let otherTech: Tech[] = [
    { title: "Git", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />, link: "https://git-scm.com/" },
    { title: "Github", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />, link: "https://github.com/" },
    { title: "NPM", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />, link: "https://www.npmjs.com/" },
    { title: "Visual Studio Code", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />, link: "https://code.visualstudio.com/" },
    { title: "Docker", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />, link: "https://www.docker.com/" },
    { title: "Nginx", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" />, link: "https://nginx.org/" },
    { title: "Cloudflare", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg" />, link: "https://www.cloudflare.com/" },
    { title: "Home Assistant", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.simpleicons.org/homeassistant" />, link: "https://www.home-assistant.io/" },
    { title: "Unity", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" />, link: "https://unity.com/" },
    { title: "Vercel", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" />, link: "https://vercel.com/" },
    { title: "Linux", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />, link: "https://www.linux.org/" },
  ]

  return (
    <>
      <section id='about' className="max-w-4xl w-full flex flex-col mx-auto">
        <motion.h1
          className="text-center font-bold text-5xl mt-16"
          initial={{ transform: 'translateY(-30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
          viewport={{ amount: 0.1, once: true }}
        >
          About Me
        </motion.h1>
        <ul className="grid grid-cols-2 gap-4 mt-4">
          <AboutCard
            title="Overall"
            description="I'm an 18 year old developer from Germany building iOS apps, web tools and self-hosted automation. I speak English and German fluently and love creating projects across iOS, Windows, Unity, and Web platforms."
            direction="top"
            span={2}
            delay={0.1}
            gradient="bg-gradient-to-tl"
          />
          <AboutCard
            title="Frontend"
            description="I have experience with frontend development, working with various frameworks and libraries to create engaging user interfaces."
            tech={frontendTech}
            direction="left"
            span={1}
            delay={0.15}
            gradient="bg-gradient-to-br"
          />
          <AboutCard
            title="Backend"
            description="I work with backend technologies to build APIs and server-side applications using modern frameworks and runtimes."
            tech={backendTech}
            direction="right"
            span={1}
            delay={0.2}
            gradient="bg-gradient-to-bl"
          />
          <AboutCard
            title="Other Technologies"
            description="I use a variety of tools, services, and technologies throughout my development process."
            tech={otherTech}
            direction="bottom"
            span={2}
            delay={0.1}
            gradient="bg-gradient-to-tr"
          />
        </ul>
      </section>
    </>
  );
}
