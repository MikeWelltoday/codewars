/*
  Kata-name => Gravity Flip

Description => ...

   Examples => {
                            'R', [3, 2, 1, 2] => [1, 2, 2, 3]
                         'L', [1, 4, 5, 3, 5] => [5, 5, 4, 3, 1]
   }
*/ //=========================================================

function flip(dir: string, arr: number[]): number[] {
  arr = arr.sort((a, b): any => {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    if (a === b) {
      return 0;
    }
  });

  return dir === "R" ? arr : arr.reverse();
}

// Guru Answer
const flipGuru = (dir: string, arr: number[]): number[] =>
  arr.sort((a, b) => (dir === "R" ? a - b : b - a));
