import { createRootRoute, createRoute, Outlet } from "@tanstack/react-router";
import Index from "./routes/index";
import Dashboard from "./routes/dashboard";

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Index,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: Dashboard,
});

export const routeTree = rootRoute.addChildren([indexRoute, dashboardRoute]);
