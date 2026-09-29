// Deklarasi Elemen DOM Utama
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
        category: "kantor",
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
        category: "fancy",
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
        category: "kantor",
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
        category: "fancy",
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
        category: "perlengkapan",
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
        category: "karton",
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
        category: "kantor",
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
        category: "kantor",
        name: "Kartu Tik, BC, Dorslag", 
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
        category: "perlengkapan",
        name: "Tinta & Etching", 
        desc: "Tinta cetak dan cairan etching pilihan untuk menunjang hasil cetakan yang maksimal dan tahan lama pada mesin percetakan.", 
        img: "assets/pexels-jakubzerdzicki-17536002.jpg", 
        items: [
            { n: "Tinta Best One", s: "Berbagai Warna" }, 
            { n: "Tinta New Echo", s: "Berbagai Warna" }, 
            { n: "Etching", s: "Berbagai Warna" }
        ] 
    },
    { 
        id: 10, 
        category: "perlengkapan",
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
        category: "perlengkapan",
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
            { n: "Plastik Undangan", s: "Berbagai Ukuran" },
            { n: "Tali Rafia", s: "Berbagai Ukuran" },
            { n: "Kertas Foto", s: "Berbagai Ukuran" },
            { n: "Kertas Laminating", s: "Matte (Doff) / Glossy" }
        ] 
    },
    { 
        id: 12, 
        category: "perlengkapan",
        name: "Ongkos Potong", 
        desc: "Layanan jasa pemotongan kertas custom sesuai ukuran dan dimensi kebutuhan cetak Anda.", 
        img: "assets/pexels-pnw-prod-8250950.jpg", 
        items: [
            { n: "Ongkos Potong / Upah Potong", s: "Custom Sesuai Ukuran" }
        ] 
    }
];

// Variable Penyimpan Kategori Aktif
let currentCategory = 'semua';

// Function: Filter berdasarkan Kategori Pill
function filterCategory(catKey, btnElement) {
    currentCategory = catKey;

    const buttons = document.querySelectorAll('.cat-btn');
    buttons.forEach(btn => {
        btn.className = "cat-btn px-4 py-2 rounded-xl text-xs font-bold transition duration-300 bg-white text-slate-700 border border-slate-200 hover:bg-emerald-50 hover:text-[#004d40] hover:border-[#004d40]/30";
    });

    if (btnElement) {
        btnElement.className = "cat-btn active px-4 py-2 rounded-xl text-xs font-bold transition duration-300 bg-[#004d40] text-white shadow-md hover:bg-[#00382e]";
    }

    if (searchInput) searchInput.value = '';

    if (catKey === 'semua') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.category === catKey);
        renderProducts(filtered);
    }
}

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
const isMainPage = !window.location.pathname.includes('produk.html');
if (isMainPage) {
    renderProducts(products.slice(0, 6));
} else {
    renderProducts(products);
}

// Logika Pencarian
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        if (query === '' && isMainPage) {
            renderProducts(products.slice(0, 6));
            return;
        }

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

// Status Buka / Tutup Toko Real-Time
function updateStoreStatus() {
    const statusContainer = document.getElementById('storeStatus');
    if (!statusContainer) return;

    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hours + minutes / 60;

    const isOpenDay = day >= 1 && day <= 6;
    const isOpenHours = currentTime >= 8.0 && currentTime < 17.0;

    if (isOpenDay && isOpenHours) {
        statusContainer.innerHTML = `
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Sedang Buka Hari Ini (08:00 - 17:00 WIB)
            </span>
        `;
    } else {
        statusContainer.innerHTML = `
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-800 border border-red-200">
                <span class="w-2 h-2 rounded-full bg-red-500"></span> Sedang Tutup (Buka Senin–Sabtu 08:00 WIB)
            </span>
        `;
    }
}

// Copy Alamat Lengkap
function copyAddress() {
    const addressText = "Jl. Beringin Raya Blok 35 No.21, RT.002/RW.001, Nusa Jaya, Kec. Karawaci, Kota Tangerang, Banten 15116";
    
    navigator.clipboard.writeText(addressText).then(() => {
        const copyBtn = document.getElementById('copyAddressBtn');
        if (copyBtn) {
            const originalHTML = copyBtn.innerHTML;
            copyBtn.innerHTML = `<i data-lucide="check" class="w-4 h-4 text-emerald-600"></i> <span class="text-emerald-600">Tersalin!</span>`;
            lucide.createIcons();
            setTimeout(() => {
                copyBtn.innerHTML = originalHTML;
                lucide.createIcons();
            }, 2000);
        }
    }).catch(err => {
        console.error('Gagal menyalin alamat: ', err);
    });
}

// Jalankan Pengecekan Jam Operasional saat Halaman Di-load
document.addEventListener('DOMContentLoaded', () => {
    updateStoreStatus();
});

