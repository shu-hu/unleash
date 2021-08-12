import * as tokenService from './tokenService'
const BASE_URL = '/api/parks/'
const tomtomApiKey = process.env.REACT_APP_API_KEY_TOMTOM


export const createPark = async (park) => {
    try {
        const res = await fetch(`${BASE_URL}`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenService.getToken()}`
            },
            body: JSON.stringify(park)
        }, { mode: "cors" })
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}

export const getPaginatedParks = async page => {
    try {
        const res = await fetch(`${BASE_URL}${page}`, { mode: "cors" })
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}

export const updatePark = async (parkId, park) => {
    try {
        const res = await fetch(`${BASE_URL}${parkId}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenService.getToken()}`
            },
            body: JSON.stringify(park)
        }, { mode: "cors" })
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}

export const deletePark = async parkId => {
    try {
        await fetch(`${BASE_URL}${parkId}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
        }, { mode: "cors" })
    } catch (error) {
        throw error
    }
}

export const getParkById = async id => {
    try {
        const res = await fetch(`${BASE_URL}details/${id}`, { mode: "cors" })
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}


export const search = async (location) => {
    try {
        const res = await fetch(`${BASE_URL}search?keyword=${location}`, { mode: 'cors' })
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}

export const searchTomTom = async (query) => {
    try {
        let formatQuery = await encodeURIComponent(query)
        console.log(formatQuery)
        const geocode = `https://api.tomtom.com/search/2/geocode/${formatQuery}.json?&key=${tomtomApiKey}`
        const res = await fetch(geocode)
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }

}

// const tomtom = `https://api.tomtom.com/search/2/poiSearch/%22dog%20parks%22.json?limit=100&lat=${arr[0]}&lon=${arr[1]}&radius=2000&key=${tomtomApiKey}`
// const res = await fetch(tomtom)
// const { results } = await res.json();
export const searchedParks = async (arr) => {
    try {
        const geocode = `https://api.tomtom.com/search/2/poiSearch/%22dog%20parks%22.json?limit=100&lat=${arr.lat}&lon=${arr.lon}&radius=2000&key=${tomtomApiKey}`
        const res = await fetch(geocode)
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}