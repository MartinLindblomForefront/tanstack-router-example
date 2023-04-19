import { Route } from "@tanstack/react-router";
import { indexRoute } from "../App";

export const deepRoute = new Route({
    getParentRoute: () => indexRoute,
    path: "/first/second/third/fourth/deep",
    component: () => <Deep /> 
});

const Deep = () => {
    return (
        <div>
            <h1>Deep</h1>
            <p>This page is 5 levels deep</p>
        </div>
    );
};