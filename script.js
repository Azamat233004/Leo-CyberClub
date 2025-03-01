function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('show');
}

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    sections.forEach(sec => {
        sec.style.opacity = "0";
        sec.style.transform = "translateY(30px)";
    });

    window.addEventListener("scroll", () => {
        sections.forEach(sec => {
            const secPos = sec.getBoundingClientRect().top;
            if (secPos < window.innerHeight - 100) {
                sec.style.opacity = "1";
                sec.style.transform = "translateY(0)";
                sec.style.transition = "opacity 1s ease-out, transform 1s ease-out";
            }
        });
    });
});
