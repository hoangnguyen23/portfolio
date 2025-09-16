
const text = "Chào mừng bạn đến với portfolio của tôi.";
const typingEl = document.getElementById("typing");

let index = 0;
let isDeleting = false;

function typeEffect() {
    if (!isDeleting) {
        typingEl.textContent = text.substring(0, index++);
        if (index > text.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        typingEl.textContent = text.substring(0, index--);
        if (index < 0) {
            isDeleting = false;
        }
    }
    setTimeout(typeEffect, isDeleting ? 150 : 50);
}

typeEffect();

// toggle navbar
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.header__navbar-list');

    // Toggle menu khi click vào nút
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Ngăn click lan ra document
        navbar.classList.toggle('show');
    });

    // Ngăn click bên trong menu đóng menu
    navbar.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Đóng menu khi click ra ngoài
    document.addEventListener('click', () => {
        navbar.classList.remove('show');
    });
});


// navbar
const navItems = document.querySelectorAll('.header__navbar-item');
const sections = document.querySelectorAll('.tab-content');

navItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Bỏ active cũ
        navItems.forEach(el => el.classList.remove('active'));
        sections.forEach(sec => sec.classList.remove('active'));

        // Thêm active mới
        item.classList.add('active');
        sections[index].classList.add('active');
    });
});
//project filter
const filterButtons = document.querySelectorAll('.projects-section__filter-btn');
const cards = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        cards.forEach(card => {
            const category = card.dataset.category;

            // Hiện tất cả nếu chọn All
            if (filter === 'all' || category === filter) {
                card.style.display = 'flex';  // hoặc 'block' tùy layout
            } else {
                card.style.display = 'none';
            }
        });

        // Thêm active class cho nút được chọn (tuỳ chọn)
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});


