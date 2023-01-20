import React from "react";
import "./index.css";

type Props = {};

const list = (props: Props) => {
  return (
    <div className="list">
      <div className="list-content">
        <h3>Todo List</h3>
        <p>Todo 1</p>
      </div>

      <div className="list-actions">
        <button className="btn-complete" type="button">
          Complete
        </button>
        <button className="btn-delete" type="button">
          Delete
        </button>
      </div>
    </div>
  );
};

export default list;
