const galleryImages = document.querySelectorAll('.gallery-image');
const overlay = document.getElementById('overlay');
const fullImage = document.getElementById('fullImage');
const closeBtn = document.getElementById('close');
// Menangani klik pada gambar untuk membuka gambar penuh
galleryImages.forEach((img) => {
    img.addEventListener('click', () => {
        overlay.style.display = 'flex'; // Menampilkan overlay
        fullImage.src = img.src; // Mengatur src gambar penuh
    });
});

// Menangani klik di luar gambar untuk menutup overlay
overlay.addEventListener('click', (event) => {
    if (event.target === overlay || event.target === closeBtn) {
        overlay.style.display = 'none'; // Menyembunyikan overlay
    }
});