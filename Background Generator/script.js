// Function to display a greeting
function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
  // Example usage
  greet('John'); // Output: Hello, John!
  
  // Function to calculate the sum of two numbers
  function sum(a, b) {
    return a + b;
  }
  
  // Example usage
  const result = sum(5, 3);
  console.log(result); // Output: 8
  
  // Function to generate a random number between a specified range
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Example usage
  const randomNumber = getRandomNumber(1, 10);
  console.log(randomNumber); // Output: Random number between 1 and 10
  
  // Function to manipulate DOM elements
  function changeColor() {
    const element = document.getElementById('myElement');
    element.style.color = 'red';
  }
  
  // Example usage
  changeColor(); // Changes the color of the element with id 'myElement' to red