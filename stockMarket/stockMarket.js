function maxProfit(stockPrices) {
  var maxProfit = [];
  var max = 0;
  stockPrices.forEach(function(element, i) {
    maxProfit = [];
    for (var j = i + 1 ; j < stockPrices.length; j++) {
      if (element - stockPrices[j] < 0) {
        maxProfit.push(stockPrices[j] - element);
      }
      //console.log(maxProfit === undefined);
      if(max < Math.max(...maxProfit) && !(maxProfit === undefined)) {
        max = Math.max(...maxProfit);
      }
    }

  });
  return(max);

}
console.log("Maximum profit he can make is ");
console.log(maxProfit([45, 24, 31, 40, 38, 11]));