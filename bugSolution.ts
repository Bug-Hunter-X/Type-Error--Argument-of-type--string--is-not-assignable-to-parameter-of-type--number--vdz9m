function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, 2); // Correct: No type error

//Alternative solution using type assertion (use with caution):

let result2 = add(1, <number>"2");

//Alternative solution with input validation:
function addWithValidation(a: number, b: any): number {
  if (typeof b !== 'number'){
    return 0; //Or throw an error
  }
  return a + b;
}
let result3 = addWithValidation(1, "2"); //Will return 0