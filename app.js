(function(){
  var app=angular.module('store' ,['store-product']);




  app.controller('StoreController',['$http', function($http){
    var store=this;
    store.products=[ ];
    $http.get('product.json').then(function(response){
    store.products=response.data;
    /*store.products = angular.fromJson(store.data.response);*/
    });
  }]);
  /*app.controller('ReviewController', function(){
   this.review={};
   this.addReview = function(product){
  this.review.createdOn= Date.now();
   product.reviews.push(this.review);
   this.review={};
 };
 });*/
/*  app.controller('PanelController', function(){
    this.tab = 1;

    this.selectTab = function(setTab){
      this.tab = setTab;
    };
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  }); */

})();
