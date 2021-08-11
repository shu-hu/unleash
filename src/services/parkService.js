import * as tokenService from './tokenService'
const BASE_URL = '/api/parks/'


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
            headers: { 'Authorization': `Bearer ${tokenService.getToken()}`}
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

