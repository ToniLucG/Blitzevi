const express = require("express");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const app = express();
const port = 3000;

app.use(bodyParser.json());
let notice = [];

app.get("/SaveItem", (req, res) => {
    var data;   
    var temp = [];

    for (i in Item) {
        data = item[i].name + " " + item[i].price + " " + item[i].brand;
        temp.push(data);
    }
    data:{
        item:{ 
            name:"Hlace";
            price: 70.53;
            brand: "New"
        }
    }
});

/*{
        status:"OK",
        data:{
            item:{
            name:"Hlace",
            price:70.53,
        brand:"New"
            }
        }
    }*/

