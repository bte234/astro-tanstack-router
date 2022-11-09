import {
  Outlet,
  RouterProvider,
  createReactRouter,
  createRouteConfig,
} from "@tanstack/react-router";

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
    path: "app/about",
    element: <About />,
  }),
  createRoute({
    path: "app/",
    element: <AppIndex />,
  }),
]);

const router = createReactRouter({ routeConfig });

const AppEntry = () => {
  console.log(router.routeTree);
  return (
    <>
      <RouterProvider router={router}>
        <div>
          <h1>App</h1>
          <p>current route is {router.location.pathname}</p>
        </div>
        <hr />
        <Outlet />
      </RouterProvider>
    </>
  );
};

export default AppEntry;
