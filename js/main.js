document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded'); // Debug log
    
    const waitlistButton = document.querySelector('.waitlist__button');
    const waitlistInput = document.querySelector('.waitlist__input');
    
    console.log('Button:', waitlistButton); // Debug log
    console.log('Input:', waitlistInput); // Debug log

    waitlistButton.addEventListener('click', () => {
        console.log('Button clicked'); // Debug log
        waitlistButton.style.display = 'none';
        waitlistInput.style.display = 'block';
        waitlistInput.focus();
    });

    waitlistInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const email = waitlistInput.value;
            if (email) {
                console.log('Email submitted:', email);
                waitlistInput.value = 'THANK YOU';
                waitlistInput.disabled = true;
            }
        }
    });
}); 