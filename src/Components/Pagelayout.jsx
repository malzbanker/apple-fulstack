import React from 'react';

import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Four04 from '../Pages/Four04/Four04';
 function Pagelayout() {
    const {productID}= useParams();
    const[product, setproduct]= useState([]);
    useEffect(() => {
    
        fetch("/Iphone.json")
          .then(response => response.json())
          .then(data => {
             // Update the state with the website HTML
            const productList= data.products;
            const singleproduct= productList.filter((product)=>product.product_url===productID);
            setproduct(singleproduct);
          })
          .catch(error => {
            console.log('Error:', error);
          });
      }, [productID]);
      console.log(product);
    //   let flip=true;
      if(product.length){
  return (

      <div className='mac mb-5'>{productID}
              <div className=''>
                
                {product?.map((product) => {
             
                  let product_div=(
                  
                    <div className='mb-5'>
                       <div key={product.product_id}></div>
                      {/* <div>
                        <a href={vd_link}>Watch Video</a>
                      </div>  */}
                      <div className='row class'>
                      
                      <div className={`grid col-md-6  p-3 mb-5  col-sm-12 `}>
                        <img src={product.product_img} alt="Video Thumbnail" className='appleimag'/>
                        </div>
                      <div className={`  col-md-6  p-3 mb-5  rainbow text-white `}>
                      <div><h1>{product.product_name}</h1></div>
                      <div className='textstyle'>
                      <div><p>{product.product_brief_description}</p></div>
                      <div><p>{product.product_description}</p></div>
                      <div><p>{product.starting_price}</p></div>
                      <div><p>{product.price_range}</p></div>
                      </div>
                       </div>
                       
                       
                     
                    </div>
                      </div>
                    
                  );
                  return product_div;
                })}
              </div>
              </div>
  )
      }
    
    
    else{
 
return <Four04/>;
    }
    
    
    
    }

export default Pagelayout;
