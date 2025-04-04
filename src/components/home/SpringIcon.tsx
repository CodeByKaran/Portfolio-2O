import { motion } from "framer-motion";
import Image from "next/image";
import { Icon } from "@/interfaces";

export default function SpringIcon({ icon }: { icon: Icon }) {
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
}
