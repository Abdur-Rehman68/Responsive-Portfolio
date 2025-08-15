const toggleBtn = document.getElementById('theme-toggle');

function updateButtonLabel() {
    const isDark = document.body.dataset.theme === 'dark';
    toggleBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
}

toggleBtn.addEventListener('click', () => {
    document.body.dataset.theme =
        document.body.dataset.theme === 'dark' ? '' : 'dark';
    updateButtonLabel();
});

updateButtonLabel();

document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    alert('Message sent successfully!');
});