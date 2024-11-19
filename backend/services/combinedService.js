const barchartService = require("../services/barchartService");
const categoryService = require("../services/categoryService");
const statisticsService = require("../services/statisticsService");
const transactionService = require("../services/transactionService");

const getCombinedData = async(query) => {
    
    const barchartData = await barchartService.getBarchartData(query);
    const categories = await categoryService.getCategory(query);
    const stats = await statisticsService.getStats(query);
    const transactions = await transactionService.getAllTransactions(query);

    return {
        barchartData, categories, stats, transactions
    };

}

module.exports = {
    getCombinedData
};