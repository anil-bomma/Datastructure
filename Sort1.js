

let arr = ["Orange", "Apple", "Grapes", "Orange", "Apple", "Grapes", "Orange", "Apple", "Grapes", "Orange", "Apple", "Grapes"];

// orange, grapes, apple;
let sortArr = {
    "Orange": 1,
    "Grapes": 2,
    "Apple": 3
}

console.log(arr.sort((a, b) => sortArr[a] - sortArr[b]));
console.log(arr.sort((a, b) => sortArr[b] - sortArr[a]));



// sorting using bubble sort
let numArr = [3, 4, 67, 81, 2, 34, 4];
for (let i = 0; i < numArr.length - 1; i++) {
    for (let j = 0; j < numArr.length - 1 - i; j++) {
        if (numArr[j] > numArr[j + 1]) {
            [numArr[j], numArr[j + 1]] = [numArr[j + 1], numArr[j]]
        }
    }
}

console.log(numArr);

