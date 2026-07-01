/* ==================================
   Celebrate With Love
   script.js
================================== */

const openBtn = document.getElementById("openBtn");
const content = document.getElementById("content");
const music = document.getElementById("music");

// Sembunyikan isi undangan saat pertama dibuka
content.style.display = "none";

// Tombol buka undangan
openBtn.addEventListener("click", function () {

    content.style.display = "block";

    content.scrollIntoView({
        behavior: "smooth"
    });

    // Putar musik jika tersedia
    if (music) {
        music.play().catch(() => {});
    }

});

// ===============================
// COUNTDOWN
// ===============================

const targetDate = new Date("July 11, 2026 00:00:00").getTime();

const timer = document.getElementById("timer");

function updateCountdown() {

    const now = new Date().getTime();

    const distance = targetDate - now;

    if (distance <= 0) {

        timer.innerHTML = "🎉 Happy Birthday! 🎉";

        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    timer.innerHTML =
        days + " Hari " +
        hours + " Jam " +
        minutes + " Menit " +
        seconds + " Detik";

}

updateCountdown();

setInterval(updateCountdown, 1000);