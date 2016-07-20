'use strict';
app.factory('LivresService', function($http) {
	var objLivres = {};
	objLivres.Livres = [];
	objLivres.RecupererLivres = function() {
		var promise = $http({
			url : "http://localhost:8080/livres",
			method : "GET",
		});
		return promise;
	};
	// objLivres.RecupererLivres = function () {
	// return $http({ url: "resource/js/data.livre.json" });
	// };
	// objLivres.ChercherParId = function (id) {
	// var livre = {};
	// angular.forEach(this.Livres, function (item) {
	// if (item.Id == id) {
	// livre = item;
	// return item;
	// }
	// });
	// return livre;
	// };
	objLivres.ChercherParId = function(id) {
		var promise = $http({
			url : "http://localhost:8080/livre/" + id,
			method : "GET",
		})
		return promise;
	};

	// objLivres.ChercherParCategorie = function (categorie) {
	// var livres = [];
	// angular.forEach(this.Livres, function (item) {
	// if (item.Categorie == categorie) {
	// livres.push(item);
	// }
	// });
	// return livres;
	// };

	objLivres.ChercherParCategorie = function(categorie) {
		var promise = $http({
			url : "http://localhost:8080/livres/" + categorie,
			method : "GET",
		})
		return promise;
	};
	return objLivres;
});