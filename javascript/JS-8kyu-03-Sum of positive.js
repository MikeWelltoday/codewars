/*
  Kata-name => Sum of positive

Description => You get an array of numbers, return the sum of all of the positives ones

*/ //=========================================================

function positiveSum(arr) {
  return arr.filter((i) => i > 0).reduce((sum, num) => sum + num, 0);
}
