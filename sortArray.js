let numbers = prompt("Enter numbers separated by commas:", "24, 65, 21, 5, 9, 32, 42, 80, 57").split(",").map(Number);
let names = prompt("Enter names separated by commas:", "Zenvo, Erica, Jordie, Alicia, Redon").split(",");

let mergedArray = [...numbers, ...names];
console.log("Merged Array:", mergedArray);

let sortedNumbers = [...numbers].sort((a, b) => b - a);
console.log("Sorted Numbers (Descending):", sortedNumbers)

let sortedNames = [...names].sort();
console.log("Sorted Names (Alphabetically):", sortedNames);
