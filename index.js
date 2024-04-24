document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.querySelector('.header-checkbox');
    const nav = document.querySelector('.header-nav');

    checkbox.addEventListener('click', function() {
        if (checkbox.checked) {
            nav.style.display = 'block';
        } else {
            nav.style.display = 'none';
        }
    });
});
