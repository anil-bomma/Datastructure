// Given logs of requests (strucutured data)
// Request logs for this purpose of the form:
// 1: Request to server X took 1.2 ms
// 2: Request to server Y took 2.3 ms
// 3: Request to server X took 3.1 ms
// ...
// Please write a function that takes this data and gives me the slowest server


let dataLogs = [
    { "server": "X", "time": 1.2 },
    { "server": "Y", "time": 2.3 },
    { "server": "X", "time": 3.1 },
    { "server": "X", "time": 13.1 }

];


let getSlowServe = (dataSet) => {

    let output = {}; // "X": 4.3
    let count = {}; // "X": 2

    dataSet.forEach(item => {
        if (output[item.server]) {
            output[item.server] += item["time"]; // {"x": 4.3, "y": 2.3}
            count[item.server] += 1; // {x: 2, y: 1}
        } else {
            output[item.server] = item["time"]; // {"x": 1.2}
            count[item.server] = 1; // {"x": 1}
        }
    });


    // calc the average and retun 
    const outputKeys = Object.keys(output); // [x, y]
    const outputValue = Object.values(output); // [4.3, 2.3]
    let serverInfo = null;
    let trackerVal = Number.NEGATIVE_INFINITY;

    outputValue.map((item, index) => {
        let keyVal = outputKeys[index]; // x
        let avg_item = item / count[keyVal] // {x: 2.15}
        if (trackerVal < avg_item) {
            serverInfo = {
                serverName: keyVal,
                avgRequestTime: avg_item
            };
            trackerVal = avg_item;
        }
    });

    return serverInfo;
}

console.log("-=-=--=-=", getSlowServe(dataLogs))