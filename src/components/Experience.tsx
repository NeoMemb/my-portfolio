// import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Calendar, type LucideIcon } from 'lucide-react';
import { experience, education } from '../data/portfolio';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const TimelineItem = ({ item, icon: Icon, index }: { item: {
    id: number;
    title?: string;
    degree?: string;
    company?: string;
    institution?: string;
    period: string;
    description: string;
    current?: Boolean;
  }, icon: LucideIcon,
     index: number}) => (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      className="relative pl-8 pb-8 last:pb-0"
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600"></div>
      
      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        transition={{ delay: index * 0.2 }}
        className="absolute left-0 top-2 w-4 h-4 -ml-[7.5px] rounded-full bg-cyan-500 neon-glow"
      />

      {/* Content Card */}
      <motion.div
        whileHover={{ x: 5 }}
        className="glass rounded-xl p-6 card-lift ml-4"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 neon-glow">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{item.title || item.degree}</h3>
              <p className="text-cyan-400">{item.company || item.institution}</p>
            </div>
          </div>
          {item.current && (
            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
              Current
            </span>
          )}
        </div>
        
        <div className="flex items-center space-x-2 text-gray-400 text-sm mb-3">
          <Calendar className="w-4 h-4" />
          <span>{item.period}</span>
        </div>
        
        <p className="text-gray-300 leading-relaxed">
          {item.description}
        </p>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-gradient-to-br from-[#050816] via-[#0a0e27] to-[#1a1f3a]">
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
              <span className="gradient-text">Experience & Education</span>
            </h2>
            <p className="text-gray-400 text-lg">My professional journey</p>
          </motion.div>

          {/* Tabs */}
          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 glass rounded-xl p-1 bg-transparent my-auto">
              <TabsTrigger 
                value="experience"
                className="rounded-lg transition-all duration-300 data-[state=active]:!bg-cyan-500 data-[state=active]:!text-white text-gray-400 align-centent"
              >
                <Briefcase className="w-4 h-4 mr-2" />
                Experience
              </TabsTrigger>
              <TabsTrigger 
                value="education"
                className="rounded-lg transition-all duration-300 data-[state=active]:!bg-cyan-500 data-[state=active]:!text-white text-gray-400"
              >
                <GraduationCap className="w-4 h-4 mr-2" />
                Education
              </TabsTrigger>
            </TabsList>

            {/* Experience Timeline */}
            <TabsContent value="experience" className="mt-12">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-3xl mx-auto"
              >
                {experience.map((item, index) => (
                  <TimelineItem
                    key={item.id}
                    item={item}
                    icon={Briefcase}
                    index={index}
                  />
                ))}
                {/* My Experience is my concerns 😁iv */}
              </motion.div>
            </TabsContent>

            {/* Education Timeline */}
            <TabsContent value="education" className="mt-12">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-3xl mx-auto"
              >
                {education.map((item, index) => (
                  <TimelineItem
                    key={item.id}
                    item={item}
                    icon={GraduationCap}
                    index={index}
                  />
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;