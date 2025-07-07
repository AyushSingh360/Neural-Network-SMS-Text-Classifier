import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  const links = [
    {
      name: 'GitHub Repository',
      href: 'https://github.com/AyushSingh360/Neural-Network-SMS-Text-Classifier',
      icon: Github
    },
    {
      name: 'freeCodeCamp',
      href: 'https://www.freecodecamp.org',
      icon: ExternalLink
    },
    {
      name: 'UCI ML Repository',
      href: 'https://archive.ics.uci.edu/ml/datasets/SMS+Spam+Collection',
      icon: ExternalLink
    }
  ];

  return (
    <footer className="py-12 border-t border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Neural Network SMS Text Classifier</h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              An advanced machine learning project demonstrating text classification using neural networks. 
              Built as part of the freeCodeCamp curriculum with modern web technologies.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {links.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <link.icon className="w-4 h-4" />
                <span className="text-sm">{link.name}</span>
              </motion.a>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-white/60 text-sm">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400" />
                <span>by</span>
                <a
                  href="https://github.com/AyushSingh360"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  AyushSingh360
                </a>
              </div>
              
              <div className="flex items-center space-x-2 text-white/60 text-sm">
                <Code className="w-4 h-4" />
                <span>© 2025 Neural Network SMS Classifier</span>
              </div>
            </div>
          </div>

          <motion.div
            className="mt-8 text-center text-xs text-white/40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            This project is part of the freeCodeCamp.org Machine Learning curriculum
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;