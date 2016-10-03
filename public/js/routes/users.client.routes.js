angular.module('users').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'js/views/users.client.view.html'
    }).
    when('/signup', {
      templateUrl: 'js/views/users-signup.client.view.html'
    }).
    when('/signin', {
      templateUrl: 'js/views/users-signin.client.view.html'
    }).    
    when('/signout', {
      templateUrl: 'js/views/users-signout.client.view.html'
    }).
    when('/users', {
      templateUrl: 'js/views/users-view-all.client.view.html'
    }).
    when('/users/:id', {
      templateUrl: 'js/views/users-view-user.client.view.html'
    }).
    otherwise({
      redirectTo: '/'
    });
  }
]);