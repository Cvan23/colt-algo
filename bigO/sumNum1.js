// First solution: Big O = O(N), as N grows so does the number of operations

function addUpTo(n) {
  let total = 0;
  for(let i = 1; i <= n; i++) {
  total += i;
  }
  return total;
}

// Second solution: Big O = O(1)
function addUpTo2(n) {
  return n * (n + 1) / 2;
}

console.log(addUpTo2(3));