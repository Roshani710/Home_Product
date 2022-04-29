import React, { useState, useEffect ,useRef} from 'react'
import axios from 'axios';
import CardProducts from './CardProducts'
import { useNavigate } from 'react-router-dom'

const ViewProduct = (req,res) => {
  const [products, setProducts] = useState([])
  let nevigate=useNavigate()
  

  useEffect(() => {
      //console.log("test")
      getProductsData()
  }, [])
 if(!window.localStorage.getItem('token')){
   useEffect(()=>{
   window.alert("You are not Autherized For this")
   nevigate('/')
   },[])
 }
  async function getProductsData() {
      const { data } = await axios.get('http://localhost:3009/viewProduct',{
          headers: {
              token:window.localStorage.getItem('token')
          }
      })
      setProducts(data.products)
  }
  const sortData= async (sort)=>{
    const res=await axios.get(`http://localhost:3009/sort/${sort}`,{

    })
    setProducts(res.data)
}
const sortHandel=(e)=>{
const sort=e.target.value
if(sort==='all')
{
  getProductsData()
}
else {
    sortData(sort)
}

}
//sort category
const sortCategory= async (sort)=>{
  const res=await axios.get(`http://localhost:3009/sortCat/${sort}`)
  setProducts(res.data)
  console.log(res)
}
const sortHandelCategory=(e)=>{
const sort=e.target.value
if(sort==='all')
{
getProductsData()
}
else {
  sortCategory(sort)
}

}

  return (
<>
         <div className="products">
            <div className="container">
            <section class="breadcrumb_part">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="breadcrumb_iner">
                                                    <h2>Furniture</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            </section>
               
                <div className="form-group">
                <label htmlFor='sort_price'>Category:</label>
                   <select className="form-control" onChange={sortHandelCategory} >
         
                       <option  value="1">Office</option>
                       <option  value="2">Bedroom</option>
                       <option  value="3">Living Room</option>
                       <option  value="4">Kitchen</option>
                         
                   </select>
                   </div>

               <div className="form-group">
                   <label htmlFor='sort_price'>Price:</label>
                   <select className="form-control" onChange={sortHandel} >
                       <option  value="10">less then 10</option>
                       <option  value="10_50">10-50</option>
                       <option  value="50">50</option>  
                   </select>
                </div>
                    
                <div className="row">
                    {
                        products.map((val,ind)=>{
                            return(
                                <>
                            <CardProducts
                        key={ind}
                        product_id={val.product_id}
                        product_name={val.product_name}
                        product_price={val.product_price}
                        product_photo={val.product_photo}
                        />
                                </>
                            )
                        })
                    }
                        
                        
                        
                </div>
            </div>
        </div>
        
            
        </>
      
  )

  
}

export default ViewProduct

