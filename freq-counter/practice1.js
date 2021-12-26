// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared in the second array.
// The frequency of values must be the same.
// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

// Nested Loop solution, not the best
// Time complexity === N^2

// Step 1: Check to see IF both arrays are same length, if not it will automatically return FALSE
// Step 2: We need to loop over first array using FOR LOOP
// Step 3: We need to ask what is the indexOf ar1 squared
// Step 4: Check to see if correctIndex is NOT in array (this can be done by looking for negative 1, which is not a valid index), return FALSE
// Step 5: If there is a match for a valid index, we need to call .splice on ar2
// Step 5a: We need to pass in 2 params: correctIndex and insert it at index 1
// Step 5b: To test we need to console.log ar2


function same(ar1, ar2) {
  if(ar1.length !== ar2.length) {
    return false;
  }
  for(let i = 0; i < ar1.length; i++) {
    let correctIndex = ar2.indexOf(ar1[i] ** 2)
    if(correctIndex === -1) {
      return false
    }
    console.log(ar2)
    ar2.splice(correctIndex, 1)
  }
  
  return true;
}

same([1,2,3,2], [9,1,4,4]);