import { Button } from "antd";
import { create } from "zustand";

const useStore = create((set: any) => ({
  // 初始化一个count变量，值为0
  count: 0,
  // 定义一个increment方法，用于递增count的值
  increment: () => set((state: any) => ({ count: state.count + 1 })),
}));
// 定义一个ZuStand函数，用于渲染返回一个div标签
function ZuStand() {
  const { count, increment } = useStore();
  return (
    <>
      <div>ZuStand, count: {count}</div>
      <Button onClick={increment}>+1</Button>
    </>
  );
}

// 导出ZuStand函数，用于在项目中使用
export default ZuStand;
