Exercice Création de page
-------------------------

Créer la page /todos qui affiche les données de
https://jsonplaceholder.typicode.com/todos

Etapes :

* créer les fichiers controller et template (dans le dossier contacts)
* faire un template statique pour commencer (avec du faux texte)
* créer la route dans $stateProvider pour accéder à ce template
* créer le controller (s'inspirer du précédent)
* importer et enregistrer le controller dans contacts.module.js
* utiliser le controler dans la route $stateProvider
* faire la requete AJAX dans le controller
* utiliser ng-repeat dans le template pour afficher les todos

Exercice Form + AJAX
-------------------------

1 - Créer un formulaire pour ajouter des todos qui envoit la requete au serveur

2 - Dans contact-show, ajouter un bouton delete qui supprime et redirige vers la liste

* pas besoin de créer une page contact-delete
* il suffit d'envoyer une requete DELETE vers /users/12 (12 à remplacer par l'id)

