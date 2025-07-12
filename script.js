// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.timeline-item, .skill-category, .about-content, .contact-content, .project-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Experience section scroll animation
const experienceItems = document.querySelectorAll('.timeline-item');
const experienceObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });
experienceItems.forEach(item => experienceObserver.observe(item));

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelectorAll('input[type="text"]')[1].value;
        const message = contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        contactForm.reset();
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type) {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 5000);
}

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 500);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Skill bars animation
function animateSkillBars() {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 100);
    });
}

// Trigger skill animation when skills section is in view
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillsObserver.observe(skillsSection);
}

// Add hover effects to timeline items
document.querySelectorAll('.timeline-content').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.02)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});

// Add loading animation with fallback
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Fallback: ensure loading screen is removed after 3 seconds
setTimeout(() => {
    document.body.classList.add('loaded');
}, 3000);

// Add CSS for loading state
const style = document.createElement('style');
style.textContent = `
    body:not(.loaded) {
        overflow: hidden;
    }
    
    body:not(.loaded)::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 1;
        transition: opacity 0.5s ease;
    }
    
    body.loaded::before {
        opacity: 0;
        pointer-events: none;
    }
    
    body:not(.loaded)::after {
        content: 'Loading...';
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 1.5rem;
        font-weight: 600;
        z-index: 10000;
        opacity: 1;
        transition: opacity 0.5s ease;
    }
    
    body.loaded::after {
        opacity: 0;
        pointer-events: none;
    }
    
    .skill-item {
        opacity: 0;
        transform: translateX(-20px);
        transition: all 0.5s ease;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    }
    
    .nav-link.active {
        color: #667eea;
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;

document.head.appendChild(style);

// Project Modal Functions
function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const projectDetails = document.querySelectorAll('.project-detail');
    
    // Hide all project details
    projectDetails.forEach(detail => {
        detail.style.display = 'none';
    });
    
    // Show the selected project detail
    const selectedProject = document.getElementById(projectId);
    if (selectedProject) {
        selectedProject.style.display = 'block';
    }
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('projectModal');
    if (e.target === modal) {
        closeProjectModal();
    }
}); 

// 3D Projects Carousel - Unified Sphere Rotation
(function() {
  const track = document.querySelector('.carousel-track');
  if (!track) return;
  let cards = Array.from(track.children);
  let current = 0;
  let autoSlideInterval;
  const total = cards.length;
  const radius = 600; // distance from center
  const angleStep = 360 / total; // Calculate once to avoid floating point errors
  let globalRotation = 0; // Global rotation for the entire sphere

  // Convert all .project-card to .carousel-card
  cards.forEach(card => card.classList.add('carousel-card'));

  function updateCarousel() {
    cards.forEach((card, i) => {
      card.classList.remove('center');
      
      // Each card has a fixed position on the sphere, plus global rotation
      let cardAngle = (i * angleStep) + globalRotation;
      let isCenter = (i === current);
      
      // Apply smooth 3D transformation with unified rotation
      card.style.transform = `
        translate(-50%, -50%) 
        rotateY(${cardAngle}deg) 
        translateZ(${isCenter ? radius + 120 : radius}px) 
        scale(${isCenter ? 1.08 : 0.7})
      `;
      
      card.style.opacity = isCenter ? '1' : '0.7';
      card.style.zIndex = isCenter ? 3 : 1;
      if (isCenter) card.classList.add('center');
      card.style.pointerEvents = isCenter ? 'auto' : 'none';
    });
  }

  function next() {
    current = (current + 1) % total;
    // Rotate the entire sphere clockwise
    globalRotation -= angleStep;
    updateCarousel();
  }
  
  function prev() {
    current = (current - 1 + total) % total;
    // Rotate the entire sphere counter-clockwise
    globalRotation += angleStep;
    updateCarousel();
  }

  // Arrow click handlers with auto-slide management
  document.querySelector('.carousel-arrow.left').addEventListener('click', () => {
    stopAutoSlide();
    prev();
    // Restart auto-slide after a delay (only if not already scheduled)
    if (!window.autoSlideRestartTimeout) {
      window.autoSlideRestartTimeout = setTimeout(() => {
        startAutoSlide();
        window.autoSlideRestartTimeout = null;
      }, 2000);
    }
  });
  
  document.querySelector('.carousel-arrow.right').addEventListener('click', () => {
    stopAutoSlide();
    next();
    // Restart auto-slide after a delay (only if not already scheduled)
    if (!window.autoSlideRestartTimeout) {
      window.autoSlideRestartTimeout = setTimeout(() => {
        startAutoSlide();
        window.autoSlideRestartTimeout = null;
      }, 2000);
    }
  });

  // Remove the old arrow event listeners since we have new ones above

  // Card click: bring clicked card to center
  cards.forEach((card, i) => {
    card.addEventListener('click', e => {
      if (i === current) {
        // Open modal for this project
        const modalId = card.getAttribute('onclick')?.match(/openProjectModal\('(.+?)'\)/)?.[1];
        if (modalId) openProjectModal(modalId);
      } else {
        // Stop auto-slide when manually clicking
        stopAutoSlide();
        
        // Calculate rotation needed to bring this card to center
        const rotationNeeded = (current - i) * angleStep;
        globalRotation += rotationNeeded;
        current = i;
        updateCarousel();
        
        // Restart auto-slide after a delay (only if not already scheduled)
        if (!window.autoSlideRestartTimeout) {
          window.autoSlideRestartTimeout = setTimeout(() => {
            startAutoSlide();
            window.autoSlideRestartTimeout = null;
          }, 2000);
        }
      }
    });
  });

  // Swipe support
  let startX = null;
  track.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  });
  track.addEventListener('touchmove', e => {
    if (startX === null) return;
    let dx = e.touches[0].clientX - startX;
    if (Math.abs(dx) > 50) {
      if (dx > 0) prev();
      else next();
      startX = null;
    }
  });
  track.addEventListener('touchend', () => { startX = null; });

  // Auto-slide
  function startAutoSlide() {
    // Clear any existing interval first
    stopAutoSlide();
    autoSlideInterval = setInterval(next, 3500);
  }
  function stopAutoSlide() {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
      autoSlideInterval = null;
    }
    // Also clear any pending restart timeout
    if (window.autoSlideRestartTimeout) {
      clearTimeout(window.autoSlideRestartTimeout);
      window.autoSlideRestartTimeout = null;
    }
  }
  track.addEventListener('mouseenter', stopAutoSlide);
  track.addEventListener('mouseleave', startAutoSlide);

  // Init
  updateCarousel();
  startAutoSlide();
})(); 