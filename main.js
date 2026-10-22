// main.js

// 1. Initialize State
let cart = [];

// 2. Select DOM Elements
const productGrid = document.getElementById('product-grid');
const searchInput = document.getElementById('search-input');
const cartCount = document.getElementById('cart-count');
const categoryFilters = document.querySelectorAll('.category-filter');

// 3. Render Products Function
function renderProducts(productsToRender) {
    // TODO: Clear productGrid
    // TODO: Loop through productsToRender
    // TODO: Generate HTML for each product card
    // TODO: Append to productGrid
    // Clear the existing product cards
    productGrid.innerHTML = "";

    // Show a message if no products match
    if (productsToRender.length === 0) {
        productGrid.innerHTML = `
            <p class="col-span-full py-10 text-center text-slate-500">
                No products found.
            </p>
        `;
        return;
    }

    // Generate and append each product card
    productsToRender.forEach(product => {
        productGrid.innerHTML += createProductCard(product);
    });
}

// 4. Add to Cart Function
function addToCart(productId) {
    // TODO: Find product by id
    // TODO: Add to cart array
    // TODO: Update cart count UI
    // TODO: Save to localStorage
}

// 5. Update Cart Count UI
function updateCartCount() {
    // TODO: Set textContent of cartCount
    // TODO: Show/hide cartCount based on items
}

// 6. Receives one product and returns its HTML
function createProductCard(product) {
    return `
        <article class="border border-slate-200 rounded-[1.25rem] bg-white p-3 transition-all duration-300 hover:border-blue-400 hover:shadow-lg hover:-translate-y-1 group">
            
            <div class="relative overflow-hidden rounded-2xl bg-slate-100">
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="aspect-[4/5] w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
            </div>

            <div class="mt-4 px-1 pb-2 space-y-1">
                <p class="text-[10px] font-black uppercase tracking-widest text-blue-600/70">
                    ${product.category}
                </p>

                <h3 class="text-sm font-bold text-slate-900">
                    ${product.name}
                </h3>

                <p class="text-[11px] font-medium text-slate-500">
                    ${product.availability}
                </p>

                <div class="flex items-center justify-between gap-3 pt-3">
                    <span class="text-lg font-black text-slate-900">
                        ${product.price.toLocaleString("sv-SE")} kr
                    </span>

                    <button
                        type="button"
                        onclick="addToCart(${product.id})"
                        class="inline-flex h-10 items-center justify-center rounded-xl bg-slate-900 px-4 text-xs font-bold text-white transition-all hover:bg-blue-600 active:scale-95"
                        aria-label="Add ${product.name} to cart">
                        Add to cart
                    </button>
                </div>
            </div>
        </article>
    `;
}

// 7. Event Listeners
// Search
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        // TODO: Filter products by name or description
    });
}

// Category Filters
categoryFilters.forEach(filter => {
    filter.addEventListener('change', () => {
        // TODO: Collect active categories
        // TODO: Filter products and re-render
    });
});

// 8. Initial Load
document.addEventListener('DOMContentLoaded', () => {
    // TODO: Load cart from localStorage
    // TODO: Update cart count UI
    // TODO: Render all products initially
    renderProducts(products);
});



