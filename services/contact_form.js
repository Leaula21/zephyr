console.log('contact_form.js loaded');
/*
    This file is responsible for handling the contact form.
*/

/*
    This function is responsible for handling the form submission.
    It gets the form data from the DOM and displays an alert if the form is submitted.
    TODO: Implement this function.
*/
function handleFormSubmit(event) {
  // Prevent the default form submission

  // Permet de ne pas recharger la page dés l'envoie de formulaire
  event.preventDefault();
  
  // Get the form data from the DOM

  // Récupére l'élément formulaire
  let monFormulaire = document.getElementById("formulaire");

  // Récupére les données saisie dans les inputs
  let nom = monFormulaire.elements["name"].value;
  let mail = monFormulaire.elements["email"].value;
  let mess = monFormulaire.elements["message"].value;

  // Initialise le compte pour les validations
  let valid = 0;
  
  // Check if the form data is valid (all fields are filled in)
    // Send alert if the form data is valid and the form is submitted
    
    // Bonus

    // Les fonctions de validations des différents inputs
    function validName(a) {
      if ((a.length <= 10) && (a.length > 0)){
        // console.log("ok")
        if (a !== "") {
          validMail(mail);
          valid +=1;
        }
        else {
          alert("Vous devez rentrer votre nom ici");
        }
      } 
      else {
        alert("Vous avez dépassé la limite de caractéres pour le champ nom");
      }
    }

    function validMail(b) {
      if ((b.length <= 30) && (b.length > 0)){
        // console.log("ok")
        if (b !== "") {
          validMessage(mess);
          valid +=1;
        }
        else {
          alert("Vous devez rentrer votre nom ici");
        }
      } 
      else {
        alert("Vous avez dépassé la limite de caractéres pour le champ nom");
      }
    }

    function validMessage(c) {
      if ((c.length <= 280) && (c.length > 0)){
        // console.log("ok")
        if (c !== "") {
          alert("Votre message à bien été transmis")
          valid +=1;
        }
        else {
          alert("Vous devez rentrer votre nom ici")
        }
      } 
      else {
        alert("Vous avez dépassé la limite de caractéres pour le champ nom")
      }
    }

    validName(nom);
    
    // La fonction qui permet de valider les 3 verifs précédentes + affiche un message de remerciement
    function valida (d){
      if(d == 3){
        monFormulaire.remove();
        let replace = document.getElementById("replaceForm");
        replace.innerHTML =`
        <div>Merci ${nom} pour votre message! Nous vous contacterons bientôt sur l'adresse mail : ${mail}. !</div>
        `
      }
    }
    
    // "Merci <Name> pour votre message! Nous vous contacterons bientôt sur l'adresse mail : <Email>. !"
    valida(valid);
    
    // Clear the form fields
  // Handle Error if the form data is not valid
}