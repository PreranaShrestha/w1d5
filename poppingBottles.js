var poppingBottles = function(investment) {
  var bottles = Math.floor(investment / 2);
  var bottlesObj = {
    capsEarned: 0,
    bottlesEarned: 0
  };
  var totalBottles = bottles;
  var caps = bottles;
    while(bottles >= 2 || caps >= 4) {
      var temp = caps;
      caps = Math.floor(caps / 4);
      totalBottles += caps;
      bottles += caps;
      bottlesObj.capsEarned += caps;
      caps = temp % 4 + caps;
      var temp = bottles;
      bottles = Math.floor(bottles / 2);
      totalBottles += bottles;
      caps += bottles;
      bottlesObj.bottlesEarned += bottles;
      bottles = temp % 2 + bottles;
    }
    bottlesObj.totalBottles = totalBottles;
    bottlesObj.remainingBottles = bottles;
    bottlesObj.remainingCaps = caps;

  return(bottlesObj);
};
console.log(poppingBottles(process.argv[2]));


