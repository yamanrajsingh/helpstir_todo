import React, { useState } from "react";

function Items({ Tasks, onUpdateTask, onEditComplete, editingTask, setEditingTask }) {
  const [editValue, setEditValue] = useState("");

  const handleSave = (item) => {
    onEditComplete(item.id, { ...item, todo: editValue });
    setEditingTask(null);
  };

  const toggleCompletion = (item) => {
    onEditComplete(item.id, { ...item, completed: !item.completed });
  };

  return (
    <>
      {Tasks.map((item) => (
        <div className="row lis" key={item.id}>
          <div className="col">{item.id}</div>
          <div className="col-4">
            {editingTask === item.id ? (
              <input type="text" value={editValue} onChange={(e) => setEditValue(e.target.value)} />
            ) : (
              item.todo
            )}
          </div>
          <div className="col">{item.completed ? "Completed" : "Pending"}</div>
          <div className="col">
            {editingTask === item.id ? (
              <button
                type="button"
                className="btn btn-success"
                onClick={() => handleSave(item)}
              >
                Save
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-info"
                onClick={() => {
                  setEditValue(item.todo);
                  setEditingTask(item.id);
                }}
              >
                Update
              </button>
            )}
          </div>
          <div className="col">
            <button
              type="button"
              className={`btn ${item.completed ? 'btn-warning' : 'btn-success'}`}
              onClick={() => toggleCompletion(item)}
            >
              {item.completed ? 'Mark Pending' : 'Mark Completed'}
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Items;
