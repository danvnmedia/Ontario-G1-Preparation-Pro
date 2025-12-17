# Setup Guide - Ontario G1 Preparation Pro

This guide will help you set up the Ontario G1 Preparation Pro application on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 14 or higher)
  - Download from: https://nodejs.org/
  - Verify installation: `node --version`
- **npm** (comes with Node.js)
  - Verify installation: `npm --version`
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A code editor (VS Code, Sublime Text, etc.) - optional

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/danvnmedia/Ontario-G1-Preparation-Pro.git
cd Ontario-G1-Preparation-Pro
```

### 2. Install Dependencies

```bash
npm install
```

This will install the required development dependencies, including a simple HTTP server.

### 3. Start the Development Server

```bash
npm start
```

This command will:
- Start a local HTTP server on port 3000
- Automatically open your default browser to http://localhost:3000

Alternatively, you can use:
```bash
npm run dev
```

This starts the server without automatically opening the browser.

### 4. Access the Application

Open your web browser and navigate to:
```
http://localhost:3000
```

## Project Structure

```
Ontario-G1-Preparation-Pro/
├── public/              # Static files served by the web server
│   ├── index.html      # Main HTML file
│   └── images/         # Image assets (road signs, etc.)
├── src/                # Source files
│   ├── css/            # Stylesheets
│   │   └── styles.css  # Main CSS file
│   ├── js/             # JavaScript files
│   │   └── app.js      # Main application logic
│   └── data/           # Data files
│       └── questions-readme.md  # Question database documentation
├── docs/               # Documentation
├── .gitignore         # Git ignore file
├── CONTRIBUTING.md    # Contribution guidelines
├── LICENSE            # MIT License
├── package.json       # Node.js dependencies and scripts
└── README.md          # Project overview
```

## Development

### Making Changes

1. Edit files in the `src/` directory for JavaScript and CSS changes
2. Edit `public/index.html` for HTML structure changes
3. Save your changes
4. Refresh the browser to see updates

### Adding Questions

To add new practice questions:

1. Open `src/js/app.js`
2. Find the `questionDatabase` object
3. Add questions following the existing format:
   ```javascript
   {
       question: "Your question text?",
       options: ["Option 1", "Option 2", "Option 3", "Option 4"],
       correct: 0, // Index of correct answer (0-3)
       explanation: "Explanation of the correct answer"
   }
   ```
4. Save and refresh the browser

### Customizing Styles

1. Open `src/css/styles.css`
2. Modify CSS variables in `:root` for quick theme changes:
   ```css
   :root {
       --primary-color: #2563eb;
       --secondary-color: #1e40af;
       /* ... other variables */
   }
   ```
3. Save and refresh the browser

## Building for Production

Since this is a static website, there's no build step required. The files in the `public/` directory and referenced `src/` files can be deployed directly to any static hosting service.

### Deployment Options

1. **GitHub Pages**
   - Enable GitHub Pages in repository settings
   - Select the branch and root folder
   - Access at: https://yourusername.github.io/Ontario-G1-Preparation-Pro/

2. **Netlify**
   - Connect your GitHub repository
   - Set build command: (none needed)
   - Set publish directory: `public`

3. **Vercel**
   - Import your GitHub repository
   - Configure as a static site
   - Deploy

4. **Any Web Server**
   - Copy all project files to your web server
   - Ensure the server can serve static files
   - Point to `public/index.html` as the entry point

## Troubleshooting

### Port 3000 Already in Use

If port 3000 is already in use, you can specify a different port:

```bash
npx http-server public -p 8080
```

### Browser Doesn't Auto-Open

Manually navigate to http://localhost:3000 in your browser.

### Changes Not Showing

- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Try a hard refresh
- Check browser console for errors (F12)

### npm install Fails

- Ensure Node.js is properly installed
- Try removing `node_modules/` and running `npm install` again
- Check your internet connection

## Testing

### Manual Testing Checklist

- [ ] All navigation links work
- [ ] Quiz starts and displays questions
- [ ] Options can be selected
- [ ] Next/Previous buttons work
- [ ] Quiz submission shows results
- [ ] Road signs filter buttons work
- [ ] Mobile responsive design works
- [ ] All sections are accessible

### Browser Testing

Test the application in:
- Chrome/Edge (Chromium)
- Firefox
- Safari (if on macOS)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Additional Resources

- [Official Ontario Driver's Handbook](https://www.ontario.ca/document/official-mto-drivers-handbook)
- [Node.js Documentation](https://nodejs.org/docs/)
- [MDN Web Docs](https://developer.mozilla.org/)

## Getting Help

If you encounter issues:

1. Check this guide thoroughly
2. Review the [README.md](../README.md)
3. Check existing [GitHub Issues](https://github.com/danvnmedia/Ontario-G1-Preparation-Pro/issues)
4. Create a new issue with details about your problem

## Next Steps

- Review [CONTRIBUTING.md](../CONTRIBUTING.md) to learn how to contribute
- Check the main [README.md](../README.md) for project overview
- Start adding questions and improving the application!

Happy coding! 🚗
