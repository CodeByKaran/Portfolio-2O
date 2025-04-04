

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { isOnce } from "@/constants";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: isOnce }}
      className="w-full min-w-0 rounded-2xl border border-black/10 bg-black/10 p-4 backdrop-blur-md sm:p-6 dark:border-white/10 dark:bg-gray-900/10"
    >
      <h3 className="mb-4 text-xl font-semibold">Contact Information</h3>
      <div className="space-y-4">
        {/* Phone */}
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <Phone className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="text-sm font-medium text-muted-foreground">Phone</h4>
            <p className="mt-1">+91 79033 74058</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Available Mon-Fri, 11AM-7PM IST
            </p>
          </div>
        </div>
        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div className="w-[calc(100%-50px)]">
            <h4 className="text-sm font-medium text-muted-foreground">Email</h4>
            <p className="mt-1 w-full break-words">karankumarascode@gmail.com</p>
            <p className="mt-1 text-xs text-muted-foreground">
              For work inquiries and collaborations
            </p>
          </div>
        </div>
        {/* Location */}
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="text-sm font-medium text-muted-foreground">Location</h4>
            <p className="mt-1">Patna, Bihar, India</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Available for remote work worldwide
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
