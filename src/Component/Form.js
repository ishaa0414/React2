import React, { Component } from 'react'
import './Style.css'

export default class Form extends Component {
    state={
      name : "",
      department:"",
      rating:0,
      data : []
    }
    handleClick=(e)=>{
      e.preventDefault();
        const saveData={
            name : this.state.name,
            department:this.state.department,
            rating:this.state.rating
        }
        const arr=this.state.data;
        arr.push(saveData);
        this.setState({data : arr});
    }
    clickChange=(e)=>{
        this.setState({[e.target.name]:e.target.value,
         [e.target.department]:e.target.value,
         [e.target.rating]:e.target.value});
    }


  render() {
    return (
     <>
     <h1>EMPLOYEE FEEDBACK FORM</h1>
     <div className='form'>
     <label className='label'>Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
     <input className='input' placeholder='Enter Username' name='name' type='text' id='name' onChange={this.clickChange}/><br/>
     <label  className='label'>Department &nbsp;&nbsp;:&nbsp;</label>
     <input className='input' type='text' placeholder='Enter Department' name='department' id='department' onChange={this.clickChange}/><br/>
     <label className='label'>Rating&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
     <input className='input' type='number' placeholder='Enter Rating' name='rating'id='rating' onChange={this.clickChange}/><br/>
     <button className='submit' type='submit' id='submit' onClick={this.handleClick}>Submit</button>
     </div>
     <span className='list'>
     {this.state.data.map((item,index)=>{
      return(
        <>
<span className='listItem'>
        <span>Name:{item.name}|</span>
        <span>Department:{item.department}|</span>
        <span>Rating:{item.rating}</span>
        </span>
        </>
      )
     })}
     </span>
     </> 
    )
  }
}


