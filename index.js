const os = require("os")
const fs = require("fs");
const express = require("express");
require("dotenv").config()
const port = process.env.PORT || 3000;
const app = express();
var display = "";
var arr = [], ary = [];
fs.readdir("C://", "utf8", (err, data) => {
    if (err) {
        console.log(err);
    } else
        data.forEach((files) => {
            var filename = files.split("");
            if (filename.indexOf(".") === -1) {
                arr.push(files);
            }
            else {
                ary.push(files);
            }

        })
    console.log(ary);
    console.log(arr);
});

app.get("/", (req, res) => {
    arr.forEach((files) => {
        display += `<div><h1 style="color:red">FILES</h1><div style="color:green">${files}</div></div>`

    })
    ary.forEach((folders) => {
        display += `<div><h1 style="color:blue">Folders</h1><div style="color:pink">${folders}</div></div>`

    })
    res.send(display);
});
app.listen(port, () => console.log("3000 executed"));
