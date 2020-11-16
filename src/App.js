import React from 'react'
import './App.css';
import AddBtn from './assets/add.jpg'
import doneBtn from './assets/done.jpg'
import rmvBtn from './assets/th.jpg'
class App extends React.Component {

state= {
  todos : [
{ text: 'buy tabbac', id : 0 , isDone:false},

{text: 'buy more tabbac', id:1 , isDone:false},
{text:'quit smoking', id:2, isDone:false}
  ]}
 

  Add=(text)=>{ if(text.trim()===''){
    return alert('invalid task')}
    const newToDo= {
      text: text,
      id: Date.now(),
      isDone: false
    }
    this.setState({
      todos: [...this.state.todos, newToDo]
    })
  

  this.setState({
    newtext:''
  })};

Done=(index)=>{
  this.setState({todos: this.state.todos.map((todo)=>todo.id===index? {...todo, isDone : !todo.isDone}: todo)})
}
Delete=(index)=>
  this.setState({todos: this.state.todos.filter((todo)=>todo.id!==index  ),});

  render () {
  return (
    <div className='App'>

   
   <div >
     {this.state.todos.map((el)=> 
       <div className='list' key={el.id}>
     <div  className={el.isDone ? 'isDone' :''}>{el.text}</div>
     <div className='image'>
     <img style={{width:'90px'}} onClick={()=> this.Done(el.id)} src={doneBtn}  alt='..' ></img>   
     <img style={{width:'50px', marginLeft:'50px'}}  src={rmvBtn} alt='..' onClick={()=>this.Delete(el.id)}></img>
     </div>
     </div>
     )}
 </div>
 <form className='todoInput' onSubmit={(e)=>e.preventDefault() }>
     <input placeholder="Add a task" type='text'  value={this.state.newtext} onChange={(event)=> this.setState({newtext:event.target.value})
    } />
     <img src={AddBtn} style={{width:'57px'}} alt='..' onClick={()=> this.Add(this.state.newtext)}/>
     
   </form>
 </div>
  )}}

export default App;
