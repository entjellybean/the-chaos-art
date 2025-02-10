document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.gallery-img'); 
    const avatarInfo = document.getElementById('photo-info');

    images.forEach((image) => {
        image.addEventListener('click', () => {
          const info = image.getAttribute('data-info'); 
          avatarInfo.textContent = info ? info : "No additional info"; // Eğer data-info yoksa boş kalmasın
          avatarInfo.style.display = 'block';
        });
    });
});

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
document.addEventListener('DOMContentLoaded', function () {
    const carouselSlide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');


    let counter = 0;
    let size = images[0].clientWidth; // Resmin genişliği

    // Sayfa yüklendiğinde resim genişliğini güncelle
    window.addEventListener('resize', () => {
        size = images[0].clientWidth;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    // İleri Butonu
    nextBtn.addEventListener('click', () => {
        if (counter >= images.length - 1) {
            counter = 0; // İlk resme dön
        } else {
            counter++;
        }
        updateCarousel();
    });

    // Geri Butonu
    prevBtn.addEventListener('click', () => {
        if (counter <= 0) {
            counter = images.length - 1; // Son resme dön
        } else {
            counter--;
        }
        updateCarousel();
    });

    function updateCarousel() {
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    // Otomatik kaydırma ekleyelim (opsiyonel)
    setInterval(() => {
        if (counter >= images.length - 1) {
            counter = 0;
        } else {
            counter++;
        }
        updateCarousel();
    }, 15000); // 4 saniyede bir otomatik kaydırma
});
document.addEventListener("DOMContentLoaded", function() {
    const allImages = Array.from(document.querySelectorAll("#more-images img"));
    const loadMoreButton = document.getElementById("load-more");
    let visibleCount = 14; // Başlangıçta kaç resim görünecek
    
    function updateGallery() {
        // Önce tüm resimleri gizle
        allImages.forEach((img, index) => {
            if (index < visibleCount) {
                img.style.display = "block"; // Sadece görünmesi gerekenleri aç
            } else {
                img.style.display = "none"; // Diğerlerini kapat
            }
        });

        // Buton metnini güncelle
        if (visibleCount >= allImages.length) {
            loadMoreButton.textContent = "Show Less";
        } else {
            loadMoreButton.textContent = "More";
        }
    }

    loadMoreButton.addEventListener("click", function() {
        if (visibleCount >= allImages.length) {
            // Eğer tüm resimler açıksa, eski haline döndür
            visibleCount = 14;
        } else {
            // Yoksa, sıradaki 8 fotoğrafı daha aç
            visibleCount += 14;
        }
        updateGallery();
    });

    // Sayfa yüklendiğinde galeriyi güncelle
    updateGallery();
});





