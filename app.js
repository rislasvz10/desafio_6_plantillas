const express = require("express");
const app = express();
const PORT = 9000;
const handlebars = require('express-handlebars')
const productsRouter = require("./routers/routerProducts");

const server = app.listen(PORT, () => console.log("Server UP"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*********EJS*************/
/*app.set("views", "./view_ejs");
app.set("view engine", "ejs");*/
/********************************/


/*********Handlebars*************/
/*
app.engine("handlebars", handlebars.engine())
app.set("views", "./view_handelbars");
app.set("view engine", "handlebars");
*/

/*********PUG*************/
app.set('views', './view-pug')
app.set('view engine', 'pug')

app.get("/", (req, res) => {
  res.render("create-product");
});

//app.use("/", express.static("public"));
app.use("/products", productsRouter);

