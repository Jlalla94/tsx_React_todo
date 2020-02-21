import React from "react";
import { FilterInterface } from "../interfaces/FilterInterface";

interface ToDoFiltersProps {
  hash: string;
  filters: FilterInterface[];
}
export const ToDoFilters: React.FC<ToDoFiltersProps> = ({
  hash,
  filters
}: ToDoFiltersProps) => {
  return (
    <ul className="filters">
      {filters.map(filterItem => {
        return (
          <li key={filterItem.key}>
            <a
              href={filterItem.href}
              className={filterItem.href === hash ? "selected" : ""}
            >
              {filterItem.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
