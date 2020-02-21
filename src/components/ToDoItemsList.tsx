import React, { useState } from "react";
import { ToDoToggeAll } from "./ToDoToggeAll";
import { ToDoFooter } from "./ToDoFooter";
import { ToDoItem } from "./ToDoItem";
import { ToDoItemInerface } from "../interfaces/ToDoItemInterface";
import { ToDoItemsColectionInterface } from "../interfaces/ToDoItemsColectionInterface";
import { FilterInterface } from "../interfaces/FilterInterface";

export const ToDoItemsList: React.FC<ToDoItemsColectionInterface> = ({
  toDoItemCollection,
  onToggle,
  onDelete,
  chengeToDoItemText
}: ToDoItemsColectionInterface) => {
  const [hash, setHash] = useState<string>(
    window.location.hash.replace("#/", "")
  );
  const filters = [
    { key: 1, href: "#/", text: "All" },
    { key: 2, href: "#/active", text: "Active" },
    { key: 3, href: "#/completed", text: "Completed" }
  ];

  window.addEventListener("hashchange", () => {
    if (
      filters.find((item: FilterInterface) => {
        return (
          item.href.replace("#/", "") === window.location.hash.replace("#/", "")
        );
      }) !== undefined
    ) {
      setHash(window.location.hash.replace("#/", ""));
    }
  });

  if (!toDoItemCollection.length) {
    return <></>;
  }

  let countActive: number = 0;

  let countDesible: number = 0;

  let deleteAllComplited = () => {
    toDoItemCollection.map((toDoItem: ToDoItemInerface) => {
      toDoItem.complited && onDelete(toDoItem.id);
      return toDoItem;
    });
  };

  let checkAll = (state: boolean) => {
    toDoItemCollection.map((toDoItem: ToDoItemInerface) => {
      toDoItem.complited === state && onToggle(toDoItem.id);
      return toDoItem;
    });
  };

  toDoItemCollection.map((toDoItem: ToDoItemInerface) =>
    toDoItem.complited ? countDesible++ : countActive++
  );

  return (
    <>
      <ToDoToggeAll activeItems={countActive} checkAllItems={checkAll} />
      <ul className="todo-list">
        {toDoItemCollection.map(toDoItem => {
          return (
            (!hash ||
              (hash === "active" && !toDoItem.complited) ||
              (hash === "completed" && toDoItem.complited)) && (
              <ToDoItem
                key={toDoItem.id}
                toDoItem={toDoItem}
                onDelete={() => onDelete(toDoItem.id)}
                onToggle={() => onToggle(toDoItem.id)}
                onDubbleClick={chengeToDoItemText}
              />
            )
          );
        })}
      </ul>
      <ToDoFooter
        hash={"#/" + hash}
        filters={filters}
        activeItems={countActive}
        disableItems={countDesible}
        onDeleteAll={deleteAllComplited}
      />
    </>
  );
};
