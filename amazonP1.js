let s = "abcdefgh";
let r = 3;

// output - adgbehcf
let hashObj = {}
let arr = 0;
for (let i = 0; i < s.length; i++) {
    arr += 1;
    hashObj[arr] ? hashObj[arr].push(s[i]) : hashObj[arr] = [(s[i])];
    if (arr === r) {
        arr = 0;
    }
}

let values = Object.values(hashObj);
let output = "";
values.map(item => {
    output += item.join("");
})
console.log(output)
