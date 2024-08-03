import { useEffect, useState } from "react";
import { getAll } from "../api/waterfall-api.js";

export function useFetch(url, initalData) {
    const [data, setData] = useState(initalData);
    const [isFetching, setIsFetching] = useState(true);
    const [toggleRefetch, setToggleRefetch] = useState(false);

    useEffect(() => {
        setIsFetching(true);
        const abortController = new AbortController();

        (async () => {
        //    const result = await getAll()
           const response = await fetch(url, { signal: abortController.signal });
           const result = await response.json();

            setData(result);
            setIsFetching(false);
        })(),[];

        return () => abortController.abort('change page');
    }, [url, toggleRefetch]);

    const refetch = () => {
        setToggleRefetch(state => !state);
    };

    return {
        data,
        isFetching,
        refetch,
    };
}
