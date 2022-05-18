import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";


const Output = () => {
  const [tasks, setTasks] = useState([]);
  const [complete, setComplete] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [tasks]);

useEffect(()=>{

},[])
  
  const completed = () => {
    // console.log("completed");
    toast("Task completed")
    setComplete(!complete);
   
    
  };

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
                          onClick={completed}
                          className="btn btn-sm btn-success"
                        >
                          Completed
                        </button>
                        <button className="btn btn-sm btn-warning">
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
