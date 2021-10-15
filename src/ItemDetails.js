import React, { useState, useEffect } from 'react'

const ItemDetail = ({ match }) => {

    const [item, setItem] = useState({})

    useEffect(() => {
        getItem()
        console.log(match)
    }, [])

    const getItem = async () => {
        await fetch(`https://fortnite-api.com/images/banners/`)
                .then(result => result.json())
                .then(
                    res => setItem(res),
                    console.log(item)
                )
                .catch(err => console.error(err))
    }

    return(
        <>
            <h4>{item.name}</h4>
            <img src={item.images.smallIcon} alt="" />
        </>
    )
}

export default ItemDetail