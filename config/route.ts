import { Children } from "react";

export default [
  { path: "/", component: "index", name: "首页" },
  {
    path: "/docs",
    name: "组件通信",
    routes: [
      { path: "/docs/provider", component: "docs/provider", name: "provider" },
      { path: "/docs/index", component: "docs/index", name: "index" },
    ],
  },
  { path: "/hooks", component: "hooks/index", name: "自定义hooks" },
  { path: "/antd", component: "antd/index", name: "antd" },
  { path: "/zustand", component: "zustand/index", name: "状态管理zustand" },
  { path: "/ahooks", component: "ahooks/index", name: "ahooks" },
  { path: "/todo", component: "todo", name: "todo" },
  { path: "/*", component: "@/pages/404.tsx" },
];
