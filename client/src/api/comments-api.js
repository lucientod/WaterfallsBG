import * as requester from "./requester.js"

const BASE_URL = 'http://localhost:3030/data/comments'

const create =  (gameId, text) =>  requester.post(BASE_URL, { gameId, text })

const getAll =  (gameId) => {
    const params = new URLSearchParams({
        where: `gameId="${gameId}"`
    })
console.log(`${BASE_URL}?${params.toString()}`);

    return  requester.get(`${BASE_URL}?${params.toString()}`)
}


export {
    create, getAll
}

// export const submitComment = async(comment)=> await request.post(`${BASE_URL}/comments`)
