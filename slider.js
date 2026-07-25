document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('slider');
    const slides = slider.querySelectorAll('.slide');
    const dotsContainer = slider.querySelector('.slider-dots');
    let current = 0;
    let autoInterval;

    function showSlide(index) {
        slides[current].classList.remove('active');
        current = (index + slides.length) % slides.length;
        slides[current].classList.add('active');
        updateDots();
    }

    function updateDots() {
        dotsContainer.querySelectorAll('.dot').forEach(function (dot, i) {
            dot.classList.toggle('active', i === current);
        });
    }

    function createDots() {
        slides.forEach(function (_, i) {
            var dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', function () {
                showSlide(i);
                resetAuto();
            });
            dotsContainer.appendChild(dot);
        });
    }

    function startAuto() {
        autoInterval = setInterval(function () {
            showSlide(current + 1);
        }, 5000);
    }

    function resetAuto() {
        clearInterval(autoInterval);
        startAuto();
    }

    slider.querySelector('.prev').addEventListener('click', function () {
        showSlide(current - 1);
        resetAuto();
    });

    slider.querySelector('.next').addEventListener('click', function () {
        showSlide(current + 1);
        resetAuto();
    });

    slider.addEventListener('mouseenter', function () {
        clearInterval(autoInterval);
    });

    slider.addEventListener('mouseleave', function () {
        startAuto();
    });

    createDots();
    startAuto();
});
