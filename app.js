document.addEventListener('DOMContentLoaded', () => {
    // ==================== 1. PRELOADER ====================
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('fade-out');
        }, 500);
    });

    // ==================== 2. MAHSULOTLAR BAZASI (7 KATEGORIYA x 4 MAHSULOT = 28 TA) ====================
    const productsData = [
        // 1. HOT DOG
        {
            id: 'hd-1',
            name: 'Classic Hot Dog',
            category: 'Hot Dog',
            price: 16000,
            rating: 4.7,
            desc: 'Yumshoq bulochka, mol go‘shtli sosiska, karam salati, ketchup va mayonez.',
            image: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'hd-2',
            name: 'Royal Double Hot Dog',
            category: 'Hot Dog',
            price: 24000,
            rating: 4.9,
            desc: 'Ikkita dudlangan sosiska, eritilgan cheddar pishlog‘i, qovurilgan piyoz va maxsus sous.',
            image: 'https://images.unsplash.com/photo-1541214113241-21578d2d9b62?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'hd-3',
            name: 'Chili Cheese Hot Dog',
            category: 'Hot Dog',
            price: 22000,
            rating: 4.8,
            desc: 'Achchiq xalapenyo qalampiri, pishloqli sous va suvli kurka sosiskasi.',
            image: 'https://images.unsplash.com/photo-1627054247338-46a206b82d5e?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'hd-4',
            name: 'Andijon Mega Hot Dog',
            category: 'Hot Dog',
            price: 27000,
            rating: 5.0,
            desc: 'Katta baget nonida maxsus gril sosiska, pomidor, bodring va mualliflik sousi.',
            image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=600&q=80'
        },

        // 2. LAVASH
        {
            id: 'lv-1',
            name: 'Classic Mol Go‘shtli Lavash',
            category: 'Lavash',
            price: 30000,
            rating: 4.9,
            desc: 'Yupqa xamir, sarxil mol go‘shti, yangi bodring, pomidor, chips va maxsus sous.',
            image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'lv-2',
            name: 'Tandirda Pishloqli Lavash',
            category: 'Lavash',
            price: 34000,
            rating: 5.0,
            desc: 'Tandirda qizartirib pishirilgan lavash, ko‘p miqdorda motsarella pishlog‘i va mol go‘shti.',
            image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'lv-3',
            name: 'Tovuqli Grill Lavash',
            category: 'Lavash',
            price: 28000,
            rating: 4.8,
            desc: 'Ziravorlarda marinadlangan tovuq filesi, sarxil sabzavotlar va sarimsoqli sous.',
            image: 'https://images.unsplash.com/photo-1644704170910-a0cdf183649b?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'lv-4',
            name: 'Achchiq Chili Lavash',
            category: 'Lavash',
            price: 32000,
            rating: 4.8,
            desc: 'Achchiq ta’m shinavandalari uchun maxsus chili sousli va xalapenyo qo‘shilgan lavash.',
            image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=80'
        },

        // 3. PIZZA
        {
            id: 'pz-1',
            name: 'Pepperoni Pizza (32 sm)',
            category: 'Pizza',
            price: 72000,
            rating: 4.9,
            desc: 'Italiya retsepti asosida xamir, dudlangan kolbasa, motsarella pishlog‘i va tomat sousi.',
            image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'pz-2',
            name: 'Margarita Pizza (32 sm)',
            category: 'Pizza',
            price: 62000,
            rating: 4.7,
            desc: 'Klassik italyan pizzasi: yangi pomidorlar, rayhon barglari va cho‘ziluvchan motsarella.',
            image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'pz-3',
            name: 'Go‘shtli Assorti Pizza (32 sm)',
            category: 'Pizza',
            price: 85000,
            rating: 5.0,
            desc: 'Mol go‘shti, tovuq go‘shti, dudlangan kolbasa, qo‘ziqorin, zaytun va ikki xil pishloq.',
            image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'pz-4',
            name: 'Tovuqli BBQ Pizza (32 sm)',
            category: 'Pizza',
            price: 75000,
            rating: 4.8,
            desc: 'Grilda pishgan tovuq bo‘laklari, qizil piyoz, barbekyu sousi va motsarella.',
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80'
        },

        // 4. BURGER
        {
            id: 'bg-1',
            name: 'Classic Beef Burger',
            category: 'Burger',
            price: 29000,
            rating: 4.8,
            desc: '100% halol mol go‘shtidan kotlet, aysberg salati, pomidor, tuzlangan bodring va sous.',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'bg-2',
            name: 'Double Cheeseburger',
            category: 'Burger',
            price: 39000,
            rating: 5.0,
            desc: 'Ikki qavat suvli mol go‘shti kotleti, ikki qavat cheddar pishlog‘i va maxsus grill sousi.',
            image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'bg-3',
            name: 'Crispy Chicken Burger',
            category: 'Burger',
            price: 27000,
            rating: 4.8,
            desc: 'Qarsildoq panirovkada qovurilgan tovuq filesi, yangi salat va qaymoqli sous.',
            image: 'https://images.unsplash.com/photo-1615297928064-24977384d0da?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'bg-4',
            name: 'Andijon Black Burger',
            category: 'Burger',
            price: 42000,
            rating: 4.9,
            desc: 'Qora kunjutli bulochka, katta bifshteks, karamellashgan piyoz va trufel sousi.',
            image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80'
        },

        // 5. DONAR
        {
            id: 'dn-1',
            name: 'Classic Donar Kebab',
            category: 'Donar',
            price: 28000,
            rating: 4.8,
            desc: 'Yumshoq turk nonida pishirilgan mol go‘shti, yangi sabzavotlar va maxsus qizil sous.',
            image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'dn-2',
            name: 'Tovuqli Donar',
            category: 'Donar',
            price: 25000,
            rating: 4.7,
            desc: 'Xushbo‘y ziravorli tovuq go‘shti, pomidor, bodring va sarimsoqli yogurt sousi.',
            image: 'https://images.unsplash.com/photo-1633321702518-7feccafb94d5?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'dn-3',
            name: 'Iskandar Donar (Porsiya)',
            category: 'Donar',
            price: 45000,
            rating: 5.0,
            desc: 'Likopchada tortiladigan maxsus taom: go‘sht, qovurilgan non, sariyog‘, tomat sousi va suzma.',
            image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'dn-4',
            name: 'Donar Box (Fri bilan)',
            category: 'Donar',
            price: 34000,
            rating: 4.9,
            desc: 'Qutida qulay tortiladigan mol go‘shti donari, kartoshka fri va yangi sabzavotlar.',
            image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80'
        },

        // 6. GAZLI ICHIMLIKLAR
        {
            id: 'gz-1',
            name: 'Coca-Cola 0.5L',
            category: 'Gazli ichimliklar',
            price: 9000,
            rating: 4.9,
            desc: 'Muzdek tetiklantiruvchi klassik Coca-Cola (0.5 litr).',
            image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'gz-2',
            name: 'Fanta Orange 0.5L',
            category: 'Gazli ichimliklar',
            price: 9000,
            rating: 4.8,
            desc: 'Apelsin ta’mli yorqin va gazlangan salqin ichimlik.',
            image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'gz-3',
            name: 'Sprite 0.5L',
            category: 'Gazli ichimliklar',
            price: 9000,
            rating: 4.8,
            desc: 'Limon va laym ta’mli tiniq tetiklantiruvchi gazli ichimlik.',
            image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'gz-4',
            name: 'Maxsus Moxito (Gazli)',
            category: 'Gazli ichimliklar',
            price: 16000,
            rating: 5.0,
            desc: 'Yangi yalpiz barglari, laym bo‘laklari, muz va gazlangan suv asosidagi ichimlik.',
            image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80'
        },

        // 7. GAZSIZ ICHIMLIKLAR
        {
            id: 'gs-1',
            name: 'Tabiiy Olma Sharbati 0.5L',
            category: 'Gazsiz ichimliklar',
            price: 11000,
            rating: 4.8,
            desc: 'Shirin va foydali tabiiy olma sharbati.',
            image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'gs-2',
            name: 'Yangi Siqilgan Apelsin Sharbati',
            category: 'Gazsiz ichimliklar',
            price: 18000,
            rating: 5.0,
            desc: '100% tabiiy, yangi siqilgan vitaminlarga boy apelsin sharbati.',
            image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'gs-3',
            name: 'Muzdek Choy (Ice Tea Limon)',
            category: 'Gazsiz ichimliklar',
            price: 10000,
            rating: 4.7,
            desc: 'Limonli salqin ko‘k va qora choy.',
            image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 'gs-4',
            name: 'Toza Ichimlik Suvi 0.5L',
            category: 'Gazsiz ichimliklar',
            price: 5000,
            rating: 4.9,
            desc: 'Gazlanmagan toza tog‘ suvi (0.5 litr).',
            image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=600&q=80'
        }
    ];

    // Narxni chiroyli formatlash funksiyasi (masalan: 30 000 so'm)
    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + " so'm";
    };

    // ==================== 3. TOAST BILDIRISHNOMALAR ====================
    const toastContainer = document.getElementById('toast-container');
    function showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        const icon = type === 'success' ? 'fa-check-circle' : (type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle');
        toast.innerHTML = `<i class="fas ${icon}"></i> <span>${message}</span>`;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(-100%)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // ==================== 4. MENYUNI CHIZISH, FILTER VA QIDIRUV ====================
    const menuGrid = document.getElementById('menu-grid');
    const categoryTabs = document.getElementById('category-tabs');
    const searchInput = document.getElementById('menu-search');
    const clearSearchBtn = document.getElementById('clear-search');
    const noResultsBox = document.getElementById('no-results');
    const resetFiltersBtn = document.getElementById('reset-filters-btn');

    let currentCategory = 'all';
    let currentSearch = '';

    function renderMenu() {
        const filtered = productsData.filter(item => {
            const matchCat = currentCategory === 'all' || item.category === currentCategory;
            const matchSearch = item.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
                                item.desc.toLowerCase().includes(currentSearch.toLowerCase());
            return matchCat && matchSearch;
        });

        menuGrid.innerHTML = '';

        if (filtered.length === 0) {
            noResultsBox.classList.remove('hidden');
            return;
        } else {
            noResultsBox.classList.add('hidden');
        }

        filtered.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-img-box">
                    <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://placehold.co/600x400/1a1a1a/ff6b00?text=ANDIJON+FOOD'">
                    <span class="product-category-tag">${product.category}</span>
                    <span class="product-rating"><i class="fas fa-star"></i> ${product.rating}</span>
                </div>
                <div class="product-body">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-desc">${product.desc}</p>
                    <div class="product-footer">
                        <span class="product-price">${formatPrice(product.price)}</span>
                        <button class="btn btn-primary add-to-cart-btn" data-id="${product.id}">
                            <i class="fas fa-cart-plus"></i> Savatga
                        </button>
                    </div>
                </div>
            `;
            menuGrid.appendChild(card);
        });
    }

    // Kategoriya tugmalari
    categoryTabs.addEventListener('click', (e) => {
        if (e.target.classList.contains('cat-btn')) {
            document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.dataset.category;
            renderMenu();
        }
    });

    // Qidiruv inputi
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.trim();
        clearSearchBtn.classList.toggle('visible', currentSearch.length > 0);
        renderMenu();
    });

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        currentSearch = '';
        clearSearchBtn.classList.remove('visible');
        renderMenu();
    });

    resetFiltersBtn.addEventListener('click', () => {
        searchInput.value = '';
        currentSearch = '';
        currentCategory = 'all';
        clearSearchBtn.classList.remove('visible');
        document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector('.cat-btn[data-category="all"]').classList.add('active');
        renderMenu();
    });

    // Dastlabki menyuni chiqarish
    renderMenu();

    // ==================== 5. SAVATCHA (SHOPPING CART & LOCALSTORAGE) ====================
    let cart = JSON.parse(localStorage.getItem('andijon_food_cart')) || [];

    const cartDrawer = document.getElementById('cart-drawer');
    const cartOverlay = document.getElementById('cart-overlay');
    const openCartBtn = document.getElementById('open-cart-btn');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartCountBadge = document.getElementById('cart-count');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const clearCartBtn = document.getElementById('clear-cart-btn');
    const proceedCheckoutBtn = document.getElementById('proceed-checkout-btn');

    function saveCart() {
        localStorage.setItem('andijon_food_cart', JSON.stringify(cart));
        updateCartUI();
    }

    function addToCart(productObj) {
        const existing = cart.find(item => item.id === productObj.id);
        if (existing) {
            existing.qty += 1;
        } else {
            cart.push({ ...productObj, qty: 1 });
        }
        saveCart();
        showToast(`"${productObj.name}" savatchaga qo'shildi!`, 'success');
    }

    function updateCartUI() {
        // Umumiy soni va summasi
        const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
        const totalSum = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

        cartCountBadge.textContent = totalQty;
        cartTotalPrice.textContent = formatPrice(totalSum);

        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart-msg">
                    <i class="fas fa-shopping-basket"></i>
                    <h4>Savatchangiz bo'sh</h4>
                    <p>Mazali taomlardan birini tanlab savatchaga qo'shing!</p>
                </div>
            `;
            proceedCheckoutBtn.disabled = true;
            proceedCheckoutBtn.style.opacity = '0.5';
            return;
        }

        proceedCheckoutBtn.disabled = false;
        proceedCheckoutBtn.style.opacity = '1';

        cart.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item';
            itemEl.innerHTML = `
                <img src="${item.image}" alt="${item.name}" onerror="this.src='https://placehold.co/100x100/1a1a1a/ff6b00?text=FOOD'">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <span class="cart-item-price">${formatPrice(item.price * item.qty)}</span>
                    <div class="cart-qty-controls">
                        <button class="qty-btn minus-btn" data-id="${item.id}">-</button>
                        <span>${item.qty}</span>
                        <button class="qty-btn plus-btn" data-id="${item.id}">+</button>
                    </div>
                </div>
                <button class="remove-item-btn" data-id="${item.id}" title="O'chirish">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            cartItemsContainer.appendChild(itemEl);
        });
    }

    // Menyu kartalaridan savatchaga qo'shish
    menuGrid.addEventListener('click', (e) => {
        const btn = e.target.closest('.add-to-cart-btn');
        if (btn) {
            const id = btn.dataset.id;
            const product = productsData.find(p => p.id === id);
            if (product) addToCart(product);
        }
    });

    // Aksiya kartalaridan savatchaga qo'shish
    document.querySelectorAll('.add-combo-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            addToCart({
                id: btn.dataset.id,
                name: btn.dataset.name,
                price: parseInt(btn.dataset.price),
                image: btn.dataset.img
            });
        });
    });

    // Savatcha ichidagi +, - va o'chirish tugmalari
    cartItemsContainer.addEventListener('click', (e) => {
        const plusBtn = e.target.closest('.plus-btn');
        const minusBtn = e.target.closest('.minus-btn');
        const removeBtn = e.target.closest('.remove-item-btn');

        if (plusBtn) {
            const item = cart.find(i => i.id === plusBtn.dataset.id);
            if (item) { item.qty++; saveCart(); }
        } else if (minusBtn) {
            const index = cart.findIndex(i => i.id === minusBtn.dataset.id);
            if (index > -1) {
                if (cart[index].qty > 1) {
                    cart[index].qty--;
                } else {
                    cart.splice(index, 1);
                }
                saveCart();
            }
        } else if (removeBtn) {
            cart = cart.filter(i => i.id !== removeBtn.dataset.id);
            saveCart();
            showToast("Mahsulot savatchadan o'chirildi", 'info');
        }
    });

    // Savatchani tozalash
    clearCartBtn.addEventListener('click', () => {
        if (cart.length === 0) return;
        cart = [];
        saveCart();
        showToast("Savatcha tozalandi", 'info');
    });

    // Savatchani ochish/yopish
    function openCart() {
        cartDrawer.classList.add('open');
        cartOverlay.classList.add('active');
    }
    function closeCart() {
        cartDrawer.classList.remove('open');
        cartOverlay.classList.remove('active');
    }

    openCartBtn.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    updateCartUI();

    // ==================== 6. MODAL OYNALAR BOSHQARUVI ====================
    function openModal(modalId) {
        document.getElementById(modalId).classList.add('open');
    }
    function closeModal(modalId) {
        document.getElementById(modalId).classList.remove('open');
    }

    document.querySelectorAll('.close-modal-btn, [data-close]').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.dataset.close;
            if (targetId) closeModal(targetId);
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('open');
        }
    });

    // ==================== 7. RO'YXATDAN O'TISH VA LOGIN (DEMO) ====================
    const authUserArea = document.getElementById('auth-user-area');
    const authTabBtns = document.querySelectorAll('.auth-tab-btn');
    const authFormBoxes = document.querySelectorAll('.auth-form-box');
    const switchAuthLinks = document.querySelectorAll('.switch-auth-link');

    function switchAuthTab(targetId) {
        authTabBtns.forEach(b => b.classList.toggle('active', b.dataset.target === targetId));
        authFormBoxes.forEach(box => box.classList.toggle('active', box.id === targetId));
    }

    document.querySelectorAll('.open-auth-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            switchAuthTab('login-form-box');
            openModal('auth-modal');
        });
    });

    authTabBtns.forEach(btn => {
        btn.addEventListener('click', () => switchAuthTab(btn.dataset.target));
    });

    switchAuthLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            switchAuthTab(link.dataset.target);
        });
    });

    // Parolni ko'rsatish / yashirish
    document.querySelectorAll('.toggle-password').forEach(btn => {
        btn.addEventListener('click', () => {
            const input = document.getElementById(btn.dataset.target);
            const icon = btn.querySelector('i');
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.replace('fa-eye', 'fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.replace('fa-eye-slash', 'fa-eye');
            }
        });
    });

    // Validatsiya yordamchi funksiyalari
    function setError(input, message) {
        const group = input.closest('.form-group');
        group.classList.add('error');
        group.querySelector('.error-msg').textContent = message;
    }

    function clearError(input) {
        const group = input.closest('.form-group');
        group.classList.remove('error');
        group.querySelector('.error-msg').textContent = '';
    }

    // Foydalanuvchi holatini yangilash
    function updateAuthUI() {
        const currentUser = JSON.parse(localStorage.getItem('andijon_food_user'));
        if (currentUser) {
            authUserArea.innerHTML = `
                <div class="user-profile-pill">
                    <i class="fas fa-user-check"></i>
                    <span>${currentUser.name}</span>
                    <button class="logout-btn" id="logout-btn" title="Chiqish"><i class="fas fa-sign-out-alt"></i></button>
                </div>
            `;
            document.getElementById('logout-btn').addEventListener('click', () => {
                localStorage.removeItem('andijon_food_user');
                updateAuthUI();
                showToast("Tizimdan chiqdingiz", 'info');
            });
        } else {
            authUserArea.innerHTML = `
                <button class="btn btn-primary open-auth-btn" id="header-auth-btn" data-tab="login">
                    <i class="fas fa-user"></i> <span>Kirish</span>
                </button>
            `;
            document.getElementById('header-auth-btn').addEventListener('click', () => {
                switchAuthTab('login-form-box');
                openModal('auth-modal');
            });
        }
    }

    // Ro'yxatdan o'tish formasi
    const registerForm = document.getElementById('register-form');
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('reg-name');
        const phone = document.getElementById('reg-phone');
        const email = document.getElementById('reg-email');
        const pass = document.getElementById('reg-password');
        const confirmPass = document.getElementById('reg-confirm-password');

        let isValid = true;
        [name, phone, email, pass, confirmPass].forEach(clearError);

        if (name.value.trim().length < 2) {
            setError(name, "Ism kamida 2 ta harfdan iborat bo'lishi kerak");
            isValid = false;
        }
        if (phone.value.trim().length < 9) {
            setError(phone, "To'g'ri telefon raqamini kiriting");
            isValid = false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
            setError(email, "Email manzili noto'g'ri kiritildi");
            isValid = false;
        }
        if (pass.value.length < 6) {
            setError(pass, "Parol kamida 6 ta belgidan iborat bo'lishi kerak");
            isValid = false;
        }
        if (pass.value !== confirmPass.value) {
            setError(confirmPass, "Parollar bir-biriga mos kelmadi");
            isValid = false;
        }

        if (isValid) {
            const userObj = {
                name: name.value.trim(),
                phone: phone.value.trim(),
                email: email.value.trim()
            };
            localStorage.setItem('andijon_food_user', JSON.stringify(userObj));
            updateAuthUI();
            registerForm.reset();
            closeModal('auth-modal');
            showToast(`Xush kelibsiz, ${userObj.name}! Ro'yxatdan o'tish muvaffaqiyatli yakunlandi.`, 'success');
        }
    });

    // Login formasi
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const identifier = document.getElementById('login-identifier');
        const password = document.getElementById('login-password');
        let isValid = true;
        [identifier, password].forEach(clearError);

        if (identifier.value.trim().length < 5) {
            setError(identifier, "Email yoki telefon raqamingizni kiriting");
            isValid = false;
        }
        if (password.value.length < 6) {
            setError(password, "Parol kamida 6 ta belgi bo'lishi kerak");
            isValid = false;
        }

        if (isValid) {
            const demoUser = {
                name: identifier.value.includes('@') ? identifier.value.split('@')[0] : 'Mijoz',
                phone: identifier.value
            };
            localStorage.setItem('andijon_food_user', JSON.stringify(demoUser));
            updateAuthUI();
            loginForm.reset();
            closeModal('auth-modal');
            showToast("Tizimga muvaffaqiyatli kirdingiz!", 'success');
        }
    });

    updateAuthUI();

    // ==================== 8. BUYURTMA BERISH (CHECKOUT) ====================
    const checkoutItemsList = document.getElementById('checkout-items-list');
    const checkoutTotalPrice = document.getElementById('checkout-total-price');
    const checkoutForm = document.getElementById('checkout-form');
    const paymentRadios = document.querySelectorAll('input[name="payment"]');
    const paymentDemoAlert = document.getElementById('payment-demo-alert');

    proceedCheckoutBtn.addEventListener('click', () => {
        if (cart.length === 0) return;
        closeCart();

        // Buyurtma ro'yxatini to'ldirish
        checkoutItemsList.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const sub = item.price * item.qty;
            total += sub;
            const row = document.createElement('div');
            row.className = 'checkout-item-row';
            row.innerHTML = `<span>${item.name} <strong>x${item.qty}</strong></span><span>${formatPrice(sub)}</span>`;
            checkoutItemsList.appendChild(row);
        });
        checkoutTotalPrice.textContent = formatPrice(total);

        // Agar foydalanuvchi tizimga kirgan bo'lsa ma'lumotlarni avtomatik qo'yish
        const savedUser = JSON.parse(localStorage.getItem('andijon_food_user'));
        if (savedUser) {
            document.getElementById('order-name').value = savedUser.name || '';
            if (savedUser.phone && savedUser.phone.startsWith('+')) {
                document.getElementById('order-phone').value = savedUser.phone;
            }
        }

        openModal('checkout-modal');
    });

    // Click yoki Payme tanlanganda ogohlantirish chiqarish
    paymentRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.value === 'Click' || e.target.value === 'Payme') {
                paymentDemoAlert.classList.add('visible');
            } else {
                paymentDemoAlert.classList.remove('visible');
            }
        });
    });

    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('order-name');
        const phone = document.getElementById('order-phone');
        const address = document.getElementById('order-address');
        const payment = document.querySelector('input[name="payment"]:checked').value;

        let isValid = true;
        [name, phone, address].forEach(clearError);

        if (name.value.trim().length < 2) {
            setError(name, "Ismingizni kiriting");
            isValid = false;
        }
        if (phone.value.trim().length < 9) {
            setError(phone, "Bog'lanish uchun telefon raqamingizni kiriting");
            isValid = false;
        }
        if (address.value.trim().length < 5) {
            setError(address, "Yetkazib berish manzilini to'liqroq kiriting");
            isValid = false;
        }

        if (isValid) {
            const totalSum = cart.reduce((s, i) => s + (i.price * i.qty), 0);
            const orderNumber = Math.floor(1000 + Math.random() * 9000);

            document.getElementById('order-success-details').innerHTML = `
                Hurmatli <strong>${name.value.trim()}</strong>! Sizning <strong>#${orderNumber}</strong>-raqamli buyurtmangiz qabul qilindi.<br><br>
                <strong>Manzil:</strong> ${address.value.trim()}<br>
                <strong>To'lov turi:</strong> ${payment}<br>
                <strong>Umumiy summa:</strong> ${formatPrice(totalSum)}
            `;

            // Savatchani tozalash
            cart = [];
            saveCart();
            checkoutForm.reset();
            paymentDemoAlert.classList.remove('visible');
            closeModal('checkout-modal');
            openModal('order-success-modal');
        }
    });

    // ==================== 9. NAVBAR, HAMBURGER VA SCROLL EFFEKTLARI ====================
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const backToTopBtn = document.getElementById('back-to-top');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    window.addEventListener('scroll', () => {
        // Sticky navbar
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Back to top
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }

        // Scroll Reveal
        document.querySelectorAll('.reveal').forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < window.innerHeight - 80) {
                el.classList.add('active');
            }
        });

        // Active link highlight
        let currentSection = '';
        document.querySelectorAll('section').forEach(sec => {
            const sectionTop = sec.offsetTop - 130;
            if (window.scrollY >= sectionTop) {
                currentSection = sec.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });

    // Dastlabki reveal elementlarini ishga tushirish
    window.dispatchEvent(new Event('scroll'));

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ==================== 10. TESTIMONIALS SLIDER ====================
    const slides = document.querySelectorAll('.testimonial-card');
    const prevSlideBtn = document.getElementById('prev-slide');
    const nextSlideBtn = document.getElementById('next-slide');
    const dotsContainer = document.getElementById('slider-dots');
    let currentSlide = 0;

    // Nuqtalarni yaratish
    slides.forEach((_, idx) => {
        const dot = document.createElement('span');
        dot.className = `dot ${idx === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(idx));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    nextSlideBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
    prevSlideBtn.addEventListener('click', () => goToSlide(currentSlide - 1));

    // Avtomatik slayd (har 6 soniyada)
    setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 6000);
});