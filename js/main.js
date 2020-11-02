const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
}

showMenu('nav-toggle', 'nav-menu');

// Changing Primary Color
let root = document.documentElement;

function colorChange(e) {
    root.style.setProperty('--first-color', e.value);
}
// Changing Primary Color

const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: false
});

sr.reveal('.home_title', {});
sr.reveal('.button', { delay: 200 });
sr.reveal('.home_img', { delay: 400 });
sr.reveal('.home_social-icon', { interval: 200 });

sr.reveal('.about_img', {});
sr.reveal('.about_subtitle', { delay: 200 });
sr.reveal('.about_text', { delay: 400 });

sr.reveal('.skills_subtitle', {});
sr.reveal('.skills_text', { delay: 200 });
sr.reveal('.skills_data', { interval: 200 });

sr.reveal('.skills_subtitle', {});
sr.reveal('.education_content', { delay: 200 });
// sr.reveal('.education_text', { delay: 400 });

sr.reveal('.work_subtitle', {});
sr.reveal('.work_content', { delay: 200 });
// sr.reveal('.work_text', { delay: 400 });
// sr.reveal('.work_data', { delay: 600 });

sr.reveal('.footer_title', {});
sr.reveal('.footer_social', { delay: 200 });