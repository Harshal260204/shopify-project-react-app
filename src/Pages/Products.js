import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Products() {

  const navigate = useNavigate()
    const [data,setData] = useState([])         
    const [filteredData,setFilteredData]=useState(data)

    useEffect(()=>{
        const fetchApi = async()=>{
            const {data} = await axios("https://shivraj-chavan.github.io/api/electronics.json")
            setData(data)
            setFilteredData(data)

        }
        fetchApi()
    },[])

    const filterData=(category)=>{
        if(category=="All"){
            setFilteredData(data)
        }
        else{
            const newData = data.filter((props)=>props.category===category)
            setFilteredData(newData)
        }
    }

    const openPage=(product)=>{
      navigate(`/productDetails/${product.category}/${product.id}`);

    }
  return (
    <div>
        <h1 className='fs-3 m-4'>Products</h1>
            <div className='container d-flex flex-wrap'>
                <div className='btn btn-primary' onClick={()=>filterData("All")}>All</div>
                <div className='btn btn-primary' onClick={()=>filterData("mobile")}>Mobile</div>
                <div className='btn btn-primary' onClick={()=>filterData("laptop")}>Laptop</div>
                <div className='btn btn-primary' onClick={()=>filterData("tv")}>TV</div>
                <div className='btn btn-primary' onClick={()=>filterData("watch")}>Watches</div>
            </div>

            <div className='row'>
                {
                    filteredData?.map((product,index)=>{
                        return(
                            <div className='card mx-auto ms-4 mb-4 col-12 col-sm-2 col-md-3 col-lg-6' style={{width:"16rem",height:'auto'}}>
                            <img src={product.thumbnail} onClick={()=>(openPage(product))} className='card-img-top m-3 ms-2 b' style={{width:"13rem",height:"210px"}}/>
                                <div className='card-body'>
                                    <h5 className='card-title m-2'>{product.title}</h5>
                                    <p className='card-text fw-600 fw-medium mb-1'>{product.description[0]}</p>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <span className='text-warning fs-4'>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                                            <span className='text-light-emphasis fw-bold me-5'>{product.price}</span>
                                        </div>
                                </div>
                            </div>

                           
                        )
                    })
                }
            </div>

    </div>
  )
}