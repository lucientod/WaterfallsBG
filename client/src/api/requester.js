

export default async function requester(method, url, data) {
    const abortController = new AbortController();

    const options = {}

    const accessToken = localStorage.getItem('accessToken')
    if(accessToken)
        options.headers["X-Authorization"] = accessToken

    if (method !== 'GET') {
        options.method = method
    }

    if (data) {
        options.headers = {
            ...options.headers,
            'Content-Type': 'application/json'
        }

        options.body = JSON.stringify(data)
    }
    const response = await fetch(url, options, { signal: abortController.signal })
    const result = await response.json()
    // console.log(result.message)
    if (!response.ok) {
        throw new Error(result.message)
    }
    return { result, abort: () => abortController.abort('ABORT') };

}
const get = (url) => requester('GET', url)
const post = (url, data) => requester('POST', url, data)
const put = (url, data) => requester('PUT', url, data)
const del = (url, data) => requester('DELETE', url, data)

export { get, post, put, del }

// export const get = requester.bind(null, 'GET')