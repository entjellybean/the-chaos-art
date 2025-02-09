

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.gallery-img'); // Tüm resimleri seç
    const modal = document.getElementById('imageModal'); // Modal seç
    const modalImg = document.getElementById('modalImg'); // Modal içindeki resim
    const closeModal = document.querySelector('.close'); // Kapatma butonu

    // Her bir resme tıklanınca modalı aç
    images.forEach(image => {
        image.addEventListener('click', function () {
            modal.style.display = "flex";
            modalImg.src = this.src;
        });
    });

    // Kapatma butonuna tıklanınca modalı kapat
    closeModal.addEventListener('click', function () {
        modal.style.display = "none";

    });

    // Backdrop'a tıklanınca modalı kapat
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = "none";

        }
    });
});