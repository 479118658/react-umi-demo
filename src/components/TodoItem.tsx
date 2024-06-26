import { TodoItem } from "@/types";

interface TodoItemProps {
  todo: TodoItem; // 类型为数组，数组元素为对象
  toggleTodo: (id: number) => void; // 类型为函数，参数为id
  deleteTodo: (id: number) => void; // 类型为函数，参数为id
}

export default function ({ todo, toggleTodo, deleteTodo }: TodoItemProps) {
  return (
    <li>
      <span
        style={{
          display: "inline-block",
          width: "100px",
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => toggleTodo(todo.id)}>切换</button>
      <button onClick={() => deleteTodo(todo.id)}>删除</button>
    </li>
  );
}
