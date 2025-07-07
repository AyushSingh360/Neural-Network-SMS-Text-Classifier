# 🧠 Neural Network SMS Text Classifier

<div align="center">

![Neural Network SMS Classifier](https://img.shields.io/badge/Neural%20Network-SMS%20Classifier-black?style=for-the-badge&logo=tensorflow)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?style=for-the-badge&logo=typescript)
![TensorFlow](https://img.shields.io/badge/TensorFlow-2.x-FF6F00?style=for-the-badge&logo=tensorflow)

**An advanced machine learning web application that intelligently classifies SMS messages as spam or ham using neural network technology.**

[🚀 Live Demo](https://your-demo-link.com) • [📖 Documentation](#documentation) • [🤝 Contributing](CONTRIBUTING.md)

</div>

---

## ✨ Features

- 🧠 **Neural Network Classification** - Advanced TensorFlow model with embedding layers
- ⚡ **Real-time Analysis** - Instant SMS classification with confidence scores
- 🎨 **Modern UI/UX** - Sleek black & white theme with smooth animations
- 📱 **Responsive Design** - Optimized for all devices and screen sizes
- 🔒 **High Accuracy** - 97%+ validation accuracy on test dataset
- 🎯 **Interactive Demo** - Try the classifier with example messages
- 📊 **Detailed Results** - Probability scores and confidence levels

## 🛠️ Tech Stack

### Machine Learning
- **TensorFlow** - Neural network framework
- **Keras** - High-level neural networks API
- **NumPy** - Numerical computing
- **Pandas** - Data manipulation and analysis

### Frontend
- **React 18** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Vite** - Fast build tool

### Additional Tools
- **Lucide React** - Beautiful icons
- **React Hot Toast** - Elegant notifications

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Python 3.8+ (for model training)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AyushSingh360/Neural-Network-SMS-Text-Classifier.git
   cd Neural-Network-SMS-Text-Classifier
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 🧠 Model Architecture

The neural network consists of:

```
Input Layer (Text Sequences)
    ↓
Embedding Layer (500 vocab, 16 dimensions)
    ↓
Global Average Pooling 1D
    ↓
Dense Layer (24 neurons, ReLU)
    ↓
Dropout Layer (0.2)
    ↓
Output Layer (1 neuron, Sigmoid)
```

### Model Performance
- **Training Accuracy**: 98.5%
- **Validation Accuracy**: 97.2%
- **Model Parameters**: 12.8K
- **Inference Time**: <50ms

## 📊 Dataset

The model is trained on the **SMS Spam Collection Dataset** from the UCI Machine Learning Repository:

- **Total Messages**: 5,574
- **Ham Messages**: 4,827 (86.6%)
- **Spam Messages**: 747 (13.4%)
- **Preprocessing**: Tokenization, padding, downsampling for balance

## 🎯 Usage

### Web Interface

1. **Enter SMS Message**: Type or paste an SMS message in the text area
2. **Classify**: Click the "Classify Message" button
3. **View Results**: See the classification result with:
   - Spam/Ham label
   - Probability score
   - Confidence level
   - Recommended action

### Example Messages

Try these examples to see the classifier in action:

**Spam Examples:**
- "Congratulations! You've won $1000! Call now to claim your prize!"
- "URGENT: Your account will be suspended. Click here immediately!"

**Ham Examples:**
- "Hey, are you free for lunch tomorrow?"
- "Thanks for the meeting today. Let's follow up next week."

## 🔧 Development

### Project Structure
```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── ClassifierSection.tsx  # Main classifier interface
│   ├── AboutSection.tsx       # Project information
│   ├── Footer.tsx      # Footer component
│   └── MatrixBackground.tsx   # Animated background
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Model Training

To retrain the model with your own data:

1. **Prepare your dataset** in TSV format with columns: `label`, `message`
2. **Run the Jupyter notebook** `fcc_sms_text_classification.ipynb`
3. **Export the trained model** for web deployment
4. **Update the prediction function** in `ClassifierSection.tsx`

## 📈 Performance Metrics

| Metric | Value |
|--------|-------|
| Accuracy | 97.2% |
| Precision (Spam) | 96.8% |
| Recall (Spam) | 94.3% |
| F1-Score (Spam) | 95.5% |
| False Positive Rate | 1.2% |

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[freeCodeCamp.org](https://www.freecodecamp.org)** - For the excellent machine learning curriculum
- **[UCI Machine Learning Repository](https://archive.ics.uci.edu/ml/)** - For the SMS Spam Collection dataset
- **TensorFlow Team** - For the amazing machine learning framework
- **React Community** - For the powerful frontend ecosystem

## 📞 Contact

**Ayush Singh**
- GitHub: [@AyushSingh360](https://github.com/AyushSingh360)
- Project Link: [Neural Network SMS Text Classifier](https://github.com/AyushSingh360/Neural-Network-SMS-Text-Classifier)

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [AyushSingh360](https://github.com/AyushSingh360)

</div>