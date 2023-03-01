// This code first declares a variable x and assigns it the string value '10'. The if statement checks if typeof x is not equal to the string 'number'. If this is the case, then x is assigned the result of parseInt(x), which is the integer value 10. Finally, the equality x === 10 is logged to the console.



let x = parseFloat('9.8');
if (x !== 10) {
  x = 10;
}
console.log(x === 10);
