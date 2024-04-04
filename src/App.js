import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Importing Required Components
import Header from './MyComponents/Header';
import Home from './MyComponents/Home';
import TaskInput from './MyComponents/TaskInput';
import TaskList from './MyComponents/TaskList';
import Error from './MyComponents/Error';
import TellUs from './MyComponents/TellUs';

function App() {
  //Function to implement the logic of Deleting Tasks
  const ondelete=(t)=>{
    console.log("I am deleted of: ",t);
    setTodos(todos.filter((e)=>{
      return e!==t;                          //Filtering the group of tasks available and removing the selected task.
    }));
  }

  //Function to Add the task to the list of tasks
  const addTodo=(title,desc)=>{
    console.log("I am adding this todo",title,desc);
    let newsno;                            //Variable to keep the track of serial no. of tasks
    if(todos.length === 0)
      newsno=1;
    else
      newsno=todos[todos.length-1].sno +1;
    const myTodo={
      sno:newsno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }
  
  //Using state and state hook
  const [todos,setTodos]=useState([]);              //Keeping the initial state of todos as empty array
  
  return ( 
    //Routing all the Components
    <BrowserRouter>
      <Header title={"Akriti's Todo List"} search={false}></Header>
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
        <Route path='/taskinput' element={<TaskInput addTodo={addTodo}> </TaskInput>}></Route>
        <Route path='/tasklist' element={<TaskList total_items={todos} ondelete={ondelete}>  </TaskList> }></Route>
        <Route path='/tellus' element={<TellUs></TellUs>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
