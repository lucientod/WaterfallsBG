import * as requester from "./requester.js"

const BASE_URL = 'http://localhost:3030/jsonstore/waterfalls'

export const getAll = async ()=>{
    const result = await requester.get(BASE_URL)
    const waterfalls = Object.values(result)

    return waterfalls
}

export const getOne = async(gameid)=> await requester.get(`${BASE_URL}/${gameId}`)
