import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, AlertTriangle, CheckCircle, Loader, MessageSquare } from 'lucide-react';
import toast from 'react-hot-toast';

interface PredictionResult {
  probability: number;
  label: 'spam' | 'ham';
  confidence: string;
}

const ClassifierSection: React.FC = () => {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);

  // Mock prediction function (replace with actual API call)
  const predictMessage = async (text: string): Promise<PredictionResult> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simple mock logic for demonstration
    const spamKeywords = ['win', 'free', 'cash', 'prize', 'call', 'urgent', 'limited', 'offer', 'click'];
    const lowerText = text.toLowerCase();
    const spamScore = spamKeywords.reduce((score, keyword) => {
      return score + (lowerText.includes(keyword) ? 0.2 : 0);
    }, 0.1);
    
    const probability = Math.min(spamScore + Math.random() * 0.3, 0.95);
    const isSpam = probability > 0.5;
    
    return {
      probability: parseFloat(probability.toFixed(4)),
      label: isSpam ? 'spam' : 'ham',
      confidence: probability > 0.8 ? 'High' : probability > 0.6 ? 'Medium' : 'Low'
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) {
      toast.error('Please enter a message to classify');
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      const prediction = await predictMessage(message);
      setResult(prediction);
      toast.success('Message classified successfully!');
    } catch (error) {
      toast.error('Failed to classify message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const exampleMessages = [
    "Congratulations! You've won $1000! Call now to claim your prize!",
    "Hey, are you free for lunch tomorrow?",
    "URGENT: Your account will be suspended. Click here immediately!",
    "Thanks for the meeting today. Let's follow up next week.",
  ];

  return (
    <section id="classifier" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Test the Classifier
            </h2>
            <p className="text-white/70 text-lg">
              Enter an SMS message below to see if it's classified as spam or ham
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/80">
                  SMS Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your SMS message here..."
                    className="w-full h-32 bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 resize-none transition-all duration-200"
                    disabled={isLoading}
                  />
                  <MessageSquare className="absolute top-3 right-3 w-5 h-5 text-white/30" />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isLoading || !message.trim()}
                className="w-full bg-white text-black py-3 px-6 rounded-lg font-semibold hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
                whileHover={{ scale: isLoading ? 1 : 1.02 }}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
              >
                {isLoading ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Classify Message</span>
                  </>
                )}
              </motion.button>
            </form>

            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="mt-8 p-6 bg-black/30 border border-white/10 rounded-lg"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">Classification Result</h3>
                    <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${
                      result.label === 'spam' 
                        ? 'bg-red-500/20 text-red-300 border border-red-500/30' 
                        : 'bg-green-500/20 text-green-300 border border-green-500/30'
                    }`}>
                      {result.label === 'spam' ? (
                        <AlertTriangle className="w-4 h-4" />
                      ) : (
                        <CheckCircle className="w-4 h-4" />
                      )}
                      <span className="uppercase">{result.label}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">
                        {(result.probability * 100).toFixed(1)}%
                      </div>
                      <div className="text-sm text-white/60">Probability</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">
                        {result.confidence}
                      </div>
                      <div className="text-sm text-white/60">Confidence</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">
                        {result.label === 'spam' ? 'BLOCKED' : 'ALLOWED'}
                      </div>
                      <div className="text-sm text-white/60">Action</div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-4">Try These Examples</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {exampleMessages.map((example, index) => (
                <motion.button
                  key={index}
                  onClick={() => setMessage(example)}
                  className="text-left p-3 bg-black/30 border border-white/10 rounded-lg hover:bg-black/50 transition-all duration-200 text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  "{example}"
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClassifierSection;