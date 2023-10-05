// Question 1
// Function to lower case words in an array and return a Promise
function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(arr)) {
        return reject(new Error("Input is not an array"));
      }
      const lowerCaseStrings = arr.filter(item => typeof item === 'string').map(str => str.toLowerCase());
      resolve(lowerCaseStrings);
    });
  }
  
  // Testing the function with the provided input
  const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
  lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error))