//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.



let x = '10';
if (typeof x !== 'number') {
  x = parseInt(x);
}
console.log(x === 10);
