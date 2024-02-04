function solution(str) {
  let reverseString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
  }
  return reverseString;
}

console.log(solution("world"));

// function solution(str) {
//   return str.split("").reverse().join("");
// }

// console.log(solution("world"));
