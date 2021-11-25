function TodoList({title,id,status,handleToggle,handleDelete}) {
    return ( 
        <div>
            <h3>{title}</h3>
            <button onClick={()=>handleToggle(id)}>{status? "TRUE":"FALSE"}</button>
            <button onClick={()=>handleDelete(id)}>Delete</button>
        </div>
     );
}

export default TodoList;