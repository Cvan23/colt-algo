function isPalindrome(str) {
  let revString = "";
  str = str.toLowerCase();
  for(let i = str.length - 1; i >= 0; i--) {
    revString += str[i];
  }
  return revString === str;
}
console.log(isPalindrome('taco'))