function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

 for (let i = 0; i < n - 1; i++) {
    swapped = false;


    for (let j = 0; j < n - i - 1; j++) {
      console.log(`Comparing: ${arr[j]} and ${arr[j + 1]}`); 

      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }

    console.log(`Array after pass ${i + 1}: ${arr.join(', ')}`);
    
  }

  return arr;
}

let numbers = [42, 25, 12, 63, 48, 10, 16, 5, 30, 78];

console.log("Original array:", numbers);
let sortedArray = bubbleSort(numbers);
console.log("Sorted array:", sortedArray);
