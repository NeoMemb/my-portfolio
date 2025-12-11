import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { personalInfo, links } from '../data/portfolio';
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
const ICONS = [FiGithub, FiLinkedin, FaXTwitter, FaInstagram];
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [ ...links.header ];

  return (
    <footer className="relative bg-gradient-to-br from-[#050816] to-[#0a0e27] border-t border-cyan-900/20">
      <div className="absolute inset-0 geometric-bg opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Portfolio</h3>
            <p className="text-gray-400 leading-relaxed">
              Building innovative solutions with modern technologies.
            </p>
            <div className="flex space-x-4">
              {links.social.map((social, index) => {
                const Icon = ICONS[index]
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass rounded-lg hover:neon-glow transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.platform}
                  >
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>
                <span className="text-cyan-400">Email:</span><br />
                <a href={`mailto:${links.contacts[0].value}`} className="hover:text-cyan-400 transition-colors">
                  {links.contacts[0].value}
                </a>
              </p>
              <p>
                <span className="text-cyan-400">Location:</span><br />
                {personalInfo.location}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cyan-900/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center space-x-1">
              <span>Made with</span>
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.span>
              <span>using React & TailwindCSS</span>
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
    </footer>
  );
};

export { Footer };
