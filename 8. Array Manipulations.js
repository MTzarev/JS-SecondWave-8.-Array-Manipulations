function arrayManipulations(arr) {
    let nums = arr.shift().split(` `);
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(` `)[0]
        if (command === "Add") {
            nums.push(arr[i].split(` `)[1]);
        } else if (command === "Remove") {
            let idx = nums.indexOf(arr[i].split(` `)[1])
            nums.splice(idx, 1);
        } else if (command === "RemoveAt") {
            nums.splice(arr[i].split(` `)[1], 1);
        } else if (command === "Insert") {
            nums.splice(arr[i].split(` `)[2], 0, arr[i].split(` `)[1]);
        }else{
            nums=nums
        }
    }
    console.log(nums.join(` `));
}
arrayManipulations(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']);
