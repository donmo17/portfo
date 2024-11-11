const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    if (html.classList.contains('light')) {
        html.classList.remove('light');
        html.classList.add('dark');
        themeIcon.classList.remove('fa-cloud-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        html.classList.remove('dark');
        html.classList.add('light');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-cloud-sun');
    }
});

// Section Toggle avec animation
document.querySelectorAll('.section-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        
        document.querySelectorAll('.section-content').forEach(otherContent => {
            if (otherContent !== content && otherContent.classList.contains('active')) {
                otherContent.classList.remove('active');
            }
        });

        content.classList.toggle('active');
        
        if (content.classList.contains('active')) {
            gsap.from(content, {
                duration: 0.5,
                opacity: 0,
                y: -20,
                ease: "power2.out"
            });
        }
    });
});

const burgerMenu = document.getElementById('burgerMenu');
const sidebar = document.querySelector('.sidebar');
const overlay = document.getElementById('overlay');

function toggleMenu() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    
    const icon = burgerMenu.querySelector('i');
    if (sidebar.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

burgerMenu.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            toggleMenu();
        }
    });
});

lucide.createIcons();
document.getElementById('openAI').addEventListener('click', function() {
window.location.href = 'ia.html';  // Redirection vers ai.html
});