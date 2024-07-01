import todoData from "../server/data.json";
import { defineMock } from "umi";
export default defineMock({
  "/api/todos": todoData,
  // 返回数据
});
