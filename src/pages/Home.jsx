import React, { useState, useEffect } from 'react'
import { getPaginatedParks, createPark } from '../services/parkService'
import CreatePark from '../components/CreateComponents/CreatePark/CreatePark'
import Layout from '../components/Layout/Layout'
import Map from '../components/Map/Map'
import { searchTomTom, searchedParks } from '../services/parkService'


const Home = (props) => {
    const [parks, setParks] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [location, setLocation] = useState(null)

    const handleSearch = async (searchData) => {
        try {
            const locationQuery = await searchTomTom(searchData.location)
            await setLocation(locationQuery.results[0].position)
        } catch (error) {
            throw error
        }
    }

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

    return (
        <Layout parks={parks} {...props} location={location} setLocation={setLocation} handleSearch={handleSearch}>
            <div className="layout">
                {props.toggleMap ?
                    <Map location={location} />
                    :
                    <CreatePark handleCreatePark={handleCreatePark} {...props} />
                }
            </div>
        </Layout>
    )
}


export default Home