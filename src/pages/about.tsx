import { Route } from "@tanstack/react-router";
import { indexRoute } from "../App";

export const aboutRoute = new Route({
    getParentRoute: () => indexRoute,
    path: "/about",
    component: () => <About /> 
});

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <p>This is the about section</p>
        </div>
    );
};