import { create } from "zustand"; // 导入zustand库中的create函数
import axios from "axios";

// 定义一个getData函数，用于模拟异步请求
function getData(path: string): Promise<[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      axios
        .get(path)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    }, 1000);
  });
}

// 使用create函数创建一个状态管理器
export const useStore = create((set: any) => ({
  // 初始化一个count变量，值为0
  count: 0,
  list: [],
  // 定义一个increment方法，用于递增count的值
  increment: () => set((state: any) => ({ count: state.count + 1 })),
  // 定义一个decrement方法，用于递减count的值
  decrement: () => set((state: any) => ({ count: state.count - 1 })),
  // 定义一个reset方法，用于重置count的值为0
  reset: () => set({ count: 0, list: [] }),
  // 定义一个fetchData方法，用于模拟异步请求
  fetchData: async () => {
    try {
      const data = await getData("/api/todos");
      console.log("data", data);
      set({ list: data });
      return Promise.resolve(data);
    } catch (error) {
      console.log(error);
    }
  },
}));
