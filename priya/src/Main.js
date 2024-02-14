import React, {useContext, useState} from 'react'
import {magic} from './App'
function Main() {

   
   
  const{settext,data,amount,carter,pic,text,add,sub,setdata,setcarter,setamount,setpic,quantity}=useContext(magic)
  const[cost,setcost]=useState(amount) 
  const[sum,setsum]=useState(carter)


 
const plus=(i)=>{
  const copy=[...data]
  copy[i].quantity++
  setdata(copy)

  let money=cost
    money+=copy[i].price
    setcost(money)


    let total=sum
    total+=copy[i].cart
    setsum(total)



}

const plusNot = (i) => {
  const copy = [...data];
  if (copy[i].quantity > 0) {
    copy[i].quantity--;
    setdata(copy);

    let money = cost;
    money -= copy[i].price;
    setcost(money);

   /*  let total = sum;
    total-=copy[i].cart; 
    setsum(total); */
    let total = sum;
    total-=copy[i].cart; // Decrease total items in the cart by 1
    setsum(total);

    
    
    
  }
};











  return (
    <>

    <div className='ressle'>
    <div className='result'>Your Cart</div>
    </div>


    <div className='bill-box'>
    <button className='btn btn-info me-2'>TOTAL BILL : ${cost}</button>
    <button className='btn btn-primary'>TOTAL ITEMS : {sum}</button>
    </div>
    
   {
      pic.map((pic,i)=>{
        return <div className='row itemsList' key={i}>
          <div className='col-md-4'>
            <img src={pic} className='img-fluid mt-5 ms-5'/>
          </div>
         <div className='col-md-4 buttons'>
          <button className='btn btn-success me-2' onClick={()=>{plus(i)}} >ADD</button>
          <button className='btn btn-warning'>{data[i].quantity}</button>
          <button className='btn btn-success ms-2' onClick={()=>{plusNot(i)}} >REMOVE</button>
         </div>

         <div className='col-md-4 mt-5 buttons2'>
         <button className='btn btn-primary'>${data[i].quantity*data[i].price}</button>
         </div>
        </div>
      })


    } 





   
    
    
    
    
    
    
    </>
  )
}

export default Main 