import { useState } from 'react'

import Nav2 from './Nav2'

const Customer = () => {
  let [x,data]= useState({ccode:"",cname:"",cphn:"",address:""})
  let [y,displayData]= useState({ccode:"",cname:"",cphn:"",address:""})

  let getData=(e)=>{
    data({...x,[e.target.name]:e.target.value})
  }
  let show=()=>{
    alert("Customer details added")
    displayData({ccode:x.ccode,cname:x.cname,cphn:x.cphn,address:x.address})
  }

  return (
    <>
    <Nav2/>
    <fieldset className='formFieldset'>

    <h1>CUSTOMERS </h1>
     <h4>Customer code :</h4> <input type="number" onChange={getData} name="ccode" /> <br />
     <h4>Customer Name :</h4> <input type="text" onChange={getData} name="cname" /><br />
     <h4>Customer Phone :</h4> <input type="number" onChange={getData} name="cphn" /><br />
     <h4>Customer Address :</h4> <input type="text" onChange={getData} name="address" /><br />
     
     <button onClick={show}> SAVE </button>
     <hr />
     <h4>New Customer</h4>
     <h4>Customer code :</h4> {y.ccode} <br />
     <h4>Customer Name :</h4> {y.cname} <br />
     <h4>Customer Phone :</h4>{y.cphn} <br />
     <h4>Customer Address :</h4> {y.address} <br />
     
     
    </fieldset>
    </>
  )
}

export default Customer
