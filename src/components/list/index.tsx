/*
 * Created by Muhamad Syafii
 * Friday, 20/01/2023
 * Learning Week FrontEnd Developer
 * Copyright (c) 2023 by Moladin.
 * All Rights Reserved
 */

import React from "react";
import "./index.css";
type Props = {
  list: {
    id: number;
    title: string;
    description: string;
    completed: boolean;
  };
  onComplete: Function;
  onDelete: Function;
};

const List = (props: Props) => {
  return (
    <div className="list">
      <div className={`list-content ${props.list.completed ? "strike" : ""}`}>
        <h3>{props.list.title}</h3>
        <p>{props.list.description}</p>
        {/* {!props.list.completed ? (
          <div>
            <h3>{props.list.title}</h3>
            <p>{props.list.description}</p>
          </div>
        ) : (
          <div>
            <h3><s>{props.list.title}</s></h3>
            <p><s>{props.list.description}</s></p>
          </div>
        )} */}
      </div>
      <div className="list-actions">
        {!props.list.completed ? (
          <button
            onClick={() => props.onComplete()}
            type="button"
            className="btn-complete"
          >
            Complete
          </button>
        ) : null}

        <button
          onClick={() => props.onDelete()}
          type="button"
          className="btn-delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default List;
