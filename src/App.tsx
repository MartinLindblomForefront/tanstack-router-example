import { Link, Outlet, RootRoute, Route, Router, RouterProvider } from "@tanstack/react-router";
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { homeRoute } from "./pages/home";
import { aboutRoute } from "./pages/about";
import { contactRoute } from "./pages/contact";
import { searchRoute } from "./pages/search";
import { booksRoute } from "./pages/books";
import { notFoundRoute } from "./pages/notFound";
import { buttonNavigationRoute } from "./pages/buttonNavigation";
import { deepRoute } from "./pages/deep";
import { testRoute } from "./pages/test";



export let rootRoute = new RootRoute();

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <Index /> 
});

const Index = () => {
  return (
      <div>
          <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/books/$bookId" params={{ bookId: "1" }} >Book 1</Link>
              <Link to="/books/$bookId" params={{ bookId: "2" }} >Book 2</Link>
              <Link to="/search" search={{ filter: "", count: 1, sort: "newest"}}>Search</Link>
              <Link to="/search" search={{ filter: "Pre applied filter", count: 1, sort: "newest"}}>Search (filter)</Link>
              <Link to="/search" search={{ filter: "", count: 99, sort: "newest"}}>Search (count)</Link>
              <Link to="/search" search={{ filter: "", count: 1, sort: "oldest"}}>Search (sort)</Link>
              <Link to="/button-navigation">Button Navigation</Link>
              <Link to="/first/second/third/fourth/deep">Deep</Link>
              <Link to="/test">Test</Link>
          </div>
          <Outlet />
      </div>
  );
};

const routeTree = rootRoute.addChildren([
  indexRoute.addChildren([
    homeRoute,
    aboutRoute,
    contactRoute,
    searchRoute,
    booksRoute,
    notFoundRoute,
    buttonNavigationRoute,
    deepRoute,
    testRoute
  ])
]);

const router = new Router({ routeTree });

declare module '@tanstack/router' {
  interface Register {
    router: typeof router
  }
}

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <TanStackRouterDevtools router={router} />
    </>
  );
};