"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'AI Chatbot',
      description: 'An AI Chatbot, with fully offline and local compatibility using Deepseek R1',
      image: 'https://images.pexels.com/photos/30530414/pexels-photo-30530414.jpeg?cs=srgb&dl=pexels-bertellifotografia-30530414.jpg&fm=jpg',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'API Integration', 'AI&ML', 'LLM', 'NoteLM'],
      category: 'Website',
      github: 'https://github.com/kartik-commits/chatbot',
      demo: 'https://github.com/kartik-commits/chatbot',
      featured: true
    },
    {
      title: 'Android Custom ROMs',
      description: 'At PixelExperience, I was one of the Lead Developer, contributing to an open-source AOSP-based custom ROM.',
      image: 'https://images.pexels.com/photos/544900/pexels-photo-544900.jpeg?cs=srgb&dl=pexels-kelvin809-544900.jpg&fm=jpg',
      technologies: ['Android', 'Linux Kernel', 'C++', 'Git', 'bash'],
      category: 'Operating System',
      github: 'https://github.com/PixelExperience-Devices/device_xiaomi_sm7325-common',
      demo: 'https://get.pixelexperience.org/team/kartikcommits',
      featured: true
    },
    {
      title: 'SUNFLOWER - The Solar Tracker',
      description: 'This project involves building a dual-axis solar tracker using Arduino, LDRs, and SG90 servos to maximize solar panel efficiency by continuously aligning with the sun.',
      image: 'https://images.pexels.com/photos/2454515/pexels-photo-2454515.jpeg?cs=srgb&dl=pexels-aaronburden-2454515.jpg&fm=jpg',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript', 'Arduino', 'C', 'PCB Designing'],
      category: 'Website',
      github: 'https://github.com/kartik-commits/SUNFLOWER-the_solar_tracker',
      demo: 'https://github.com/kartik-commits/SUNFLOWER-the_solar_tracker',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with animations, dark mode, and optimized performance.',
      image: 'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?cs=srgb&dl=pexels-negativespace-160107.jpg&fm=jpg',
      technologies: ['React', 'Next.js', 'CSS', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
      category: 'Website',
      github: 'https://github.com/kartik-commits/kartik-commits.github.io',
      demo: 'http://kartiklashkare.me/',
      featured: true
    },
    {
      title: 'Linux Swap Partitioning Script',
      description: 'Script to create swap partition on any Debian based Linux distro',
      image: 'https://images.pexels.com/photos/11035358/pexels-photo-11035358.jpeg?cs=srgb&dl=pexels-realtoughcandy-11035358.jpg&fm=jpg',
      technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      category: 'Script',
      github: 'https://github.com/kartik-commits/linux_swap',
      demo: 'https://raw.githubusercontent.com/kartik-commits/linux_swap/main/deb_swap.sh',
      featured: false
    },
  ];

  const categories = ['All', 'Website'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20" aria-labelledby="projects-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.h2
              id="projects-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </motion.h2>
            <motion.p
              className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A showcase of my recent work and personal projects
            </motion.p>
          </div>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className={`transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Filter className="h-4 w-4 mr-2" />
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={project.featured ? 'md:col-span-2 lg:col-span-1' : ''}
                >
                  <Card className="h-full bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300 overflow-hidden group">
                    <div className="relative overflow-hidden h-48">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                      {project.featured && (
                        <Badge className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                          Featured
                        </Badge>
                      )}
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-100">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border border-blue-200 dark:border-blue-800"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a
              href="https://github.com/kartik-commits"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
              >
                <Github className="mr-2 h-4 w-4" />
                View More on GitHub
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
