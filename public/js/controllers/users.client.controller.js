angular.module('users', []);

angular.module('users').controller('UserController', ['$scope', '$routeParams', '$http', '$window', function($scope, $routeParams, $http, $window) {

    $scope.moduleName = "users module";

    $scope.homepage = 'homepage';
    $scope.signIn = "signin";
    $scope.signOut = "signout";
    $scope.signUp = "signup";
    $scope.viewAllUsers = "view all users";
    $scope.viewUser = "view user";

    $scope.user = {username: 'ryansalvador', password: 'pass1234'};

    $scope.signUpApi = function () {

        var data = $scope.user;

        //appended automatically by http provider 
        //var config = {
        //    headers : {
        //        'Content-Type': 'application/json'
        //    }
        //};

        $http
          .post('http://localhost:3000/api/signup', data)
          .success(function (data, status, headers, config) {
            $scope.signInApi();
          })
          .error(function (data, status, headers, config) {
            $scope.response = data;
          });
    };

    $scope.signInApi = function () {

        var data = $scope.user;

        //appended automatically by http provider
        //var config = {
        //    headers : {
        //        'Content-Type': 'application/json'
        //    }
        //};

        $http
          .post('http://localhost:3000/api/signin', data)
          .success(function (data, status, headers, config) {
            $window.sessionStorage.token = data.token;
            $scope.response = data;
          })
          .error(function (data, status, headers, config) {
            // Erase the token if the user fails to log in
            delete $window.sessionStorage.token;
          });
    };    
    
    $scope.signOutApi = function () {

        $scope.response = "Token: " + $window.sessionStorage.token + " has been deleted!";
        
        delete $window.sessionStorage.token;
    };
    
    $scope.viewAllUsersApi = function () {

        $http
          .get('http://localhost:3000/api/users')
          .success(function (data, status, headers, config) {
            $scope.response = data;
          })
          .error(function (data, status, headers, config) {
            $scope.response = data;
          });
    };
    
    $scope.viewUserApi = function () {

        var userId = $routeParams.id;
        
        $http
          .get('http://localhost:3000/api/users/' + userId)
          .success(function (data, status, headers, config) {
            $scope.response = data;
            
            $scope.user.username = data.username;
            $scope.user.password = data.password;
          })
          .error(function (data, status, headers, config) {
            $scope.response = data;
          });
    };  
 
    $scope.editUserApi = function () {

        var data = $scope.user;
        
        var userId = $routeParams.id;
        
        $http
          .put('http://localhost:3000/api/users/' + userId, data)
          .success(function (data, status, headers, config) {
            $scope.response = data;
          })
          .error(function (data, status, headers, config) {
            $scope.response = data;
          });
    };     
    
    $scope.deleteUserApi = function () {

        var userId = $routeParams.id;
        
        $http
          .delete('http://localhost:3000/api/users/' + userId)
          .success(function (data, status, headers, config) {
            $scope.response = data;
          })
          .error(function (data, status, headers, config) {
            $scope.response = data;
          });
    };  
    
  }
]);