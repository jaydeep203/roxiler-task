
import { useEffect, useState } from "react";
import { TEChart } from "tw-elements-react";

export default function ChartBar({month, months, barData}){

  const [monthName, setMonthName] = useState("");
  const [data, setData] = useState([]);

    useEffect(() => {
        for(let i=0; i<months.length; i++){
            if(months[i].value==month){
                setMonthName(months[i].name);
            }
        }

        let temp = [];

        for(let i=0; i<barData.length; i++){
          if(i==barData.length-1){
            temp.push(barData[i].maxPriceCnt);
          }
          temp.push(barData[i].count);
        }
        setData(temp);


    },[month]);



  return (
    <div className="
      w-[65%] mx-auto
    ">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Bar chart statistics - {monthName}
      </h5>
    
      <TEChart 
        type="bar"
        data={{
          labels: [
            "0-100",
            "101-200",
            "201-300",
            "301-400",
            "401-500",
            "501-600",
            "601-700",
            "701-800",
            "801-900",
            "901 above"
          ],
          datasets: [
            {
              label: "Bar chart stats",
              data: data,
            },
          ],
        }}
      />
    </div>
  );
}