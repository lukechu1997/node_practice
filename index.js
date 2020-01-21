const express = require("express");
const app = express();

app.use("/static", express.static("public"))

app.set("view engine", "ejs");

app.listen(3000, () => console.log("Server Up and running"));
// dedicating a port number and telling our express app to listen to that port.

app.get('/',(req, res) => {
    res.render('todo.ejs');
});
