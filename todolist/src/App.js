
import './App.css';
import  React, {Component}  from 'react';
import ToDoItem from './Component/Todoitem/ToDoItem';
import AddItem from './Component/Additem/AddItem';



class App extends Component{

  
 state = {
  items:[
    {id:1, name:'Mahmoud', age:24},
    {id:2, name:'Mohammed', age:30},
    {id:3, name:'Abass', age:27}
  ]
}

deleteItem = (id) =>{
  const items = this.state.items.filter(item => {
    return item.id !== id
  })
  this.setState({items})
}

AddItem = (item) =>{
  item.id = Math.random();
  let items= this.state.items
  items.push(item)
  this.setState({items})
  
}

  render(){
    return (
      <div className="App">
        <h1>To Do List</h1>
        <ToDoItem data = {this.state.items} deleteItem = {this.deleteItem} />
        <AddItem AddItem = {this.AddItem}/>
      </div>
    );
  }
}

export default App;
