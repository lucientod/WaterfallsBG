import * as requester from "./requester.js"

const BASE_URL = 'http://localhost:3030/data/comments'

const create = async (gameId, text) => await requester.post(BASE_URL, { gameId, text })

const getAll = async (gameId) => await requester.get(BASE_URL)


export {
    create, getAll
}

// export const submitComment = async(comment)=> await request.post(`${BASE_URL}/comments`)
