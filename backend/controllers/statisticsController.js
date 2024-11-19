const statisticsService = require("../services/statisticsService");


const getStats = async(req, res) => {
    try{

        const data = await statisticsService.getStats(req.query);

        res.status(200).json(data);

    }catch(error){
        console.log("Something went wrong in StatisticsController.");
        console.log(error);
    }
}

module.exports = {
    getStats
};