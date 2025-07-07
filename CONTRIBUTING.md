# 🤝 Contributing to Neural Network SMS Text Classifier

Thank you for your interest in contributing to the Neural Network SMS Text Classifier! This document provides guidelines and information for contributors.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Issue Guidelines](#issue-guidelines)
- [Community](#community)

## 📜 Code of Conduct

This project adheres to a code of conduct that we expect all contributors to follow. Please read and follow these guidelines to ensure a welcoming environment for everyone.

### Our Standards

- **Be respectful** and inclusive in all interactions
- **Be constructive** when giving feedback
- **Focus on the code**, not the person
- **Help others learn** and grow
- **Be patient** with newcomers

## 🚀 Getting Started

### Prerequisites

Before contributing, make sure you have:

- **Node.js 18+** installed
- **Git** for version control
- **Python 3.8+** (for model-related contributions)
- A **GitHub account**
- Basic knowledge of **React**, **TypeScript**, and **Machine Learning**

### First-time Contributors

If you're new to open source, here are some good first issues to start with:

- 🐛 **Bug fixes** - Small, well-defined problems
- 📝 **Documentation** - Improve README, comments, or guides
- 🎨 **UI improvements** - Small visual enhancements
- ✨ **Feature additions** - New functionality with clear requirements

Look for issues labeled with:
- `good first issue`
- `help wanted`
- `documentation`
- `bug`

## 🛠️ How to Contribute

### Types of Contributions

We welcome various types of contributions:

1. **🐛 Bug Reports** - Help us identify and fix issues
2. **✨ Feature Requests** - Suggest new functionality
3. **🔧 Code Contributions** - Bug fixes, features, improvements
4. **📝 Documentation** - Improve guides, comments, README
5. **🎨 Design** - UI/UX improvements and suggestions
6. **🧪 Testing** - Add tests, improve test coverage
7. **🤖 Model Improvements** - Enhance ML model performance

### Contribution Workflow

1. **Fork** the repository
2. **Clone** your fork locally
3. **Create** a new branch for your contribution
4. **Make** your changes
5. **Test** your changes thoroughly
6. **Commit** with clear, descriptive messages
7. **Push** to your fork
8. **Submit** a pull request

## 💻 Development Setup

### 1. Fork and Clone

```bash
# Fork the repository on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/Neural-Network-SMS-Text-Classifier.git
cd Neural-Network-SMS-Text-Classifier
```

### 2. Install Dependencies

```bash
# Install Node.js dependencies
npm install

# For Python dependencies (if working on ML model)
pip install -r requirements.txt
```

### 3. Start Development Server

```bash
# Start the development server
npm run dev
```

### 4. Create a Branch

```bash
# Create and switch to a new branch
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

## 📏 Coding Standards

### TypeScript/React Guidelines

- **Use TypeScript** for all new code
- **Follow React best practices** (hooks, functional components)
- **Use meaningful variable names** and add comments for complex logic
- **Keep components small** and focused on single responsibility
- **Use proper TypeScript types** - avoid `any` when possible

### Code Style

```typescript
// ✅ Good
interface MessageClassification {
  probability: number;
  label: 'spam' | 'ham';
  confidence: 'High' | 'Medium' | 'Low';
}

const classifyMessage = async (text: string): Promise<MessageClassification> => {
  // Implementation
};

// ❌ Avoid
const classify = (txt: any) => {
  // Implementation
};
```

### CSS/Styling

- **Use Tailwind CSS** for styling
- **Follow mobile-first** responsive design
- **Maintain consistent spacing** using Tailwind's spacing scale
- **Use semantic class names** when custom CSS is needed

### Machine Learning Code

- **Document model architecture** clearly
- **Include performance metrics** in comments
- **Use consistent variable naming** for tensors and layers
- **Add data preprocessing steps** with explanations

## 📝 Commit Guidelines

### Commit Message Format

Use the following format for commit messages:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc.)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### Examples

```bash
feat(classifier): add confidence score display
fix(ui): resolve mobile responsive issues
docs(readme): update installation instructions
style(components): improve code formatting
refactor(model): optimize prediction pipeline
test(classifier): add unit tests for prediction function
chore(deps): update dependencies to latest versions
```

## 🔄 Pull Request Process

### Before Submitting

1. **Test your changes** thoroughly
2. **Update documentation** if needed
3. **Add tests** for new functionality
4. **Ensure code follows** style guidelines
5. **Check that all tests pass**

### Pull Request Template

When creating a pull request, include:

```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Other (please describe)

## Testing
- [ ] I have tested these changes locally
- [ ] I have added tests for new functionality
- [ ] All existing tests pass

## Screenshots (if applicable)
Add screenshots for UI changes.

## Checklist
- [ ] My code follows the project's style guidelines
- [ ] I have performed a self-review of my code
- [ ] I have commented my code where necessary
- [ ] I have updated the documentation accordingly
```

### Review Process

1. **Automated checks** will run on your PR
2. **Maintainers will review** your code
3. **Address feedback** if requested
4. **Merge** once approved

## 🐛 Issue Guidelines

### Bug Reports

When reporting bugs, include:

- **Clear title** describing the issue
- **Steps to reproduce** the problem
- **Expected behavior** vs actual behavior
- **Screenshots** or error messages
- **Environment details** (browser, OS, etc.)

### Feature Requests

For feature requests, include:

- **Clear description** of the proposed feature
- **Use case** - why is this feature needed?
- **Possible implementation** ideas (optional)
- **Alternatives considered**

### Issue Labels

We use these labels to categorize issues:

- `bug` - Something isn't working
- `enhancement` - New feature or improvement
- `documentation` - Documentation needs
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `question` - Further information requested

## 🏗️ Project Structure

Understanding the project structure helps with contributions:

```
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx      # Navigation
│   │   ├── Hero.tsx        # Landing section
│   │   ├── ClassifierSection.tsx  # Main classifier
│   │   ├── AboutSection.tsx       # Project info
│   │   ├── Footer.tsx      # Footer
│   │   └── MatrixBackground.tsx   # Background animation
│   ├── App.tsx             # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── public/                 # Static assets
├── fcc_sms_text_classification.ipynb  # ML model notebook
├── README.md              # Project documentation
├── CONTRIBUTING.md        # This file
└── package.json          # Dependencies and scripts
```

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Writing Tests

- **Write tests** for new features
- **Update tests** when modifying existing code
- **Use descriptive test names**
- **Test edge cases** and error conditions

Example test structure:

```typescript
describe('MessageClassifier', () => {
  it('should classify spam messages correctly', () => {
    // Test implementation
  });

  it('should handle empty messages gracefully', () => {
    // Test implementation
  });
});
```

## 🌟 Recognition

Contributors will be recognized in:

- **README.md** contributors section
- **Release notes** for significant contributions
- **GitHub contributors** page

## 📞 Getting Help

If you need help or have questions:

1. **Check existing issues** and documentation first
2. **Create a new issue** with the `question` label
3. **Join discussions** in existing issues
4. **Be patient** - maintainers volunteer their time

## 🎉 Thank You!

Thank you for contributing to the Neural Network SMS Text Classifier! Your contributions help make this project better for everyone.

---

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TensorFlow.js Guide](https://www.tensorflow.org/js)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

<div align="center">

**Happy Contributing! 🚀**

Made with ❤️ by the community

</div>