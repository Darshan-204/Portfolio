// Resume Website JavaScript with Enhanced Animations

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the website
    initializeNavigation();
    initializeScrollEffects();
    initializeProfileImage();
    initializeFormValidation();
    initializeThemeToggle();
    initializeAnimations();
    initializeParticleEffect();
    initializeMagneticEffect();
    initializeTypingEffect();
    initializeSkillAnimations();
});

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get target section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Smooth scroll to section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Update active navigation on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
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
}

// Scroll effects and animations
function initializeScrollEffects() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add stagger effect for timeline items
                if (entry.target.classList.contains('timeline-item')) {
                    const timelineItems = entry.target.parentElement.querySelectorAll('.timeline-item');
                    timelineItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);

    // Observe all sections and timeline items
    document.querySelectorAll('.section, .timeline-item, .project-card, .education-item, .cert-item').forEach(el => {
        observer.observe(el);
    });
}

// Profile image functionality
function initializeProfileImage() {
    const profileImg = document.getElementById('profilePic');
    
    if (profileImg) {
        // Handle image upload (you can implement file input later)
        profileImg.addEventListener('click', function() {
            // Placeholder for image upload functionality
            console.log('Profile image clicked - implement upload functionality');
        });

        // Add loading state
        profileImg.addEventListener('load', function() {
            this.style.opacity = '1';
        });

        // Handle image error
        profileImg.addEventListener('error', function() {
            this.src = 'https://via.placeholder.com/150x150/6366f1/ffffff?text=Photo';
            this.alt = 'Default Profile Picture';
        });
    }
}

// Form validation (for contact form if added later)
function initializeFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            validateForm(this);
        });
    });
}

function validateForm(form) {
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach(input => {
        const value = input.value.trim();
        const type = input.type;

        // Remove previous error states
        input.classList.remove('error');

        // Validate based on input type
        if (type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showInputError(input, 'Please enter a valid email address');
                isValid = false;
            }
        }

        if (input.hasAttribute('required') && !value) {
            showInputError(input, 'This field is required');
            isValid = false;
        }
    });

    if (isValid) {
        // Handle form submission
        handleFormSubmission(form);
    }
}

function showInputError(input, message) {
    input.classList.add('error');
    
    // Remove existing error message
    const existingError = input.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    // Add new error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.color = '#ef4444';
    errorDiv.style.fontSize = '0.8rem';
    errorDiv.style.marginTop = '0.25rem';
    
    input.parentNode.appendChild(errorDiv);
}

function handleFormSubmission(form) {
    // Show success message
    showNotification('Message sent successfully!', 'success');
    form.reset();
}

// Theme toggle functionality
function initializeThemeToggle() {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('resume-theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Update button icon based on saved theme
    updateThemeToggleButton(savedTheme);

    // Add click event to theme toggle button
    const themeToggleBtn = document.getElementById('themeToggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('resume-theme', newTheme);
            
            // Update toggle button icon with animation
            updateThemeToggleButton(newTheme);
            
            // Add a subtle animation to the button
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    }
}

function updateThemeToggleButton(theme) {
    const themeToggleBtn = document.getElementById('themeToggle');
    const icon = themeToggleBtn?.querySelector('i');
    
    if (icon) {
        icon.className = theme === 'light' 
            ? 'fas fa-moon' 
            : 'fas fa-sun';
    }
}

// Initialize animations and interactions
function initializeAnimations() {
    // Parallax effect for header
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('.header');
        
        if (header && scrolled < header.offsetHeight) {
            header.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Enhanced project card animations
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.style.setProperty('--delay', `${index * 0.2}s`);
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) rotateX(5deg) scale(1.02)';
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0) scale(1)';
            this.style.zIndex = '1';
        });
    });

    // Timeline item reveal animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
        
        // Add hover effect
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
        });
    });
}

