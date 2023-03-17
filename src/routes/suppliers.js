const express = require("express");
const router = express.Router();

const {
  getSupplier,
  searchSuppliers,
  suppliersByVertical
} = require("../controllers/suppliers");

router.get("/supplier/:id", async (req, res) => {
  const supplier = await getSupplier(req.params.id);
  res.json(supplier);
});

router.get("/search", async (req, res) => {
  const suppliers = await searchSuppliers(req.query);
  res.json(suppliers);
});

router.get("/verticals", async (req, res) => {
  const suppliers = await suppliersByVertical();
  res.json(suppliers);
});

module.exports = router;
