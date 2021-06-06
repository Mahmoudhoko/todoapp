import React ,{ Component } from 'react';
import './AddItem.css';


class AddItem extends Component{

  state = {
    name:'',
    age:''
  }

  handelChange = (e) => {
    this.setState({
      [e.target.id]:e.target.value
    })
  };


  handelSubmit = (e) => {
    e.preventDefault();
    this.props.AddItem(this.state)
    this.setState({
      name:'',
      age:''
    })
  };



  render(){
    return(
      <div className = 'row'>
        <form onSubmit = {this.handelSubmit} >
          <input type="text" placeholder = "Enter your name" id = "name" onChange ={this.handelChange} value = {this.state.name} required/>
          <input type="number" placeholder = "Enter your age" id = "age" onChange ={this.handelChange} value = {this.state.age} required/>
          <input className="active" type="submit"  value = "Add" />   
        </form>
      </div>
    )
  }
}

export default AddItem;