const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Create two empty arrays to store the even and odd numbers.
const evenNumbers = [];
const oddNumbers = [];

// Iterate over the number array and push each number into the corresponding even or odd array, based on the modulo operator (%) result.
for (let i = 0; i < numberArray.length; i++) {
  const number = numberArray[i];
  if (number % 2 === 0) {
    evenNumbers.push(number);
  } else {
    oddNumbers.push(number);
  }
}

// Display the even and odd numbers on the browser.
const resultElement = document.getElementById('result');
resultElement.innerHTML = `<h2>Even Numbers</h2><ul>${evenNumbers.map(number => `<li>${number}</li>`).join('')}</ul>
<h2>Odd Numbers</h2><ul>${oddNumbers.map(number => `<li>${number}</li>`).join('')}</ul>`;
