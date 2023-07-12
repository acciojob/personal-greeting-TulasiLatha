
import React,{useState} from "react";
import './../styles/App.css';


const App = () => {
  let [name,setName]=useState('');

const handleChange=(event)=>{
    setName(event.target.value);
}
return(
    <div>
        <label>
            Enter your name:
            <input type="text" value={name} onChange={handleChange}/>

        </label>
        {name && <p>Hello, {name}</p>}
    </div>
)
  
}

export default App;
