// Add this file temporarily for testing
const TestUtils = {
    logAnimationTiming: () => {
        console.time('Animation Duration');
        document.addEventListener('scroll', () => {
            console.timeLog('Animation Duration');
        });
    },

    checkPerformance: () => {
        const perfEntries = performance.getEntriesByType("navigation");
        console.table(perfEntries[0]);
    },

    simulateSlowScroll: () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    },

    testModal: async () => {
        const button = document.querySelector('.waitlist__button');
        button.click();
        console.log('Modal opened');
        
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const form = document.querySelector('.waitlist-form');
        const input = form.querySelector('input');
        input.value = 'test@example.com';
        form.submit();
        console.log('Form submitted');
    }
};

// Usage:
// TestUtils.logAnimationTiming();
// TestUtils.checkPerformance();
// TestUtils.simulateSlowScroll();
// TestUtils.testModal(); 