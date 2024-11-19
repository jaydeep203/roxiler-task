const prisma = require("../config/database");

const getStats = async(query) => {

    const { month=1 } = query;

    if (!month || isNaN(month) || month < 1 || month > 12) {
        throw new Error("Invalid month provided. Please provide a valid month number (1-12).");
    }

    const formattedMonth = month.toString().padStart(2, '0');

    const data = await prisma.product.findMany({});

    let soldItems = 0;
    let unsoldItems = 0;
    let sale = 0;

    const filteredData = data.filter((item) => {
        const itemDate = new Date(item.dateOfSale);
        return itemDate.getMonth() + 1 == formattedMonth;
    });


    filteredData.map((item) => {
        if(item.sold==true){
            soldItems++;
        }
        else{
            unsoldItems++;
        }
        sale = sale + item.price;
    });

    return {sold:soldItems , unsold:unsoldItems, sale} ;

}

module.exports = {
    getStats
};