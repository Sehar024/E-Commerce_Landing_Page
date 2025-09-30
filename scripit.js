document.addEventListener('DOMContentLoaded', function() {
      // Search functionality
      const searchButton = document.querySelector('.search-button');
      const searchInput = document.querySelector('.search-input');
      const categorySelect = document.querySelector('.category-select');
      
      searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim();
        const selectedCategory = categorySelect.value;
        
        if (searchTerm !== '') {
          alert(`Searching for "${searchTerm}" in category: ${selectedCategory}`);
          // Here you would typically handle search, like:
          // window.location.href = `/search?q=${encodeURIComponent(searchTerm)}&category=${encodeURIComponent(selectedCategory)}`;
        } else {
          alert('Please enter a search term');
        }
      });
      
      // User action handlers
      const actionItems = document.querySelectorAll('.action-item');
      actionItems.forEach(item => {
        item.addEventListener('click', function() {
          const actionType = this.querySelector('div:last-child').textContent;
          alert(`You clicked on ${actionType}`);
        });
      });
      
      // Navigation handlers
      /*const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        link.addEventListener('click', function() {
          const linkText = this.textContent.split(' ')[0]; // Remove dropdown icon ▼ if present
          alert(`Navigating to ${linkText}`);
        });
      });*/
      
      // Category menu toggle
      const categoryMenu = document.querySelector('.category-menu');
      categoryMenu.addEventListener('click', function() {
        alert('Opening category menu');
        // Here you would typically toggle a dropdown menu
      });
      
      // Language and shipping selectors
      const languageSelector = document.querySelector('.language-selector');
      const shippingSelector = document.querySelector('.shipping-selector');
      
      languageSelector.addEventListener('click', function() {
        alert('Opening language and currency options');
      });
      
      shippingSelector.addEventListener('click', function() {
        alert('Opening shipping destination options');
      });

      // Toggle language dropdown
        document.querySelector('.language-selector').addEventListener('click', function() {
            this.classList.toggle('active');
            document.querySelector('.language-dropdown').classList.toggle('show');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.language-selector')) {
                document.querySelector('.language-dropdown').classList.remove('show');
                document.querySelector('.language-selector').classList.remove('active');
            }
        });

        // Form submission handling
        document.querySelector('.email-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (email) {
                alert('Thank you for subscribing to our newsletter!');
                this.reset();
            }
        });

    });
      
    // Deals & Offers Handling  
  const deals = [
    { name: "Smart watches", discount: "25%", image: "assets/product images/smart-watch.jpg" },
    { name: "Laptops", discount: "15%", image: "assets/product images/laptops.jpg" },
    { name: "GoPro cameras", discount: "40%", image: "assets/product images/gopro-cameras.webp" },
    { name: "Headphones", discount: "25%", image: "assets/product images/headphones.webp" },
    { name: "Canon cameras", discount: "25%", image: "assets/product images/canon-cameras.png" },

  ];

  function renderDeals(){
    const container = document.getElementById("deals-grid");
    if (!container) return;
    container.innerHTML = "";
    deals.forEach(deal => {
      container.innerHTML += `
        <div class="deal-card">
          <img src="${deal.image}" alt="${deal.name}">
          <h3>${deal.name}</h3>
          <div class="discount">-${deal.discount}</div>
        </div>
      `;
    });
  }
  function startCountdown() {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 4);
    endDate.setHours(endDate.getHours() + 5);
    endDate.setMinutes(endDate.getMinutes() + 12);
    endDate.setSeconds(endDate.getSeconds() + 59);
  
    const countdown = setInterval(() => {
      const now = new Date();
      const distance = endDate - now;
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById("days").textContent = days.toString().padStart(2, "0");
      document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
      document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
      document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
  
      if (distance < 0) {
        clearInterval(countdown);
        document.querySelector(".countdown-timer").innerHTML = "Offer Expired";
      }
    }, 1000);
  }
  startCountdown();
              // Product ShowCase
  const homeOutdoor = [
    { name: "Soft chairs", price: 19.00, image: "assets/product images/sofa-chairs.jpg" },
    { name: "Sofa & chair", price: 19.00, image: "assets/product images/lamp.avif" },
    { name: "Kitchen dishes", price: 19.00, image: "assets/product images/5.png" },
    { name: "Smart watches", price: 19.00, image: "assets/product images/3.png" },
    { name: "Kitchen mixer", price: 100.00, image: "assets/product images/10.png" },
    { name: "Blenders", price: 39.00, image: "assets/product images/8.png" },
    { name: "Home appliance", price: 19.00, image: "assets/product images/7.png" },
    { name: "Coffee maker", price: 10.00, image: "assets/product images/vase.png" },
  ];
  function renderHomeOutdoor() {
    const container = document.getElementById("home-outdoor-grid");
    if (!container) return;
    container.innerHTML = "";
    homeOutdoor.forEach(product => {
      container.innerHTML += `
        <article class="product-card">
          <div class="product-card__content">
            <div class="product-card__info">
              <h3 class="product-card__title">${product.name}</h3>
              <p class="product-card__price">From <br>USD ${product.price.toFixed(2)}</p>
            </div>
            <img src="${product.image}" alt="${product.name}" class="product-card__image" />
          </div>
        </article>
      `;
    });
  }
  document.getElementById("sourceNowBtn").addEventListener("click", function(){

  });
                  //Elctronic Products
  const electronics = [
    { name: "Tablet PC", price: 19.00, image: "assets/product images/tablet pc.jpg" },
    { name: "Tablets", price: 19.00, image: "assets/product images/tablets.jpg" },
    { name: "Smartphones", price: 19.00, image: "assets/product images/2.png" },
    { name: "Smartphones", price: 19.00, image: "assets/product images/1.png" },
    { name: "Headphones", price: 100.00, image: "assets/product images/headphones.webp" },
    { name: "Cameras", price: 39.00, image: "assets/product images/gopro-cameras.webp" },
    { name: "Laptops & PC", price: 19.00, image: "assets/product images/laptops.jpg" },
    { name: "Smart watches", price: 10.00, image: "assets/product images/smart-watch.jpg" },
  ];
  function renderElectronics() {
    const container = document.getElementById("electronics-grid");
    if (!container) return;
    container.innerHTML = "";
    electronics.forEach(product => {
      container.innerHTML += `
        <article class="product-card">
          <div class="product-card__content">
            <div class="product-card__info">
              <h3 class="product-card__title">${product.name}</h3>
              <p class="product-card__price">From <br>USD ${product.price.toFixed(2)}</p>
            </div>
            <img src="${product.image}" alt="${product.name}" class="product-card__image" />
          </div>
        </article>
      `;
    });
  }



  const recommended = [
    { price: 10.30, desc: "Jeans shorts for men blue color", image: "assets/product images/shirt.png" },
    { price: 10.30, desc: "Jaket for men", image: "assets/product images/jaket.jpg" },
    { price: 12.50, desc: "wascost for men blue color", image: "assets/product images/wascoat.png" },
    { price: 34.00, desc: "Jeans wallet in blue color", image: "assets/product images/wallet.png" },
    { price: 99.00, desc: "Jeans bag in blu color", image: "assets/product images/lather bag.png" },
    { price: 9.99, desc: "Smart Watches", image: "assets/product images/smart-watch.jpg" },
    { price: 8.99, desc: "Gaming Headphones", image: "assets/product images/5 (2).png" },
    { price: 10.30, desc: "Cameras", image: "assets/product images/gopro-cameras.webp" },
    { price: 10.30, desc: " Ligthing Lamps for room", image: "assets/product images/lamp.avif" },
    { price: 80.95, desc: "Laptops", image: "assets/product images/laptops.jpg" },
  ];
  
  function renderRecommended() {
    const container = document.getElementById("recommended-grid");
    if (!container) return;
    container.innerHTML = "";
    recommended.forEach(item => {
      container.innerHTML += `
        <article class="product-container">
          <div class="product-image-wrapper">
            <img src="${item.image}" alt="${item.desc}" class="product-image">
          </div>
          <p class="product-price">$${item.price.toFixed(2)}</p>
          <h3 class="product-name">${item.desc}</h3>
        </article>
      `;
    });
  }
  
  renderElectronics();

   document.addEventListener("DOMContentLoaded", () => {
    renderDeals();
    renderHomeOutdoor();
    renderElectronics();
    renderRecommended();
    startCountdown();
  });

