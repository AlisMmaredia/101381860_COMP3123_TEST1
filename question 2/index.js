// Question 2

// Creating methods that resolves and rejects a message after a timeout of 500ms
const resolvedPromise = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('\{message: delayed success!\}');
      }, 500);
    });
  };
  
  const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('\{error: delayed exception!\}'));
      }, 500);
    });
  };
  
  // calling both promises separately and handle the results
  resolvedPromise()
    .then((result) => {console.log(result)})
    .catch((error) => {console.error(error)});
  
  rejectedPromise()
    .then((result) => {console.log(result)})
    .catch((error) => {console.error(error.message)})
  