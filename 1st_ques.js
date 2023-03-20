function findElementsWithZeroSum(inputArray) {
  const result = [];

  for (let i = 0; i < inputArray.length; i++) {
    const currentElement = inputArray[i];
    const remainingElements = inputArray.slice(i + 1);
    const sum = currentElement + remainingElements.reduce((a, b) => a + b, 0);

    if (sum === 0) {
      result.push(currentElement);
      result.push(...remainingElements);
      break;
    }
  }

  return result.length > 0 ? result : 'No Elements found';
}

console.log(findElementsWithZeroSum([-4, 1, 3, -2, -1]));
console.log(findElementsWithZeroSum([1, 2, 3, 4])); 



