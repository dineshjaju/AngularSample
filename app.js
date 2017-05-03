/**
* tutorial Module
*
* Description
*/
'use strict';
var app = angular.module('tutorial', ['ngRoute']).config(['$routeProvider',function($routeProvider) 
{
	$routeProvider
                .when('/',{template:'This is the default Route'})
                .when('/computers',{template:'This is the computers Route'})
                .when('/printers',{template:'This is the printers Route'})
                .otherwise({redirectTo:'/'})}]);
 

app.controller('firstController',['$rootScope','$scope','$log','$location' ,function($rootscope,$scope,$log,$location)
{	
	$rootscope.userName = "dineshjaju1";
	$scope.title ="Angular JS Tutorial" ;


	/**
	* Sample Error Logging using $log function.
	*/

	/*$log.info($scope.title);
	$log.warn($scope.title);
	$log.error($scope.title);*/


	//Add path to URL  index.html#/newpath
	//$location.path("/newpath")


}]);