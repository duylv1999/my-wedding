import axios from 'axios';

const instance = axios.create({
    baseURL: window.location.hostname === 'localhost' ? 'http://localhost:5001/api/v1' : 'https://gateway.nhuthanhwedding.com/api/v1'
});
instance.defaults.headers.common['Content-Type'] = 'multipart/form-data';

//validate response
instance.interceptors.response.use((response) => {
    return response;
}, (error) => {
        if (error.response.status === 401) {
            localStorage.removeItem('userLogged');
            localStorage.removeItem('token');
            return window.location.href = '/login'
        }
    return Promise.reject(error);
});

// Set the AUTH token for any request
instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        config.headers.Authorization =  token ? `Bearer ${token}` : '';
        return config;
    }
)

export default instance;
