function grow(x) {
  {
    /** #Way-1
    let result = x[0];
    for (let index = 0; index < x.length; index++) {
      result *= x[index];
    }
    return result;
*/
  }
  {
    /** #Way-2
    let result = x[0];
    x.forEach((item) => {
      result *= item;
    });
    return result;
*/
  }
  {
    /** #Way-3
    const result = x.reduce((acc, curr) => acc * curr, 1);
    return result;
*/
  }
}

console.log(grow([1, 2, 3, 4, 5]));
