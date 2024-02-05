### Instructions 

0. Cloner le projet : 
- Clonez le projet depuis le dépôt GitHub de votre formateur.
- A la racine du projet, supprimez le dossier `.git` pour supprimer l'historique du projet. (`rm -rf .git`)
- Versionnez le projet avec git en initialisant un nouveau dépôt (`git init`).
- Faites un premier commit pour initialiser le dépôt (`git add .` puis `git commit -m "Initial commit"`).
- Créez un nouveau dépôt sur GitHub et liez-le à votre projet local (`git remote add origin <url_du_nouveau_depot>`).
- Ajouter les collaborateurs à votre dépôt sur GitHub.
- Commencez à travailler sur le projet.

1. Accueil - index.html <br>
- La page d'accueil est déjà complète. Utilisez-la comme référence pour comprendre la structure HTML, le code CSS et les fonctionnalités JavaScript. 
- Observez comment les 3 premières inventions sont affichées dans la section "Inventions Magiques". Les détails sont déjà inclus en tant qu'exemple.
- Assurez-vous de comprendre comment les fichiers JavaScript sont liés à la page HTML.
  
2. Inventions - inventions.html
- Implémentez la fonction `displayAllInventions` pour afficher toutes les inventions (fichier `/services/inventions.js`). Utilisez la fonction `displayInventionDetailsCard`.
- Assurez-vous que le lien "En voir plus" pointe vers la page d'une invention spécifique (`show_invention.html`).
  
3. Invention spécifique - show_invention.html
- Implémentez la fonction `displayInvention` pour afficher les détails d'une invention spécifique. Utilisez l'id de l'invention depuis l'URL pour récupérer l'invention appropriée de la liste. (fichier `/services/inventions.js`)

4. Contact - contact.html
- Implémentez la gestion du formulaire de contact dans `contact_form.js`.
Utilisez la fonction handleFormSubmit pour afficher une alerte si le formulaire est soumis avec succès. Personnalisez le message de l'alerte pour inclure le nom et l'email de la personne.
Exemple d'alerte : "Merci pour votre message [nom], pensez à regarder votre boîte mail : [email], nous vous contacterons bientôt."

5. Styles 
- Personnalisez les fichiers CSS pour améliorer le style du site web en fonction de votre créativité. Assurez vous que le site soit responsive.
- N'hésitez pas à explorer et ajuster les styles pour rendre le site plus attrayant et intuitif.
  
6. Bonus - Services et autres fonctionnalités
- Explorez les fichiers dans le dossier "services" et identifiez comment ils sont utilisés dans le code.
- Envisagez d'ajouter des fonctionnalités supplémentaires, comme des animations, des effets visuels, ou des améliorations de l'expérience utilisateur.
- N'hésitez pas à demander de l'aide si vous trouvez ces fichiers difficiles à comprendre.

7. Documentation
- Ajoutez des commentaires clairs et concis à chaque modification que vous apportez au code. Expliquez le but de votre changement pour faciliter la compréhension.

8. Remise du projet
- Assurez-vous que votre code est bien organisé et propre.
- Vérifiez que toutes les fonctionnalités demandées sont implémentées.
- Assurez-vous que le site est responsive et que les styles sont cohérents.
- Vérifiez que le code est bien commenté.
- Assurez-vous que le code est bien indenté.
- Vérifiez que le code ne contient pas de fautes d'orthographe.
- Assurez-vous que le code est bien structuré et que les fichiers sont bien organisés.
- Utiliez git pour versionner votre code et le déployer sur GitHub.
- Utilisez Github pour collaborer avec votre équipe.
- Faites des commits réguliers pour montrer votre progression.
