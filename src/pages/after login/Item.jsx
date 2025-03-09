import { useState } from 'react'
import Nav2 from './Nav2'


const Item = () => {
  let [x,data]= useState({icode:"",iname:"",qty:"",rate:"",date:""})
  let [y,displayData]= useState({icode:"",iname:"",qty:"",rate:"",date:""})

  let getData=(e)=>{
    data({...x,[e.target.name]:e.target.value})
  }
  let show=()=>{
    alert("Item added")
    displayData({icode:x.icode,iname:x.iname,qty:x.qty,rate:x.rate,date:x.date})
  }

  return (
    <>
    <Nav2/>
    <fieldset className='formFieldset'>

    <h1>ITEMS</h1>
     <h4>Item code : </h4><input type="number" onChange={getData} name="icode" /> <br />
    <h4> Item Name :</h4> <input type="text" onChange={getData} name="iname" /><br />
     <h4>Item Quantity :</h4> <input type="number" onChange={getData} name="qty" /><br />
    <h4> Item Rate :</h4> <input type="number" onChange={getData} name="rate" /><br />
     <h4>Date :</h4> <input type="date" onChange={getData} name="date" /> <br /><br />

     <button onClick={show}> SAVE </button>
     <hr />
     <h4>New Item</h4>
    <h4> Item code :</h4> {y.icode} <br />
    <h4> Item Name :</h4> {y.iname} <br />
     <h4>Item Quantity :</h4>{y.qty} <br />
     <h4>Item Rate :</h4> {y.rate} <br />
    <h4> Date :</h4> {y.date} <br />
     
    </fieldset>
    </>
  )
}

export default Item
