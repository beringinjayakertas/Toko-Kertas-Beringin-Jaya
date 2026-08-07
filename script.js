// Data Produk
const products = [
    { 
        id: 1, 
        name: "Kertas Koran (Newsprint)", 
        desc: "Kertas ekonomis dengan gramatur 48,8 gr. Ideal untuk cetak koran, nota sederhana, atau kertas bungkus.", 
        img: "assets/8da5ac4799c70b1aaaa336b5df6ada9b.jpg", 
        items: [
            { n: "Koran Folio", s: "21.5 x 33 cm" }, 
            { n: "Koran A4", s: "21 x 29.7 cm" }, 
            { n: "Koran Plano 61", s: "61 x 86 cm" }, 
            { n: "Koran Plano 65", s: "65 x 100 cm" }
        ] 
    },
    { 
        id: 2, 
        name: "Kertas Undangan & Fancy", 
        desc: "Koleksi kertas bertekstur dan mewah seperti Jasmine dan Linen untuk kebutuhan undangan premium.", 
        img: "assets/kertas jasmine.jpg", 
        items: [
            { n: "Jasmine Muda / Mas", s: "79 x 109 cm" }, 
            { n: "Linen Putih (210/220gr)", s: "79 x 109 cm" }, 
            { n: "Concord KS (Putih/Warna)", s: "F4 / Plano" }, 
            { n: "Buffalo & Semboja", s: "Berbagai Warna" }
        ] 
    },
    { 
        id: 3, 
        name: "Kertas HVS & Digital", 
        desc: "Kertas putih bersih untuk dokumen kantor dan cetak digital dengan berbagai pilihan ketebalan.", 
        img: "assets/KertasHVSA4_62ce27ba-c711-40e1-8a3d-d96a331d1a6b_900x900.jpg", 
        items: [
            { n: "HVS 60 gr (F4/A4/Q)", s: "Putih" }, 
            { n: "HVS 70 gr (F4/A4/A3)", s: "Putih" }, 
            { n: "HVS 80 gr (F4/A4/A3)", s: "Putih" }, 
            { n: "HVS Warna 60/70 gr", s: "Pastel" }
        ] 
    },
    { 
        id: 4, 
        name: "Art Paper & Art Carton", 
        desc: "Kertas licin/glossy untuk brosur, kartu nama, kalender, dan cover buku.", 
        img: "assets/kertas-piagam-polos.jpg", 
        items: [
            { n: "Art Paper 120/150 gr", s: "65x100 / 79x109" }, 
            { n: "Art Carton 190/210/230 gr", s: "65x100 / 79x109" }, 
            { n: "Art Carton 260/310 gr", s: "65x100 / 79x109" }
        ] 
    },
    { 
        id: 5, 
        name: "Stiker & Label", 
        desc: "Berbagai jenis kertas perekat mulai dari chromo hingga vinyl transparan.", 
        img: "assets/25-x-36-inch-90-90-gsm-chromo-gum-sheet-500x500.webp", 
        items: [
            { n: "Stiker Cromo", s: "70 x 108 cm" }, 
            { n: "Stiker Vinyl (86x106)", s: "Putih / Transparan" }, 
            { n: "Stiker HVS", s: "70 x 108 cm" }
        ] 
    },
    { 
        id: 6, 
        name: "Board & Samson", 
        desc: "Kertas tebal (Board) dan kertas coklat (Samson) untuk packing atau hardcover.", 
        img: "assets/id-11134207-7r98x-lxf6m3agrvrheb.jpg", 
        items: [
            { n: "Board (Bot) 30/40", s: "65 x 76 cm" }, 
            { n: "Samson 70/80 gr", s: "90 x 120 cm" }, 
            { n: "Duplek 250/310/400 gr", s: "79 x 109 cm" }
        ] 
    }
];

// Render Katalog Produk ke Grid
// Render Katalog Produk sekaligus (Lebih cepat daripada loop innerHTML +=)
const grid = document.getElementById('productGrid');
if (grid) {
    grid.innerHTML = products.map(p => `
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
                    <span class="text-[10px] font-black uppercase tracking-widest text-slate-400">Lihat Ukuran</span>
                    <div class="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#b91c1c] group-hover:text-white transition-all">
                        <i data-lucide="chevron-right" class="w-5 h-5"></i>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Tambahan: Fitur Tutup Modal dengan tombol ESC
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show-modal')) {
        closeModal();
    }
});

// Inisialisasi Lucide & AOS
lucide.createIcons();
AOS.init({ duration: 800, once: true });

// Navbar Scroll Effect & Back to Top
const navbar = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('bg-white/70', 'backdrop-blur-md', 'shadow-md');
        navbar.classList.remove('shadow-none');
    } else {
        navbar.classList.remove('bg-white/70', 'backdrop-blur-md', 'shadow-md');
        navbar.classList.add('shadow-none');
    }

    if (window.scrollY > 400) {
        scrollTopBtn.classList.remove('hidden');
        setTimeout(() => scrollTopBtn.classList.add('opacity-100'), 10);
    } else {
        scrollTopBtn.classList.remove('opacity-100');
        setTimeout(() => scrollTopBtn.classList.add('hidden'), 300);
    }
});

scrollTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

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

// Modal Logic
const modal = document.getElementById('productModal');

function openModal(id) {
    const p = products.find(x => x.id === id);

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
                    <i data-lucide="info" class="text-[#b91c1c] w-5 h-5"></i> Daftar Item & Ukuran Tersedia:
                </h4>

                <div class="grid grid-cols-1 gap-3">
                    ${p.items.map(i => `
                        <div class="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-[#004d40]/30 transition">
                            <span class="font-bold text-[#004d40]">${i.n}</span>
                            <span class="text-sm text-slate-500 italic bg-white px-3 py-1 rounded-full shadow-sm">${i.s}</span>
                        </div>
                    `).join('')}
                </div>

                <div class="mt-10 flex flex-col sm:flex-row gap-4">
                    <a href="https://wa.me/6287878917622?text=Halo Beringin Jaya, saya ingin tanya harga untuk produk: ${encodeURIComponent(p.name)}" target="_blank" class="flex-1 bg-[#25D366] text-white py-4 rounded-xl font-bold text-center shadow-lg shadow-green-200 hover:bg-green-600 transition flex items-center justify-center gap-2" draggable="false">
                        <i data-lucide="phone" class="w-5 h-5"></i> Tanya Harga Via WA
                    </a>
                    <button onclick="closeModal()" class="px-8 py-4 bg-slate-100 text-slate-500 rounded-xl font-bold hover:bg-slate-200 transition">Tutup</button>
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
    modal.classList.add('hidden-modal');
    modal.classList.remove('show-modal');
    document.body.classList.remove('modal-active');
}

window.onclick = (e) => { 
    if (e.target == modal) closeModal(); 
};