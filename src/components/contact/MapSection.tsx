

import { motion } from "framer-motion";
import { isOnce } from "@/constants";

export default function MapSection() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: isOnce }}
      className="overflow-hidden rounded-2xl border border-black/10 bg-black/10 backdrop-blur-md dark:border-white/10 dark:bg-gray-900/10"
    >
      <div className="aspect-video w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.86107261921!2d85.07300207342572!3d25.608175570477147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f29937c52d4f05%3A0x831a0e05f607b270!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1716303536017!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
          className="grayscale filter transition-all duration-500 hover:grayscale-0"
        />
      </div>
    </motion.div>
  );
}
