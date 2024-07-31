import React from "react";

function Item() {
  return (
    <div className="row">
      <div className="col">
        <b>Id</b>
      </div>
      <div className="col-4">
        <b>Todo</b>
      </div>
      <div className="col">
        <b>Completed/Undo</b>
      </div>
      <div className="col">
        <b> Upadate TODO</b>
      </div>
      <div className="col">
        <b>Mark Done</b>
      </div>
    </div>
  );
}

export default Item;
