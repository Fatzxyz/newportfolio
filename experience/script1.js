let cart = [];

// Menambahkan produk ke keranjang
function addToCart(id, name, price) {
    const product = { id, name, price };
    cart.push(product);
    updateCart();
}

// Mengupdate tampilan keranjang
function updateCart() {
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");
    const cartItems = document.getElementById("cart-items");
    const cartTotalPrice = document.getElementById("cart-total-price");

    let total = 0;
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
            <p>${item.name} - Rp ${item.price}</p>
        `;
        cartItems.appendChild(div);
        total += item.price;
    });

    cartCount.textContent = cart.length;
    cartTotal.textContent = `Rp ${total.toLocaleString()}`;
    cartTotalPrice.textContent = `Rp ${total.toLocaleString()}`;

    if (cart.length > 0) {
        document.getElementById("cart").style.display = "block";
    } else {
        document.getElementById("cart").style.display = "none";
    }
}

// Event listener untuk tombol "Tambah ke Keranjang"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        const name = e.target.getAttribute('data-name');
        const price = parseInt(e.target.getAttribute('data-price'));
        addToCart(id, name, price);
    });
});

// Menampilkan halaman checkout
document.getElementById("checkout-btn").addEventListener('click', () => {
    document.getElementById("cart").classList.add("hidden");
    document.getElementById("checkout").classList.remove("hidden");
});

// Form checkout
document.getElementById("checkout-form").addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Pesanan Anda telah dikirim!');
    cart = []; // Reset keranjang
    updateCart();
    document.getElementById("checkout").classList.add("hidden");
    document.getElementById("cart").classList.add("hidden");
});
