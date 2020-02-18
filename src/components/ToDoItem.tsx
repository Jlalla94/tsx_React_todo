import React from "react";
import { ToDoItemInerface } from "../interfaces/ToDoItemInerface";
interface itemComponent {
  toDoItem: ToDoItemInerface;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}
export const ToDoItem: React.FC<itemComponent> = ({
  toDoItem,
  onToggle,
  onDelete
}: itemComponent) => {
  return (
    <li className={toDoItem.complited ? "completed" : ""} key={toDoItem.id}>
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          onChange={() => {
            onToggle(toDoItem.id);
          }}
          checked={toDoItem.complited}
        />
        <label>{toDoItem.title}</label>
        <button onClick={() => onDelete(toDoItem.id)} className="destroy" />
      </div>
    </li>
  );
};
