let myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http',
    function($scope, $http) {
        let refresh = function() {
            $http.get('/resumedb').success(function(response) {
                console.log("got data");
                $scope.resumedb = response;
            });
        };
        refresh();
    }
]);
