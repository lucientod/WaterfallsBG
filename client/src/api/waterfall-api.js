import * as requester from "./requester.js"

const BASE_URL = 'http://localhost:3030/data/waterfalls'

export const getAll = async () => {
    const result = await requester.get(BASE_URL)
    const waterfalls = Object.values(result)

    return waterfalls
}

export const getOne = async (gameId) => await requester.get(`${BASE_URL}/${gameId}`)
