import { Route } from "@tanstack/react-router";
import { indexRoute } from "../App";

export const notFoundRoute = new Route({
    getParentRoute: () => indexRoute,
    path: "/*",
    component: () => <NotFound /> 
});

const NotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <p>Page not found</p>
        </div>
    );
};