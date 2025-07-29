"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: 'Teachnook',
      position: 'Intern, Full Stack Developer',
      period: 'May 2023 - June 2023',
      location: 'Remote',
      type: 'Intern',
      description: 'While training here, I helped make an ERP like website tailored to get various parametric information related to company employees. The main crux of this project was to host the website on Azure Static Web Apps.',
      achievements: [
        'Implemented advanced skills visualization with animated progress bars and interactive charts',
        'Implemented advanced accessibility features and keyboard navigation',
        'Implemented SEO optimization with dynamic meta tags and structured data',
        'Implemented Apple-level design aesthetics with glassmorphism and premium animations'
      ],
      technologies: ['ReactJS', 'TypeScript', 'HTML', 'CSS', 'Microsoft Azure', 'Azure Static Web']
    },
    {
      company: 'Pixel Experience',
      position: 'Lead Maintainer',
      period: 'August 2023 - April 2024',
      location: 'Remote',
      type: 'Developer',
      description: 'I was the Lead Maintainer at PixelExperience, an open-source project focused on making an AOSP-based Custom Operating System. Here I also worked with Linux Kernel which is also used in Android, fixed various related bugs and managed community with a thousand users',
      achievements: [
        'Delivered Android 13, Android 14 with every monthly security patch',
        'Fixed various related bugs like fast-charging issue, battery drop, and many more',
        'Worked with developing and maintaining stable Linux Kernel',
        'Still contributing to SM7325 community'
      ],
      technologies: ['Android', 'Linux Kernel', 'Git', 'C++', 'AOSP', 'Linux Foundations', 'Bash']
    },
    {
      company: 'National Service Scheme, DIT',
      position: 'Social Media Coordinator & Public Relations',
      period: 'December 2023 - August 2024',
      location: 'Pimpri, Pune',
      type: 'Volunteer Experience',
      description: 'Created and managed digital content, ran outreach campaigns, and enhanced club\'s online presence.',
      achievements: [
        'Led digital content creation for awareness drives',
        'Successfully got more than 6000+ impressions online',
        'Coordinated mass Voter-ID regestration drive',
        'Currently contributing being in NSS\'s core think-tank team'
      ],
      technologies: ['Social Media Content Creation', 'Public Relations', 'Adobe Premiere Pro', 'Canva']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white/50 dark:bg-slate-900/50">
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
                Work Experience
              </span>
            </motion.h2>
            <motion.p
              className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              My professional journey and key experiences
            </motion.p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              >
                <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                          {exp.position}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                          <Briefcase className="h-4 w-4" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                        <Badge variant="outline" className="w-fit">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            className="flex items-start gap-2 text-slate-600 dark:text-slate-400"
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.8 + index * 0.2 + achIndex * 0.1 }}
                          >
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.3, delay: 1 + index * 0.2 + techIndex * 0.05 }}
                          >
                            <Badge 
                              variant="secondary"
                              className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border border-blue-200 dark:border-blue-800"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
