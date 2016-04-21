//aqui se definen las dependencias que se van a utilizar en el proyecto

var myApps = angular.module("myApp", [
    'ngRoute', 
    'myApp.version', 
    'myApp.controllers', 
    'myApp.services',
    'myApp.directives'
]);

//aqui se definen las caracteristicas de las views y menu y tabs

myApps.config(['$routeProvider', function($routeProvider) {
   $routeProvider.
   
   when('/view1', {
    templateUrl: 'templates/view1.html',
    controller: 'View1Ctrl'
  }).
   
  when('/view2', {
    templateUrl: 'templates/view2.html',
    controller: 'View2Ctrl'
  }).
  //aqui se define la primera vista que va a salir dentro de la aplicacion 
  otherwise({
      redirectTo: '/view1'
   });
	
}]);

