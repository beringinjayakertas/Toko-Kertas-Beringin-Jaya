// Deklarasi Elemen DOM Utama di Awal File
const grid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const navbar = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scrollTopBtn');
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const modal = document.getElementById('productModal');

// Data Produk
const products = [
    { 
        id: 1, 
        name: "Kertas Koran", 
        desc: "Kertas buram serbaguna berbahan ringan. Sangat cocok untuk cetak nota sederhana, draf dokumen, hingga kertas bungkus.", 
        img: "assets/pexels-pixabay-158651.jpg", 
        items: [
            { n: "Koran Folio/F4", s: "21.5 x 33 cm" }, 
            { n: "Koran A4", s: "21 x 29.7 cm" }, 
            { n: "Koran Plano", s: "Berbagai Ukuran dan Gram" }
        ] 
    },
    { 
        id: 2, 
        name: "Jasmine, Linen, Concord, Buffalo", 
        desc: "Koleksi kertas premium dengan tekstur unik dan efek elegan. Sangat ideal untuk undangan, sertifikat, dan kartu ucapan.", 
        img: "assets/pexels-eva-bronzini-8072474.jpg", 
        items: [
            { n: "Jasmine", s: "Berbagai Warna" }, 
            { n: "Linen", s: "Berbagai Warna" }, 
            { n: "Concord", s: "Berbagai Warna" }, 
            { n: "Buffalo", s: "Berbagai Warna" }
        ] 
    },
    { 
        id: 3, 
        name: "Kertas HVS", 
        desc: "Kertas putih dan berwarna berkualitas untuk kebutuhan cetak dokumen kantor, sekolah, serta fotokopi harian.", 
        img: "assets/pexels-thefullonmonet-28380284.jpg", 
        items: [
            { n: "HVS Putih", s: "Berbagai Ukuran dan Gram" }, 
            { n: "HVS Warna", s: "Berbagai Ukuran dan Gram" }
        ] 
    },
    { 
        id: 4, 
        name: "Art Paper & Art Carton", 
        desc: "Kertas berpermukaan halus dan mengkilap (glossy). Pilihan utama untuk cetak brosur, poster, kartu nama, hingga cover buku.", 
        img: "assets/pexels-mr-mockup-2312788-12024969.jpg", 
        items: [
            { n: "Art Paper", s: "Berbagai Ukuran dan Gram" }, 
            { n: "Art Carton", s: "Berbagai Ukuran dan Gram" } 
        ] 
    },
    { 
        id: 5, 
        name: "Stiker", 
        desc: "Bahan kertas perekat berkualitas mulai dari tipe Cromo, Vinyl, hingga Stiker HVS untuk kebutuhan label kemasan dan cetak stiker.", 
        img: "assets/pexels-caffeine-29021198.jpg", 
        items: [
            { n: "Stiker Cromo", s: "Berbagai Ukuran" }, 
            { n: "Stiker Vinyl", s: "Berbagai Ukuran" }, 
            { n: "Stiker Transparan", s: "Berbagai Ukuran" }, 
            { n: "Stiker HVS", s: "Berbagai Ukuran" }
        ] 
    },
    { 
        id: 6, 
        name: "Board, Samson, Duplek, Ivory", 
        desc: "Kertas tebal dan kokoh yang cocok untuk pembuatan box kemasan, alas pola, hingga hard cover jilid.", 
        img: "assets/pexels-pnw-prod-8250904.jpg", 
        items: [
            { n: "Kertas Board (Bot)", s: "Berbagai Ukuran dan Gram" }, 
            { n: "Kertas Samson", s: "Berbagai Ukuran dan Gram" }, 
            { n: "Kertas Ivory", s: "Berbagai Ukuran dan Gram" }, 
            { n: "Kertas Duplek", s: "Berbagai Ukuran dan Gram" }
        ] 
    },
    { 
        id: 7, 
        name: "Kertas NCR", 
        desc: "Kertas karbonis khusus untuk pembuatan nota, kuitansi, atau tanda terima berangkap tanpa perlu karbon tambahan.", 
        img: "assets/pexels-tima-miroshnichenko-6169133.jpg", 
        items: [
            { n: "NCR Top", s: "Merk MC/GS" }, 
            { n: "NCR Middle", s: "Merk MC/GS" }, 
            { n: "NCR Bottom", s: "Merk MC/GS" }
        ] 
    },
    { 
        id: 8, 
        name: "Kartu Tik, BC & Dorslag", 
        desc: "Kertas tebal sedang dan kertas tipis bertekstur untuk cetak kartu stok, cover jilid, formulir, atau kertas penyekat.", 
        img: "assets/pexels-valentin-ivantsov-2154772556-36753659.jpg", 
        items: [
            { n: "Kartu Tik", s: "Putih / Warna" }, 
            { n: "Kertas BC", s: "Putih / Warna" }, 
            { n: "Kertas Dorslag", s: "Putih / Warna" }
        ] 
    },
    { 
        id: 9, 
        name: "Tinta / Etching", 
        desc: "Tinta cetak dan cairan etching pilihan untuk menunjang hasil cetakan yang maksimal dan tahan lama pada mesin percetakan.", 
        img: "assets/pexels-mart-production-7577920.jpg", 
        items: [
            { n: "Tinta Best One", s: "Berbagai Warna" }, 
            { n: "Tinta New Echo", s: "Berbagai Warna" }, 
            { n: "Etching", s: "Berbagai Warna" }
        ] 
    },
    { 
        id: 10, 
        name: "Amplop & Lakban", 
        desc: "Perlengkapan surat-menyurat dan pengemasan terlengkap, melayani berbagai ukuran amplop dan jenis lakban.", 
        img: "assets/pexels-22731462-6650768.jpg", 
        items: [
            { n: "Amplop", s: "Berbagai Jenis" }, 
            { n: "Lakban", s: "Kecil / Sedang / Besar" }
        ] 
    },
    { 
        id: 11, 
        name: "Perlengkapan Lainnya", 
        desc: "Menyediakan aneka kebutuhan pendukung percetakan seperti kalkir, mika, plastik, lem, box, hingga plastik laminating.", 
        img: "assets/pexels-kseniachernaya-5691628.jpg", 
        items: [
            { n: "Kertas Continuous Form", s: "Berbagai Jenis Ply" }, 
            { n: "Lem", s: "Galon / Plastik" },
            { n: "Kertas Kalkir", s: "Berbagai Ukuran" },
            { n: "Kertas Mika", s: "Transparan / Warna" },
            { n: "Box Kartu Nama", s: "Berbagai Ukuran" },
            { n: "Plastik Swalayan", s: "Berbagai Ukuran" },
            { n: "Kertas Foto", s: "Berbagai Ukuran" },
            { n: "Kertas Laminating", s: "Matte (Doff) / Glossy" }
        ] 
    },
    { 
        id: 12, 
        name: "Ongkos Potong", 
        desc: "Layanan jasa pemotongan kertas custom sesuai ukuran dan dimensi kebutuhan cetak Anda.", 
        img: "assets/pexels-pnw-prod-8250950.jpg", 
        items: [
            { n: "Ongkos Potong / Upah Potong", s: "Custom Sesuai Ukuran" }
        ] 
    }
];

