import { useState } from 'react'
import './App.css'


// all these import things. useState is the main funtion to... route? things. no, control state.
// then we import the css


function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // these are the biggies. 1st sets up single task variable and setTask function to change a task. useState default is blank - no task (which is just a string)
  // 2nd sets up the task list, setTasks changes the tasks default, which is an empty array to start. 

  // Function to add a new task. completely separate from the above but calls setTasks AND setTask.
  const addTask = () => { // this an arrow function, gets called on line 35 with button click
    if (task.trim() !== '') { // this gets rid of any blank spaces and if something does not equal empty string...
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]); // spread (?) pushes the new task w/date name and uncompleted, using setTasks to change the state of tasks array 
      setTask(''); // Clear the input field, calls function above to change the state of 'task'
    }
  };

    // Function to mark a task as completed
    const toggleTaskCompletion = (id) => {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    };

  const deleteTask = (id) => {  // we can call 'id' anything. but it's the thing we will remove and it's sent to us when this function is called on the button click.
    setTasks(tasks.filter((task) => task.id !== id)) // call setTasks to change the tasks state. then we filter tasks (ah there it is) and keep anything that doesn't match the id we want to delete. we filter on each task (again this can be named anything) and look at all the task.id and see if the value doesn't match the thing we passed in (the task.id to delete) and then keep those.
  };


  return ( // the main app that gets returned
    <div className="App">
      <h1>React To-Do List</h1>
      {/* input div start */}
      <div className="task-input"> 
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        {/* input element end AND calls the addTask function*/}
        <button onClick={addTask}>Add Task</button>
      </div>
      {/* end of input div */}
      <ul className="task-list">
        {/* start running js map to go through tasks from const at the top and make them li's */}
        {tasks.map((task) => (
          // set up the li's w/ key, and a ternerary where we set a className to 'completed' or '' depending on if task.completed is true. this is like using css display: none to turn on/off a class only it's js and manually setting the class. everything so far is within the <> so nothing is displayed
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            {/* here we have a span that calls the completion toggle funtion whenever the span is clicked */}
            <span onClick={() => toggleTaskCompletion(task.id)}>
              {/* now we display the task name on the screen */}
              {task.text}
              {console.log(task.completed)}
            </span>
            {/* and finally we have a button that will delete the task. we could use a button to toggle completed actually */}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;