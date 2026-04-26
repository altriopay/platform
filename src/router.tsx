import { createRouter } from "@tanstack/react-router";
import { RootRoute, Route, Outlet } from "@tanstack/react-router";
import { Index } from "./routes/index";
import { Dashboard } from "./routes/dashboard";

const rootRoute = RootRoute.create({
  component: () => <Outlet />,
  path: "/",
});

const indexRoute = Route.create({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Index,
});

const dashboardRoute = Route.create({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: Dashboard,
});

export const routeTree = rootRoute.addChildren([indexRoute, dashboardRoute]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
