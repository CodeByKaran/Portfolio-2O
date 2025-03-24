"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Youtube,
  Github,
  Linkedin,
  GraduationCap,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { isOnce } from "@/constants";

export default function contactsHeroSection() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          {/* Contact Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: isOnce }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get In Touch
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Feel free to reach out for collaborations, opportunities, or just
              to say hello!
            </p>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-primary"></div>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left Column - Contact Info */}
            <motion.div className="space-y-6">
              {/* Personal Info Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: isOnce }}
                className="rounded-2xl border border-black/10 bg-black/10 p-6 backdrop-blur-md sm:w-auto dark:border-white/10 dark:bg-gray-900/10"
              >
                <h3 className="mb-4 text-xl font-semibold">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">
                        Phone
                      </h4>
                      <p className="mt-1">+91 79033 74058</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Available Mon-Fri, 11AM-7PM IST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div className="w-[calc(100%-50px)]">
                      <h4 className="text-sm font-medium text-muted-foreground">
                        Email
                      </h4>
                      <p className="mt-1 w-full break-words">
                        karankumarascode@gmail.com
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        For work inquiries and collaborations
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">
                        Location
                      </h4>
                      <p className="mt-1">Patna, Bihar, India</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Available for remote work worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Education Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: isOnce }}
                className="rounded-2xl border border-black/10 bg-black/10 p-6 backdrop-blur-md dark:border-white/10 dark:bg-gray-900/10"
              >
                <h3 className="mb-4 text-xl font-semibold">Education</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">
                        Bachelor of Computer Applications (BCA)
                      </h4>
                      <p className="mt-1 text-muted-foreground">
                        University of Patna
                      </p>
                      <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>2023 - 2026</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Web Development Certified</h4>
                      <p className="mt-1 text-muted-foreground">
                        Full Stack Development Certified
                      </p>
                      <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>2024-2025</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Social Media Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: isOnce }}
                className="rounded-2xl border border-black/10 bg-black/10 p-6 backdrop-blur-md dark:border-white/10 dark:bg-gray-900/10"
              >
                <h3 className="mb-4 text-xl font-semibold">Connect With Me</h3>

                <div className="grid grid-cols-2 gap-4">
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
            </motion.div>

            {/* Right Column - Contact Form & Map */}
            <motion.div className="space-y-6">
              {/* Contact Form */}

              {/* Map */}
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

              {/* Availability Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: isOnce }}
                className="rounded-2xl border border-black/10 bg-black/10 p-6 backdrop-blur-md dark:border-white/10 dark:bg-gray-900/10"
              >
                <h3 className="mb-4 text-xl font-semibold">
                  Current Availability
                </h3>
                <div className="flex items-center gap-4">
                  <div className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                  </div>
                  <p>
                    Available for freelance projects and full-time opportunities
                  </p>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Currently accepting new projects starting from June 2023
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
