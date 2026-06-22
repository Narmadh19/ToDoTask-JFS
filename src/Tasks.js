import React,{useState} from 'react'

function Tasks  ()  {
  const [task,setTask]=useState("");
  const [name,setName] =useState("");
  const [due,setDue]=useState("");

  function saveMsg(e) {
    e.preventDefault();
    fetch("http://localhost:8080/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({task:task,name:name,DueDate:due}),
    })
      .then((res) => res.text())
      .then((data) => alert(data));
      //.catch(alert("Failed to save"));
  }

  function getAll(){
    fetch("http://localhost:8080/tasks")
      .then((res) => res.json())
      .then((data) => {let res="";
                        for(let i=0;i<data.length;i++){
                            res+=data[i].text +" ";
                        } setTask(res);
      });
  }
  


  return (
    <div>
      <center>
        <h1>TO DO TASKS</h1>
        <div>
          <h3>TASK:</h3>
          <input type="text" value={task} placeholder="Enter Task" onChange={(e)=>setTask(e.target.value)}></input>
        </div>
        <div>
          <h3>NAME:</h3>
          <input type="text" value={name} placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}></input>
        </div>
        <div>
          <h3>DUE DATE:</h3>
          <input type="date" value={due} placeholder='Enter DueDate' onChange={(e)=>setDue(e.target.value)}></input>
        </div>

        <button type="button" onClick={saveMsg}>ADD TASK</button>
        <button onClick={getAll}>VIEW BUTTON</button>
      </center>
    </div>
  )
}

export default Tasks;