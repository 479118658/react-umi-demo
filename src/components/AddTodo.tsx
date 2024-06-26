import { useRef, useState } from "react";
interface AddTodoProps {
  addTodo: (text: string) => void;
}
export default function AddTodo({ addTodo }: AddTodoProps) {
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    inputRef.current?.focus();
    // 处理表单提交逻辑
    if (text.trim() !== "") {
      addTodo(text);
      // 清空输入框
      setText("");
    }
  };
  return (
    <form>
      <input
        type="text"
        ref={inputRef}
        placeholder="输入事项"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleSubmit} type="submit">
        新建事项
      </button>
    </form>
  );
}
