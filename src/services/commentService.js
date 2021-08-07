import * as tokenService from '../services/tokenService'
const BASE_URL = '/api/parks/'

export const createComment = async (parkId, comment) => {
    try {
        const res = await fetch(`${BASE_URL}${parkId}/comments`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenService.getToken()}`
            },
            body: JSON.stringify(comment)
        }, { mode: "cors" })
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}

export const indexCommentsByParkId = async parkId => {
    try {
        const res = await fetch(`${BASE_URL}${parkId}/comments`, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenService.getToken()}`
            },
        }, { mode: "cors" })
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}

export const updateComment = async (parkId, commentId) => {
    try {
        const res = await fetch(`${BASE_URL}${parkId}/comments/${commentId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenService.getToken()}`
            },
        }, {mode: "cors"})
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}

export const deleteComment = async (parkId, commentId) => {
    try {
        const res = await fetch(`${BASE_URL}${parkId}/comments/${commentId}`, {
            method: 'DELETE',
            headers: {'Authorization': `Bearer ${tokenService.getToken()}`},
        }, {mode: "cors"})
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}