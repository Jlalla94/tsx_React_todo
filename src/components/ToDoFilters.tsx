import React from "react";

interface ToDoFiltersProps {
  hash: string;
}
export const ToDoFilters: React.FC<ToDoFiltersProps> = ({
  hash
}: ToDoFiltersProps) => {
  const filters = [
    { href: "#/", className: "", text: "All" },
    { href: "#/active", className: "", text: "Active" },
    { href: "#/completed", className: "", text: "Completed" }
  ];

  return (
    <ul className="filters">
      {filters.map(filterItem => {
        return (
          <li>
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
