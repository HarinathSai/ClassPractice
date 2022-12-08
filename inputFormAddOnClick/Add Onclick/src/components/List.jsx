import React, { Component } from 'react'
import  './App.css'

class List extends Component {
  render() {
    const { data, handleCheck } = this.props
    return (
      <>
        {data.map((item) => {
          
          return <div className='box'>
            <input type='checkbox' onChange={(event)=>handleCheck(event, item)}/>
            <b className={item.completed ? 'strike' : 'nonstrike'}>{item.name}</b>
          </div>

        })}

      </>
    )
  }
}

export default List;

