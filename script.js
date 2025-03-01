document.addEventListener("DOMContentLoaded", () => {
    /* --- 1. Анимация появления блоков при скролле --- */
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
            }
        });
    });

    /* --- 2. Создание кибер-дождя --- */
    function createRain() {
        const rainContainer = document.querySelector(".rain-container");

        for (let i = 0; i < 100; i++) {
            let drop = document.createElement("div");
            drop.classList.add("raindrop");
            drop.style.left = `${Math.random() * 100}vw`;
            drop.style.animationDuration = `${Math.random() * 2 + 1}s`;
            drop.style.animationDelay = `${Math.random() * 2}s`;
            rainContainer.appendChild(drop);
        }
    }
    createRain();

    /* --- 3. Эффект волны на кнопках --- */
    document.querySelectorAll(".button").forEach(button => {
        button.addEventListener("click", function (e) {
            let wave = document.createElement("span");
            wave.classList.add("wave");
            let rect = this.getBoundingClientRect();
            wave.style.left = `${e.clientX - rect.left}px`;
            wave.style.top = `${e.clientY - rect.top}px`;
            this.appendChild(wave);

            setTimeout(() => wave.remove(), 600);
        });
    });
});
