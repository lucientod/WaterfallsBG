import * as requester from "./requester.js"

const BASE_URL = 'http://localhost:3030/data/comments'

const create = (waterfallId, text) => requester.post(BASE_URL, { waterfallId, text })

const getAll = (waterfallId) => {
    const params = new URLSearchParams({
        where: `waterfallId="${waterfallId}"`,
        load:  `author=_ownerId:users`
    })
    // console.log(`${BASE_URL}?${params.toString()}`);

    return requester.get(`${BASE_URL}?${params.toString()}`)
}


export {
    create, getAll
}

// export const submitComment = async(comment)=> await request.post(`${BASE_URL}/comments`)
