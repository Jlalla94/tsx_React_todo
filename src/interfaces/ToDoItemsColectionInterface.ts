import { ToDoItemInerface } from "./ToDoItemInterface";

export interface ToDoItemsColectionInterface {
  toDoItemCollection: ToDoItemInerface[];

  chengeToDoItemText: (id: number, text: string) => void;

  onToggle: (id: number) => void;

  onDelete: (id: number) => void;
}
