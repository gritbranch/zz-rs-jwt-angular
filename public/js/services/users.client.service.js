angular.module('users').factory('authInterceptor', ['$q', '$window', function($q, $window) {

    var authInterceptor = {
        request: function (config) {
          config.headers = config.headers || {};
          if ($window.sessionStorage.token) {
            config.headers.Authorization = $window.sessionStorage.token;
          }
          return config;
        },
        response: function (response) {
          if (response.status === 401) {
            // handle the case where the user is not authenticated
            console.log ('User not authorized!');
          }
          return response || $q.when(response);
        }
    };
    
    return authInterceptor;

}]);

angular.module('users').config(['$httpProvider', function($httpProvider) {  
    $httpProvider.interceptors.push('authInterceptor');
}]);