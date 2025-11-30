"use client";

import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/kartik-commits', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kartiklashkare', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/kartik_ane_nenu', label: 'Twitter' },
    { icon: Mail, href: 'mailto:kartiklashkare@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="py-12 bg-slate-900 dark:bg-slate-950 text-white" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 md:mb-0">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-400 to-slate-400 bg-clip-text text-transparent">
                  Lashkare Kartik
                </h3>
                <p className="text-sm text-slate-400 mt-2">
                  Building digital experiences with passion and precision.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors duration-300 hover:scale-110"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="mt-8 pt-8 border-t border-slate-800 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-400 flex items-center justify-center gap-2">
              © {currentYear} Lashkare Kartik. Made with
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="h-4 w-4 text-red-500 fill-current" />
              </motion.span>
              while listening Country Music
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
