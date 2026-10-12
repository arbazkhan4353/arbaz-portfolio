// ===== PRELOADER =====
(function() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    // Simulate loading progress
    const progressBar = preloader.querySelector('.loading-progress');
    if (progressBar) {
        progressBar.style.transition = 'width 2s ease-in-out';
        setTimeout(() => {
            progressBar.style.width = '100%';
        }, 100);
    }

    window.addEventListener('load', () => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 500);
    });
})();

// ===== CURSOR =====
(function() {
    const cursor = document.getElementById('cursor');
    const cursorTrail = document.getElementById('cursorTrail');
    if (!cursor || !cursorTrail) return;

    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    function animateTrail() {
        trailX += (mouseX - trailX) * 0.15;
        trailY += (mouseY - trailY) * 0.15;
        cursorTrail.style.transform = `translate(${trailX}px, ${trailY}px)`;
        requestAnimationFrame(animateTrail);
    }
    animateTrail();

    // Hover effects on interactive elements
    const hoverElements = document.querySelectorAll('a, button, .nav-link, .filter-btn, .social-link, .portfolio-item');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });
})();

// ===== NAVIGATION TOGGLE =====
(function() {
    const navToggle = document.getElementById('navToggle');
    const navList = document.querySelector('.nav-list');
    if (!navToggle || !navList) return;

    navToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // Close menu on link click
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
        });
    });
})();

// ===== HEADER SCROLL =====
(function() {
    const header = document.querySelector('.header');
    if (!header) return;

    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
})();

