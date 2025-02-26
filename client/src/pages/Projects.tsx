import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'web', 'mobile', 'editing'];

  const projects = [
    // {
    //   id: 1,
    //   title: 'E-Commerce Platform',
    //   category: 'web',
    //   description: 'A full-featured e-commerce platform built with React and Node.js',
    //   image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80',
    //   tech: ['React', 'Node.js', 'MongoDB'],
    //   liveUrl: 'https://example.com',
    //   githubUrl: 'https://github.com',
    // },
    // {
    //   id: 2,
    //   title: 'Mobile Banking App',
    //   category: 'mobile',
    //   description: 'A secure and user-friendly mobile banking application',
    //   image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    //   tech: ['React Native', 'Firebase'],
    //   liveUrl: 'https://example.com',
    //   githubUrl: 'https://github.com',
    // },
    // {
    //   id: 3,
    //   title: 'Design System',
    //   category: 'design',
    //   description: 'A comprehensive design system for web applications',
    //   image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80',
    //   tech: ['Figma', 'Storybook', 'React'],
    //   liveUrl: 'https://example.com',
    //   githubUrl: 'https://github.com',
    // },
    // {
    //   id: 4,
    //   title: 'Portfolio Website',
    //   category: 'web',
    //   description: 'A modern portfolio website with smooth animations',
    //   image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    //   tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    //   liveUrl: 'https://example.com',
    //   githubUrl: 'https://github.com',
    // },
    // {
    //   id: 5,
    //   title: 'Task Management App',
    //   category: 'mobile',
    //   description: 'A productivity app for managing tasks and projects',
    //   image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    //   tech: ['Flutter', 'Firebase'],
    //   liveUrl: 'https://example.com',
    //   githubUrl: 'https://github.com',
    // },
    // {
    //   id: 6,
    //   title: 'Brand Identity',
    //   category: 'design',
    //   description: 'Complete brand identity design for a tech startup',
    //   image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    //   tech: ['Illustrator', 'Photoshop'],
    //   liveUrl: 'https://example.com',
    //   githubUrl: 'https://github.com',
    // },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my latest projects, ranging from web applications to mobile apps, design and video editing works.
            Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full capitalize transition-colors ${
                filter === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-indigo-600 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-indigo-600 hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-slate-700 rounded-full text-sm flex items-center gap-1"
                      >
                        <Code className="w-4 h-4" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;