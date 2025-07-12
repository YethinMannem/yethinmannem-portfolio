# Yethin Mannem - Professional Portfolio

A modern, responsive, and attractive single-page portfolio website designed to catch recruiters' attention. Built with HTML, CSS, and JavaScript.

## 🚀 Features

- **Modern Design**: Clean, professional layout with gradient accents
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Smooth Animations**: CSS animations and JavaScript interactions
- **Interactive Navigation**: Smooth scrolling and active section highlighting
- **Contact Form**: Functional contact form with validation
- **Loading Animation**: Professional loading screen
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Loading**: Optimized assets and minimal dependencies

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🛠️ Setup Instructions

1. **Download/Clone** the files to your local machine
2. **Open** `index.html` in your web browser
3. **Customize** the content as needed (see customization guide below)
4. **Deploy** to your preferred hosting service

## 🎨 Customization Guide

### Personal Information

Edit the following sections in `index.html`:

#### Hero Section (Lines 30-50)
```html
<h1 class="hero-title">
    Hi, I'm <span class="highlight">Your Name</span>
</h1>
<h2 class="hero-subtitle">Your Title</h2>
<p class="hero-description">
    Your professional description here...
</p>
```

#### About Section (Lines 80-95)
```html
<p>
    Your personal story and background...
</p>
```

#### Experience Section (Lines 120-160)
```html
<div class="timeline-header">
    <h3>Your Job Title</h3>
    <span class="company">Company Name</span>
    <span class="duration">2023 - Present</span>
</div>
<ul>
    <li>Your achievements and responsibilities...</li>
</ul>
```

#### Skills Section (Lines 180-220)
Add or modify your skills in the appropriate categories:
- Frontend
- Backend
- Tools & Others

#### Contact Information (Lines 240-260)
```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <div>
        <h4>Email</h4>
        <p>your.email@example.com</p>
    </div>
</div>
```

### Styling Customization

#### Color Scheme
The main colors are defined in `styles.css`:
- Primary gradient: `#667eea` to `#764ba2`
- Text colors: `#333`, `#555`, `#666`
- Background colors: `#f8f9fa`, `#ffffff`

To change colors, search for these values in `styles.css` and replace them.

#### Fonts
The portfolio uses Inter font from Google Fonts. To change:
1. Update the Google Fonts link in `index.html`
2. Change `font-family: 'Inter', sans-serif;` in `styles.css`

### Adding Your Photo

1. Replace the profile avatar icon with your photo:
```html
<div class="profile-avatar">
    <img src="path/to/your/photo.jpg" alt="Your Name">
</div>
```

2. Add CSS for the image:
```css
.profile-avatar img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
}
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

## 🎯 SEO Optimization

The portfolio includes:
- Proper meta tags
- Semantic HTML structure
- Alt text for images
- Descriptive page title
- Open Graph meta tags (can be added)

## 🚀 Deployment Options

### GitHub Pages
1. Create a new repository
2. Upload your files
3. Go to Settings > Pages
4. Select source branch (usually `main`)
5. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your folder to [netlify.com](https://netlify.com)
2. Get instant deployment with custom domain options

### Vercel
1. Connect your GitHub repository to [vercel.com](https://vercel.com)
2. Automatic deployments on every push

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📞 Contact Form

The contact form includes:
- Form validation
- Success/error notifications
- Email format validation
- Responsive design

**Note**: The form currently shows a success message but doesn't actually send emails. To make it functional, you'll need to:
1. Add a backend service (Node.js, PHP, etc.)
2. Use a form service like Formspree or Netlify Forms
3. Integrate with email services like SendGrid or AWS SES

## 🎨 Additional Customization Ideas

1. **Add a Blog Section**: Include links to your technical articles
2. **Portfolio Projects**: Add a projects section with screenshots
3. **Testimonials**: Include client or colleague testimonials
4. **Resume Download**: Add a downloadable PDF version
5. **Dark Mode**: Implement a theme toggle
6. **Multi-language**: Add language switching functionality

## 📄 License

This portfolio template is free to use for personal and commercial projects.

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. If you make improvements, consider sharing them back!

## 📧 Support

If you need help customizing your portfolio, feel free to reach out!

---

**Built with ❤️ for developers who want to showcase their skills professionally.** 