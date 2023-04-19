import { Route, useSearch } from "@tanstack/react-router";
import { indexRoute } from "../App";

interface SearchParams {
    filter: string,
    count: number,
    sort: "newest" | "oldest"
}

const validateSearch = (search: Record<string, unknown>) : SearchParams => {
    const parsedNumber = Number(search?.count ?? 1);

    return {
        filter: search?.filter as string || "[Fallback Filter]",
        count: isNaN(parsedNumber) ? 1 : parsedNumber,
        sort: (search?.sort == "oldest" ? "oldest" : "newest")
    };
}

export const searchRoute = new Route({
    getParentRoute: () => indexRoute,
    path: "/search",
    validateSearch: validateSearch,
    component: () => <Search />
});

const Search = () => {
    const { filter, count, sort } = useSearch({ from: searchRoute.id });

    return (
        <div>
            <h1>Search</h1>
            <p>Your search is the following:</p>
            <p><b>Filter</b> - {filter}</p>
            <p><b>Count</b> - {count}</p>
            <p><b>Sort</b> - {sort}</p>
        </div>
    );
};