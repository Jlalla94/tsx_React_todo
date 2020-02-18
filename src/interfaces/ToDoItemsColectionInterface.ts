import { ToDoItemInerface } from "./ToDoItemInterface";

export interface ToDoItemsColectionInterface {
  toDoItemCollection: ToDoItemInerface[];

  onToggle: (id: number) => void;

  onDelete: (id: number) => void;
}
