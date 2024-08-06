

export default async function requester(method, url, data) {
    // const abortController = new AbortController();

    const options = {}

    const accessToken = localStorage.getItem('accessToken')
    if (accessToken)
        options.headers = {
            ...options.headers,
            "X-Authorization": accessToken,
        }

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

    const response = await fetch(url, options)
    if ((response.status === 204))
        return

    else if (response.status === 403)
        throw new Error("Wrong username or password!");

    else if (response.status === 409)
        throw new Error('User already exists!');

    else if (!response.ok)
        throw new Error(result.message)

    const result = await response.json()
    // console.log(result.message)

    return result
    // abort: () => abortController.abort('ABORT') };

}
const get = (url) => requester('GET', url)
const post = (url, data) => requester('POST', url, data)
const put = (url, data) => requester('PUT', url, data)
const del = (url, data) => requester('DELETE', url, data)

export { get, post, put, del }

// export const get = requester.bind(null, 'GET')