import { Route } from "@tanstack/react-router";
import { indexRoute } from "../App";

export const contactRoute = new Route({
    getParentRoute: () => indexRoute,
    path: "/contact",
    component: () => <Contact /> 
});

const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>
            <p>This is the contact page</p>
        </div>
    );
};