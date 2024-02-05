console.log('inventions.js loaded');
/* 
    This file is responsible for displaying the inventions on the home page and the inventions page
    And for displaying the details of an invention on the show invention page.
*/

/*
    This function is responsible for displaying the inventions on the home page.
    It gets the target element from the DOM and creates a card for each invention to display.
    It uses the displayInventionDetailsCard function to create the cards.
*/
function displayInventionsHome() {
    // Get target element from the DOM to display the inventions
    const htmlTarget = document.getElementById('inventions_list');
    // Clear the list
    htmlTarget.innerHTML = '';
    // Create and Display Card for 3 inventions
    for (let i = 0; i < 3; i++) {
        displayInventionDetailsCard(htmlTarget, inventions[i]);
    }
}

/*
    This function is responsible for displaying the details of an invention in a card.
    It takes an HTML element and an invention object as parameters.
    It creates a card with the details of the invention and appends it to the HTML element.
*/
function displayInventionDetailsCard(htmlTarget, invention) {
    // Create a card for the invention
    // Use the invention object to display the details (name, image, description)
    const card = `
    <div class="invention">
        <img src="/assets/images/inventions/${invention.image}" alt="${invention.name}">
        <h3>${invention.name}</h3>
        <p>${
            invention.description.length > 100 ? 
            invention.description.substring(0, 100) + '...' :
            invention.description
        }</p>
        <a href="/pages/show_invention.html?id=${invention.id}">En voir plus</a>
    </div>
  `;
    htmlTarget.innerHTML += card;
}

/*
    This function is responsible for displaying the inventions on the inventions page.
    TODO: Implement this function.
*/
function displayAllInventions() {
    // Get target element from the DOM to display the inventions
    // Clear the list
    // Create and Display Card for 3 inventions
}

/*
    This function is responsible for displaying the details of an invention on the invention page.
    It gets the id of the invention from the URL and uses it to get the invention object from the array.
    It then displays the details of the invention in the target element from the DOM.
    TODO: Implement this function.
*/
function displayInvention() {
    // Get the id of the invention from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    // Get the target element from the DOM
    // Get the invention object from the array "inventions" using the id
    // Display the details of the invention in the target element
}