document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = 'var(--shadow-md)';
            navbar.style.padding = '0';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '5px 0';
        }
    });

    // 2. Testimonial Slider
    const reviews = [
        {
            text: "Friendly and professional team who do an amazing job. I trust Skinner Lawns to care for my lawn.",
            author: "Local Resident"
        },
        {
            text: "After no-shows from other services, I finally hit the jackpot. My lawn has never looked better.",
            author: "Satisfied Client"
        },
        {
            text: "They provide high quality, professional service week in and week out. Always on time with extra attention to detail.",
            author: "Long-term Customer"
        },
        {
            text: "Thankful to find Skinner Lawns. Working with Jeff from pricing to a personalized plan was a great experience.",
            author: "Jacksonville Homeowner"
        },
        {
            text: "Consistent, considerate, very thorough, and friendly. Good communication about weather delays.",
            author: "Commercial Property Manager"
        }
    ];

    const slider = document.getElementById('testimonialSlider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (slider && reviews.length > 0) {
        // Populate DOM
        reviews.forEach((review, index) => {
            const div = document.createElement('div');
            div.className = `testimonial-card ${index === 0 ? 'active' : ''}`;
            div.innerHTML = `
                <div class="stars mb-3" style="font-size: 0.9rem; margin-bottom: 1rem;">
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                </div>
                <p class="testimonial-text">"${review.text}"</p>
                <div class="testimonial-author">— ${review.author}</div>
            `;
            slider.appendChild(div);
        });

        const cards = document.querySelectorAll('.testimonial-card');
        let currentIdx = 0;

        function showSlide(index) {
            cards.forEach(card => card.classList.remove('active'));
            cards[index].classList.add('active');
        }

        nextBtn.addEventListener('click', () => {
            currentIdx = (currentIdx + 1) % cards.length;
            showSlide(currentIdx);
        });

        prevBtn.addEventListener('click', () => {
            currentIdx = (currentIdx - 1 + cards.length) % cards.length;
            showSlide(currentIdx);
        });

        // Auto slide
        setInterval(() => {
            currentIdx = (currentIdx + 1) % cards.length;
            showSlide(currentIdx);
        }, 6000);
    }

    // 3. Simple Form Submission Simulation
    const form = document.getElementById('estimateForm');
    const successMsg = document.getElementById('formSuccess');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate API call
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            btn.innerText = 'Sending...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerText = originalText;
                btn.disabled = false;
                form.reset();
                successMsg.style.display = 'block';
                setTimeout(() => {
                    successMsg.style.display = 'none';
                }, 5000);
            }, 1500);
        });
    }
});
