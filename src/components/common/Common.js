// return the token from the local storage
export const getToken = () => {
    return localStorage.getItem('token') || null;
}