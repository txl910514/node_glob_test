/**
 * Created by root on 11/08/16.
 */
(function(){
  myApp.sum = function(arr){
    return myApp.reduce(arr, myApp.add);
  }
})();