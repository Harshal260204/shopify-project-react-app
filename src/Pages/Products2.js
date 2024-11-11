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
        <h1 className='fs-3 m-4'>Rpoducts</h1>
            <div className='container d-flex flex-wrap'>
                <div className='btn btn-primary' onClick={()=>filterData("All")}>All</div>
                <div className='btn btn-primary' onClick={()=>filterData("Mobile")}>Mobile</div>
                <div className='btn btn-primary' onClick={()=>filterData("laptop")}>Laptop</div>
                <div className='btn btn-primary' onClick={()=>filterData("tv")}>TV</div>
                <div className='btn btn-primary' onClick={()=>filterData("watch")}>Watches</div>
            </div>

            <div className='row'>
                {
                    filterData?.map((product,index)=>{
                        return(
                            <div>

                            </div>
                        )
                    })
                }
            </div>

    </div>
  )
}
