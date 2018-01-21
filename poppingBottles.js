var poppingBottles = function(investment) {
  var bottles = Math.floor(investment / 2);
  var bottlesObj = {
    earned: {
      caps: 0,
      bottles: 0
    },
    totalBottles: bottles,
    remaining: {
      bottles: bottles,
      caps: bottles
    }
  };
  while(bottlesObj.remaining.caps >= 4 || bottlesObj.remaining.bottles >= 2) {

    reedeme(bottlesObj, "caps", 4);
    reedeme(bottlesObj, "bottles", 2);

  }
  return(bottlesObj);
};
console.log(poppingBottles(process.argv[2]));
  function reedeme(bottlesInfo, reedemeFrom, value) {
    console.log(bottlesInfo, reedemeFrom, value);
    var temp = bottlesInfo.remaining[reedemeFrom];
    var reedemeValue = Math.floor(bottlesInfo.remaining[reedemeFrom] / value);
    bottlesInfo.totalBottles += reedemeValue;
    bottlesInfo.earned[reedemeFrom] += reedemeValue;

  for (var key in bottlesInfo.remaining) {
    if(key === reedemeFrom) {
      bottlesInfo.remaining[key] = temp % value + reedemeValue;
    } else {
      bottlesInfo.remaining[key] += reedemeValue;
    }
  }

 return bottlesInfo;
  }

