import React, { useContext, useState } from 'react'
import {magic} from './App'

function Jess() {
    const{settext,data,amount,carter,pic,text,add,sub,setamount,setdata,setcarter}=useContext(magic)
    
 
     const reset=()=>{
    const copy=[...data]
    copy.map((zeroprice)=>{
        return zeroprice.quantity=0
    })
     
    setdata(copy)
        setamount(0)
        setcarter(0)
     }


     const bns=()=>{
    
        settext('cart')
    
      }
     

  return (
    <>
    <h1>Abhi  <span id="mrt"> Mart</span></h1>
    <button className='btn btn-primary amt2'>Total Amount: $ {amount}</button>
    <button id="cart" className='btn btn-warning'>Cart-Items {carter}</button>
   
    <div onClick={()=>{bns()}} className='btn btn-info list-dekho'><i class="fa-solid fa-cart-shopping"></i></div>
    
    
    
     {
        data.map((val,i)=>{
            return <div key={i} className='row'>
            <div className='col-md-5 ms-5 mt-4'>
                <figure>
                    <img src={val.image} alt={val.id} className='img-fluid' />
                    <figcaption>
                        
                        <h3><span>$</span>{val.price}</h3>
                        <h4>{val.title}</h4>
                    </figcaption>
                </figure>
            </div>
           <div className='col-md-3'>
           <div class="btn-group" role="group" aria-label="Basic mixed styles example">
            <div className='group-buttons'>
            <button onClick={()=>{sub(i)}}  type="button" class="btn btn-danger me-2">REMOVE</button>
            <button type="button" class="btn btn-dark">{val.quantity}</button>
            <button onClick={()=>{add(i)}}  type="button" class="btn btn-primary ms-2">ADD</button>
            </div>

</div>
<div className='col-md-4'>
    <button className='btn btn-warning indiprice'>$ {val.price*val.quantity}</button>
</div>


           </div>

            </div>
        })
     }
    
    <div className='last mb-4 rem mt-5'>
    <button className='btn btn-primary amt'>Total Amount: $ {amount}</button>
    <button id="reset" className='btn btn-success' onClick={reset}>Reset</button>
    </div>
    
    
     
    
    
    
    
    
    </>
  )
}

export default Jess