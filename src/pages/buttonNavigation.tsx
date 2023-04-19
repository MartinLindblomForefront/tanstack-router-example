import { Route, useNavigate } from "@tanstack/react-router";
import { indexRoute } from "../App";

export const buttonNavigationRoute = new Route({
    getParentRoute: () => indexRoute,
    path: "/button-navigation",
    component: () => <NotFound /> 
});

const NotFound = () => {
    const navigate = useNavigate({ from: buttonNavigationRoute.id });

    return (
        <div>
            <h1>Button Navigation</h1>
            <button onClick={() => navigate({ to: "/home" })}>Go Home</button>
        </div>
    );
};