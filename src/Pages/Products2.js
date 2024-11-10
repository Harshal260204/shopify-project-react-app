import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'

export default function Products2() {
    const [data,setData] = useState([])         
    const [filterData,setFilteredData]=useState(data)

    useEffect(()=>{
        const fetchApi = async()=>{
            const {data} = await axios("https://shivraj-chavan.github.io/api/electronics.json")
            setData(data)
            setFilteredData(data)

        }
        fetchApi()
    },[])

    const filterData=()=>{
        if(category=="All"){
            setFilteredData(data)
        }
        else{
            const newData = data.filter((props)=>props.category===category)
            setFilteredData(newData)
        }
    }
  return (
    <div>
        <h1></h1>

    </div>
  )
}
