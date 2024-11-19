const prisma = require("../config/database");

const getBarchartData = async(query) => {

    const { month=1 } = query;

    if (!month || isNaN(month) || month < 1 || month > 12) {
        throw new Error("Invalid month provided. Please provide a valid month number (1-12).");
    }

    const formattedMonth = month.toString().padStart(2, '0');

    const data = await prisma.product.findMany({});


    const filteredData = data.filter((item) => {
        const itemDate = new Date(item.dateOfSale);
        return itemDate.getMonth() + 1 == formattedMonth;
    });

    const barchartPrices = [
        {min:0 , max:100 , count:0},
        {min:101 , max:200 , count:0},
        {min:201 , max:300 , count:0},
        {min:301 , max:400 , count:0},
        {min:401 , max:500 , count:0},
        {min:501 , max:600 , count:0},
        {min:601 , max:700 , count:0},
        {min:701 , max:800 , count:0},
        {min:801 , max:900 , count:0},
    ];
    let maxPriceCnt = 0;

    filteredData.map((item) => {

        if(item.price>900){
            maxPriceCnt++;
        }
        else{
            barchartPrices.map((i) => {
                if(i.min<=item.price && item.price<=i.max){
                    i.count++;
                }
            });
        }
    });

    barchartPrices.push({min:901, maxPriceCnt});

    return barchartPrices ;

}

module.exports = {
    getBarchartData
};