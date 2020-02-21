import React from "react";
import { ToDoToggeAllPropsInterface } from "../interfaces/ToDoToggeAllPropsInterface";

export const ToDoToggeAll: React.FC<ToDoToggeAllPropsInterface> = ({
  activeItems,
  checkAllItems
}: ToDoToggeAllPropsInterface) => {
  return (
    <section className="main">
      <input
        onChange={() => {
          checkAllItems(activeItems === 0);
        }}
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={activeItems === 0}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </section>
  );
};
