import { isOnce } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";

const ProfileSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: isOnce }}
    >
      {/* Profile Image */}
      <div className="relative mx-auto mb-8 h-64 w-64 overflow-hidden rounded-2xl bg-white/5 p-2 backdrop-blur-sm md:h-80 md:w-80 dark:bg-gray-900/5">
        {/* Image */}
        <div className="relative z-10 h-full w-full overflow-hidden rounded-xl">
          <Image
            src="/human.png"
            width={300}
            height={300}
            alt="Developer Profile"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 z-10 h-20 w-20 rounded-full bg-primary/20 backdrop-blur-md"></div>
        <div className="absolute -bottom-6 -left-6 z-10 h-24 w-24 rounded-full bg-primary/10 backdrop-blur-md"></div>
      </div>
      {/* End of Profile Image */}

      <div className="space-y-4 rounded-2xl border border-white/10 bg-black/10 p-6 backdrop-blur-md dark:bg-gray-900/10">
        <h3 className="text-xl font-semibold">My Expertise</h3>
        <p className="text-muted-foreground">
          I specialize in building modern, performant web applications using
          Next.js and the MERN stack. With a strong foundation in both frontend
          and backend technologies, I create seamless user experiences with
          clean, maintainable code.
        </p>
        <p className="text-muted-foreground">
          My passion for UI/UX design and performance optimization drives me to
          create applications that are not only functional but also beautiful
          and responsive across all devices.
        </p>
        <p className="text-muted-foreground">
          I&apos;m currently open to freelance projects and collaborations.
          Let&apos;s build something amazing together!
        </p>
      </div>
    </motion.div>
  );
};

export default ProfileSection;
