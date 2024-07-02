import { useState } from "react";
import yayJpg from "../assets/yay.jpg";
import axios from "axios";
import { Button } from "antd";
interface listItem {
  name: string;
  id: number;
}
export default function HomePage() {
  function getData() {
    axios.get("/api/todos").then((res) => {
      console.log("发出请求", res);
      setData(
        res.data.map((item: listItem) => {
          return {
            id: item.id,
            name: item.name,
          };
        })
      );
    });
  }
  const [data, setData] = useState<listItem[]>([
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
      <Button onClick={addItem}>点我加一条</Button>
      <Button type="primary" style={{ marginTop: 10 }} onClick={getData}>
        点我请求
      </Button>
    </>
  );
}
