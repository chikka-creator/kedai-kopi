// ========== HAMBURGER MENU FUNCTIONALITY ==========
// Mengambil elemen navbar-nav dari DOM untuk dimanipulasi
const navbarNav = document.querySelector('.navbar-nav');

// Event listener untuk hamburger menu
// Ketika hamburger menu diklik, akan toggle class 'active' pada navbar
document.querySelector('#hamburger-menu').onclick = () => {
  // Toggle artinya jika class 'active' ada maka akan dihapus, jika tidak ada maka akan ditambahkan
  navbarNav.classList.toggle('active');
};

// ========== SEARCH FORM FUNCTIONALITY ==========
// Mengambil elemen search form dan search box untuk fungsionalitas pencarian
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

// Event listener untuk tombol search
document.querySelector('#search-button').onclick = (e) => {
  // Toggle class 'active' pada search form untuk menampilkan/menyembunyikan form pencarian
  searchForm.classList.toggle('active');
  // Memberikan fokus pada input search box agar cursor langsung ada di dalamnya
  searchBox.focus();
  // Mencegah perilaku default dari event (misalnya jika tombol ada dalam form)
  e.preventDefault();
};

// ========== SHOPPING CART FUNCTIONALITY ==========
// Mengambil elemen shopping cart untuk ditampilkan/disembunyikan
const shoppingCart = document.querySelector('.shopping-cart');

// Event listener untuk tombol shopping cart
document.querySelector('#shopping-cart-button').onclick = (e) => {
  // Toggle class 'active' pada shopping cart untuk menampilkan/menyembunyikan keranjang belanja
  shoppingCart.classList.toggle('active');
  // Mencegah perilaku default dari event
  e.preventDefault();
};

// ========== CLICK OUTSIDE TO CLOSE FUNCTIONALITY ==========
// Mengambil referensi ke tombol-tombol utama untuk pengecekan area klik
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

// Event listener global untuk mendeteksi klik di mana saja pada dokumen
document.addEventListener('click', function (e) {
  // Menutup navbar jika klik di luar hamburger menu dan navbar itu sendiri
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    // Menghapus class 'active' untuk menyembunyikan navbar
    navbarNav.classList.remove('active');
  }

  // Menutup search form jika klik di luar tombol search dan form itu sendiri
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    // Menghapus class 'active' untuk menyembunyikan search form
    searchForm.classList.remove('active');
  }

  // Menutup shopping cart jika klik di luar tombol cart dan cart itu sendiri
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    // Menghapus class 'active' untuk menyembunyikan shopping cart
    shoppingCart.classList.remove('active');
  }
});

// ========== MODAL BOX FUNCTIONALITY ==========
// Mengambil elemen modal untuk detail item
const itemDetailModal = document.querySelector('#item-detail-modal');
// Mengambil semua tombol yang dapat membuka modal detail item
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

// Menambahkan event listener ke setiap tombol detail item
itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    // Menampilkan modal dengan mengubah display menjadi 'flex'
    // Flex digunakan agar modal dapat di-center dengan mudah menggunakan CSS
    itemDetailModal.style.display = 'flex';
    // Mencegah perilaku default dari event (misalnya navigasi link)
    e.preventDefault();
  };
});

// ========== MODAL CLOSE FUNCTIONALITY ==========
// Event listener untuk tombol close (x) pada modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  // Menyembunyikan modal dengan mengubah display menjadi 'none'
  itemDetailModal.style.display = 'none';
  // Mencegah perilaku default dari event
  e.preventDefault();
};

// ========== CLICK OUTSIDE MODAL TO CLOSE ==========
// Event listener global untuk menutup modal ketika klik di luar area modal
window.onclick = (e) => {
  // Mengecek apakah yang diklik adalah background modal itu sendiri (bukan konten di dalamnya)
  if (e.target === itemDetailModal) {
    // Menyembunyikan modal jika yang diklik adalah background modal
    itemDetailModal.style.display = 'none';
  }
};