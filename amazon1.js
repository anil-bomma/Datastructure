let userList = {};
let output = null;
let nextSeq = [];

let addUser = (userId) => {
    if (userId in userList) {
        userList[userId] = false;
        if (output === userId) {
            nextSeq.length ? output = nextSeq.splice(0, 1)[0] : output = null;
        } else {
            index = nextSeq.indexOf(userId);
            nextSeq.splice(index, 1);
        }
    } else {
        userList[userId] = true;
        if (!output) {
            output = userId;
        } else {
            nextSeq.push(userId);
        }
    }
}

addUser("a");
addUser("c");
addUser("c");
addUser("d");
addUser("e");
addUser("a");
console.log(output, nextSeq);
