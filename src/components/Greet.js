import react from "react";
import { useState } from "react";

const Greet=(()=>{
const [name,setName]=useState('');

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
})
export default Greet;