import axios from 'axios'

export const BURGER_BASE_URL = '/burger'

export const instanceBlog = axios.create({
    // baseURL: 'https://jsonplaceholder.typicode.com'
    baseURL: 'https://my-json-server.typicode.com/typicode/demo',
    headers: {'X-Custom-Header': 'Blog-Custom-Header'}
});

instanceBlog.defaults.headers.common['Authorization'] = 'Token Blog-Instange-Auth-Token-Key '

// instanceBlog.interceptors.request...

export const instanceOrder = axios.create({
    baseURL: 'https://my-json-server.typicode.com/typicode/demo',
})