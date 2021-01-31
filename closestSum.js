// Input:  ar1[] = {1, 4, 5, 7};
//         ar2[] = {10, 20, 30, 40};
//         x = 32      
// Output:  1 and 30

let output = 0;
let hashObj = {};
let count = 0;

// solution 1
let findClosest = (arr1, arr2, target) => {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            count += 1;
            let sum = arr1[i] + arr2[j];
            if (sum === target) {
                output = arr1[i] + " " + arr2[j];
                break;
            }
            let sumDiff = target - sum;
            hashObj[sumDiff] = arr1[i] + " " + arr2[j];
        }
    }

    let keys = Object.keys(hashObj);
    keys = keys.sort((a, b) => Math.abs(0 - a) - Math.abs(0 - b));

    return hashObj[keys[0]];
}


// solution 2
// left right approch from google interview
// this should be in sorted order to work
// if greater decrease form right if lesser increase from right

let count1 = 0;
let findClosest1 = (arr1, arr2, target) => {
    let start = 0;
    let a = arr1.length - 1;
    let b = arr2.length - 1;
    let diff = Number.POSITIVE_INFINITY;
    let output1 = "";

    while (start <= a && b >= 0) {
        let sum = Math.abs(arr1[start] + arr2[b] - target);
        if (sum < diff) {
            diff = sum;
            output1 = arr1[start] + " " + arr2[b]
        }
        if (arr1[start] + arr2[b] > target) {
            b -= 1;
        } else {
            start += 1;
        }
    }
    return output1;
}

let ar1 = [1, 4, 5, 7] //[1, 4, 5, 7];
let ar2 = [10, 20, 30, 40] //[10, 20, 30, 40];

console.log(findClosest1(ar1, ar2, 50))