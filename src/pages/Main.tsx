import React from "react";
import Form from "../components/form";
import List from "../components/list";
import "./Main.css";

type Props = {};

const Main = (props: Props) => {
  return (
    <div className="main">
      <h1>My Todos</h1>
      <Form />
      <List />
    </div>
  );
};

export default Main;
