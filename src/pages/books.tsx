import { Route, useParams } from "@tanstack/react-router";
import { indexRoute } from "../App";

export const booksRoute = new Route({
    getParentRoute: () => indexRoute,
    path: "/books/$bookId",
    component: () => <Contact /> 
});

const Contact = () => {
    const { bookId } = useParams({ from: booksRoute.id });

    return (
        <div>
            <h1>Book</h1>
            <p><b>Id</b> - {bookId}</p>
        </div>
    );
};