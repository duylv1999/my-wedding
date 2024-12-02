class Auth {
    constructor() {
        this.authenticated = false;
    }

    logged_in(cb) {
        this.authenticated = true;
        cb();
    }

    logged_out(cb) {
        this.authenticated = false;
        localStorage.removeItem('userLogged');
        localStorage.removeItem('token');
        cb();
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Auth();