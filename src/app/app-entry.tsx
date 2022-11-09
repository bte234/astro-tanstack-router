import {
  Outlet,
  RouterProvider,
  createReactRouter,
  createRouteConfig,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const AppIndex = () => {
  return (
    <div>
      <h2>This is the app index</h2>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h2>Hello from about</h2>
    </div>
  );
};

const routeConfig = createRouteConfig().createChildren((createRoute) => [
  createRoute({
    path: "/",
    element: <AppIndex />,
  }),
  createRoute({
    path: "about",
    element: <About />,
  }),
]);

const router = createReactRouter({
  routeConfig,
  basepath: "app",
});

const AppEntry = () => {
  return (
    <>
      <RouterProvider router={router}>
        <div>
          <h1>App</h1>
          <nav>
            <router.Link to="/">Home</router.Link>{" "}
            <router.Link to="/about">About</router.Link>
          </nav>
        </div>
        <hr />
        <Outlet />
      </RouterProvider>
      <TanStackRouterDevtools router={router} />
    </>
  );
};

export default AppEntry;