// ===== BACK TO TOP =====
(function() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;

    const toggleVisibility = () => {
        if (window.scrollY > 400) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility();

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();

// ===== BANNER PREVIEW CAROUSEL =====
(function() {
    const carousel = document.getElementById('bannerPreview');
    if (!carousel) return;

    const banners = [
        {
            bg: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
            overlay: '⚔️ GAMING COMMUNITY',
            title: 'ELITE SQUAD',
            desc: 'Join the battle!'
        },
        {
            bg: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
            overlay: '🎮 E-Sports Arena',
            title: 'REIGN OF GAMERS',
            desc: 'Dominate or be dominated.'
        },
        {
            bg: 'linear-gradient(135deg, #141e30 0%, #243b54 100%)',
            overlay: '🔥 NIGHT RAIDERS',
            title: 'STORMGUILD',
            desc: 'Strike fear in the night.'
        },
        {
            bg: 'linear-gradient(135deg, #000428 0%, #614385 100%)',
            overlay: '🎯 STRATEGY ZONE',
            title: 'TACTICAL MINDS',
            desc: 'Outthink. Outplay. Win.'
        },
        {
            bg: 'linear-gradient(135deg, #0c0c0c 0%, #302b63 50%, #24243e 100%)',
            overlay: '🚀 CYBER NEXUS',
            title: 'DIGITAL REBELS',
            desc: 'The future is now.'
        }
    ];

    function createBanner(banner) {
        const card = document.createElement('div');
        card.className = 'banner-preview-card';
        card.style.background = banner.bg;

        const overlayDiv = document.createElement('div');
        overlayDiv.className = 'banner-overlay-text';
        overlayDiv.style.cssText = `
            position: absolute;
            inset: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
            padding: 1rem;
        `;

        const overlayEl = document.createElement('div');
        overlayEl.className = 'overlay-badge';
        overlayEl.textContent = banner.overlay;
        overlayEl.style.cssText = `
            background: rgba(0, 212, 255, 0.15);
            border: 1px solid rgba(0, 212, 255, 0.4);
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.7rem;
            margin-bottom: 0.5rem;
            color: #00d4ff;
            text-transform: uppercase;
            letter-spacing: 1px;
        `;

        const titleEl = document.createElement('div');
        titleEl.className = 'banner-title';
        titleEl.textContent = banner.title;
        titleEl.style.cssText = `
            font-family: 'Orbitron', sans-serif;
            font-size: 1.8rem;
            font-weight: 800;
            margin-bottom: 0.3rem;
            text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
        `;

        const descEl = document.createElement('div');
        descEl.className = 'banner-desc';
        descEl.textContent = banner.desc;
        descEl.style.cssText = `
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.7);
        `;

        overlayDiv.appendChild(overlayEl);
        overlayDiv.appendChild(titleEl);
        overlayDiv.appendChild(descEl);
        card.appendChild(overlayDiv);

        // Add animated gradient scan line
        const scanLine = document.createElement('div');
        scanLine.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(90deg, transparent, #00d4ff, transparent);
            animation: scan 3s infinite;
        `;
        card.appendChild(scanLine);

        return card;
    }

    // Create all banner cards
    banners.forEach(banner => {
        carousel.appendChild(createBanner(banner));
    });

    // Auto-rotate
    let currentIndex = 0;
    const totalBanners = banners.length;

    function goToSlide(index) {
        index = (index + totalBanners) % totalBanners;
        currentIndex = index;
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    setInterval(nextSlide, 4000);

    // Add scan line animation to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes scan {
            0% { transform: translateY(0); opacity: 0.5; }
            50% { opacity: 0.8; }
            100% { transform: translateY(280px); opacity: 0.5; }
        }
    `;
    document.head.appendChild(style);
})();

// ===== PORTFOLIO GALLERY =====
(function() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    if (!portfolioGrid) return;

    const portfolioItems = [
        { id: 1, title: 'Shadow Legion', category: 'banner', desc: 'Gaming community banner with dark fantasy theme', color: '#1a0a2e' },
        { id: 2, title: 'Pixel Warriors', category: 'banner', desc: 'Retro pixel art style Discord banner', color: '#0f3460' },
        { id: 3, title: 'Neon Nexus', category: 'banner', desc: 'Cyberpunk aesthetic banner design', color: '#000428' },
        { id: 4, title: 'Crimson Clan', category: 'branding', desc: 'Full branding package for competitive gaming team', color: '#2c021d' },
        { id: 5, title: 'Aqua Squad', category: 'icon', desc: 'Server icon and emoji set for aquatic themed server', color: '#0e4c92' }
    ];

    // Generate CSS-based banner images
    function createBannerImage(item) {
        const colors = {
            '#1a0a2e': ['#4a00e0', '#8e2de2', '#1a0a2e'],
            '#0f3460': ['#00c6ff', '#0072ff', '#0f3460'],
            '#000428': ['#00d4ff', '#b900ff', '#000428'],
            '#2c021d': ['#ff0048', '#ff00e6', '#2c021d'],
            '#0e4c92': ['#00f2fe', '#0077ff', '#0e4c92']
        };

        const palette = colors[item.color] || ['#00d4ff', '#b900ff', '#1a0a2e'];

        const svg = `
            <svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
                <defs>
                    <linearGradient id="grad-${item.id}" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="${palette[0]}" />
                        <stop offset="100%" stop-color="${palette[1]}" />
                    </linearGradient>
                    <filter id="glow-${item.id}">
                        <feGaussianBlur stdDeviation="2" flood-color="${palette[0]}" />
                        <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                <!-- Background -->
                <rect width="600" height="400" fill="${item.color}" />
                <!-- Gradient overlay -->
                <rect width="600" height="400" fill="url(#grad-${item.id})" opacity="0.3" />
                <!-- Pattern elements -->
                <circle cx="100" cy="100" r="40" fill="${palette[0]}" opacity="0.2" filter="url(#glow-${item.id})" />
                <circle cx="500" cy="300" r="60" fill="${palette[1]}" opacity="0.15" filter="url(#glow-${item.id})" />
                <circle cx="300" cy="200" r="30" fill="${palette[2]}" opacity="0.4" filter="url(#glow-${item.id})" />
                <!-- Grid lines -->
                <path d="M0,50h600M0,100h600M0,150h600M0,200h600M0,250h600M0,300h600M0,350h600" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
                <path d="M50,0v400M100,0v400M150,0v400M200,0v400M250,0v400M300,0v400M350,0v400M400,0v400M450,0v400M500,0v400M550,0v400" stroke="rgba(255,255,255,0.03)" stroke-width="1" />
                <!-- Title -->
                <text x="300" y="170" text-anchor="middle" font-family="Orbitron" font-size="42" font-weight="800" fill="white" text-shadow="0 0 10px ${palette[0]}" filter="url(#glow-${item.id})">${item.title}</text>
                <!-- Tagline -->
                <text x="300" y="220" text-anchor="middle" font-family="Arial" font-size="18" fill="white" opacity="0.8">${item.desc}</text>
                <!-- Badge -->
                <rect x="230" y="240" width="140" height="35" rx="20" fill="rgba(255,255,255,0.1)" stroke="${palette[0]}" stroke-width="2" />
                <text x="300" y="265" text-anchor="middle" font-family="Arial" font-size="14" fill="${palette[0]}" text-transform="uppercase">Active Now</text>
                <!-- Animated element -->
                <circle cx="520" cy="80" r="8" fill="${palette[0]}" filter="url(#glow-${item.id})">
                    <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
                </circle>
            </svg>
        `;

        // Convert SVG to data URI
        return 'data:image/svg+xml;base64,' + btoa(svg);
    }

    function createPortfolioItem(item) {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.dataset.category = item.category;

        const img = document.createElement('img');
        img.src = createBannerImage(item);
        img.alt = item.title;
        portfolioItem.appendChild(img);

        const overlay = document.createElement('div');
        overlay.className = 'portfolio-overlay';

        const overlayContent = document.createElement('div');
        overlayContent.className = 'overlay-content';

        const categoryEl = document.createElement('div');
        categoryEl.className = 'portfolio-category';
        categoryEl.textContent = item.category.charAt(0).toUpperCase() + item.category.slice(1);
        overlayContent.appendChild(categoryEl);

        const titleEl = document.createElement('h3');
        titleEl.textContent = item.title;
        overlayContent.appendChild(titleEl);

        const descEl = document.createElement('p');
        descEl.textContent = item.desc;
        overlayContent.appendChild(descEl);

        const viewBtn = document.createElement('a');
        viewBtn.href = '#';
        viewBtn.className = 'btn btn-secondary btn-view';
        viewBtn.style.marginTop = '1rem';
        viewBtn.innerHTML = '<i class="fas fa-eye"></i> View Full Size';
        overlayContent.appendChild(viewBtn);

        overlay.appendChild(overlayContent);
        portfolioItem.appendChild(overlay);

        return portfolioItem;
    }

    // Add all portfolio items
    portfolioItems.forEach(item => {
        portfolioGrid.appendChild(createPortfolioItem(item));
    });

    // Filter functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            const items = document.querySelectorAll('.portfolio-item');

            items.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = '';
                    item.style.opacity = '1';
                } else {
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
})();

// ===== CONTACT FORM =====
(function() {
    const form = document.getElementById('contactForm');
    const notification = document.getElementById('notification');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Show notification
        notification.classList.add('show');
        notification.querySelector('#notificationText').textContent =
            'Message sent successfully! Check your Discord for a reply.';

        // Reset form
        form.reset();
        document.querySelectorAll('.form-group label').forEach(label => {
            label.style.top = '0';
            label.style.left = '0';
            label.style.padding = '1rem 1.2rem';
            label.style.color = 'rgba(224, 224, 224, 0.6)';
            label.style.fontSize = '0.9rem';
            label.style.background = 'transparent';
        });

        // Hide notification after delay
        setTimeout(() => {
            notification.classList.remove('show');
        }, 4000);
    });
})();

// ===== ANIMATED ELEMENTS ON SCROLL =====
(function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Animate elements on scroll
    document.querySelectorAll('.about-content, .service-card, .portfolio-item, .contact-item, .stats-grid, .skills-grid').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
})();

// ===== DISCORD WIDGET TRIGGER =====
(function() {
    const discordWidget = document.getElementById('discordWidget');
    const discordClose = document.getElementById('discordClose');

    // Show widget after 3 seconds
    setTimeout(() => {
        if (discordWidget) {
            discordWidget.classList.add('show');
        }
    }, 3000);

    if (discordClose) {
        discordClose.addEventListener('click', () => {
            discordWidget.classList.remove('show');
        });
    }
})();