// ==========================================
// ALGORITMA GUILLOTINE FAST & CANVAS (PYTHON CONVERT)
// ==========================================

function applyPlanoPreset() {
    const preset = document.getElementById('planoPreset').value;
    const pInput = document.getElementById('planoP');
    const lInput = document.getElementById('planoL');
    if (!preset || !pInput || !lInput) return;

    if (preset === 'custom') {
        pInput.readOnly = false;
        lInput.readOnly = false;
        pInput.classList.remove('bg-slate-100', 'cursor-not-allowed', 'text-slate-500');
        pInput.classList.add('bg-white');
        lInput.classList.remove('bg-slate-100', 'cursor-not-allowed', 'text-slate-500');
        lInput.classList.add('bg-white');
    } else {
        const [p, l] = preset.split('x').map(Number);
        pInput.value = p;
        lInput.value = l;
        
        pInput.readOnly = true;
        lInput.readOnly = true;
        pInput.classList.add('bg-slate-100', 'cursor-not-allowed', 'text-slate-500');
        pInput.classList.remove('bg-white');
        lInput.classList.add('bg-slate-100', 'cursor-not-allowed', 'text-slate-500');
        lInput.classList.remove('bg-white');
    }
    calculatePaperCut();
}

function applyCutPreset() {
    const preset = document.getElementById('cutPreset').value;
    const pInput = document.getElementById('cutP');
    const lInput = document.getElementById('cutL');
    if (!preset || !pInput || !lInput) return;

    if (preset === 'custom') {
        pInput.readOnly = false;
        lInput.readOnly = false;
        pInput.classList.remove('bg-slate-100', 'cursor-not-allowed', 'text-slate-500');
        pInput.classList.add('bg-white');
        lInput.classList.remove('bg-slate-100', 'cursor-not-allowed', 'text-slate-500');
        lInput.classList.add('bg-white');
    } else {
        const [p, l] = preset.split('x').map(Number);
        pInput.value = p;
        lInput.value = l;
        
        pInput.readOnly = true;
        lInput.readOnly = true;
        pInput.classList.add('bg-slate-100', 'cursor-not-allowed', 'text-slate-500');
        pInput.classList.remove('bg-white');
        lInput.classList.add('bg-slate-100', 'cursor-not-allowed', 'text-slate-500');
        lInput.classList.remove('bg-white');
    }
    calculatePaperCut();
}

// Algoritma Rekursif Guillotine Fast dari Skrip Python
function guillotineFastJS(w, h, maxLen, pt, lt, memo = {}) {
    const key = `${Math.round(w * 10) / 10}_${Math.round(h * 10) / 10}`;
    if (memo[key]) return memo[key];

    if (w < Math.min(pt, lt) || h < Math.min(pt, lt)) {
        return [];
    }

    let bestLayout = [];

    // 1. Grid Murni Tegak
    const nx_a = Math.floor(w / pt);
    const ny_a = Math.floor(h / lt);
    if (nx_a > 0 && ny_a > 0) {
        let grid_a = [];
        for (let i = 0; i < nx_a; i++) {
            for (let j = 0; j < ny_a; j++) {
                grid_a.push({ x: i * pt, y: j * lt, w: pt, h: lt });
            }
        }
        if (grid_a.length > bestLayout.length) bestLayout = grid_a;
    }

    // 2. Grid Murni Tidur
    const nx_b = Math.floor(w / lt);
    const ny_b = Math.floor(h / pt);
    if (nx_b > 0 && ny_b > 0) {
        let grid_b = [];
        for (let i = 0; i < nx_b; i++) {
            for (let j = 0; j < ny_b; j++) {
                grid_b.push({ x: i * lt, y: j * pt, w: lt, h: pt });
            }
        }
        if (grid_b.length > bestLayout.length) bestLayout = grid_b;
    }

    // 3. Potong Belah Vertikal
    if (h <= maxLen) {
        let cuts_x = new Set();
        for (let k = 1; k <= Math.floor(w / pt); k++) cuts_x.add(Math.round(k * pt * 10) / 10);
        for (let k = 1; k <= Math.floor(w / lt); k++) cuts_x.add(Math.round(k * lt * 10) / 10);

        cuts_x.forEach(x_cut => {
            if (x_cut > 0 && x_cut < w) {
                const left = guillotineFastJS(x_cut, h, maxLen, pt, lt, memo);
                const right = guillotineFastJS(w - x_cut, h, maxLen, pt, lt, memo);
                const rightShifted = right.map(item => ({ x: item.x + x_cut, y: item.y, w: item.w, h: item.h }));
                const combined = left.concat(rightShifted);
                if (combined.length > bestLayout.length) bestLayout = combined;
            }
        });
    }

    // 4. Potong Belah Horizontal
    if (w <= maxLen) {
        let cuts_y = new Set();
        for (let k = 1; k <= Math.floor(h / pt); k++) cuts_y.add(Math.round(k * pt * 10) / 10);
        for (let k = 1; k <= Math.floor(h / lt); k++) cuts_y.add(Math.round(k * lt * 10) / 10);

        cuts_y.forEach(y_cut => {
            if (y_cut > 0 && y_cut < h) {
                const bottom = guillotineFastJS(w, y_cut, maxLen, pt, lt, memo);
                const top = guillotineFastJS(w, h - y_cut, maxLen, pt, lt, memo);
                const topShifted = top.map(item => ({ x: item.x, y: item.y + y_cut, w: item.w, h: item.h }));
                const combined = bottom.concat(topShifted);
                if (combined.length > bestLayout.length) bestLayout = combined;
            }
        });
    }

    memo[key] = bestLayout;
    return bestLayout;
}

