/*
  Kata-name => .Square(n) Sum

Description => Complete the square sum function so that it squares each number passed into it and then sums the results together

   Examples => {
                     [1,2,2] = 9; 1*1 + 2*2 + 2*2 = 9
   }
*/ //=========================================================

function squareSum(numbers: number[]): number {
  if (numbers.length == 0) {
    return 0;
  }
  return numbers.map((item) => item * item).reduce((a, b) => a + b);
}
