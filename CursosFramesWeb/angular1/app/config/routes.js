angular.module('app').config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
         $stateProvider.state('dashboard', {
             url: "/dashboard",
             templateUrl: "dashboard/dashboard.html"
         }).state('billingCycle', {
            url: "/billingcyles",
            templateUrl: "billingCycle/tabs.html"
         })

         $urlRouterProvider.otherwise('/dashboard')
    }
])