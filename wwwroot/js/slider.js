document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('courseSlider');
    const sliderItems = document.querySelectorAll('.course-card');
    const totalItems = sliderItems.length;
    let currentIndex = 0;

    // Move slider to the left
    document.querySelector('.slider-btn.left').addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - 1; // Loop to the last item
        }
        updateSliderPosition();
    });

    // Move slider to the right
    document.querySelector('.slider-btn.right').addEventListener('click', function () {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop to the first item
        }
        updateSliderPosition();
    });

    // Function to update slider position
    function updateSliderPosition() {
        const offset = -currentIndex * (sliderItems[0].offsetWidth + 30); // 30 is the gap between items
        slider.style.transform = `translateX(${offset}px)`;
    }
});

    document.addEventListener("DOMContentLoaded", function () {
        const courseCards = document.querySelectorAll('.course-card');
        courseCards.forEach(card => {
            const status = card.getAttribute('data-status');
    const badge = card.querySelector('.status-badge');
    switch (status) {
                case 'Active':
    badge.classList.add('status-active');
    break;
    case 'Inactive':
    badge.classList.add('status-inactive');
    break;
    case 'Pending':
    badge.classList.add('status-pending');
    break;
    case 'Completed':
    badge.classList.add('status-completed');
    break;
    default:
    badge.classList.add('status-inactive');
            }
        });
    });

