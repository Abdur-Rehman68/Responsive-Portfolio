    const toggleBtn = document.getElementById('theme-toggle');

    // Set initial label based on current theme
    function updateButtonLabel() {
        const isDark = document.body.dataset.theme === 'dark';
        toggleBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    }

    toggleBtn.addEventListener('click', () => {
        document.body.dataset.theme =
            document.body.dataset.theme === 'dark' ? '' : 'dark';
        updateButtonLabel();
    });

    // Run once on page load
    updateButtonLabel();

    document.getElementById('contact-form').addEventListener('submit', e => {
        e.preventDefault();
        alert('Message sent successfully!');
    });