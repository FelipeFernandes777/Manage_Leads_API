import axios from 'axios';

const apiMeta = axios.create({
    baseURL: process.env.BOTCONVER_META_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

const apiGoogle = axios.create({
    baseURL: process.env.BOTCONVER_GOOGLE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})