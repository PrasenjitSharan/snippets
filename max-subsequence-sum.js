function maxSubSequenceSum(a) {
    var thisSum, maxSum;
    thisSum = maxSum = 0;

    for (var j = 0; j < a.length; j++) {
        thisSum += a[j];
        if (thisSum > maxSum) maxSum = thisSum;
        else if (thisSum < 0) thisSum = 0;
    }
    return maxSum;
}

var a = [2, 3, -6, -1, 2, -1, 6, 4, -8, 8];
alert(maxSubSequenceSum(a));