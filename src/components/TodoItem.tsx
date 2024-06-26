import { TodoItem } from "@/types";

interface TodoItemProps {
  todo: TodoItem; // 类型为数组，数组元素为对象
  toggleTodo: (id: number) => void; // 类型为函数，参数为id
  deleteTodo: (id: number) => void; // 类型为函数，参数为id
}

export default function ({ todo, toggleTodo, deleteTodo }: TodoItemProps) {
  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      {todo.text}
      <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}
