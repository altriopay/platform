import { createRootRoute, createRoute, Outlet } from "@tanstack/react-router";
import { IndexComponent } from "./routes/index";
import { LoginComponent } from "./routes/login";
import { DashboardComponent } from "./routes/dashboard";

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: IndexComponent,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginComponent,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: DashboardComponent,
});

export const routeTree = rootRoute.addChildren([indexRoute, loginRoute, dashboardRoute]);
