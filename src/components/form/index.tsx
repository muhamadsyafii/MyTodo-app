/*
 * Created by Muhamad Syafii
 * Friday, 20/01/2023
 * Learning Week FrontEnd Developer
 * Copyright (c) 2023 by Moladin.
 * All Rights Reserved
 */

import React, { useRef } from "react";
import "./index.css";
type Props = {
  onSubmit: Function;
};

const Form = (props: Props) => {
  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);
  const clearInput = () => {
    if (title.current && description.current) {
      title.current.value = "";
      description.current.value = "";
    }
  };
  return (
    <div className="form-todo">
      <form
        action="submit"
        onSubmit={(event: any) => {
          props.onSubmit(event, {
            title: title.current?.value,
            description: description.current?.value,
          });
          clearInput();
        }}
      >
        <div className="input-group">
          <label htmlFor="">Title</label>
          <input type="text" name="title" ref={title} />
        </div>
        <div className="input-group">
          <label htmlFor="">description</label>
          <input type="text" name="description" ref={description} />
        </div>
        <button type="submit" className="btn-submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default Form;