// Particle effect for header
function initializeParticleEffect() {
    const header = document.querySelector('.header');
    if (!header) return;

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            z-index: 1;
        `;
        header.appendChild(particle);
    }
}

// Magnetic effect for interactive elements
function initializeMagneticEffect() {
    const magneticElements = document.querySelectorAll('.skill-tag, .nav-link, .project-links a');
    
    magneticElements.forEach(element => {
        element.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const strength = 0.3;
            this.style.transform = `translate(${x * strength}px, ${y * strength}px) scale(1.05)`;
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0px, 0px) scale(1)';
        });
    });
}

// Typing effect for title
function initializeTypingEffect() {
    const title = document.querySelector('.title');
    if (!title) return;
    
    const text = title.textContent;
    title.textContent = '';
    title.style.borderRight = '2px solid #6366f1';
    
    let i = 0;
    const typeSpeed = 100;
    
    function typeWriter() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, typeSpeed);
        } else {
            setTimeout(() => {
                title.style.borderRight = 'none';
            }, 1000);
        }
    }
    
    setTimeout(typeWriter, 1000);
}

// Skill animations with stagger effect
function initializeSkillAnimations() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach((tag, index) => {
        tag.style.setProperty('--delay', `${index * 0.1}s`);
        
        // Add random color variations on hover
        tag.addEventListener('mouseenter', function() {
            const colors = [
                'linear-gradient(135deg, #10b981, #059669)',
                'linear-gradient(135deg, #6366f1, #4f46e5)',
                'linear-gradient(135deg, #f59e0b, #d97706)',
                'linear-gradient(135deg, #ef4444, #dc2626)',
                'linear-gradient(135deg, #8b5cf6, #7c3aed)'
            ];
            
            this.style.background = colors[Math.floor(Math.random() * colors.length)];
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        });
    });
}

// Utility functions
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        background: ${type === 'success' ? '#10b981' : '#6366f1'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

    // Add to page
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Handle close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Smooth scroll polyfill for older browsers
function smoothScrollTo(target) {
    const targetElement = document.querySelector(target);
    if (targetElement) {
        const targetPosition = targetElement.offsetTop - 80;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 800;
        let start = null;

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const ease = easeInOutCubic(progress / duration);
            
            window.scrollTo(0, startPosition + distance * ease);
            
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    }
}

function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // Handle escape key
    if (e.key === 'Escape') {
        // Close any open modals or dropdowns
        const openElements = document.querySelectorAll('.modal.open, .dropdown.open');
        openElements.forEach(el => el.classList.remove('open'));
    }
    
    // Handle tab navigation improvements
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

// Remove keyboard navigation class on mouse use
document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Print functionality
function printResume() {
    // Hide navigation and unnecessary elements
    const nav = document.querySelector('.nav');
    const footer = document.querySelector('.footer');
    
    if (nav) nav.style.display = 'none';
    if (footer) footer.style.display = 'none';
    
    // Print
    window.print();
    
    // Restore elements
    setTimeout(() => {
        if (nav) nav.style.display = '';
        if (footer) footer.style.display = '';
    }, 1000);
}

// Export resume data (for future functionality)
function exportResumeData() {
    const resumeData = {
        name: document.querySelector('.name')?.textContent || '',
        title: document.querySelector('.title')?.textContent || '',
        summary: document.querySelector('.summary')?.textContent || '',
        experience: Array.from(document.querySelectorAll('.timeline-item')).map(item => ({
            period: item.querySelector('.timeline-date')?.textContent || '',
            position: item.querySelector('.job-title')?.textContent || '',
            company: item.querySelector('.company')?.textContent || '',
            achievements: Array.from(item.querySelectorAll('.achievements li')).map(li => li.textContent)
        })),
        education: Array.from(document.querySelectorAll('.education-item')).map(item => ({
            degree: item.querySelector('.degree')?.textContent || '',
            institution: item.querySelector('.institution')?.textContent || '',
            year: item.querySelector('.year')?.textContent || '',
            details: item.querySelector('.details')?.textContent || ''
        })),
        skills: Array.from(document.querySelectorAll('.skill-category')).map(category => ({
            category: category.querySelector('h4')?.textContent || '',
            skills: Array.from(category.querySelectorAll('.skill-tag')).map(tag => tag.textContent)
        })),
        projects: Array.from(document.querySelectorAll('.project-card')).map(card => ({
            title: card.querySelector('.project-title')?.textContent || '',
            description: card.querySelector('.project-description')?.textContent || '',
            technologies: Array.from(card.querySelectorAll('.tech-tag')).map(tag => tag.textContent)
        }))
    };
    
    return resumeData;
}

// Performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(function() {
    // Add scroll-based functionality here
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);

// Lazy loading for images (if more images are added)
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
initializeLazyLoading();

// Service Worker registration (for PWA functionality)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker registration successful');
            })
            .catch(error => {
                console.log('ServiceWorker registration failed');
            });
    });
}
