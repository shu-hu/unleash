const BASE_URL = '/api/auth'

function signup(user) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
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

export {
  signup,
}
