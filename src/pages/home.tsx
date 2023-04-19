import { Route } from "@tanstack/react-router";
import { indexRoute } from "../App";

export const homeRoute = new Route({
    getParentRoute: () => indexRoute,
    path: "/home",
    component: () => <Home /> 
});

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>This is the home page</p>
        </div>
    );
};