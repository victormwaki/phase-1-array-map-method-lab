const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

// Function to convert tutorial names to title case
function titleCased() {
  return tutorials.map(tutorial => {
    return tutorial
      .split(' ') // Split the title into words
      .map(word => {
        // Capitalize the first letter and lowercase the rest
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); 
      })
      .join(' '); // Join the words back into a single string
  });
}

// Example usage
const titleCasedTutorials = titleCased();
console.log(titleCasedTutorials);
