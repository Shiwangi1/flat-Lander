(function(){
  var app=angular.module('store-product' ,[ ]);

app.directive('productPanel',function(){
  return{
    restrict:'E',
    templateUrl:'product-panel.html',
    controller:function(){
      this.tab = 1;

      this.selectTab = function(setTab){
        this.tab = setTab;
      };
      this.isSelected = function(checkTab){
        return this.tab === checkTab;
      };
    },
    controllerAs:'panel'
  };
});
app.directive('productDesc',function(){
return{
  restrict:'E',
  templateUrl:'product-desc.html'
};
});
app.directive('productReview',function(){
return{
  restrict:'E',
  templateUrl:'product-review.html',
  controller:function(){
    this.review={};
    this.addReview = function(product){
   this.review.createdOn= Date.now();
    product.reviews.push(this.review);
    this.review={};
  };
  },
  controllerAs:'reviewctrl'
};
});
})();
