import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://api.json-generator.com/templates/ZM1r0eic3XEy/',
    headers: {
        "Authorization": "Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"
    }
});

export const jobAPI = {
    getData() {
        return instance.get(`data`)
            .then(res => res.data)
    }
}