console.log('common.js loaded')
/*
    This file is loaded on every page of the app.
    It contains common functions that are used on every page.
*/

// Display the header on every page
function displayHeader() {
    console.log('displayHeader')
    const header = document.createElement('header')
    header.innerHTML = `
    <header>
        <nav>
            <a href="/index.html" class="nav-brand">ZP</a>
            <ul class="navbar-desktop">
                <li><a href="/index.html">Accueil</a></li>
                <li><a href="/pages/inventions.html">Inventions</a></li>
                <li><a href="/pages/about.html">À propos</a></li>
                <li><a href="/pages/contact.html">Contact</a></li>
            </ul>
            <button class="navbar-toggle bg-btn" id="navbar-toggle" onclick="burgerMenu()">ZP</button>
            <ul class="navbar-mobile d-flex d-none" id="navbar-mobile">
                <li><a href="/index.html">Accueil</a></li>
                <li><a href="/pages/inventions.html">Inventions</a></li>
                <li><a href="/pages/about.html">À propos</a></li>
                <li><a href="/pages/contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    `
    document.body.prepend(header)
}

// Display the footer on every page
function displayFooter() {
    console.log('displayFooter')
    const footer = document.createElement('footer')
    footer.innerHTML = `
        <p>&copy; 2024 Zéphyrus Plimplom</p>
    `
    document.body.append(footer)
}

// Burger menu
function burgerMenu() {
    console.log('burgerMenu')
    const navbarMobile = document.getElementById('navbar-mobile')
    navbarMobile.classList.toggle('d-none')
}
