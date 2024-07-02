export default [
  { path: "/", component: "index", name: "首页" },
  { path: "/docs", component: "docs/index", name: "组件通信" },
  { path: "/hooks", component: "hooks/index", name: "hooks" },
  { path: "/antd", component: "antd/index", name: "antd" },
  { path: "/zustand", component: "zustand/index", name: "状态管理zustand" },
  { path: "/todo", component: "todo", name: "todo" },
  { path: "/*", component: "@/pages/404.tsx" },
];
