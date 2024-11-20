import { useEffect } from 'react'
import './App.css'
import DropDown from './components/DropDown'
import Header from './components/Header'
import SearchBox from './components/SearchBox'
import Table from './components/Table'
import { useState } from 'react'
import axios from 'axios'
import Button from './components/Button'
import Stats from './components/Stats'
import ChartBar from './components/ChartBar'
import Loader from './components/Loader'


function App() {

  const [data, setData] = useState([]);
  const [statsData, setStatsData] = useState({});
  const [barchartData, setBarchartData] = useState({});
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [month, setMonth] = useState(3);
  const [tableLoading, setTableLoading] = useState(false);
  const [barchartLoading, setBarchartLoading] = useState(false);
  const [statsLoading, setStatsLoading] = useState(false);

  const months = [
    { name: "January", value: 1 },
    { name: "February", value: 2 },
    { name: "March", value: 3 },
    { name: "April", value: 4 },
    { name: "May", value: 5 },
    { name: "June", value: 6 },
    { name: "July", value: 7 },
    { name: "August", value: 8 },
    { name: "September", value: 9 },
    { name: "October", value: 10 },
    { name: "November", value: 11 },
    { name: "December", value: 12 }
  ]
  

  const fetchData = async() => {
    try{
      setTableLoading(true);
      if(searchQuery!=""){
        const res = await axios.get(`http://localhost:8000/api/v1/transactions?page=${1}&&searchText=${searchQuery}&&month=${month}`);
        setData(res.data);
      }
      else{
        const res = await axios.get(`http://localhost:8000/api/v1/transactions?page=${page}&&searchText=${searchQuery}&&month=${month}`);
        setData(res.data);
      }
      setTableLoading(false);
      
    }catch(err){
      console.log(err);
    }
  }

  const fetchStats = async() => {
    try{

      setStatsLoading(true);

      const res = await axios.get(`http://localhost:8000/api/v1/stistics?month=${month}`);
      setStatsData(res.data);

      setStatsLoading(false);

    }catch(err){
      console.log(err);
    }
  }

  const fetchBarStats = async() => {
    try{

      setBarchartLoading(true);
      const res = await axios.get(`http://localhost:8000/api/v1/barchart?month=${month}`);
      setBarchartData(res.data);
      setBarchartLoading(false);

    }catch(err){
      console.log(err);
    }
  }

  const nextPage = () => {
    if(data.length==0){
      setPage(1);
    }
    else{
      setPage(page+1);
    }

  }

  const prevPage = () => {
    if(page>1){
      setPage(page-1);
    }
  }

    useEffect(() => {
      fetchData();
    }, [page, searchQuery, month]);

    useEffect(() => {
      fetchStats();
    }, [month]);

    useEffect(() => {
      fetchBarStats();
    }, [month]);

  return (
    <>
      <Header />
      <div className='w-full p-4 py-5 bg-neutral-900'>

          <div className='w-full flex flex-col gap-4'>

            <div className='flex flex-row justify-around'>
              <SearchBox setSearchQuery={setSearchQuery} /> 
              <DropDown months={months} setMonth={setMonth} />
            </div>

            {
              tableLoading ? (<Loader />) : (<Table data={data} />)
            }
            
            <div className='flex flex-row gap-2 mx-auto'>
              <Button title="Prev" onClick={prevPage} />
              <Button title="Next" onClick={nextPage} />
            </div>

          </div>
          <div className='w-full flex flex-col gap-4 my-12'>
            {
              statsLoading ? (<Loader />) : (<Stats month={month} months={months} statsData={statsData} />)
            }
            
          </div>
          
          <div className='w-full flex flex-col gap-4 my-12'>
            {
              barchartLoading ? (<Loader />) : (<ChartBar month={month} months={months} barData={barchartData} />)
            }
            
          </div>
          
          
      </div>
    </>
  )
}

export default App
