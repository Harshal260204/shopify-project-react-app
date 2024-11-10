import React, { useEffect, useState } from 'react'

export default function CardApi() {

   const [getApi,setApi]=useState([])


    useEffect(()=>{


      const fetchApi=async()=>{

          let response = await fetch("https://fake-store-api.mock.beeceptor.com/api/products")

          const  data =await response.json()

          console.log(data)

          setApi(data)

        }

        fetchApi()



    },[])


  return (
<>
    {

     getApi.map(({image,price,description,title})=>{
        return(
            <div
            className="card border rounded-0 ms-3 mt-3  col-3 col-lg-3 col-md-4 col-sm-6"
            style={{ width: "19rem" }}
          >
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h6>Beauty</h6>
              <a href="#" className="text-decoration-none">
                <h5>{title}</h5>
              </a>
              {/* <span className="text-warning fs-4">{props.rating}</span> */}
              <span>
                <h4 className="text-primary">{price}</h4>
              </span>
              <span>
                {/* <strike>{price}</strike> */}
              </span>
              {/* <span>{props.percentage}</span> */}
              <a href="#" className="btn btn-primary">
                Add To Cart
              </a>
            </div>
          </div>
        )
     })   

    }

</>
  )
}
