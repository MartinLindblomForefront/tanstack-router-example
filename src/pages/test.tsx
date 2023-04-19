import { Route } from "@tanstack/react-router";
import { indexRoute } from "../App";

export const testRoute = new Route({
    getParentRoute: () => indexRoute,
    path: "/test",
    component: () => <Test /> 
});

const Test = () => {
    return (
        <div>
            <h1>Test</h1>
            <p>This is the test section</p>
        </div>
    );
};