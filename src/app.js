(function () {
  'use strict';

  angular.module('App',['ui.router'])
  .controller('controller',controller)
  .controller('itemController',itemController)
  .service('service',service);

  controller.$inject=['service'];

  function controller(service) {

    var ctrl=this;

    service.getCategories().then(function (result) {
      ctrl.items=result.data;
      console.log(ctrl.items);
    })


    }

    itemController.$inject=['item'];

    function itemController(item) {
      var ctrl=this;
      ctrl.menu=item;
    }


  service.$inject=['$http'];

  function service($http) {
    var service=this;

    service.getCategories=function () {
      return $http({
        url:'https://davids-restaurant.herokuapp.com/categories.json'
      })
    };

    service.getMenu=function () {
      return $http({
        url:'https://davids-restaurant.herokuapp.com/menu_items.json'
      })
    };
    service.sortMenu=function (name) {
      return $http({
        url:'https://davids-restaurant.herokuapp.com/menu_items.json',
        params:{
          category:name
        }
      })
    }
  }
})()
