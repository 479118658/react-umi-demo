import { Button } from "antd"; // 导入antd库中的Button组件
import axios from "axios";
import { create } from "zustand"; // 导入zustand库中的create函数

const useStore = create((set: any) => ({
  // 使用create函数创建一个状态管理器
  // 初始化一个count变量，值为0
  count: 0,
  list: [],
  // 定义一个increment方法，用于递增count的值
  increment: () => set((state: any) => ({ count: state.count + 1 })),
  // 定义一个decrement方法，用于递减count的值
  decrement: () => set((state: any) => ({ count: state.count - 1 })),
  // 定义一个reset方法，用于重置count的值为0
  reset: () => set({ count: 0 }),
  fetchData: async () => {
    // 模拟异步请求
    const { data } = await axios.get("https://api.example.com/data");
    set({ count: data.count });
  },
}));
// 定义一个ZuStand函数，用于渲染返回一个div标签
function ZuStand() {
  const { count, increment, decrement, reset } = useStore(); // 从状态管理器中获取状态
  return (
    <>
      <div>ZuStand, count: {count}</div>
      <Button onClick={increment}>+1</Button>
      <Button onClick={decrement}>-1</Button>
      <Button onClick={() => useStore.getState().reset()}>重置</Button>
    </>
  );
}

// 导出ZuStand函数，用于在项目中使用
export default ZuStand;
