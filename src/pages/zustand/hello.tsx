import { useStore } from "./store.ts";

export default () => {
  const { count, list } = useStore();

  return (
    <div>
      <h1>Hello Zustand</h1>
      <h1>我是hello组件count {count}</h1>
      <h1>我是hello组件list</h1>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
