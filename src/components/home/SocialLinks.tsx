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
    </motion.div>
  );
}
