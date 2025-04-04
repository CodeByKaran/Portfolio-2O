

import { motion } from "framer-motion";
import { Instagram, Youtube, Github, Linkedin, ExternalLink } from "lucide-react";
import { isOnce } from "@/constants";

export default function SocialMedia() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: isOnce }}
      className="w-full min-w-0 rounded-2xl border border-black/10 bg-black/10 p-4 backdrop-blur-md sm:p-6 dark:border-white/10 dark:bg-gray-900/10"
    >
      <h3 className="mb-4 text-lg font-semibold sm:text-xl">Connect With Me</h3>
      <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/karan_dev0/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition-colors hover:bg-white/10 dark:border-gray-800/10 dark:bg-gray-900/5 dark:hover:bg-gray-900/10"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-500 sm:h-10 sm:w-10">
            <Instagram className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="font-medium">Instagram</p>
            <p className="text-xs text-muted-foreground">@username</p>
          </div>
          <ExternalLink className="ml-auto h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
        </a>
        {/* YouTube */}
        <a
          href="https://www.youtube.com/@CodeCraft-t7l"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition-colors hover:bg-white/10 dark:border-gray-800/10 dark:bg-gray-900/5 dark:hover:bg-gray-900/10"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-700 sm:h-10 sm:w-10">
            <Youtube className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="font-medium">YouTube</p>
            <p className="text-xs text-muted-foreground">@channel</p>
          </div>
          <ExternalLink className="ml-auto h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/CodeByKaran?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition-colors hover:bg-white/10 dark:border-gray-800/10 dark:bg-gray-900/5 dark:hover:bg-gray-900/10"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 sm:h-10 sm:w-10">
            <Github className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="font-medium">GitHub</p>
            <p className="text-xs text-muted-foreground">@username</p>
          </div>
          <ExternalLink className="ml-auto h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/karan-kumar-ba84112b3"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition-colors hover:bg-white/10 dark:border-gray-800/10 dark:bg-gray-900/5 dark:hover:bg-gray-900/10"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 sm:h-10 sm:w-10">
            <Linkedin className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="font-medium">LinkedIn</p>
            <p className="text-xs text-muted-foreground">@username</p>
          </div>
          <ExternalLink className="ml-auto h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
        </a>
      </div>
    </motion.div>
  );
}
