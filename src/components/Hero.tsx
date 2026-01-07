// import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, Mail } from 'lucide-react';
import { personalInfo, links, photos } from '../data/portfolio';
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6"
import "../styles/glassmorphism.css";
import "../index.css";

const Hero = () => {
  const handleDownloadResume = () => {
    // This will be implemented with backend
    alert('Resume download will be available soon!');
  };

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#050816] via-[#0a0e27] to-[#1a1f3a]">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 hexagon-pattern opacity-30"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-cyan-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20 gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-left space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-cyan-400 text-lg md:text-xl font-medium"
            >
              Hi, I'm
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-white"
            >
              <span className="neon-text">{personalInfo.name}</span>
            </motion.h1>

            <div className="text-2xl md:text-4xl text-gray-300 h-20">
              <TypeAnimation
                sequence={[
                  'Front-End Developer',
                  2000,
                  'React-Ts Developer',
                  2000,
                  'Low-Level Programmer',
                  2000,
                  'Blockchain Enthusiast',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex space-x-4 pt-4"
            >
              <motion.a
                href={links.social[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-lg hover:neon-glow transition-all duration-300"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub className="w-6 h-6 text-cyan-400" />
              </motion.a>
              <motion.a
                href={links.social[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-lg hover:neon-glow transition-all duration-300"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiLinkedin className="w-6 h-6 text-cyan-400" />
              </motion.a>
              <motion.a
                href={links.social[2].url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-lg hover:neon-glow transition-all duration-300"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaXTwitter className="w-6 h-6 text-cyan-400" />
              </motion.a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <motion.a
                onClick={handleContactClick}
                href={`mailto:${links.contacts[0].value}.com`}
                className="px-8 py-4 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition-all duration-300 flex items-center justify-center space-x-2 neon-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                <span>Hire Me</span>
              </motion.a>
              <motion.button
                onClick={handleDownloadResume}
                className="px-8 py-4 glass rounded-lg font-semibold hover:neon-glow transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center items-center"
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Glowing Circle Background */}
              <div className="absolute inset-0 rounded-full neon-glow-intense blur-3xl opacity-30"></div>
              
              {/* Profile Image */}
              <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-cyan-400 neon-glow">
                <img
                  src={photos.dark.dp}
                  alt={photos.dark.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Geometric Decorations */}
              <motion.div
                className="absolute -top-10 -right-10 w-20 h-20 border-4 border-cyan-400 rotate-45"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-10 -left-10 w-16 h-16 border-4 border-blue-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-3 bg-cyan-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};


export { Hero };
