// =====================
// FOOTER YEAR
// =====================
document.addEventListener("DOMContentLoaded", () => {

    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.innerHTML = `&copy; ${new Date().getFullYear()} Designed By Flipped. All Rights Reserved.`;
    }

    // =====================
    // PRODUCT DATA
    // =====================
    const productsData = [
        {
            title: "Vaporfly 4 Proto",
            description: "Engineered for race day, this ultra-lightweight shoe maximizes propulsion with ZoomX foam.",
            price: "$249.99",
            image: "assets/img/uploads/shoes1.jpg",
            category: "running"
        },
        {
            title: "Pegasus 41",
            description: "The everyday runner’s choice – responsive, breathable, and built for durability.",
            price: "$139.99",
            image: "assets/img/uploads/shoes2.jpg",
            category: "running"
        },
        {
            title: "G.T. Cut 3",
            description: "Designed for explosive movement with Zoom Air cushioning and lightweight lockdown.",
            price: "$189.99",
            image: "assets/img/uploads/shoes3.jpg",
            category: "basketball"
        },
        {
            title: "Giannis Immortality 4",
            description: "Built for agility and energy return, this signature shoe features a secure fit and bold look.",
            price: "$129.99",
            image: "assets/img/uploads/shoes4.jpg",
            category: "basketball"
        },
        {
            title: "SB Force 58",
            description: "Combining a skateboarding profile with a laid-back design – durable, cushioned, and stylish.",
            price: "$94.99",
            image: "assets/img/uploads/shoes5.jpg",
            category: "casual"
        },
        {
            title: "SB Dunk Low Pro",
            description: "Iconic low-profile silhouette with premium suede and Zoom Air heel unit for all-day comfort.",
            price: "$109.99",
            image: "assets/img/uploads/shoes6.jpg",
            category: "casual"
        },
        {
            title: "Pegasus Trailer",
            description: "Versatile trail runner with React foam cushioning and durable traction.",
            price: "$159.99",
            image: "assets/img/uploads/shoes7.jpg",
            category: "basketball"
        },
        {
            title: "V2K Run",
            description: "Built for speed, with a sleek design for explosive energy return on every stride.",
            price: "$112.99",
            image: "assets/img/uploads/shoes8.jpg",
            category: "running"
        },
        {
            title: "Air Force 1",
            description: "A timeless classic with iconic street style for a look that never goes out of fashion.",
            price: "$220.99",
            image: "assets/img/uploads/shoes9.jpg",
            category: "casual"
        }
    ];

    const productGrid = document.getElementById("productGrid");
    const filterForm = document.getElementById("filterForm");
    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");
    const resetButton = document.getElementById("resetFilter");

    let products = [];

    // =====================
    // RENDER PRODUCTS
    // =====================
    function renderProducts(data) {
        if (!productGrid) return;

        productGrid.innerHTML = "";

        data.forEach(product => {
            const item = document.createElement("div");
            item.className = "col-md-6 col-lg-4 product-item";
            item.dataset.category = product.category;

            item.innerHTML = `
                <div class="card p-3 border-0">
                    <img src="${product.image}" class="card-img-top rounded" alt="${product.title}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="small">${product.description}</p>
                        <p class="fw-bold text-primary">${product.price}</p>
                    </div>
                </div>
            `;

            productGrid.appendChild(item);
        });

        products = document.querySelectorAll(".product-item");
    }

    // initial render
    renderProducts(productsData);

    // =====================
    // FILTER FUNCTION
    // =====================
    function filterProducts() {
        const searchText = searchInput.value.toLowerCase().trim();
        const category = categoryFilter.value;

        products.forEach(product => {
            const title = product.querySelector(".card-title").textContent.toLowerCase();
            const productCategory = product.dataset.category;

            const matchSearch = title.includes(searchText);
            const matchCategory = !category || productCategory === category;

            product.style.display = (matchSearch && matchCategory) ? "" : "none";
        });
    }

    // submit filter
    filterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        filterProducts();
    });

    // live category change
    categoryFilter.addEventListener("change", filterProducts);

    // reset
    resetButton.addEventListener("click", () => {
        searchInput.value = "";
        categoryFilter.value = "";
        filterProducts();
    });

});