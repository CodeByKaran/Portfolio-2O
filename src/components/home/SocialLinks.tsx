import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { profileUrl, isOnce } from "@/constants";

export default function SocialLinks() {
  return (
    <motion.div
      className="flex gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: isOnce }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Link href={profileUrl.github} target="_blank" rel="noopener noreferrer">
        <Button variant="outline" size="icon" className="rounded-full">
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </Button>
      </Link>
      <Link
        href={profileUrl.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="outline" size="icon" className="rounded-full">
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </Button>
      </Link>
      <Link href={profileUrl.email}>
        <Button variant="outline" size="icon" className="rounded-full">
          <Mail className="h-5 w-5" />
          <span className="sr-only">Email</span>
        </Button>
      </Link>
      <Link href={profileUrl.twitter} target="_blank" rel="noopener noreferrer">
        <Button variant="outline" size="icon" className="rounded-full">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-5 w-5 fill-current dark:fill-white"
          >
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
          <span className="sr-only">X</span>
        </Button>
      </Link>
    </motion.div>
  );
}
