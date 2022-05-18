import React from "react";
import Output from "./Output";

const Home = () => {
  const addTask = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const des = e.target.des.value;
    const task = { name: name, description: des };
    console.log(task);
    fetch('http://localhost:5000/task', {
      method: "POST",
      headers: {"content-type" : "application/json"},
      body: JSON.stringify(task)
    })
    .then(res=> res.json())
    .then(data=> console.log(data))
  };
  return (
    <div className="container">
      <div className="card bg-base-100 shadow-xl mb-3">
        <div className="card-body items-center">
          <h2 className="card-title">Add Task </h2>

          <div className="form-control">
            <form onSubmit={addTask} className="input-group justify-center">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                name="name"
                required
              />
              <input
                type="text"
                placeholder="Description"
                className="input input-bordered"
                name="des"
                required
              />

              <button className="btn btn-dark">Add Task</button>
            </form>
          </div>
        </div>
      </div>
      <Output/>
    </div>
  );
};

export default Home;
