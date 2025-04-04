import { motion } from "framer-motion";

import SpringIcon from "./SpringIcon";

export default function HeroIllustration() {
  return (
    <motion.div
      className="flex justify-center py-12 md:py-0 lg:justify-end"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border border-black/20 bg-black/5 p-2 backdrop-blur-sm md:h-[450px] md:w-[450px] dark:border-white/20 dark:bg-gray-900/5">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 30 0 L 0 0 0 30"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.3"
              />
            </pattern>
            <rect width="700%" height="70%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Circular gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/20 opacity-15" />

        {/* Floating tech icons */}
        <SpringIcon
          icon={{
            name: "React",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            alt: "React",
            className: "top-10 left-10",
            delay: 0,
            rotate: 360,
          }}
        />
        <SpringIcon
          icon={{
            name: "Node.js",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            alt: "Node.js",
            className: "right-10 bottom-16",
            delay: 1,
            rotate: -360,
          }}
        />
        <SpringIcon
          icon={{
            name: "MongoDB",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            alt: "MongoDB",
            className: "bottom-32 left-12",
            delay: 2,
            rotate: 180,
          }}
        />
        <SpringIcon
          icon={{
            name: "TypeScript",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
            alt: "TypeScript",
            className: "top-10 right-12",
            delay: 3,
            rotate: -180,
          }}
        />
        <SpringIcon
          icon={{
            name: "Next.js",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
            alt: "Next.js",
            className: "left-1/2 top-1/3 mt-5",
            delay: 4,
            rotate: 270,
          }}
        />

        <SpringIcon
          icon={{
            name: "Git",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            alt: "Git",
            className: "top-5 left-1/2 -translate-x-1/2",
            delay: 7,
            rotate: -90,
          }}
        />
        {/* Add other SpringIcon components */}
      </div>
    </motion.div>
  );
}
