import { createRootRoute, createRoute } from "@tanstack/react-router";
import { RootComponent } from "./routes/__root";

const rootRoute = createRootRoute({
  component: RootComponent,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
});

const routeTree = rootRoute.addChildren([indexRoute]);

export { rootRoute, indexRoute, routeTree };
