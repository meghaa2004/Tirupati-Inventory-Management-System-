import { useState } from 'react'
import Nav2 from './Nav2'

const ItemO = () => {
  let [x,data]= useState({ordno:"",ocode:"",icode:"",qty:"",date:""})
  let [y,displayData]= useState({ordno:"",ocode:"",icode:"",qty:"",date:""})

  let getData=(e)=>{
    data({...x,[e.target.name]:e.target.value})
  }
  let show=()=>{
    alert("Item Order added")
    displayData({ordno:x.ordno,ocode:x.ocode,icode:x.icode,qty:x.qty,date:x.date})
  }

  return (
    <>
    <Nav2/>
    <fieldset className='formFieldset'>

    <h1>ITEM ORDER</h1>
     <h4>Order no. :</h4> <input type="number" onChange={getData} name="ordno" /> <br />
     <h4>Order Code:</h4> <input type="text" onChange={getData} name="ocode" /><br />
     <h4>Item Code:</h4> <input type="number" onChange={getData} name="icode" /><br />
     <h4>Quantity :</h4> <input type="number" onChange={getData} name="qty" /><br />
     <h4>Date :</h4> <input type="date" onChange={getData} name="date" /> <br /><br />

     <button onClick={show}> SAVE </button>
     <hr />
     <h4>New item order </h4>
     <h4>Order no. :</h4> {y.ordno} <br />
     <h4>Order Code:</h4> {y.ocode} <br />
     <h4>Item Code:</h4> {y.icode} <br />
     <h4>Quantity :</h4>{y.qty} <br />
     <h4>Date :</h4> {y.date} <br />
     
    </fieldset>
    </>
  )
}

export default ItemO
