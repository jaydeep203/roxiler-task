const transactonService = require("../services/transactionService");

const getAllTransactions = async(req, res) => {
    
    try{

        const data = await transactonService.getAllTransactions(req.query);

        res.status(200).json(data);

    }
    catch(error){
        console.log("Something went wrong in getAllTransaction.")
        console.log(error);
    }
    
}

module.exports = {
    getAllTransactions
}