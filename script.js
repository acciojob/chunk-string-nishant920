function stringChop(str, size) {
  if (size <= 0) return [];       // edge case: invalid chunk size
  if (str.length === 0) return []; // edge case: empty string

  let result = [];

  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }

  return result;// your code here
}

// Do not change the code below 
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
