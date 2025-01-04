// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

function initAnimations() {
    // First, let's just console.log to verify our script runs
    console.log("Animations initialized");
    
    // Add a simple scroll listener to debug
    window.addEventListener('scroll', () => {
        console.log('Scrolling', window.scrollY);
    });
}

document.addEventListener('DOMContentLoaded', initAnimations); 