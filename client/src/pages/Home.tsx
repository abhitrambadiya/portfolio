import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import profileImg from '../assets/img.jpg';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[calc(100vh-80px)]">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-1 space-y-6"
          >
            <h1 className="text-5xl lg:text-7xl font-bold">
              Abhi Trambadiya's
              <span className="block text-indigo-600 dark:text-indigo-400">Portfolio</span>
              
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Aspiring AIML Student &nbsp;| &nbsp;Video Editing Enthusiast&nbsp; | &nbsp;SIH '24 Finalist
              Turning ideas into reality with code &nbsp;|&nbsp; Always learning, building, and exploring 🚀
            </p>
            <div className="flex gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
              >
                Contact Me
              </Link>
            </div>
            <div className="flex gap-4 pt-6">
              <a href="https://github.com/abhitrambadiya" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/abhitrambadiya/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://x.com/abhitrambadiya9" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/abhi_trambadiya/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex-1 relative"
          >
            <div className="relative w-full aspect-square rounded-full overflow-hidden">
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;