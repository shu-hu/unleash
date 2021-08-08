import * as tokenService from '../services/tokenService'
const BASE_URL = '/api/auth/'

function getUser() {
    return tokenService.getUserFromToken()
}

function signup(user) {
  return fetch(`${BASE_URL}signup`, {
    method: 'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify(user),
  })
  .then(res => {
    return res.json()
  })
  .then(json => {
    if (json.token) return json.token
    throw new Error(json.err)
  })
  .catch(err => {
    console.log(err)
  })
}

const login = async (creds) => {
    const res = await fetch(`${BASE_URL}login`, {
        method: 'POST',
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(creds)
    })
    if (res.ok) {
        const data = await res.json()
        tokenService.setToken(data.token)
    } else {
        throw new Error()
    }
}

function logout() {
    tokenService.removeToken()
}

export {
  signup,
  getUser,
  login,
  logout,
}
