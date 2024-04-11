import Header from "./components/header/header";

import "./App.css";

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import CheckIcon from '@mui/icons-material/Check';

function App() {
    // const [value, setValue] = useState("")
    // const [tasks, setTasks] = useState([])
    // const [state, setstate] = useState([])

    // function details() {
    //     setTasks([...tasks, value])
    //     setValue("")
    // }
    // function detelechange(index) {
    //     setTasks(tasks.filter((task, ind) => {
    //         return ind !== index
    //     }))
    // }
    // function editchange(values) {
    //     setValue(tasks.filter((vals, ind) => {
    //         return vals === values
    //         setstate[false]
    //     }))
    // }
    return (
        <>
        <Header/>
        </>
    )
        // <>
    //         <h1>TO-DO LIST</h1>
    //         <input type="text" value={value} onChange={(e) => { setValue(e.target.value) }} />
    //         <button onClick={details}>Add Task</button>

    //         <ul>
    //             {tasks.map((val, ind) => {
    //                 return <>
                        
    //                     <li>{val}
    //                         <DeleteIcon onClick={(e) => detelechange(ind)} />
    //                         <EditIcon onClick={(e) => editchange(val)} />
    //                         <CheckIcon />
    //                     </li>
    //                 </>
    //             })}
    //         </ul>
    //     </>
    
}

export default App