// Kalkulasi Utama
function calculatePaperCut() {
    const machineWidth = parseFloat(document.getElementById('machineWidth')?.value) || 92;
    const rawP = parseFloat(document.getElementById('planoP')?.value) || 0;
    const rawL = parseFloat(document.getElementById('planoL')?.value) || 0;
    const targetP = parseFloat(document.getElementById('cutP')?.value) || 0;
    const targetL = parseFloat(document.getElementById('cutL')?.value) || 0;
    const qty = parseInt(document.getElementById('planoQty')?.value) || 1;

    if (rawP <= 0 || rawL <= 0 || targetP <= 0 || targetL <= 0) return;

    // Normalisasi Panjang & Lebar (P >= L)
    const P = Math.max(rawP, rawL);
    const L = Math.min(rawP, rawL);
    const pt = Math.max(targetP, targetL);
    const lt = Math.min(targetP, targetL);

    // Cek Batasan Lebar Mesin Potong
    if (L > machineWidth) {
        alert(`Batas Fisik: Lebar Kertas (${L} cm) melebihi bukaan mesin (${machineWidth} cm)!`);
        return;
    }

    // Jalankan Algoritma
    const layout = guillotineFastJS(P, L, machineWidth, pt, lt);
    const countPerSheet = layout.length;
    const grandTotal = countPerSheet * qty;

    // Hitung Efisiensi
    const areaPlano = P * L;
    const areaTarget = pt * lt;
    const usedArea = countPerSheet * areaTarget;
    const efficiency = areaPlano > 0 ? ((usedArea / areaPlano) * 100).toFixed(1) : 0;

    // Update DOM
    const resTotal = document.getElementById('resTotalSheets');
    const resDetail = document.getElementById('resDetailText');
    const resPerSheet = document.getElementById('resPerSheet');
    const resEfficiency = document.getElementById('resEfficiency');

    if (resTotal) resTotal.innerText = grandTotal.toLocaleString('id-ID');
    if (resDetail) resDetail.innerText = `Dari ${qty} lembar plano (${P} x ${L} cm)`;
    if (resPerSheet) resPerSheet.innerText = `${countPerSheet} Lembar`;
    if (resEfficiency) resEfficiency.innerText = `${efficiency}%`;

    // Gambar Canvas
    drawLayoutCanvas(layout, P, L, pt, lt);
}

// Gambar Layout di Canvas HTML5
function drawLayoutCanvas(layout, P, L, pt, lt) {
    const canvas = document.getElementById('paperCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const padding = 15;
    const scale = Math.min((canvas.width - padding * 2) / P, (canvas.height - padding * 2) / L);

    // Background Plano
    ctx.fillStyle = '#f8fafc';
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 2;
    ctx.fillRect(padding, padding, P * scale, L * scale);
    ctx.strokeRect(padding, padding, P * scale, L * scale);

    // Potongan Target
    layout.forEach((box, idx) => {
        const x = padding + box.x * scale;
        const y = padding + box.y * scale;
        const w = box.w * scale;
        const h = box.h * scale;

        // Warna Hijau untuk Tegak, Kuning untuk Tidur
        ctx.fillStyle = Math.abs(box.w - pt) < 0.1 ? '#2dd4bf' : '#f59e0b';
        ctx.strokeStyle = '#004d40';
        ctx.lineWidth = 1;

        ctx.fillRect(x, y, w, h);
        ctx.strokeRect(x, y, w, h);

        if (w > 12 && h > 12) {
            ctx.fillStyle = '#0f172a';
            ctx.font = 'bold 9px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(`#${idx + 1}`, x + w / 2, y + h / 2);
        }
    });
}

// Inisialisasi Otomatis
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('planoP')) {
        applyPlanoPreset();
        applyCutPreset();
    }
});