const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transactionController");
const statisticsController = require("../controllers/statisticsController");
const barchartController = require("../controllers/barchartController");
const categoryController = require("../controllers/categoryController");
const combinedController = require("../controllers/combinedController");

router.get("/transactions", transactionController.getAllTransactions);
router.get("/stistics", statisticsController.getStats);
router.get("/barchart", barchartController.getBarchartData);
router.get("/category", categoryController.getCategoryData);
router.get("/combined", combinedController.getCombinedData);

module.exports = router;