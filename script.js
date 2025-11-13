document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links'); // For fallback/older setup

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        // Toggle the icon for better UX
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times'); // Use 'fa-times' for close icon
    });

    // Close mobile menu when a link is clicked (for smooth scroll navigation)
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            // Reset icon
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // --- 2. Testimonials Carousel ---
    const carouselTrack = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    let currentIndex = 0;
    const totalSlides = slides.length;

    // Function to move the carousel
    const moveToSlide = (track, index) => {
        const slideWidth = slides[0].getBoundingClientRect().width;
        // The track moves by a multiple of the slide width
        track.style.transform = 'translateX(-' + (index * slideWidth) + 'px)';
    };

    // Next slide
    nextButton.addEventListener('click', () => {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            // Optional: Loop back to the first slide
            currentIndex = 0;
        }
        moveToSlide(carouselTrack, currentIndex);
    });

    // Previous slide
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            // Optional: Loop back to the last slide
            currentIndex = totalSlides - 1;
        }
        moveToSlide(carouselTrack, currentIndex);
    });

    // Handle resizing to recalculate slide position
    window.addEventListener('resize', () => {
        // Reset to current index to fix position after resize
        moveToSlide(carouselTrack, currentIndex);
    });
    
    // Auto-scroll functionality (optional, but good for engagement)
    const autoScroll = () => {
        nextButton.click();
    }
    // Change slide every 5 seconds
    setInterval(autoScroll, 5000);
});