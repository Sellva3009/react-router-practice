const Auth = {
    isAutheticated: false,
    authenticate() {
        this.isAutheticated = true;
    },
    signout() {
        this.isAutheticated = false;
    }
}

export default Auth