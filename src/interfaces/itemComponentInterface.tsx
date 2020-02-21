import { ToDoItemInerface } from "../interfaces/ToDoItemInterface";
export interface itemComponent {
  toDoItem: ToDoItemInerface;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onDubbleClick: (id: number, title: string) => void;
}
