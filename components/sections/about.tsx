"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Rocket, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Code2, value: '5+', label: 'Projects Completed' },
    { icon: Users, value: '500+', label: 'Happy Users in Community' },
    { icon: Rocket, value: '4+', label: 'Years of Tech Experience' },
    { icon: Award, value: '20+', label: 'Technologies' },
  ];

  return (
    <section id="about" className="py-20 bg-white/50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </motion.h2>
            <motion.p
              className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Multidisciplinary Engineer skilled in Android, Cloud, AI/ML, Web Development, Mechanical domain, and Digital Outreach initiatives.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                My Journey
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                My journey into AOSP development started during my computer science studies in Fergusson College in 12th, where I discovered 
                my passion for creating digital experiences. Over the past four years, I've worked in few open source organisations like Pixel Experience, AncientOS. I have more than 500+ active users using my AOSP solutions.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                My specializations include Android development (AOSP, Custom ROMs, Linux Kernel), Cloud Computing, AI/ML Solutions, Mechanical Design and Public Relations, Community Outreach, and Digital Media Coordination. 
                I believe in writing clean, 
                maintainable code and staying up-to-date with the latest industry trends.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                When I'm not coding, you can find me contributing to open-source projects, exploring new technologies, listening music or maybe watching Cricket. I'm always eager to take on new challenges and 
                collaborate with talented folks.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm" />
                <div className="relative text-white">
                  <h4 className="text-xl font-bold mb-4">What Drives Me</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3" />
                      Problem-solving through code
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3" />
                      Continuous learning and growth
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3" />
                      Building impactful user experiences
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3" />
                      Collaborating with amazing teams
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="text-center p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50">
                  <CardContent className="p-0">
                    <motion.div
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon className="h-6 w-6" />
                    </motion.div>
                    <motion.div
                      className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    >
                      {stat.value}
                    </motion.div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
