import { useEffect, useState } from 'react';
import './App.css';
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import { ShowTask } from './components/ShowTask';
import { Footer } from './components/Footer';

function App() {
  const [taskList, setTaskList] =  useState(JSON.parse(localStorage.getItem("taskList")) || []);
  const [task, setTask] = useState({});
  useEffect(()=>{
    localStorage.setItem("taskList", JSON.stringify(taskList))
  }, [taskList])
  return (
    <div className="App">
      <Header/>
      <main>
      <AddTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask}/>
      <ShowTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask}/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
