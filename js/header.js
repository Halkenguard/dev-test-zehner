export default function header(){
    return(`
        <div id="header-content" class="container">
            <div id="announcement-bar" class="container">
                Free Shipping On Orders Over $49
            </div>
            <div id="global-nav-desktop" class="container">
                <div id="global-nav-desktop-left" class="container">
                    <div class="nav-item">
                        <div class="shop-dropdown">
                            <button class="shop-dropdown-button">
                                Shop
                            </button>
                        </div>
                    </div>
                    <div class="nav-item">
                        <a href="#">About 4moms</a>
                    </div>
                </div>
                <div id="header-logo" class="container">
                    <a href="/"><img src="./static/logo.svg" alt="4moms logo" /></a>
                </div>
                <div id="global-nav-desktop-right" class="container">
                    <div class="nav-item">
                        <button id="location-dropdown">
                            <img src="./static/location.svg" alt="location icon" />
                            United States
                        </button>
                    </div>
                    <div class="nav-item">
                        <a href="#">Support</a>
                    </div>
                    <div class="nav-item">
                        <button id="search-button">
                            <img src="./static/search.svg" alt="search icon" />
                        </button>
                    </div>
                    <div class="nav-item">
                        <button id="account-button">
                            <img src="./static/account.svg" alt="account icon" />
                        </button>
                    </div>
                    <div class="nav-item">
                        <button id="cart-button">
                            <img src="./static/cart.svg" alt="cart icon" />
                        </button>
                    </div>
                </div>
            </div>
            <div id="global-nav-mobile" class="container">
                <div id="global-nav-mobile-left" class="container">
                    <div class="nav-item">
                        <button id="mobile-hamburger">
                            <img src="./static/hamburger.svg" alt="hamburger icon" />
                        </button>
                    </div>
                    <div class="nav-item">
                        <button id=mobile-account-button>
                            <img src="./static/account.svg" alt="account icon" />
                        </button>
                    </div>
                </div>
                <div id="header-logo-mobile" class="container">
                    <a href="/"><img src="./static/logo.svg" alt="4moms logo" /></a>
                </div>
                <div id="global-nav-mobile-right" class="container">
                    <div class="nav-item">
                        <button id="mobile-search-button">
                            <img src="./static/search.svg" alt="search icon" />
                        </button>
                    </div>
                    <div class="nav-item">
                        <button id="mobile-cart-button">
                            <img src="./static/cart.svg" alt="cart icon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `)
};