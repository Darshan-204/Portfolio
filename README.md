# Personal Resume Website

A modern, responsive resume website built with HTML, CSS, and JavaScript. This website showcases professional experience, skills, education, and projects in an elegant and mobile-friendly format.


## ✨ Features

- **Responsive Design**: Optimized for all device sizes (desktop, tablet, mobile)
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Navigation**: Smooth scrolling navigation with active section highlighting
- **Print Friendly**: Optimized print styles for physical resume copies
- **Accessibility**: WCAG compliant with keyboard navigation support
- **Performance Optimized**: Fast loading with efficient CSS and JavaScript
- **GitHub Pages Ready**: Deploy directly to GitHub Pages with zero configuration

## 🚀 Live Demo

Visit the live website: [Your Website URL Here](https://darshan-204.github.io/Portfolio/)

## 📱 Sections

- **Header**: Profile photo, name, title, and contact information
- **Experience**: Professional work history with timeline design
- **Education**: Academic background and qualifications
- **Skills**: Technical skills organized by category
- **Projects**: Featured projects with links and technology stacks
- **Certifications**: Professional certifications and achievements

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with Grid, Flexbox, and animations
- **JavaScript ES6+**: Interactive functionality and smooth animations
- **Font Awesome**: Professional icon library
- **Google Fonts**: Inter font family for clean typography

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Open in VS Code**
   ```bash
   code .
   ```

3. **Start a local server** (optional)
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using VS Code Live Server extension
   Right-click on index.html → "Open with Live Server"
   ```

4. **Open in browser**
   Navigate to `http://localhost:8000` or use the Live Server URL

## 🎨 Customization

### 1. Personal Information
Edit the following sections in `index.html`:
- Update name, title, and summary in the header
- Modify contact information (email, phone, location, social links)
- Replace the profile image

### 2. Content Sections
- **Experience**: Update job titles, companies, dates, and achievements
- **Education**: Modify degrees, institutions, and academic details
- **Skills**: Add or remove technical skills and categories
- **Projects**: Update project information, descriptions, and links
- **Certifications**: Add your professional certifications

### 3. Styling
Customize the color scheme in `styles.css`:
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #10b981;
  /* Add more custom properties */
}
```

### 4. Profile Image
Replace the placeholder image:
1. Add your profile photo to the project directory
2. Update the image path in `index.html`:
   ```html
   <img src="your-profile-photo.jpg" alt="Your Name" id="profilePic">
   ```

## 🚀 Deployment to GitHub Pages

1. **Create a GitHub repository**
   - Name it `portfolio` or `yourusername.github.io`
   - Make it public

2. **Push your code**
   ```bash
   git add .
   git commit -m "Initial commit: Resume website"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

4. **Access your website**
   - Your site will be available at: `https://yourusername.github.io/portfolio`
   - If named `yourusername.github.io`: `https://yourusername.github.io`

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ⚠️ Internet Explorer 11 (limited support)

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and attributes
- Keyboard navigation support
- Screen reader compatibility
- High contrast support
- Focus indicators
- Proper heading hierarchy

## 🔧 Development

### Project Structure
```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
├── .github/
│   └── copilot-instructions.md
└── assets/             # Images and other assets (create as needed)
```

### Performance Tips
- Optimize images before adding (use WebP format when possible)
- Minify CSS and JavaScript for production
- Use a CDN for external libraries
- Implement lazy loading for additional images
- Consider adding a service worker for PWA functionality

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- **GitHub**: [Your GitHub Profile](https://github.com/yourusername)

## 🙏 Acknowledgments

- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for typography
- [GitHub Pages](https://pages.github.com/) for hosting

---

⭐ Star this repository if you found it helpful!
