import { useEffect, useState } from "react"
import * as commentsAPI from "../api/comments-api.js"


export function useCreateComment() {

    const createHandler = (waterfallId, comment) => commentsAPI.create(waterfallId, comment)

    return createHandler
}

export function useGetAllComments(waterfallId) {
    const [comments, setComments] = useState([])

    // console.log('COMMENTS');
    // console.log(comments);

    useEffect(() => {
        (async () => {
            const result = await commentsAPI.getAll(waterfallId)

            // console.log('comAPI.getAll = RESULT');            
            // console.log(result);

            setComments(result)
        })()
    }, [waterfallId])

    return [comments, setComments]
}