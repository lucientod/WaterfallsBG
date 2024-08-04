

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
    console.log(result.message)
    if (!response.ok) {
        throw new Error(result.message)
    }

    return result || abortController.abort('ABORT')

}
const get = (url) => requester('GET', url)
const post = (url, data) => requester('POST', url, data)
const put = (url, data) => requester('PUT', url, data)
const del = (url, data) => requester('DELETE', url, data)

export { get, post, put, del }

// export const get = requester.bind(null, 'GET')