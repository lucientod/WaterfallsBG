import * as request from "./requester.js"

const BASE_URL = 'http://localhost:3030/jsonstore/waterfalls'

export const getAll = async ()=>{
    const result = await request.get(BASE_URL)
    const waterfalls = Object.values(result)

    return waterfalls
}

export const getOne = async(gameid)=> await request.get(`${BASE_URL}/${gameId}`)

export const submitComment = async(comment)=> await request.post(`${BASE_URL}/comments`)