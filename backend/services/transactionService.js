const prisma = require("../config/database");

const getAllTransactions = async(query) => {

    const {page=1, searchText="", month=1} = query;
    const skip = (page-1) * 10;
    const conditions = [];
    const isNumeric = !isNaN(searchText);

    if (!month || isNaN(month) || month < 1 || month > 12) {
        throw new Error("Invalid month provided. Please provide a valid month number (1-12).");
    }

    const formattedMonth = month.toString().padStart(2, '0');

    if(searchText!=""){
        if(isNumeric){
            conditions.push({price:parseFloat(searchText)});
        }
        else{
            conditions.push(
                { title: { contains: searchText, mode: 'insensitive' } },
                { description: { contains: searchText, mode: 'insensitive' } }
            );
        }
    }

        const data = await prisma.product.findMany({
            where: conditions.length>0 ? { OR:conditions } : {},
            skip:parseInt(skip),
            take: 10,
        });

        const filteredData = data.filter((item) => {
            const itemDate = new Date(item.dateOfSale);
            return itemDate.getMonth() + 1 == formattedMonth;
        });

        return filteredData;

}

module.exports = {
    getAllTransactions
}