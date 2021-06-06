import './ToDoItem.css';
import React from 'react';


const ToDoItem = (props) =>{

  const data = props.data;
  const deleteItem = props.deleteItem
  const length = data.length
  let Items = length ? (data.map(item =>{
    return(
      <div key = {item.id} className = 'row'>
        <span>{item.name}</span>
        <span>{item.age}</span>
        <span onClick = {() => deleteItem(item.id)}> &times;</span>
      </div>
    )
  })): (
      <div className="row show">There is no lists to show</div>
    )
  

  return(
    <div className = "container">
      <div className = "row">
        <span className ="active">Name</span>
        <span className ="active">Age</span>
        <span className ="active">Action</span>
      </div>
      {Items}
    </div>
  )
}

export default ToDoItem;