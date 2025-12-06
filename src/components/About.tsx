// import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Rocket, Zap, Target } from 'lucide-react';
import { personalInfo, links } from '../data/portfolio';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Expertise',
      description: 'Proficient in front-end and low-level programming with hands-on experience in modern frameworks.'
    },
    {
      icon: Rocket,
      title: 'Fast Learner',
      description: 'Quickly adapting to new technologies from React to Blockchain development.'
    },
    {
      icon: Zap,
      title: 'Problem Solver',
      description: 'Strong analytical mindset with a passion for solving complex technical challenges.'
    },
    {
      icon: Target,
      title: 'Detail-Oriented',
      description: 'Committed to writing clean, efficient, and maintainable code.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gradient-to-br from-[#0a0e27] to-[#050816]">
      {/* Background Pattern */}
      <div className="absolute inset-0 geometric-bg opacity-20"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-gray-400 text-lg">Get to know more about who I am</p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass rounded-2xl p-8 space-y-4">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">My Journey</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {personalInfo.description}
                </p>
                <div className="pt-4 space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-400">Location: <span className="text-white">{personalInfo.location}</span></span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-400">Email: <span className="text-white">{links.contacts[0].value}</span></span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-400">Status: <span className="text-green-400">Available for opportunities</span></span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              variants={containerVariants}
              className="grid sm:grid-cols-2 gap-6"
            >
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="glass rounded-xl p-6 space-y-3 card-lift cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center neon-glow">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-white">{highlight.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{highlight.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <motion.h4
                  className="text-4xl font-bold text-cyan-400"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                >
                  15+
                </motion.h4>
                <p className="text-gray-400">Technologies</p>
              </div>
              <div className="space-y-2">
                <motion.h4
                  className="text-4xl font-bold text-cyan-400"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.6, type: 'spring' }}
                >
                  10+
                </motion.h4>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div className="space-y-2">
                <motion.h4
                  className="text-4xl font-bold text-cyan-400"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.7, type: 'spring' }}
                >
                  2+
                </motion.h4>
                <p className="text-gray-400">Years Learning</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
