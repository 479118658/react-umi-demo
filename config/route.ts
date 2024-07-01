export default [
  { path: "/", component: "index", name: "首页" },
  { path: "/docs", component: "docs/index", name: "文档" },
  { path: "/hooks", component: "hooks/index", name: "hooks" },
  { path: "/antd", component: "antd/index", name: "antd" },
  { path: "/zustand", component: "zustand/index" },
  { path: "/todo", component: "todo", name: "todo" },
  { path: "/*", component: "@/pages/404.tsx" },
];
