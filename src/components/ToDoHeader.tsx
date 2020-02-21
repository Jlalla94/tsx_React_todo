import React, { useState } from "react";

interface ToDoText {
  title: string;
}
interface ToDoItemProps {
  onAdd({ title }: ToDoText): void;
}
export const ToDoHeader: React.FC<ToDoItemProps> = (props: ToDoItemProps) => {
  const [title, setTitle] = useState<string>("");

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onPressEnter = (event: React.onKeyPress<HTMLInputElement>) => {
    if (event.key === "Enter") {
      filterInputData(event.target.value);
    }
  };

  const onFocusOut = (event: React.onBlur) => {
    filterInputData(event.target.value);
  };

  const filterInputData = (inputData: string) => {
    if (inputData.replace(/\s/g, "") !== "") {
      setTitle("");
      props.onAdd({ title: inputData.replace(/\s/g, " ").trim() });
    }
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        onChange={changeInput}
        onKeyPress={onPressEnter}
        onBlur={onFocusOut}
        value={title}
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
      />
    </header>
  );
};
