import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Database,
  Server,
  Video,
  FileSpreadsheet,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import profileImg from '../assets/img.jpg';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: "Web Development", icon: Code, level: 55 },
    { name: "Video Editing", icon: Video, level: 85 },
    { name: "Graphics Design", icon: Palette, level: 45 },
    { name: "Database Management", icon: Database, level: 65 },
    { name: "Backend Development", icon: Server, level: 35 },
    { name: "Excel / Spreadsheets", icon: FileSpreadsheet, level: 75 },
    // { name: 'App Development', icon: Server, level: 85 },
  ];

  const education = [
    {
      year: "2014 — 2021",
      title: "Vibgyor High International",
      // company: "Tech Solutions Inc.",
      description:
        "Completed my schooling from Vingyor High International, Kolhapur. A place which grew my communication, confidence and always motivated us to keep learning new skills.",
    },
    {
      year: "2021 — 2023",
      title: "Chhatrapati Shahu Vidyalaya & Junior College",
      // company: "Digital Innovations",
      description:
        "I have completed 11th & 12th from Shahu Jr College with a tie up coching class for jee preparation, Mohim Academy. Both the places kept us motivated and in JEE Main i had a percentile of approx 89.",
    },
    {
      year: "2023 — 2027",
      title: "KIT's College of Engineering",
      company: "Artificial Intelligence and Machine Learning",
      description:
        "Currently studying Artificial Intelligence and Machine Learning (AI/ML) from KIT and working as a film and media editor for a student run club E-Cell in our college.",
    },
  ];

  const experiences = [
    {
      year: "2024 — 2025",
      title: "Film & Media Associate",
      company: "E-Cell KITCoEK",
      description:
        "Abhi is a valuable asset to the E-Cell student club as a video editor. The creativity and attention to detail consistently elevated our content, delivering engaging videos in time that exceeded expectations. Reliable and skilled, Abhi was a pleasure to work with and played a key role in our success. ~ E-Cell",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20"
    >
      <div className="container mx-auto px-4">
        {/* Bio Section */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Hi, I'm Abhi Trambadiya, a driven student pursuing a degree in
                Artificial Intelligence and Machine Learning at KIT. With a
                strong foundation in both technical and personal skills, I
                developed an simple small Android app
                to streamline my factory operations and reduce human error.{" "}
                <br />
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                <br />
                Aspiring AIML Student &nbsp;| &nbsp;Video Editing
                Enthusiast&nbsp; | &nbsp;SIH '24 Finalist <br />
                I'm student from Kolhapur, India, working in web
                development and video editing, and multiple skills like
                figma, Power BI, excel and more.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                My skills are further highlighted by my proficiency in English,
                Hindi, Marathi, and Gujarati, allowing seamless interaction with
                a broad spectrum of individuals.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Reaching out to new people and building networks is something I
                genuinely enjoy. I am keen to connect with professionals and
                peers who share similar interests or are open to exploring new
                ideas. Let’s collaborate and turn ideas into impactful reality!
                Feel free to message me anytime. 🌐
              </p>
            </div>
            <div className="relative">
              <img
                src={profileImg}
                alt="Professional headshot"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent rounded-lg" />
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section ref={ref} className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <skill.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-indigo-600 dark:bg-indigo-400"
                  />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300 mt-2 block">
                  {skill.level}%
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Timeline */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-8">
            {education.map((exp, index) => (
              <motion.div
                key={exp.year}
                initial={{ x: -50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.2 }}
                className="relative pl-8 border-l-2 border-indigo-600 dark:border-indigo-400"
              >
                <div className="absolute w-4 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full -left-[9px] top-0" />
                <span className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold">
                  {exp.year}
                </span>
                <h3 className="text-xl font-bold mt-1">{exp.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  {exp.company}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Exprerience */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.year}
                initial={{ x: -50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.2 }}
                className="relative pl-8 border-l-2 border-indigo-600 dark:border-indigo-400"
              >
                <div className="absolute w-4 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full -left-[9px] top-0" />
                <span className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold">
                  {exp.year}
                </span>
                <h3 className="text-xl font-bold mt-1">{exp.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  {exp.company}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default About;
