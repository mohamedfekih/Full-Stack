'use strict';
app
 .controller('mainControleur',
		 function ($scope, $rootScope, PanierService) {
	 $scope.EstPanierVide = true;
	 $scope.Panier = PanierService.Panier;
	 $scope.NombresLivres = function()
	 {
	 var total = 0;
	 var estPanierVide = true;
	 angular.forEach(PanierService.Panier, function (item) {
	 console.log('NombresLivres - s', item.Quantite);
	 total += item.Quantite;
	 $scope.EstPanierVide = false;
	 });
	 return total;
	 }

	 $scope.CalculerMontantTotal = function()
	 {
	 var montatTotal = 0;
	 angular.forEach(PanierService.Panier, function (item) {
	 montatTotal += (item.Quantite * item.Prix);
	 $scope.EstPanierVide = false;
	 });
	 return montatTotal;
	 }
	 $scope.SupprimerLivre = function(item)
	 {
	 console.log("item", item);
	 PanierService.SupprimerLivre(item);
	 }
	 });
