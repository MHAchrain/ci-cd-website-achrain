const btn = document.getElementById('themeToggle');

btn.addEventListener('click', () => {
    // Toggle class dark-mode pada body
    document.body.classList.toggle('dark-mode');

    // Ubah teks tombol sesuai state
    if (document.body.classList.contains('dark-mode')) {
        btn.textContent = 'Aktifkan Light Mode';
    } else {
        btn.textContent = 'Aktifkan Dark Mode';
    }
});