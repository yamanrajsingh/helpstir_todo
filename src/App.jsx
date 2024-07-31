import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import ErrorMsg from "./components/ErrorMsg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Items from "./components/Items";
import Item from "./components/Item";
import Search from "./components/Search";

function App() {
  const [Tasks, SetTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const getTasks = () => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => SetTasks(data.todos));
  };

  const newItem = (todoitem) => {
    const newItems = [
      ...Tasks,
      { todo: todoitem, completed: false, id: Tasks.length + 1 },
    ];
    SetTasks(newItems);
  };

  const updateTask = (id, updateTask) => {
    console.log(updateTask);
    SetTasks(Tasks.map((task) => (task.id === id ? updateTask : task)));
  };

  const filteredTasks = Tasks.filter((task) =>
    task.todo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <center>
      <h1>TODO </h1>
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search"
      />
      {Tasks.length > 0 ? <AddTodo onNewItem={newItem} /> : <ErrorMsg />}
      <Item></Item>
      <Items
        Tasks={filteredTasks} // Pass filtered tasks
        // Tasks={Tasks}
        onUpdateTask={(id) => setEditingTask(id)}
        onEditComplete={updateTask}
        editingTask={editingTask}
        setEditingTask={setEditingTask}
      />
    </center>
  );
}

export default App;
