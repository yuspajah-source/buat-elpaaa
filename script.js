function moveButton() {
    const btnNo = document.getElementById('btn-no');
    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);
    
    btnNo.style.left = x + 'px';
    btnNo.style.top = y + 'px';
}

function showLove() {
    // 1. Putar Musik
    const music = document.getElementById('musikBucin');
    music.play();

    // 2. Ganti Tampilan Halaman
    document.getElementById('question-content').style.display = 'none';
    document.getElementById('success-message').style.display = 'block';
    
    // 3. Efek Confetti
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ff758f', '#ffb3c1']
    });

    // 4. Jalankan Animasi Mengetik
    typeWriter("Yaaay! I Love Lutunaaaa Atuuu!", "typing-title", 100, () => {
        typeWriter("Makasih ya elpahhhhhhh(Kerlin Elvaretta Prabandari) udah mau jadi orang yang paling spesial di hidupaku aku janji gak akan ninggalin kamu dan aku minta maaf kaloo selama ini aku kurang perhatian atau kurang pekaaa, Janji yahhhhhh kita bakal terus sama-sama? jangan asing pwissss", "typing-text", 50);
    });
}

// Fungsi Animasi Mengetik
function typeWriter(text, elementId, speed, callback) {
    let i = 0;
    const element = document.getElementById(elementId);
    
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else if (callback) {
            callback();
        }
    }
    typing();
}