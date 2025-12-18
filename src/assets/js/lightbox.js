// Simple Lightbox for Gallery Images
(function() {
    'use strict';

    // Create lightbox HTML structure
    const lightboxHTML = `
        <div id="lightbox" class="lightbox" aria-hidden="true">
            <div class="lightbox-overlay"></div>
            <div class="lightbox-content">
                <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
                <img class="lightbox-image" src="" alt="">
                <button class="lightbox-prev" aria-label="Previous image"><</button>
                <button class="lightbox-next" aria-label="Next image">></button>
            </div>
        </div>
    `;

    // Inject lightbox HTML
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);

    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    const lightboxOverlay = document.querySelector('.lightbox-overlay');

    let currentImages = [];
    let currentIndex = 0;

    // Open lightbox
    function openLightbox(imageSrc, imageAlt, images) {
        currentImages = images;
        currentIndex = images.findIndex(img => img.src === imageSrc);
        
        lightboxImage.src = imageSrc;
        lightboxImage.alt = imageAlt;
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        
        updateNavigation();
    }

    // Close lightbox
    function closeLightbox() {
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    // Navigate to previous image
    function showPrevious() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = currentImages.length - 1;
        }
        updateImage();
    }

    // Navigate to next image
    function showNext() {
        if (currentIndex < currentImages.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateImage();
    }

    // Update displayed image
    function updateImage() {
        const img = currentImages[currentIndex];
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;
        updateNavigation();
    }

    // Show/hide navigation buttons
    function updateNavigation() {
        lightboxPrev.style.display = currentImages.length > 1 ? 'block' : 'none';
        lightboxNext.style.display = currentImages.length > 1 ? 'block' : 'none';
    }

    // Initialize lightbox for gallery
    function initLightbox() {
        const galleries = document.querySelectorAll('#gallery-masonry');
        
        galleries.forEach(gallery => {
            const images = Array.from(gallery.querySelectorAll('img')).map(img => ({
                src: img.src,
                alt: img.alt
            }));

            gallery.querySelectorAll('picture').forEach((picture, index) => {
                const img = picture.querySelector('img');
                picture.style.cursor = 'pointer';
                
                picture.addEventListener('click', function(e) {
                    e.preventDefault();
                    openLightbox(img.src, img.alt, images);
                });
            });
        });
    }

    // Event listeners
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxOverlay.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', showPrevious);
    lightboxNext.addEventListener('click', showNext);

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (lightbox.getAttribute('aria-hidden') === 'false') {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                showPrevious();
            } else if (e.key === 'ArrowRight') {
                showNext();
            }
        }
    });

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLightbox);
    } else {
        initLightbox();
    }
})();


