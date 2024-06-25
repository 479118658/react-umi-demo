import { useState } from "react";
import yayJpg from "../assets/yay.jpg";

export default function HomePage() {
  const [data, setData] = useState([
    {
      name: "yay",
      id: 1,
    },
    {
      name: "rjt",
      id: 2,
    },
    {
      name: "aba",
      id: 3,
    },
  ]);
  function addItem() {
    setData([...data, { name: "yay", id: 4 }]);
  }
  return (
    <>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <button onClick={addItem}>点我加一条</button>
    </>
  );
}
