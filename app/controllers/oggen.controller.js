exports.getOG = (req, res) => {
  console.log("getOG");
  res.status(200).send({
    message: "GET!"
  });
};
