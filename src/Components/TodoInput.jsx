import { useState } from "react";

function TodoInput({onClick}) {
    const [title,setTitle]=useState("")

       
    return ( 
        <div>
            <input placeholder="add something" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <button onClick={()=>onClick(title)}>add</button>
        </div>
     );
}

export default TodoInput;