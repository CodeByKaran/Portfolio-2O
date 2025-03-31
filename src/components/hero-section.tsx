"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/interfaces";
import { profileUrl, isOnce } from "@/constants";
import { useCustomScroll } from "@/hooks/useCustomScroll";

const SpringIcon = ({ icon }: { icon: Icon }) => {
  return (
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, icon.rotate || 0],
        x: [0, 10, -5, 0],
        y: [0, -10, 5, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        delay: icon.delay,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
      className={`absolute rounded-full bg-white/20 p-3 backdrop-blur-md dark:bg-gray-900/20 ${icon.className}`}
    >
      <Image
        src={icon.url}
        width={40}
        height={40}
        alt={icon.alt}
        className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
        priority
      />
    </motion.div>
  );
};

export default function HeroSection() {
  const { scrollInto } = useCustomScroll();

  return (
    <>
      {/* Glass card container */}
      <div className="containe px-2 md:px-6">
        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="p-8">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <motion.h1
                    className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: isOnce }}
                    transition={{ duration: 0.5 }}
                  >
                    Karan Kumar
                  </motion.h1>
                  <motion.h2
                    className="text-xl font-medium text-muted-foreground sm:text-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: isOnce }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Full-Stack Developer
                  </motion.h2>
                  <motion.p
                    className="max-w-[600px] text-muted-foreground md:text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: isOnce }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Building modern, scalable, and interactive web applications
                    with Next.js and the MERN stack.
                  </motion.p>
                </div>

                {/* Social links */}
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: isOnce }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Link
                    href={profileUrl.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link
                    href={profileUrl.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href={profileUrl.email}>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                  <Link href={profileUrl.twitter}>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        fill="currentColor"
                        className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"
                      >
                        <g>
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                        </g>
                      </svg>
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </Link>
                </motion.div>

                {/* CTA buttons */}
                <motion.div
                  className="flex flex-col gap-2 min-[450px]:flex-row"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: isOnce }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Button
                    className="group min-[450px]:w-auto"
                    onClick={() => scrollInto("Projects")}
                  >
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <a
                    href="https://res.cloudinary.com/dlvlkfl32/image/upload/f_webp,fl_awebp,q_auto/v1742310454/Pdf/pfh4v6s6uui2sgclnbid"
                    download="Karan_Kumar_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="w-full min-[450px]:w-auto"
                    >
                      Download Resume
                      <Download className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </motion.div>
              </div>

              {/* Hero image/illustration */}
              <motion.div
                className="flex justify-center py-12 md:py-0 lg:justify-end"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: isOnce }}
                transition={{ duration: 0.7 }}
              >
                <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border border-black/20 bg-black/5 p-2 backdrop-blur-sm md:h-[450px] md:w-[450px] dark:border-white/20 dark:bg-gray-900/5">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-20 dark:opacity-10">
                    <svg
                      width="100%"
                      height="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
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

                  <motion.div
                    className="absolute top-1/2 left-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/5 dark:border-white/5"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 2,
                    }}
                  />
                  <motion.div
                    className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/5 dark:border-white/5"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 1,
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
    </>
  );
}
