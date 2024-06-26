function TodoFilter({ setFilter }: any) {
  return (
    <div>
      <button onClick={() => setFilter("all")}>全部</button>
      <button onClick={() => setFilter("uncompleted")}>未完成</button>
      <button onClick={() => setFilter("completed")}>完成</button>
    </div>
  );
}

export default TodoFilter;
