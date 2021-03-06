import React from "react";
import { ToDoFilters } from "./ToDoFilters";
import { FilterInterface } from "../interfaces/FilterInterface";

interface ToDoFooterProps {
  activeItems: number;
  disableItems: number;
  onDeleteAll: () => void;
  hash: string;
  filters: FilterInterface[];
}

export const ToDoFooter: React.FC<ToDoFooterProps> = ({
  activeItems,
  disableItems,
  onDeleteAll,
  hash,
  filters
}: ToDoFooterProps) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeItems}</strong> items left
      </span>
      <ToDoFilters hash={hash} filters={filters} />
      <button
        onClick={() => {
          onDeleteAll();
        }}
        className="clear-completed"
        style={{ display: disableItems === 0 ? "none" : "" }}
      >
        Clear completed
      </button>
    </footer>
  );
};
