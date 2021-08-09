import React, { useState, useEffect } from 'react'
import { getPaginatedParks, createPark, updatePark } from '../services/parkService'
import CreatePark from '../components/CreateComponents/CreatePark/CreatePark'
import Layout from '../components/Layout/Layout'
import Map from '../components/Map/Map'

const Home = (props) => {
    const [parks, setParks] = useState([])
    const [currentPage, setCurrentPage] = useState(0)

    // const changePage = (e) => {
    //     e.preventDefault()
    //     setCurrentPage(currentPage + parseInt(e.target.value))
    // }

    useEffect(() => {
        const fetchPaginatedParks = async () => {
            const paginatedParks = await getPaginatedParks(currentPage)
            setParks(paginatedParks)
        }
        fetchPaginatedParks()
        return () => { setParks([]) }
    }, [currentPage])

    const handleCreatePark = async (formData) => {
        try {
            const newPark = await createPark(formData)
            newPark.added_by = props.user
            if (parks.length < 8) {
                setParks([newPark, ...parks])
            } else {
                const duplicate = [...parks]
                duplicate.splice(duplicate.length - 1, 1)
                    setParks(() => [newPark, ...duplicate])
            }
        } catch (error) {
            throw error
        }
    }

    const handleUpdatePark = async (id, formData) => {
        try {
            const updatedPark = await updatePark(id, formData)
            updatedPark.added_by = props.user
        } catch (error) {
            throw error
        }
    }

    return (
        <Layout parks={parks} handleUpdatePark={handleUpdatePark} {...props}>
                {props.toggleMap ? 
                <Map />
                :
                <CreatePark handleCreatePark={handleCreatePark} />
                }
        </Layout>
    )
}


export default Home