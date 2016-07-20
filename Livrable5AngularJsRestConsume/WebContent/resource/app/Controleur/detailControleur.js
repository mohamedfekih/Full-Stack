'use strict';
app.controller('detailControleur', function($scope, $routeParams,
		LivresService, PanierService) {
	if (LivresService.Livres != null) {

		$scope.promise = LivresService.ChercherParId($routeParams.Id).success(
				function(data, status, headers, config) {
					LivresService.Livres = data;
					$scope.Livre = data;
				}).error(function(data, status, headers, config) {
			alert(data);
		});

		// $scope.promise = LivresService.RecupererLivres()
		// .success(function (data, status, headers, config) {
		// $scope.Livres = data;
		// LivresService.Livres = $scope.Livres;
		// $scope.Livre = LivresService.ChercherParId($routeParams.Id);
		// }).error(function (data, status, headers, config) {
		// });
	}
	$scope.AjouterLivre = function(item) {
		PanierService.AjouterLivre(item);
	}

});
