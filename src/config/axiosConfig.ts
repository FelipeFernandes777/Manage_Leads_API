import axios from 'axios';

const apiMeta = axios.create({
    baseURL:"https://new-backend.botconversa.com.br/api/v1/webhooks-automation/catch/157355/5JUHRbJyshhw",
    headers: {
        'Content-Type': 'application/json',
    },
})

const apiGoogle = axios.create({
    baseURL: process.env.BOTCONVERSA_GOOGLE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

export {
    apiMeta,
    apiGoogle
}