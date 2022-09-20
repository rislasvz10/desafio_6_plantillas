const expres = require("express");
const router = expres.Router();

const Manager = require("../manager.js");
const manager = new Manager();

router.get("/", (req, res) => {
  let productsAll = manager.findAll();
  res.render('get-products',{
     products: productsAll
  });
});


router.post("/", (req, res) => {
  if (!req.body.title || !req.body.price || !req.body.thumbnail)
    return res.send({ error: "data is required" });
  manager.save(req.body);
  res.redirect('/')
});

module.exports = router;
