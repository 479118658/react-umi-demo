import { ProLayout } from "@ant-design/pro-components";
import { Link, Outlet, useAppData, useLocation } from "umi";

export default function Layout() {
  const { clientRoutes } = useAppData();
  const location = useLocation();
  const routes = [
    {
      path: "/task-center",
      breadcrumbName: "任务中心",
    },
    {
      path: "/task-details",
      breadcrumbName: "任务详情",
    },
    {
      path: "/current",
      breadcrumbName: "当前页面",
    },
  ];
  return (
    <ProLayout
      route={clientRoutes[0]}
      location={location}
      title="阮景涛第一个umi项目"
      breadcrumbRender={() => {
        return routes;
      }}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (menuItemProps.isUrl || menuItemProps.children) {
          return defaultDom;
        }
        if (menuItemProps.path && location.pathname !== menuItemProps.path) {
          return (
            <Link to={menuItemProps.path} target={menuItemProps.target}>
              {defaultDom}
            </Link>
          );
        }
        return defaultDom;
      }}
    >
      <Outlet />
    </ProLayout>
  );
}
