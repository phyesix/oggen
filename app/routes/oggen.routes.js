module.exports = app => {
  const router = require("express").Router(); 
  const oggen = require("../controllers/oggen.controller.js");

  router.get("/:url", oggen.getOG);

  app.use('/oggen', router);
};
