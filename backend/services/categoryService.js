const prisma = require("../config/database");

const getCategory = async(query) => {

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

    const categories = [
        { category:"men's clothing", count:0 },
        { category:"jewelery", count:0 },
        { category:"electronics", count:0 },
        { category:"women's clothing", count:0 }
    ];

    filteredData.map((item) => {
        categories.map((i)=>{
            if(item.category==i.category){
                i.count++;
            }
        });
    });


    return categories;

}

module.exports = {
    getCategory
};