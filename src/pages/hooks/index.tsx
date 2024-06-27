import { useState } from "react";

// 定义一个函数，用于创建一个toggle状态
function useToggle(initialValue: boolean) {
  // 使用useState初始化状态，并传入初始值
  const [value, setValue] = useState(initialValue);
  // 定义一个函数，用于切换状态
  const toggle = () => {
    // 调用setValue函数，将状态取反
    setValue((value) => !value);
  };
  // 返回一个对象，包含value和toggle属性
  return {
    value,
    toggle,
  };
}
// 定义一个函数，用于渲染Hooks组件
function Hooks() {
  // 使用useToggle函数，传入初始值为false
  const { value, toggle } = useToggle(false);

  // 渲染一个按钮，当点击时，调用toggle函数
  return (
    <div>
      <button onClick={toggle}>切换</button>
      {value ? "ON" : "OFF"}
      {value && <div>状态为ON</div>}
    </div>
  );
}

// 导出Hooks函数
export default Hooks;
