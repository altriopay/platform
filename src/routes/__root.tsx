import { Outlet, RootRoute } from "@tanstack/react-router";

export function Root() {
  return <Outlet />;
}

export const routeTree = RootRoute;
