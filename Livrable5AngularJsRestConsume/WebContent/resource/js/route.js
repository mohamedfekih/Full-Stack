'use strict';
app.config(
 function ($routeProvider) {
 $routeProvider
 .when('/Accueil', {
 templateUrl: "html/Accueil.html",
 controller: 'accueilControleur'
 })
 .when('/Authentification', {
 templateUrl: "html/Authentification.html",
 controller: 'compteControleur'
 })
 .when('/BesoinAide', {
 templateUrl: "html/BesoinAide.html",
 controller: 'besoinAideControleur'
 })
 .when('/Contact', {
 templateUrl: "html/Contact.html",
 controller: 'contactControleur'
 })
 .when('/Detail/:Id', {
 templateUrl: "html/Detail.html",
 controller: 'detailControleur'
 })
 .when('/LesLivres/:Category?', {
 templateUrl: "html/Livres.html",
 controller: 'livreControleur'
 })
 .otherwise({
 redirectTo: '/Accueil'
 });
 }
);
