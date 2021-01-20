import React from "react";
import TodoItem from "./components/TodoItem";
import TodoItemCreate from "./components/TodoItemCreate";

function App() {
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    const getAllTasks = Object.keys(localStorage)
      .filter((key) => key.includes("task_"))
      .map((key) => JSON.parse(localStorage.getItem(key)))
      .sort((prev, next) => prev.id - next.id);

    setTasks(getAllTasks);
  }, []);

  const onAddTask = (text, color) => {
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const newTask = { id, text, color, completed: false };

    setTasks([...tasks, newTask]);

    localStorage.setItem(`task_${id}`, JSON.stringify(newTask));
  };

  const onDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    localStorage.removeItem(`task_${id}`);
  };

  const onEditTask = (id, payload) => {
    let editedTask = tasks.find((task) => task.id === id);

    editedTask = { ...editedTask, ...payload };

    setTasks(tasks.map((task) => (task.id === id ? editedTask : task)));

    localStorage.setItem(`task_${id}`, JSON.stringify(editedTask));
  };

  return (
    <div className="App">
      <div className="todo">
        <h2>Список задач</h2>
        {tasks.map((task) => (
          <TodoItem
            task={task}
            key={task.id}
            onDelete={onDeleteTask}
            onEdit={onEditTask}
          />
        ))}
        {tasks.length === 0 && <p>Задач пока нет...</p>}
        <TodoItemCreate onAdd={onAddTask} />
      </div>
    </div>
  );
}

export default App;
