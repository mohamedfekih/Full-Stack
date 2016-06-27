'use strict';
appDemo.controller('DemoControleur',
function ($scope) {
 $scope.Sexes = [ { Code: 'H', Libelle: 'Homme' },
{ Code: 'F', Libelle: 'Femme' }];
 $scope.Compte = {
 Sexe: '',
 Nom: '',
 Prenom: '',
 Email: ''
 }
 $scope.Valider = function () {
alert($scope.Compte.Prenom + ' ' + $scope.Compte.Nom + '(' +
$scope.Compte.Sexe + ')' + ' :' + $scope.Compte.Email);
 }
 $scope.Annuler = function () {
 }
})