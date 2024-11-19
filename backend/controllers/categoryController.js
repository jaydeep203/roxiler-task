const categoryService = require("../services/categoryService");


const getCategoryData = async(req, res) => {
    try{

        const data = await categoryService.getCategory(req.query);

        res.status(200).json(data);

    }catch(error){
        console.log("Something went wrong in BarchartController.");
        console.log(error);
    }
}

module.exports = {
    getCategoryData
};