import * as requester from "./requester.js"

const BASE_URL = 'http://localhost:3030/data/waterfalls'

export const getAll = async () => {
    const result = await requester.get(BASE_URL)
    const waterfalls = Object.values(result)

    return waterfalls
}

export const getOne = async (waterfallId) => await requester.get(`${BASE_URL}/${waterfallId}`)

export const del = async (waterfallId) => await requester.del(`${BASE_URL}/${waterfallId}`)

export const update = (waterfallId, data) => requester.put(`${BASE_URL}/${waterfallId}`, data)

// export const getLatest = async () => {
//     const urlSearchParams = new URLSearchParams({
//         sortBy: `_createdOn desc`,
//         pageSize: 3,
//     })
// console.log('urlsearchparams:');
// console.log(`${BASE_URL}?${urlSearchParams}`)


//     const result  = await requester.get(`${BASE_URL}?${urlSearchParams.toString()}`)

//     console.log('RESULT:');
//     console.log(result);
    
    
//     return Object.values(result)
// }


const WaterfallAPI = {
    getOne,
    getAll,
    del,
    update,
    // getLatest,
}