// Render & Filter Katalog Produk
function renderProducts(filteredProducts) {
    if (!grid) return;

    if (filteredProducts.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-12">
                <p class="text-slate-400 font-medium">Produk atau item yang Anda cari tidak ditemukan.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filteredProducts.map(p => `
        <div class="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-200/60" onclick="openModal(${p.id})" data-aos="fade-up">
            <div class="relative h-64 overflow-hidden">
                <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy">
                <div class="absolute inset-0 bg-gradient-to-t from-[#004d40]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <span class="text-white font-bold flex items-center gap-2">Detail Produk <i data-lucide="chevron-right" class="w-4 h-4"></i></span>
                </div>
            </div>
            <div class="p-8">
                <h4 class="font-bold text-xl mb-3 text-[#004d40] group-hover:text-[#b91c1c] transition-colors">${p.name}</h4>
                <p class="text-slate-500 text-sm line-clamp-2 leading-relaxed mb-6">${p.desc}</p>
                <div class="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span class="text-[10px] font-black uppercase tracking-widest text-slate-400">Lihat Detail</span>
                    <div class="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#d9be0d] group-hover:text-white transition-all">
                        <i data-lucide="chevron-right" class="w-5 h-5"></i>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    lucide.createIcons();
}

// Inisialisasi Tampilan Awal Produk
renderProducts(products);

// Logika Pencarian Mendalam
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        const filtered = products.filter(p => {
            const matchName = p.name.toLowerCase().includes(query);
            const matchDesc = p.desc.toLowerCase().includes(query);
            const matchItems = p.items.some(item => 
                item.n.toLowerCase().includes(query) || 
                item.s.toLowerCase().includes(query)
            );

            return matchName || matchDesc || matchItems;
        });

        renderProducts(filtered);
    });
}

// Modal Logic
function openModal(id) {
    const p = products.find(x => x.id === id);
    if (!p || !modal) return;

    modal.innerHTML = `
        <div class="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col md:flex-row relative">
            <div class="md:w-1/3 flex items-center justify-center p-4 bg-white border-r border-slate-100">
                <img id="modalImg" 
                    src="${p.img}" 
                    class="w-full h-full max-h-64 md:max-h-80 object-contain mix-blend-multiply" 
                    draggable="false"
                    alt="${p.name}">
            </div>

            <div class="md:w-2/3 p-6 md:p-10 overflow-y-auto">
                <div class="mb-6">
                    <h2 class="text-3xl font-bold text-[#004d40]">${p.name}</h2>
                    <div class="w-16 h-1 bg-[#b91c1c] mt-2"></div>
                </div>
                
                <p class="text-slate-600 mb-8 leading-relaxed">${p.desc}</p>
                
                <h4 class="font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <i data-lucide="info" class="text-[#b91c1c] w-5 h-5"></i> Daftar Item & Ukuran/Jenis Tersedia:
                </h4>

                <div class="grid grid-cols-1 gap-3">
                    ${p.items.map(i => `
                        <div class="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-[#004d40]/30 transition">
                            <span class="font-bold text-[#004d40]">${i.n}</span>
                            <span class="text-sm text-slate-500 italic bg-white px-3 py-1 rounded-full shadow-sm">${i.s}</span>
                        </div>
                    `).join('')}
                </div>

                <div class="mt-10 flex justify-center">
                    <button onclick="closeModal()" class="w-full sm:w-auto px-8 py-4 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition">Tutup</button>
                </div>
            </div>
        </div>
    `;

    modal.classList.remove('hidden-modal');
    modal.classList.add('show-modal');
    document.body.classList.add('modal-active');
    
    lucide.createIcons();
}

function closeModal() {
    if (!modal) return;
    modal.classList.add('hidden-modal');
    modal.classList.remove('show-modal');
    document.body.classList.remove('modal-active');
}

// Event Listeners Global
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('show-modal')) {
        closeModal();
    }
});

window.onclick = (e) => { 
    if (e.target === modal) closeModal(); 
};

// Navbar Scroll Effect & Back to Top
window.addEventListener('scroll', () => {
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.classList.add('bg-white/70', 'backdrop-blur-md', 'shadow-md');
            navbar.classList.remove('shadow-none');
        } else {
            navbar.classList.remove('bg-white/70', 'backdrop-blur-md', 'shadow-md');
            navbar.classList.add('shadow-none');
        }
    }

    if (scrollTopBtn) {
        if (window.scrollY > 400) {
            scrollTopBtn.classList.remove('hidden');
            setTimeout(() => scrollTopBtn.classList.add('opacity-100'), 10);
        } else {
            scrollTopBtn.classList.remove('opacity-100');
            setTimeout(() => scrollTopBtn.classList.add('hidden'), 300);
        }
    }
});

if (scrollTopBtn) {
    scrollTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mobile Menu Toggle
if (menuBtn && mobileMenu) {
    menuBtn.onclick = () => {
        const isNowHidden = mobileMenu.classList.toggle('hidden');
        menuBtn.innerHTML = isNowHidden ? '<i data-lucide="menu" id="menuIcon"></i>' : '<i data-lucide="x" id="menuIcon"></i>';
        lucide.createIcons();
    };

    document.querySelectorAll('.mobile-link').forEach(link => {
        link.onclick = () => {
            mobileMenu.classList.add('hidden');
            menuBtn.innerHTML = '<i data-lucide="menu" id="menuIcon"></i>';
            lucide.createIcons();
        };
    });
}

// Inisialisasi Library Pihak Ketiga
lucide.createIcons();
AOS.init({ duration: 800, once: true });