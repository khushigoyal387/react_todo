import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

function App() {
  const [value, setValue] = useState("")
  const [tasks, setTasks] = useState([])

  function details() {
    setTasks([...tasks, value])
  }
  return (
    <>
      <h1>TO-DO LIST</h1>
      <input type="text" value={value} onChange= {(e) => { setValue(e.target.value)}} />
      <button onClick={details}>Add Task</button>
      
      <ul>
        {tasks.map((val, ind) => {
          return <>
            <li>{ind}{val}
            <DeleteIcon/>
            <EditIcon/>
            <CheckIcon/>
            </li>
            </>
        })}
      </ul>
      

    </>
  )
}

export default App
