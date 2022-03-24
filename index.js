const data = require("./data.json");
const fs = require("fs");
// console.log(data);
const data2 = data.map((item) => {
    // console.log(item.id + " - " + item.title + "\n" + item.description);
    return item.id + " - " + item.title + "\n" + item.description + "\n"
})
const dataAsTxt = data2.join();
console.log(dataAsTxt);

fs.writeFile('./data.txt', dataAsTxt, err => {
    if (err) {
        console.log(err);
        return
    }
    console.log("new file has been ceated");
})


