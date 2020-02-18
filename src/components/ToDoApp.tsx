import React, { useState } from "react";
import { ToDoHeader } from "./ToDoHeader";
import { ToDoItemsList } from "./ToDoItemsList";
import { ToDoItemInerface } from "../interfaces/ToDoItemInterface";

export const ToDoApp: React.FC = () => {
  const localStoredgeData = localStorage.getItem("toDoList")
    ? JSON.parse(localStorage["toDoList"])
    : [];

  const [toDoItems, setToDoItems] = useState<ToDoItemInerface[]>(
    localStoredgeData
  );

  const createToDoItem = (title: string) => {
    const newToDoItem: ToDoItemInerface = {
      id: Date.now(),
      title: title,
      complited: false
    };
    setToDoItems(prev => {
      localStorage["toDoList"] = JSON.stringify([newToDoItem, ...prev]);
      return [newToDoItem, ...prev];
    });
  };

  const checkToDoItemToggle = (id: number) => {
    setToDoItems(prev => {
      let newData = prev.map(toDoItem => {
        if (toDoItem.id === id) {
          toDoItem.complited = !toDoItem.complited;
        }
        return toDoItem;
      });
      localStorage["toDoList"] = JSON.stringify(newData);
      return newData;
    });
  };

  const deleteToDoItem = (id: number) => {
    setToDoItems(prev => {
      let newData = prev.filter(toDoItem => toDoItem.id !== id);
      localStorage["toDoList"] = JSON.stringify(newData);
      return newData;
    });
  };

  return (
    <section className="todoapp">
      <ToDoHeader onAdd={createToDoItem} />
      <ToDoItemsList
        toDoItemCollection={toDoItems}
        onToggle={checkToDoItemToggle}
        onDelete={deleteToDoItem}
      />
    </section>
  );
};
