import { createContext, useContext, useEffect, useState } from "react";

// 定义A组件
function A() {
  return (
    <div style={{ background: "red" }}>
      子组件 A
      <B />
    </div>
  );
}

// 定义B组件
function B() {
  // 使用useContext来获取context的值
  const context = useContext(MsgContext);
  return <div style={{ background: "#077" }}>孙组件 B ,{context}</div>;
}
// 创建一个context
const MsgContext = createContext("");

// 定义DocsPage组件
const DocsPage = () => {
  let timer: string | number | NodeJS.Timeout | undefined;
  // 使用useState设置初始状态
  const [time, setTime] = useState<string>(new Date().toLocaleString());
  // 使用useEffect来设置定时器
  useEffect(() => {
    timer = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
    // 清除定时器
    return () => {
      timer && clearInterval(timer);
    };
  }, []);
  return (
    <div style={{ background: "#a0a" }}>
      <h1>祖孙组件通信</h1>
      {/* 使用provider组件提供数据 */}
      <MsgContext.Provider value={time}>
        <A />
      </MsgContext.Provider>
      <div>父组件,{time}</div>
    </div>
  );
};

// 导出DocsPage组件
export default DocsPage;
