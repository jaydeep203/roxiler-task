const barchartService = require("../services/barchartService");


const getBarchartData = async(req, res) => {
    try{

        const data = await barchartService.getBarchartData(req.query);

        res.status(200).json(data);

    }catch(error){
        console.log("Something went wrong in BarchartController.");
        console.log(error);
    }
}

module.exports = {
    getBarchartData
};