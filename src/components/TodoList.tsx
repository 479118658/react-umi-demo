import { TodoItem } from "@/types";
import TodoItemCom from "./TodoItem";
interface TodoListProps {
  todos: TodoItem[]; // 类型为数组，数组元素为对象
  toggleTodo: (id: number) => void; // 类型为函数，参数为id
  deleteTodo: (id: number) => void; // 类型为函数，参数为id
}

function TodoList({ todos, toggleTodo, deleteTodo }: TodoListProps) {
  return (
    <ul style={{ display: "block" }}>
      {todos.map((todo: any) => (
        <TodoItemCom
          todo={todo}
          key={todo.id}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        ></TodoItemCom>
      ))}
    </ul>
  );
}

export default TodoList;
