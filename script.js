class BungaMekar {
    constructor() {
        this.bungaContainer = document.getElementById('bungaContainer');
        this.pesanContainer = document.getElementById('pesanContainer');
        this.pesanNama = document.getElementById('pesanNama');
        this.namaInput = document.getElementById('namaInput');
    }

    mulaiAnimasi() {
        const nama = this.namaInput.value.trim() || 'Sahabat';
        
        if (this.namaInput.value.trim() === '') {
            alert('Silakan masukkan nama terlebih dahulu!');
            return;
        }

        // Reset container
        this.bungaContainer.innerHTML = '';
        this.pesanContainer.classList.add('hidden');

        // Buat elemen bunga
        this.buatBunga();
        
        // Tampilkan pesan setelah animasi selesai
        setTimeout(() => {
            this.tampilkanPesan(nama);
        }, 2500);
    }

    buatBunga() {
        const bunga = document.createElement('div');
        bunga.className = 'bunga';

        // Buat kelopak bunga (8 kelopak)
        for (let i = 0; i < 8; i++) {
            const kelopak = document.createElement('div');
            kelopak.className = 'kelopak';
            
            // Posisikan kelopak dalam lingkaran
            const angle = (i * 45) * Math.PI / 180;
            const radius = 60;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            kelopak.style.width = '40px';
            kelopak.style.height = '40px';
            kelopak.style.left = `calc(50% + ${x}px - 20px)`;
            kelopak.style.top = `calc(50% + ${y}px - 20px)`;
            kelopak.style.animationDelay = `${i * 0.1}s`;
            
            bunga.appendChild(kelopak);
        }

        // Buat tengah bunga
        const tengah = document.createElement('div');
        tengah.className = 'tengah';
        tengah.style.width = '50px';
        tengah.style.height = '50px';
        tengah.style.left = 'calc(50% - 25px)';
        tengah.style.top = 'calc(50% - 25px)';
        bunga.appendChild(tengah);

        // Buat batang
        const batang = document.createElement('div');
        batang.className = 'batang';
        batang.style.left = 'calc(50% - 4px)';
        batang.style.top = 'calc(50% + 25px)';
        bunga.appendChild(batang);

        // Buat daun
        const daun = document.createElement('div');
        daun.className = 'daun';
        daun.style.left = 'calc(50% + 10px)';
        daun.style.top = 'calc(50% + 60px)';
        bunga.appendChild(daun);

        this.bungaContainer.appendChild(bunga);
    }

    tampilkanPesan(nama) {
        this.pesanNama.textContent = `Untuk ${nama} yang Spesial! 🌟`;
        this.pesanContainer.classList.remove('hidden');
        
        // Animasi tambahan untuk pesan
        this.pesanContainer.style.animation = 'fadeIn 1s ease-in-out';
    }

    resetAnimasi() {
        this.bungaContainer.innerHTML = '';
        this.pesanContainer.classList.add('hidden');
        this.namaInput.value = '';
        this.namaInput.focus();
    }
}

// Inisialisasi program
const program = new BungaMekar();

// Fungsi global untuk dipanggil dari HTML
function mulaiAnimasi() {
    program.mulaiAnimasi();
}

function resetAnimasi() {
    program.resetAnimasi();
}

// Event listener untuk Enter key
document.getElementById('namaInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        mulaiAnimasi();
    }
});

// Event listener untuk load halaman
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('namaInput').focus();
});