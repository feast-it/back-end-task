const suppliersResponse = require("./suppliers.json");

const getSupplier = async (id) => {
  const { suppliers } = suppliersResponse;
  return {};
};

const searchSuppliers = async (query) => {
  const { suppliers } = suppliersResponse;
  return {};
};

const suppliersByVertical = () => {
  const { suppliers } = suppliersResponse;
  return {};
};

module.exports = {
  getSupplier,
  searchSuppliers,
  suppliersByVertical
};
