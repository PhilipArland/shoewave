document.addEventListener("DOMContentLoaded", () => {

    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.innerHTML = `&copy; ${new Date().getFullYear()} Designed By Flipped. All Rights Reserved.`;
    }

    const images = [
        "assets/img/uploads/shoes1.jpg",
        "assets/img/uploads/shoes2.jpg",
        "assets/img/uploads/shoes3.jpg",
        "assets/img/uploads/shoes4.jpg",
        "assets/img/uploads/shoes5.jpg",
        "assets/img/uploads/shoes6.jpg",
        "assets/img/uploads/shoes7.jpg",
        "assets/img/uploads/shoes8.jpg",
        "assets/img/uploads/shoes9.jpg"
    ];

    const carouselInner = document.getElementById("carouselInner");

    if (carouselInner) {
        images.forEach((img, index) => {
            const item = document.createElement("div");
            item.className = "carousel-item" + (index === 0 ? " active" : "");

            item.innerHTML = `
                <div class="hero-slide" style="background-image: url('${img}');"></div>
            `;

            carouselInner.appendChild(item);
        });
    }

    const productsData = [
        {
            id: 1,
            title: "Vaporfly 4 Proto",
            description: "Engineered for race day, this ultra-lightweight shoe maximizes propulsion with ZoomX foam.",
            price: "$249.99",
            image: "assets/img/uploads/shoes1.jpg",
            category: "running",
            rating: 4.5,
            reviews: 128,
            shipping: true,
            returns: true,
            authentic: true
        },
        {
            id: 2,
            title: "Pegasus 41",
            description: "The everyday runner’s choice – responsive, breathable, and built for durability.",
            price: "$139.99",
            image: "assets/img/uploads/shoes2.jpg",
            category: "running",
            rating: 4.8,
            reviews: 245,
            shipping: true,
            returns: false,
            authentic: true
        },
        {
            id: 3,
            title: "G.T. Cut 3",
            description: "Designed for explosive movement with Zoom Air cushioning and lightweight lockdown.",
            price: "$189.99",
            image: "assets/img/uploads/shoes3.jpg",
            category: "basketball",
            rating: 4.6,
            reviews: 173,
            shipping: true,
            returns: true,
            authentic: false
        },
        {
            id: 4,
            title: "Giannis Immortality 4",
            description: "Built for agility and energy return, this signature shoe features a secure fit and bold look.",
            price: "$129.99",
            image: "assets/img/uploads/shoes4.jpg",
            category: "basketball",
            rating: 4.4,
            reviews: 96,
            shipping: true,
            returns: true,
            authentic: true
        },
        {
            id: 5,
            title: "SB Force 58",
            description: "Combining a skateboarding profile with a laid-back design – durable, cushioned, and stylish.",
            price: "$94.99",
            image: "assets/img/uploads/shoes5.jpg",
            category: "casual",
            rating: 4.2,
            reviews: 81,
            shipping: true,
            returns: false,
            authentic: true
        },
        {
            id: 6,
            title: "SB Dunk Low Pro",
            description: "Iconic low-profile silhouette with premium suede and Zoom Air heel unit for all-day comfort.",
            price: "$109.99",
            image: "assets/img/uploads/shoes6.jpg",
            category: "casual",
            rating: 4.9,
            reviews: 412,
            shipping: false,
            returns: true,
            authentic: true
        },
        {
            id: 7,
            title: "Pegasus Trailer",
            description: "Versatile trail runner with React foam cushioning and durable traction.",
            price: "$159.99",
            image: "assets/img/uploads/shoes7.jpg",
            category: "basketball",
            rating: 4.3,
            reviews: 115,
            shipping: true,
            returns: false,
            authentic: false
        },
        {
            id: 8,
            title: "V2K Run",
            description: "Built for speed, with a sleek design for explosive energy return on every stride.",
            price: "$112.99",
            image: "assets/img/uploads/shoes8.jpg",
            category: "running",
            rating: 4.7,
            reviews: 188,
            shipping: false,
            returns: true,
            authentic: true
        },
        {
            id: 9,
            title: "Air Force 1",
            description: "A timeless classic with iconic street style for a look that never goes out of fashion.",
            price: "$220.99",
            image: "assets/img/uploads/shoes9.jpg",
            category: "casual",
            rating: 5.0,
            reviews: 528,
            shipping: true,
            returns: true,
            authentic: true
        }
    ];

    const productGrid = document.getElementById("productGrid");
    const filterForm = document.getElementById("filterForm");
    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");
    const resetButton = document.getElementById("resetFilter");

    let products = [];

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
                        <a href="product.html?id=${product.id}" class="btn btn-outline-dark w-100">View Details</a>
                    </div>
                </div>
            `;

            productGrid.appendChild(item);
        });

        products = document.querySelectorAll(".product-item");
    }

    renderProducts(productsData);

    function filterProducts() {
        if (!searchInput || !categoryFilter) return;

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

    if (filterForm) {
        filterForm.addEventListener("submit", (e) => {
            e.preventDefault();
            filterProducts();
        });
    }

    if (categoryFilter) {
        categoryFilter.addEventListener("change", filterProducts);
    }

    if (resetButton) {
        resetButton.addEventListener("click", () => {
            searchInput.value = "";
            categoryFilter.value = "";
            filterProducts();
        });
    }

    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    const urlCategory = getQueryParam("category");

    if (urlCategory && categoryFilter) {
        categoryFilter.value = urlCategory;
        filterProducts();
    }

    function generateStars(rating) {
        let stars = "";

        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="bi bi-star-fill"></i>';
        }

        if (hasHalfStar) {
            stars += '<i class="bi bi-star-half"></i>';
        }

        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="bi bi-star"></i>';
        }

        return stars;
    }   

    const productDetailsContainer = document.getElementById("productDetails");

    if (productDetailsContainer) {

        const productId = parseInt(getQueryParam("id"));
        const product = productsData.find(p => p.id === productId);

        if (!product) {
            productDetailsContainer.innerHTML = `
                <div class="text-center py-5">
                    <h3>Product not found</h3>
                    <a href="shop.html" class="btn btn-dark mt-3">Back to Shop</a>
                </div>
            `;
        } else {
            productDetailsContainer.innerHTML = `
                <div class="col-12">
                    <div class="row g-4 align-items-start">
                        <div class="col-md-7">
                            <div class="bg-light rounded-4 p-3 shadow-sm">
                                <div class="row g-3">
                                    <div class="col-2 d-flex flex-column gap-2 align-items-center">
                                        <img class="thumb-img active-thumb" src="${product.image}" data-mirror="false">
                                        <img class="thumb-img mirror" src="${product.image}" data-mirror="true">
                                    </div>
                                    <div class="col-10 position-relative">
                                        <img id="mainProductImage"
                                            src="${product.image}"
                                            class="img-fluid rounded-4 w-100 product-img"
                                            alt="${product.title}">
                                        <span class="position-absolute top-0 start-0 m-3 badge bg-dark px-3 py-2">
                                            ${product.category.toUpperCase()}
                                        </span>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div class="col-md-5 px-3">
                            <h2 class="fw-bold mb-2">${product.title}</h2>
                            <div class="mb-3 text-warning">
                                ${generateStars(product.rating)}
                                <span class="text-muted ms-2 small">
                                    (${product.rating} • ${product.reviews} reviews)
                                </span>
                            </div>

                            <p class="text-muted mb-3">
                                ${product.description}
                            </p>

                            <div class="mb-4">
                                <h3 class="fw-bold text-primary mb-0">${product.price}</h3>
                                <small class="text-muted">Inclusive of all taxes</small>
                            </div>

                            <div class="mb-4">
                                <div class="d-flex flex-wrap gap-2">

                                    ${product.shipping
                                        ? '<span class="badge bg-light text-dark border">Free Shipping</span>'
                                        : ''}

                                    ${product.returns
                                        ? '<span class="badge bg-light text-dark border">Easy Returns</span>'
                                        : ''}

                                    ${product.authentic
                                        ? '<span class="badge bg-light text-dark border">Authentic Product</span>'
                                        : ''}

                                </div>
                            </div>

                            <div class="d-flex gap-2">
                                <button class="btn btn-dark w-50 fw-semibold shadow-sm">
                                    <i class="bi bi-cart-plus me-2"></i>
                                    Add to Cart
                                </button>
                                <button class="btn btn-outline-primary w-50 fw-semibold">
                                    Buy Now
                                </button>
                            </div>
                            <a href="shop.html" class="btn btn-light mt-2 border w-100">
                                <i class="bi bi-arrow-left me-2"></i>
                                Back to Shop
                            </a>
                        </div>

                    </div>
                </div>
                `;
        }
    }

    const mainImage = document.getElementById("mainProductImage");
    const thumbs = document.querySelectorAll(".thumb-img");

    thumbs.forEach(thumb => {
        thumb.addEventListener("click", () => {

            // change image
            mainImage.src = thumb.src;

            // APPLY MIRROR STATE
            if (thumb.dataset.mirror === "true") {
                mainImage.classList.add("mirror");
            } else {
                mainImage.classList.remove("mirror");
            }

            // active state UI
            thumbs.forEach(t => t.classList.remove("active-thumb"));
            thumb.classList.add("active-thumb");
        });
    });

});