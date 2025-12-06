// import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as LucideIcons from 'lucide-react';
import { skills } from '../data/portfolio';
// import { Progress } from './ui/progress';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-gradient-to-br from-[#050816] via-[#0a0e27] to-[#1a1f3a]">
      <div className="absolute inset-0 hexagon-pattern opacity-20"></div>

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
              <span className="gradient-text">My Skills</span>
            </h2>
            <p className="text-gray-400 text-lg">Technologies and tools I work with</p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillCategory, categoryIndex) => (
              <motion.div
                key={skillCategory.id}
                variants={itemVariants}
                className="glass rounded-2xl p-8 space-y-6 card-lift"
              >
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                  {skillCategory.category}
                </h3>
                <div className="space-y-6">
                  {skillCategory.items.map((skill, index) => {
                    const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<any>>)[skill.icon] || (LucideIcons as unknown as Record<string, React.ComponentType<any>>).Code;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 neon-glow">
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-white font-medium">{skill.name}</span>
                          </div>
                          <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                        </div>
                        <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: categoryIndex * 0.1 + index * 0.05 }}
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                            style={{
                              boxShadow: '0 0 10px rgba(0, 212, 255, 0.6)'
                            }}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Summary */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Additional Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Responsive Design',
                'Problem Solving',
                'Team Collaboration',
                'Code Review',
                'Documentation',
                'Testing',
                'Agile Methodologies',
                'Continuous Learning'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-lg p-4 text-center border-l-4 border-cyan-400 hover:neon-glow transition-all duration-300"
                >
                  <p className="text-gray-300 font-medium text-sm">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export { Skills };