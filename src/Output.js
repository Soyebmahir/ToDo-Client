import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";


const Output = () => {
  const [tasks, setTasks] = useState([]);
  const [complete, setComplete] = useState(false);
  useEffect(() => {
    fetch(" https://mighty-caverns-74861.herokuapp.com/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [tasks]);

useEffect(()=>{

},[])
  
  const completed = (id) => {
    // console.log("completed");
    toast("Task completed")
    setComplete(!complete);
   
    
  };
  const handleUserDelete = id =>{
    const allow = window.confirm('You dare to delete !');
    if(allow){
        console.log('deleting user with id, ', id);
        const url = ` https://mighty-caverns-74861.herokuapp.com/task/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                console.log('deleted');
                const remaining = tasks.filter(user => user._id !== id);
                setTasks(remaining);
            }
        })
    }
}

  return (
    <div>
      <div className="container card bg-base-100 shadow-xl">
        <div className="card-body">
          {/* table data  */}
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- row 1 --> */}
                {tasks.map((task, index) => (
                  <tr key={index}>
                    {/* <th>1</th> */}
                    <td>{task.name}</td>
                    <td style={{ textDecoration: complete ? "line-through" : "none" }} >{task.description}</td>
                    <td>
                      <div className="btn-group flex-nowrap">
                        <button
                          onClick={ ()=>completed(task._id)}
                          className="btn btn-sm btn-success"
                        >
                          Completed
                        </button>
                        <button className="btn btn-sm btn-warning" onClick={()=>handleUserDelete(task._id)}>
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Output;
