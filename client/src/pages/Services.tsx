import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Globe, Database, Server, Lock, Smartphone, Video, FileSpreadsheet} from 'lucide-react';
const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'High-quality development of sites using MERN stack. My current progress is learning stage, with frontend almost completed and learning backend.',
      features: ['React Js / MERN Stack', 'Performance Optimization'],
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Passionate video editor dedicated to bringing stories to life through seamless editing and catchy visuals.',
      features: ['Final Cut Pro', 'Capcut' ,'DaVinci & AE (Learning stage)'],
    },
    {
      icon: Palette,
      title: 'Graphics Design',
      description: 'I have my basics cleared & I am pursuing a course to master the art of design graphics.',
      features: ['Canva', 'Figma'],
    },
    {
      icon: Database,
      title: ' Database Management',
      description: 'Learning what document databases are and how data is organized with MongoDB and how to perform CRUD operations with MongoDB',
      features: ['MongoDB', 'Atlas & Mongoose'],
    },
    {
      icon: Server,
      title: ' Backend Development',
      description: 'Learning the entire modern back-end stack Node, Express, and the basics as well as advanced concepts of NodeJS in great detail.',
      features: ['Node', 'Express Js'],
    },
    {
      icon: FileSpreadsheet,
      title: ' Excel / Spreadsheets',
      description: 'Learned Microsoft Excel: Excel formulas and functions, Excel shortcuts and tips, Excel charts and graphs, etc etc.',
      features: ['Basic formulas', 'Spreadsheet Management'],
    },
    // {
    //   icon: Smartphone,
    //   title: 'App Development',
    //   description: 'Developing small cross-platform mobile applications for iOS and Android.',
    //   features: ['Native Apps', 'React Native', 'App Store Deployment'],
    // },
  ];

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
          <h1 className="text-4xl font-bold mb-4">My Services</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I offer a comprehensive range of digital services to help bring your ideas to life.
            Each service is tailored to meet your specific needs and goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative mb-6">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="absolute w-12 h-12 bg-indigo-600/20 rounded-lg -z-10 top-2 left-2 group-hover:top-0 group-hover:left-0 transition-all duration-300" />
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                    >
                      <span className="w-1.5 h-1.5 bg-indigo-600 dark:bg-indigo-400 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;