function setToken(token) {
    if (token) {
        localStorage.setItem('token', token)
    } else {
        localStorage.removeItem('token')
    }
}

function getUserFromToken() {
    const token = getToken()
    return token ? JSON.parse(atob(token.split('.')[1])).user : null
}

function getToken() {
    let token = localStorage.getItem('token')
    if (token) {
        const payload = JSON.parse(atob(token.split('.')[1]))
        if (payload.exp < Date.now() / 1000) {
            localStorage.removeItem('token')
            token = null
        }
    }
    return token
}

function removeToken() {
    localStorage.removeItem('token')
}

export {
    setToken,
    getToken,
    getUserFromToken,
    removeToken,
}