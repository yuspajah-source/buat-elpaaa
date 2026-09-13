function moveButton() {
    const btnNo = document.getElementById('btn-no');

    const maxX = window.innerWidth - btnNo.offsetWidth;
    const maxY = window.innerHeight - btnNo.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    btnNo.style.position = 'fixed';
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
    typeWriter("yeyyyy", "typing-title", 100, () => {
        typeWriter("halloo cintaa, maaff yakk selama ini udah ngebebani kamuuu truss maaff jugaa ada sikap ku yang bikin kamuu risii mungkin . aku disini mauu ngomong sesuatu itu sama kamu. jadii aku eumm jujur aja lah yaak. aku suka sama kamuu, dari awal pertemuan forpis . sebenarnya aku mau ngajak ngobrol sama kamu dari awal awal cumaa yaa itu akuu takut kalau kamunya risi atau gimana yak. dan kalau kamu ngajak aku ngobrol beh itu kayak kemenangan tersendiri buat aku ya walaupun sekedar ngobrol apalagi waktu gonceng kamu itumah another winner buat aku something special in my life . hehe, jadi itu sesuatu yang pengen aku omongin ke kamu", "typing-text", 50);
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