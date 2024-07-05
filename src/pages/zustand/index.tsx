import { Button } from "antd"; // 导入antd库中的Button组件
import "./index.less";
import { useStore } from "./store";
import Hello from "./hello";
// 定义一个ZuStand函数，用于渲染返回一个div标签
function ZuStand() {
  const { count, increment, decrement, fetchData, list } = useStore(); // 从状态管理器中获取状态
  return (
    <>
      <div>ZuStand, count: {count}</div>
      <Button onClick={increment}>+1</Button>
      <Button onClick={decrement}>-1</Button>
      <Button onClick={() => useStore.getState().reset()}>重置</Button>
      <Button onClick={fetchData}>接口</Button>

      <Hello />
    </>
  );
}

// 导出ZuStand函数，用于在项目中使用
export default ZuStand;
