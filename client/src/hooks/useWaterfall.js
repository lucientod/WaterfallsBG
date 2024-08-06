import { useEffect, useState } from "react"
import { getOne } from "../api/waterfall-api.js"

export function useGetOneWaterfall(waterfallId) {
    const [waterfall, setWaterfall] = useState([])

    useEffect(() => {
        (async () => {
            const result = await getOne(waterfallId)
            setWaterfall(result)
        })()
    }, [waterfallId])
    return [waterfall, setWaterfall]
}



export default {

}