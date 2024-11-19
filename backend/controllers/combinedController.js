const combinedService = require("../services/combinedService");


const getCombinedData = async(req, res) => {
    try{

        const data = await combinedService.getCombinedData(req.query);

        res.status(200).json(data);

    }catch(error){
        console.log("Something went wrong in BarchartController.");
        console.log(error);
    }
}

module.exports = {
    getCombinedData
};