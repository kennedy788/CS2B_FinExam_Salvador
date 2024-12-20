let names = ["Genevieve", "Juan", "Luna", "Gabriel", "Elise"];
let ages = [24, 65, 21, 5, 9];

let restructuredArray = names.map((name, index) => [name.trim(), ages[index]]);

console.log("Restructured Multi-Dimensional Array:");
restructuredArray.forEach(subArray => console.log(subArray));
