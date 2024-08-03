export default async function requester(method, url, data) {
    const options = {}

    if (method !== 'GET') {
        options.method = method
    }

    if (data) {
        options.headers = {
            'Content-Type': 'application/json'
        }
        await fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        options.body = JSON.stringify(data)
    }
    const response = await fetch(url, options)
    const result = await response.json()
    // console.log(result)
    return result

}
const get = async (url) => await requester('GET', url)
const post = (url, data) => requester('POST', url, data)
export { get, post }

// export const get = requester.bind(null, 'GET')