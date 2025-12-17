# Contributing to Ontario G1 Preparation Pro

Thank you for your interest in contributing to Ontario G1 Preparation Pro! This document provides guidelines for contributing to the project.

## How to Contribute

### Reporting Issues

If you find a bug or have a suggestion:

1. Check if the issue already exists in the [Issues](https://github.com/danvnmedia/Ontario-G1-Preparation-Pro/issues) section
2. If not, create a new issue with:
   - Clear, descriptive title
   - Detailed description of the issue or suggestion
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Screenshots if applicable

### Adding Questions

We always need more practice questions! To contribute questions:

1. Ensure questions are based on the official Ontario Driver's Handbook
2. Follow the question format:
   ```javascript
   {
       question: "Your question here?",
       options: ["Option A", "Option B", "Option C", "Option D"],
       correct: 0, // Index of correct answer (0-3)
       explanation: "Detailed explanation of the correct answer"
   }
   ```
3. Verify accuracy before submitting
4. Include source/reference when possible

### Code Contributions

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/YourFeature`
3. Make your changes:
   - Follow existing code style
   - Comment complex logic
   - Test your changes
4. Commit with clear messages: `git commit -m 'Add: Description of changes'`
5. Push to your fork: `git push origin feature/YourFeature`
6. Submit a Pull Request

### Pull Request Guidelines

- Provide clear description of changes
- Reference related issues
- Ensure code follows project style
- Test your changes thoroughly
- Update documentation if needed

## Code Style

### HTML
- Use semantic HTML5 elements
- Maintain proper indentation (2 spaces)
- Include appropriate ARIA labels for accessibility

### CSS
- Use CSS custom properties for colors and common values
- Follow BEM naming convention when applicable
- Ensure responsive design
- Comment complex selectors

### JavaScript
- Use ES6+ features
- Use meaningful variable names
- Add comments for complex logic
- Follow existing patterns
- Avoid global variables

## Areas We Need Help With

1. **Questions**: More practice questions across all categories
2. **Translations**: Support for French and other languages
3. **Accessibility**: Improving accessibility features
4. **UI/UX**: Design improvements and user experience enhancements
5. **Features**: 
   - Progress tracking
   - Quiz timer
   - Bookmarking questions
   - User accounts
   - More quiz modes
6. **Documentation**: Improving guides and documentation
7. **Testing**: Adding automated tests

## Content Guidelines

### Question Quality
- Questions must be accurate and based on official sources
- Use clear, unambiguous language
- Provide helpful explanations
- Avoid trick questions
- Include relevant context

### Study Materials
- Cite official sources
- Keep information current
- Use clear headings and organization
- Include examples when helpful

## Testing

Before submitting:

1. Test in multiple browsers (Chrome, Firefox, Safari, Edge)
2. Test on mobile devices
3. Verify all links work
4. Check for console errors
5. Ensure accessibility features work

## Getting Help

If you need help:
- Check existing documentation
- Review closed issues and PRs
- Open a discussion in Issues
- Contact maintainers

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn
- Focus on the issue, not the person
- Follow GitHub's Community Guidelines

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes for significant contributions

Thank you for helping make Ontario G1 Preparation Pro better!
