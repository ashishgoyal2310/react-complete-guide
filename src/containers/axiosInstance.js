import axios from 'axios'

const instanceBlog = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'X-Custom-Header': 'Blog-Custom-Header'}
});

instanceBlog.defaults.headers.common['Authorization'] = 'Token Blog-Instange-Auth-Token-Key '

// instanceBlog.interceptors.request...

export const instanceOrder = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export default instanceBlog