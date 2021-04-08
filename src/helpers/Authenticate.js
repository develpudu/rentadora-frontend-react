const Auth = {
    isAuthenticated() {
        return sessionStorage.getItem("token") !== null && new Date(parseInt(sessionStorage.getItem("token-expires"))) > new Date();
    },
    getToken() {
        return sessionStorage.getItem("token");
    },
    authenticate(token) {
        let now = new Date();
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("token-expires", now.setHours(now.getHours() + 1));
    },
    logOut() {
        sessionStorage.removeItem("token");
    }
};

export default Auth;