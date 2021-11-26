const express = require("express")
const http = require("http")
const bodyParser = require("body-parser");
var router = require("express").Router();
const app = express();
var cors = require("cors")

const port = 3001


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


function process(reducer, array){ 

    try {
        return array.split(',').map(function(item) {
            return parseFloat(item, 10);
        }).reduce(reducer);
        
    } catch (error) {
        return res.status(400).json(error);
    }  
 

}
router.get("/add", (req, res) => {
    const reducer = (previousValue, currentValue) => previousValue + currentValue;

    result = process(reducer, req.query.array)

   res.json({ sum: result });
}
)

router.get("/sub", (req, res) => {
    const reducer = (previousValue, currentValue) => previousValue - currentValue;

    result = process(reducer, req.query.array)


   res.json({ diff: result });
}
)

router.get("/mul", (req, res) => {
    const reducer = (previousValue, currentValue) => previousValue * currentValue;

    result = process(reducer, req.query.array)

   res.json({ prod: result });
}
)

router.get("/div", (req, res) => {
    const reducer = (previousValue, currentValue) => previousValue / currentValue;

    result = process(reducer, req.query.array)


   res.json({ quot: result });
}
)

app.use("", router);

const server = http.createServer(app)

server.listen(port, () => {
    console.log("Database Server Running on port " + port + " ...")
})

module.exports = app;


//to run this server tipe  node server.js