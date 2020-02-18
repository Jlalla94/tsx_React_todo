import React from "react";

interface ToDoToggeAllProps {
  activeItems: number;
  checkAllItems: (state: boolean) => void;
}

export const ToDoToggeAll: React.FC<ToDoToggeAllProps> = ({
  activeItems,
  checkAllItems
}: ToDoToggeAllProps) => {
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
