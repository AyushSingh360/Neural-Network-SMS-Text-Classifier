import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, Zap, Target, Code, BarChart3 } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Neural Network Architecture',
      description: 'Built with TensorFlow using embedding layers, global average pooling, and dense layers for optimal text classification.'
    },
    {
      icon: Database,
      title: 'SMS Spam Collection Dataset',
      description: 'Trained on a comprehensive dataset of labeled SMS messages from the UCI Machine Learning Repository.'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Fast inference with preprocessing pipeline including tokenization, padding, and sequence handling.'
    },
    {
      icon: Target,
      title: 'High Accuracy',
      description: 'Achieves excellent performance with balanced precision and recall for both spam and ham classification.'
    },
    {
      icon: Code,
      title: 'Modern Tech Stack',
      description: 'Built with React, TypeScript, Tailwind CSS, and Framer Motion for a smooth user experience.'
    },
    {
      icon: BarChart3,
      title: 'Model Evaluation',
      description: 'Comprehensive evaluation using accuracy, precision, recall, and F1-score metrics with early stopping.'
    }
  ];

  const stats = [
    { label: 'Training Accuracy', value: '98.5%' },
    { label: 'Validation Accuracy', value: '97.2%' },
    { label: 'Model Parameters', value: '12.8K' },
    { label: 'Inference Time', value: '<50ms' }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About the Project
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              This neural network SMS text classifier is part of the freeCodeCamp.org curriculum, 
              demonstrating advanced machine learning techniques for natural language processing and binary classification.
            </p>
          </div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-white/10 rounded-lg mr-3">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Technical Details */}
          <motion.div
            className="mt-16 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Technical Implementation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-white/90">Model Architecture</h4>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>• Embedding layer with 500 vocabulary size</li>
                  <li>• Global Average Pooling for sequence aggregation</li>
                  <li>• Dense layer with 24 neurons and ReLU activation</li>
                  <li>• Dropout layer (0.2) for regularization</li>
                  <li>• Output layer with sigmoid activation</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-white/90">Training Details</h4>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>• Binary crossentropy loss function</li>
                  <li>• Adam optimizer for gradient descent</li>
                  <li>• Early stopping with patience of 3 epochs</li>
                  <li>• Text preprocessing with tokenization and padding</li>
                  <li>• Balanced dataset with downsampling</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;