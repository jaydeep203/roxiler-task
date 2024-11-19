


const Table = ({data}) => {

  return (
    
    <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Description
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Sold
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Image
                    </th>
                </tr>
            </thead>

            <tbody>
            {
                data.map((item, index) => (

                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.itemId}
                        </th>
                        <td className="px-6 py-4">
                            {item.title}
                        </td>
                        <td className="px-6 py-4">
                            {item.description}
                        </td>
                        <td className="px-6 py-4">
                            {item.price}
                        </td>
                        <td className="px-6 py-4">
                            {item.category}
                        </td>
                        <td className="px-6 py-4">
                            {item.sold ? "Yes" : "No"}
                        </td>
                        <td className="px-6 py-4 w-40">
                            <img src={item.image || "/"} alt="product image"
                                className="w-36 h-32"
                            />
                        </td>
                    </tr>
                ))
            }
            </tbody>

            
        </table>
    </div>

  )
}

export default Table