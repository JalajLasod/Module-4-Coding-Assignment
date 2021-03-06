(function () {

  "use strict";

  angular.module("App").config(routesConfig);

  routesConfig.$inject=["$stateProvider","$urlRouterProvider"];

  function routesConfig($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home',{
      url:'/',
      templateUrl:'/Module-4-Coding-Assignment/home.html'
    }).state('categories',{
      url:'/categories',
      templateUrl:'/Module-4-Coding-Assignment/categories.html',
      controller:'controller as ctrl'
    }).state('items',{
      url:'/items/{index}',
      templateUrl:'/Module-4-Coding-Assignment/items.html',
      controller:'itemController as ctrl',
      resolve:{
      item:['$stateParams','service',
      function ($stateParams,service) {
        return service.getCategories().then(function (result) {
          console.log(result);
          name=result.data[$stateParams.index].short_name;
          console.log(name);
          return service.sortMenu(name);
      }).then(function (response) {
        console.log(response.data.menu_items);
        return response.data.menu_items;
        // console.log(response.data.menu_items);
      })

    }]
  }
    })
   }
})()
