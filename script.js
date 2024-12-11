document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.querySelector(".start-btn");
    const bgMusic = document.getElementById("bg-music");
    const fireworksContainer = document.getElementById("fireworks-container");

    // Bắt đầu khi nhấn nút
    startBtn.addEventListener("click", () => {
        startBtn.style.display = "none";

        // Phát nhạc nền
        bgMusic.play();

        // Hiển thị pháo hoa
        createFireworks();
    });

    // Tạo pháo hoa
    function createFireworks() {
        const colors = ["#FF1461", "#18FF92", "#5A87FF", "#FBF38C"];
        setInterval(() => {
            const firework = document.createElement("div");
            firework.className = "firework";
            const size = Math.random() * 10 + 5;

            firework.style.width = `${size}px`;
            firework.style.height = `${size}px`;
            firework.style.background = colors[Math.floor(Math.random() * colors.length)];
            firework.style.borderRadius = "50%";
            firework.style.position = "absolute";
            firework.style.top = `${Math.random() * 100}%`;
            firework.style.left = `${Math.random() * 100}%`;
            firework.style.boxShadow = `0 0 10px ${firework.style.background}`;

            fireworksContainer.appendChild(firework);

            setTimeout(() => {
                firework.remove();
            }, 1500);
        }, 300);
    }
});
