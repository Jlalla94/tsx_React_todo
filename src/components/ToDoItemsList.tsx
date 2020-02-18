import React, { useState } from "react";
import { ToDoToggeAll } from "./ToDoToggeAll";
import { ToDoFooter } from "./ToDoFooter";
import { ToDoItem } from "./ToDoItem";
import { ToDoItemsColectionInterface } from "../interfaces/ToDoItemsColectionInterface";

export const ToDoItemsList: React.FC<ToDoItemsColectionInterface> = ({
  toDoItemCollection,
  onToggle,
  onDelete
}: ToDoItemsColectionInterface) => {
  const [hash, setHash] = useState<string>(
    window.location.hash.replace("#/", "")
  );

  window.addEventListener("hashchange", () => {
    setHash(window.location.hash.replace("#/", ""));
  });

  if (toDoItemCollection.length === 0) {
    return <></>;
  }

  let countActive: number = 0;

  let countDesible: number = 0;

  let deleteAllComplited = () => {
    toDoItemCollection.map(toDoItem => {
      toDoItem.complited && onDelete(toDoItem.id);
    });
  };

  let checkAll = (state: boolean) => {
    toDoItemCollection.map(toDoItem => {
      toDoItem.complited === state && onToggle(toDoItem.id);
    });
  };

  toDoItemCollection.map(toDoItem => {
    toDoItem.complited ? countDesible++ : countActive++;
  });

  return (
    <>
      <ToDoToggeAll activeItems={countActive} checkAllItems={checkAll} />
      <ul className="todo-list">
        {toDoItemCollection.map(toDoItem => {
          if (hash !== "") {
            if (hash === "active" && toDoItem.complited === false) {
              return (
                <ToDoItem
                  key={toDoItem.id}
                  toDoItem={toDoItem}
                  onDelete={() => onDelete(toDoItem.id)}
                  onToggle={() => onToggle(toDoItem.id)}
                />
              );
            } else if (hash === "completed" && toDoItem.complited === true) {
              return (
                <ToDoItem
                  key={toDoItem.id}
                  toDoItem={toDoItem}
                  onDelete={() => onDelete(toDoItem.id)}
                  onToggle={() => onToggle(toDoItem.id)}
                />
              );
            }
          } else {
            return (
              <ToDoItem
                key={toDoItem.id}
                toDoItem={toDoItem}
                onDelete={() => onDelete(toDoItem.id)}
                onToggle={() => onToggle(toDoItem.id)}
              />
            );
          }
        })}
      </ul>
      <ToDoFooter
        hash={"#/" + hash}
        activeItems={countActive}
        disableItems={countDesible}
        onDeleteAll={deleteAllComplited}
      />
    </>
  );
};
