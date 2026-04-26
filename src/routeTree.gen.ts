import { createRootRoute, createRoute } from "@tanstack/react-router";
import { LoginComponent } from "./routes/login";
import { DashboardComponent } from "./routes/dashboard";

const rootRoute = createRootRoute({
  component: LoginComponent,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: DashboardComponent,
});

const routeTree = rootRoute.addChildren([dashboardRoute]);

export { rootRoute, routeTree };
