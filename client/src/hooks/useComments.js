import { useEffect, useState } from "react"
import * as commentsAPI from "../api/comments-api.js"


export function useCreateComment() {

    const createHandler = (gameId, comment) => commentsAPI.create(gameId, comment)

    return createHandler
}

export function useGetAllComments(gameId) {
    const [comments, setComments] = useState([])

    // console.log('COMMENTS');
    // console.log(comments);

    useEffect(() => {
        (async () => {
            const result = await commentsAPI.getAll(gameId)

            console.log('comAPI.getAll = RESULT');            
            console.log(result);

            setComments(result)
        })()
    }, [gameId])

    return [comments, setComments]
}