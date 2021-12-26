var removeDuplicates = function(arr) {
  if(arr.length === 0) {
    return 0;
  }

  let pointer1 = 0;

  for(let pointer2 =1; pointer2 < arr.length; pointer2++) {
    if(arr[pointer1] !== arr[pointer2]) {
      pointer1++;
      arr[pointer1] = arr[pointer2];
    }
  }
  return pointer1 + 1;
}

console.log(removeDuplicates(1,1,2,2))