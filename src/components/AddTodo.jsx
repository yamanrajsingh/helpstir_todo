import React, { useState } from "react";

function AddTODO({ onNewItem }) {
  const [Todo, SetTodo] = useState("");
  const AddItem = () => {
    const item = fetch("https://dummyjson.com/todos/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todo: Todo,
        completed: false,
        userId: 5,
      }),
    })
      .then((res) => res.json())
      .then((data) => onNewItem(data.todo));
    SetTodo("");
  };

  return (
    <div className="mb-3 con">
      <input
        type="text"
        placeholder="Enter Todo Here..."
        className="form-control inp"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        value={Todo}
        onChange={(e) => SetTodo(e.target.value)}
      />
      <button type="button" className="btn btn-success add" onClick={AddItem}>
        Add
      </button>
    </div>
  );
}

export default AddTODO;
