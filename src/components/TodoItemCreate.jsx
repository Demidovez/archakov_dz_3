import React from "react";

function TodoItemCreate(props) {
  const colors = ["grey", "red", "blue", "orange", "green"];

  const [activeColor, setActiveColor] = React.useState("");
  const inputAddTask = React.useRef();

  React.useEffect(() => inputAddTask.current.focus());

  const onAddTask = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const text = event.target.value;
      const color = activeColor || "grey";

      props.onAdd(text, color);
      setActiveColor("");

      inputAddTask.current.value = "";
    }
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        placeholder="Текст задачи..."
        onKeyDown={onAddTask}
        ref={inputAddTask}
      />
      <ul>
        {colors.map((color) => (
          <li
            className={`todo-color ${color} ${
              activeColor === color && "active"
            }`}
            onClick={() => setActiveColor(color)}
            key={color}
          ></li>
        ))}
      </ul>
    </div>
  );
}

export default TodoItemCreate;
