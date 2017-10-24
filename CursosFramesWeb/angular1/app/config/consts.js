angular.module('app').constant('consts',{
    appName: 'MEAN - App',
    version: '0.18.3',
    owner: 'Devizao',
    year: '2017',
    site: 'https://www.devizao.com.br',
    apiUrl: 'http://localhost:3003/api',
    oapiUrl: 'http://localhost:3003/oapi',
    userKey: 'app'
}).run(['$rootScope', 'consts', function($rootScope, consts){

    $rootScope.consts = consts
}])