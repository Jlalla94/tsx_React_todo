import React, { useState } from "react";
import { itemComponent } from "../interfaces/itemComponentInterface";
export const ToDoItem: React.FC<itemComponent> = ({
  toDoItem,
  onToggle,
  onDelete,
  onDubbleClick
}: itemComponent) => {
  const [classListName, setClassListName] = useState<string>("");

  const [text, setText] = useState<string>(toDoItem.title);

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
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
      setText(prev => {
        const newText = prev.replace(/\s\s+/g, " ").trim();
        onDubbleClick(toDoItem.id, newText);
        setClassListName("");
        return newText;
      });
    } else {
      onDelete(toDoItem.id);
    }
  };

  return (
    <li
      className={(toDoItem.complited ? "completed " : "") + classListName}
      key={toDoItem.id}
    >
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          onChange={() => {
            onToggle(toDoItem.id);
          }}
          checked={toDoItem.complited}
        />
        <label
          onDoubleClick={event => {
            setClassListName("editing");
          }}
        >
          {toDoItem.title}
        </label>
        <button onClick={() => onDelete(toDoItem.id)} className="destroy" />
      </div>
      <input
        ref={input => input && input.focus()}
        onChange={changeInput}
        onKeyPress={onPressEnter}
        onBlur={onFocusOut}
        value={text}
        type="text"
        className="edit"
      />
    </li>
  );
};
