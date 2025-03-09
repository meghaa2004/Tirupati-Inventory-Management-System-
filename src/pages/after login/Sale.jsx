import  { useState } from 'react'
import Nav2 from './Nav2'

const Sale = () => {
  
    let [x,data]= useState({srno:"",odrno:"",qty:"",rate:""})
  let [y,displayData]= useState({srno:"",odrno:"",qty:"",rate:""})

  let getData=(e)=>{
    data({...x,[e.target.name]:e.target.value})
  }
  let show=()=>{
    alert("Sale record added")
    displayData({srno:x.srno,odrno:x.odrno,qty:x.qty,rate:x.rate})
  }

  return (
    <>
    <Nav2/>
    <fieldset className='formFieldset'>

    <h1>SALES</h1>
     <h4>Sr no. :</h4> <input type="number" onChange={getData} name="srno" /> <br />
     <h4>Order no. :</h4> <input type="text" onChange={getData} name="odrno" /><br />
     <h4>Quantity :</h4> <input type="number" onChange={getData} name="qty" /><br />
     <h4>Rate :</h4> <input type="number" onChange={getData} name="rate" /><br />
     

     <button onClick={show}> SAVE </button>
     <hr />
     <h4>New sale </h4>
     <h4>Sr no. :</h4> {y.srno} <br />
     <h4>Order no. :</h4> {y.odrno} <br />
     <h4>Quantity :</h4>{y.qty} <br />
     <h4>Rate :</h4> {y.rate} <br />
     
     
    </fieldset>
    </>
  )
}

export default Sale
