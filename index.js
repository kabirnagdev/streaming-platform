document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // User profile dropdown
    const userProfile = document.querySelector('.user-profile');
    const dropdownContent = document.querySelector('.dropdown-content');
    
    document.addEventListener('click', function(event) {
        const isClickInside = userProfile.contains(event.target);
        
        if (!isClickInside && dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        }
    });

    userProfile.addEventListener('click', function(event) {
        event.stopPropagation();
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });

    // Content slider horizontal scroll with mouse wheel
    const contentSliders = document.querySelectorAll('.content-slider');
    
    contentSliders.forEach(slider => {
        slider.addEventListener('wheel', function(event) {
            if (event.deltaY !== 0) {
                event.preventDefault();
                slider.scrollLeft += event.deltaY;
            }
        });
    });

    // Hover effect for content cards
    const contentCards = document.querySelectorAll('.content-card, .content-watch');
    
    contentCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const buttons = this.querySelector('.card-buttons');
            if (buttons) {
                buttons.style.opacity = '1';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const buttons = this.querySelector('.card-buttons');
            if (buttons) {
                buttons.style.opacity = '0';
            }
        });
    });
    // Hero Slider Functionality
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    let currentIndex = 0;
    let interval;

    // Function to show a specific slide
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Deactivate all indicators
        indicators.forEach(indicator => {
            indicator.classList.remove('active');
        });
        
        // Show the current slide and activate its indicator
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
        
        // Update current index
        currentIndex = index;
    }

    // Function to show the next slide
    function nextSlide() {
        let next = currentIndex + 1;
        if (next >= slides.length) {
            next = 0;
        }
        showSlide(next);
    }

    // Function to show the previous slide
    function prevSlide() {
        let prev = currentIndex - 1;
        if (prev < 0) {
            prev = slides.length - 1;
        }
        showSlide(prev);
    }

    // Start automatic slideshow
    function startSlideshow() {
        interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    // Stop automatic slideshow
    function stopSlideshow() {
        clearInterval(interval);
    }

    // Event listeners for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
            stopSlideshow();
            startSlideshow();
        });
    });

    // Event listeners for navigation buttons
    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopSlideshow();
        startSlideshow();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopSlideshow();
        startSlideshow();
    });

    // Pause slideshow on hover
    const heroSection = document.querySelector('.hero');
    heroSection.addEventListener('mouseenter', stopSlideshow);
    heroSection.addEventListener('mouseleave', startSlideshow);

    // Initialize the slideshow
    startSlideshow();


    // Search functionality
    const searchInput = document.querySelector('.search-container input');
    const searchBtn = document.querySelector('.search-btn');
    
    searchBtn.addEventListener('click', function() {
        if (searchInput.value.trim() !== '') {
            alert('Search functionality would be implemented here for: ' + searchInput.value);
            searchInput.value = '';
        }
    });
    
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && searchInput.value.trim() !== '') {
            alert('Search functionality would be implemented here for: ' + searchInput.value);
            searchInput.value = '';
        }
    });

    // Play button functionality
    const playButtons = document.querySelectorAll('.btn-play, .card-buttons button:first-child');
    
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            const title = this.closest('.hero-content')?.querySelector('h1')?.textContent || 
                          this.closest('.content-card')?.querySelector('h3')?.textContent || 
                          this.closest('.content-watch')?.querySelector('h3')?.textContent || 
                          'Selected content';
            
            alert(`Now playing: ${title}`);
        });
    });

    // Add to list functionality
    const addButtons = document.querySelectorAll('.btn-add, .card-buttons button:nth-child(2)');
    
    addButtons.forEach(button => {
        button.addEventListener('click', function() {
            const title = this.closest('.hero-content')?.querySelector('h1')?.textContent || 
                          this.closest('.content-card')?.querySelector('h3')?.textContent || 
                          this.closest('.content-watch')?.querySelector('h3')?.textContent || 
                          'Selected content';
            
            alert(`Added to My List: ${title}`);
        });
    });

    // More info functionality
    const infoButtons = document.querySelectorAll('.btn-info');
    
    infoButtons.forEach(button => {
        button.addEventListener('click', function() {
            const title = this.closest('.hero-content')?.querySelector('h1')?.textContent || 'Selected content';
            alert(`More information about: ${title}`);
        });
    });

    // Category card functionality
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.querySelector('h3').textContent;
            alert(`Browsing ${category} category`);
        });
    });
});