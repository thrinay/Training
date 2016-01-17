// we use array for dependencies. include ngRoute and it allows us to use routing provider
var app = angular.module("training", ['ngRoute'])

//define in main script file through config.js, either app.config can also be done. Dependency injection and we are injecting the routeprovider
.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/main', {
      //what it says is when we are going to /main view, then we are supposed to load html file and use that controller 
      templateUrl: 'main.html',
      controller: 'MainCtrl' //naming cohnvention for ctrler is to capitalize the first letter of each word
  }).
   when('/about', {
      //what it says is when we are going to /main view, then we are supposed to load html file and use that controller 
      templateUrl: 'about.html',
      controller: 'MainCtrl' //naming cohnvention for ctrler is to capitalize the first letter of each word
  }).
   when('/services', {
      //what it says is when we are going to /main view, then we are supposed to load html file and use that controller 
      templateUrl: 'services.html',
      controller: 'ServicesCtrl' //naming cohnvention for ctrler is to capitalize the first letter of each word
  }).
   when('/contact', {
      //what it says is when we are going to /main view, then we are supposed to load html file and use that controller 
      templateUrl: 'contact.html',
      controller: 'ContactCtrl' //naming cohnvention for ctrler is to capitalize the first letter of each word
  }).
  otherwise({redirectTo: '/main'});
}])

//For passing the data from controller to the view
//If we need to pass something in, then we need to use scope.  but using just scope as a parameter and the same scope in cosole could become unusal
// Because changing the paramater value breaks the things in console. that is the reason why we are claiming a deendecy in the controller by adding another scope value within the controller
//To get http request from services.json file we use http to include along with scope
.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
$http.get('services.json').then(function(response){
    $scope.services = response.data;
  });  
}])
.controller('ServicesCtrl', ['$scope', '$http', function($scope, $http){
  $http.get('services.json').then(function(response){
    $scope.services = response.data;
  });
}])
.controller('ContactCtrl',['$scope', '$http', function($scope, $http){
  $http.get('locations.json').then(function(response){
    console.log("a");
    $scope.locations = response.data;
  });
}]);