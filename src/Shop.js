import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Shop = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        getItems()
    }, [])

    const getItems = async () => {
        await fetch('https://fortnite-api.com/v1/banners')
                .then(result => result.json())
                .then(
                    res => setItems(res.data)
                )
                .catch(err => console.error(err))
    }

    return(
        <>
            <h1>Shop Page</h1>
            {items.map(item => {
                return (
                    <h1 key={item.id}>
                    {/* <h5>{item.devName}</h5> */}
                    <Link to={`/shop/${item.id}`}>{item.devName}</Link>
                    </h1>
                )
            })}
        </>
    )
}

export default Shop