/*
 * Created by Muhamad Syafii
 * Friday, 20/01/2023
 * Learning Week FrontEnd Developer
 * Copyright (c) 2023 by Moladin.
 * All Rights Reserved
 */

import React, { useEffect, useRef, useState } from "react";
import Form from "../components/form";
import List from "../components/list";
import "./Main.css";

import Axios from "axios";
type ListProps = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};
const Main = () => {
  const [lists, setLists] = useState([] as ListProps[]);
  const baseUrl = "http://localhost:5000";

  //this is method never use cause move using AXIOS

  // const getLists = async () => {
  //   try {
  //     const response = await fetch(`${baseUrl}/lists`);
  //     const data = await response.json();
  //     setLists(data);
  //   } catch (e) {
  //     alert(e);
  //   }
  // };

  const getLists = async () => {
    try {
      const response = await Axios.get(`${baseUrl}/lists`);
      setLists(response.data);
    } catch (e) {
      alert(e);
    }
  };

  const deleteList = async (id: number) => {
    try {
      await Axios.delete(`${baseUrl}/lists/${id}`);
      getLists();
    } catch (e) {
      alert(e);
    }
  };

  //this is for complete todo list
  const onCompleteList = async (data: ListProps) => {
    try {
      Axios.put(`${baseUrl}/lists/${data.id}`, {
        completed: !data.completed,
        title: data.title,
        id: data.id,
        description: data.description,
      }).then(() => getLists());
    } catch (e) {
      alert(e);
    }
  };

  //this is for fetch data list
  const fetchData = useRef(true);
  useEffect(() => {
    if (fetchData.current) {
      getLists();
      fetchData.current = false;
    }
  }, []);

  //this is method for completed todo list
  const onComplete = (data: ListProps) => {
    onCompleteList(data);
  };

  //arigatou gozaimasu

  //this is for detele todo list
  const onDelete = (id: number) => {
    deleteList(id);
  };

  //this is for add todo list
  const addList = async (payload: object) => {
    try {
      await Axios.post(`${baseUrl}/lists`, payload);
      getLists();
    } catch (e) {
      alert(e);
    }
  };

  //this is for sumbit todo list
  const onSubmit = (
    event: any,
    data: { title: string; description: string }
  ) => {
    event.preventDefault();
    if (data.title !== "" || data.description !== "") {
      const payload = {
        title: data.title,
        description: data.description,
        completed: false,
      };
      addList(payload);
    }
  };
  return (
    <div className="main">
      <h1>My Todos</h1>
      <Form
        onSubmit={(event: any, data: { title: string; description: string }) =>
          onSubmit(event, data)
        }
      />
      {lists.length > 0 ? (
        <div>
          {lists
            .sort((a, b) => b.id - a.id)
            .map((list: ListProps) => (
              <List
                list={list}
                key={list.id}
                onComplete={() => onComplete(list)}
                onDelete={() => onDelete(list.id)}
              />
            ))}
        </div>
      ) : (
        <div>Nothing todo</div>
      )}
    </div>
  );
};

export default Main;
