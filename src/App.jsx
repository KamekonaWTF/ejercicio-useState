import { useState } from 'react'
import './App.css'

function App() {
 const [name, setName] = useState('Sofía')
 const [newName, setNewName] = useState(`''`)

 const profeClick = (newProfe) => {
    setName(newProfe)
 };

 return (
    <div>
        <h2>Teacher name: {name}</h2>
        <ul>
            <li onClick={()=> profeClick('Data')}>Data</li>
            <li onClick={()=> profeClick('Reyes')}>Reyes</li>
            <li onClick={()=> profeClick('Yolanda')}>Yolanda</li>      
        </ul>
    </div>
 )
}

export default App
