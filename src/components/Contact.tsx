import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Send, type LucideIcon } from 'lucide-react';
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

import { personalInfo, links } from '../data/portfolio';
import type { IconType } from 'react-icons/lib';
// import { toast } from '../hooks/use-toast';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

//   I need to change the type for this event "any"
  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock submission - will be replaced with backend
    // Suggestion from AI😂...
    // setTimeout(() => {
    //   toast({
    //     title: "Message Sent!",
    //     description: "Thank you for reaching out. I'll get back to you soon!",
    //   });
    //   setFormData({ name: '', email: '', subject: '', message: '' });
    //   setIsSubmitting(false);
    // }, 1000);
  };

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

  const contactInfo: {
    icon: LucideIcon;
    label: string;
    value: string;
    link: string | null;
  }[] = [
    {
      icon: Mail,
      label: 'Email',
      value: links.contacts[1].value,
      link: `mailto:${links.contacts[1].value}`
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      link: null
    }
  ];

//   const socialLinks = [
//     { icon: Github, url: personalInfo.social.github, label: 'GitHub' },
//     { icon: Linkedin, url: personalInfo.social.linkedin, label: 'LinkedIn' },
//     { icon: Twitter, url: personalInfo.social.twitter, label: 'Twitter' }
//   ];
// The values of each of this obj-items in array, socialLinks, comes from three arrays; iconMap, links.social[i].url, links.social[i].platform
// const socialLinks: {
//   icon: IconType;
//   url: string;
//   label: string;
// }[] = [
//   {
//     icon: FiGithub,
//     url: links.social[0].url,
//     label: links.social[0].platform
//   },
//   {
//     icon: FiLinkedin,
//     url: links.social[1].url,
//     label: links.social[1].platform
//   },
//   {
//     icon: FaXTwitter,
//     url: links.social[2].url,
//     label: links.social[2].platform
//   }
// ]

const iconMap: Record<string, IconType> = { 
  GitHub: FiGithub,
  LinkedIn:  FiLinkedin, 
  X_Twitter: FaXTwitter 
};

const socialLinks: {
  icon: IconType;
  url: string;
  label: string;
}[] = links.social.map( (item) => (
  {
    icon: iconMap[item.platform],
    url: item.url,
    label: item.platform
  }
))

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-gradient-to-br from-[#0a0e27] to-[#050816]">
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
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <p className="text-gray-400 text-lg">Let's work together on your next project</p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
              {/* Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="glass rounded-xl p-6 card-lift"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 neon-glow">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-gray-400 text-sm mb-1">{info.label}</h3>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-white font-medium hover:text-cyan-400 transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-white font-medium">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="glass rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 glass rounded-lg hover:neon-glow transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        title={social.label}
                      >
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Decorative Element */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="hidden lg:block w-32 h-32 mx-auto mt-8 border-4 border-cyan-400 rounded-lg rotate-45 opacity-30"
              />
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-gray-300 text-sm font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 glass rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-gray-300 text-sm font-medium">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 glass rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-gray-300 text-sm font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-gray-300 text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 glass rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 neon-glow disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;