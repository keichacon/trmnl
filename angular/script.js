/**
* app Modul

*
* Description
*/
angular.module('app', ['ngRoute', 'ngAnimate'])

.config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {
	$routeProvider.when('/posts/:postName', {
            controller: 'indexCtrl',
            templateUrl: 'posts.html'
        })
        .when('/', {
            controller: 'indexCtrl',
            templateUrl: 'portada.html'
        });
        
        $locationProvider.html5Mode(true);	
}])




.factory('posts', [ function(){
	var fac = [];
     
    fac.publicados = [{id:'1',name:'perro'}, {id:'2',name:'mario'}]; 
     
    return fac;
}])

.controller('indexCtrl', ['$scope', 'posts', '$routeParams', function($scope, posts, $routeParams){

	$scope.posts = posts.publicados;
	$scope.postName = $routeParams.postName;



	var porNombre = function(posts, name){
		for (var i= 0; i < posts.length; i += 1){
			var post = posts[i];
			if (post.name === name){
				return post
			}
		}

	};

	$scope.post = porNombre($scope.posts, $scope.postName);


	}])