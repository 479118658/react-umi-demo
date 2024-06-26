import TodoFilter from "@/components/TodoFilter";
import { useEffect, useState } from "react";
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import { TodoItem } from "@/types";

const TodoListPage = () => {
  // 定义todos状态
  const [todos, setTodos] = useState<TodoItem[]>([]);
  // 定义filter状态
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // 获取todos
    const todosFromStorage = localStorage.getItem("todos");
    if (todosFromStorage) {
      setTodos(JSON.parse(todosFromStorage));
    }
    console.log("挂载todo", todos);

    // 保存todos到localStorage
    return () => {
      console.log("卸载todo", todos);
      localStorage.setItem("todos", JSON.stringify(todos));
    };
  }, []);

  // 定义添加todo的方法
  const addTodo = (text: string) => {
    // 添加todo
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    console.log("添加todo", newTodo, todos);
  };

  // 定义删除todo的方法
  const deleteTodo = (id: number) => {
    // 删除todo
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 定义切换todo状态的方法
  const toggleTodo = (id: number) => {
    // 切换todo状态
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 根据filter获取todos
  const getFilterTodos = () => {
    if (filter === "completed") {
      return todos.filter((todo) => todo.completed);
    } else if (filter === "uncompleted") {
      return todos.filter((todo) => !todo.completed);
    }
    return todos;
  };
  return (
    <div>
      <h1>TodoList</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList
        todos={getFilterTodos()}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
      <TodoFilter setFilter={setFilter} />
    </div>
  );
};

export default TodoListPage;
