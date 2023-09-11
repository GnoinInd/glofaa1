import React, { useState, useEffect } from 'react'
import axios from 'axios';

const API_key = 'AIzaSyDAnB3TBIeV7_b7ZfTPPi4kAauaxVaB7mw'
const API_endpoint = 'https://maps.googleapis.com/maps/api/geocode/json?address='


function GeoLoaction() {



    
    const [Latitude, setLatitude] = useState()
    const [Longitude, setLongitude] = useState()
    const [LoactionData, setLoactionData] = useState({})

  

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        })

        let finalApiendpoint = `${API_endpoint}${Latitude},${Longitude}&key=${API_key}`

        axios.get(finalApiendpoint).then((res) => {
            setLoactionData(res.data);
            console.log('ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(res.data));
        })

    }, [Latitude, Longitude])




    return (

        <div className='geo-location-box'>
            <div className="geo-Location-mark w-sm-100">
                <span className='flag-icon'><img src='/images/icone/flag.png' /></span>
                {/* <span className='serch-palceholder'>search</span> */}
                <h6>Kolkata</h6>
                <span className='voice-icon'><img src='/images/icone/location-point.png' /></span>
            </div>
            <div className="geo-Location d-none d-sm-flex d-md-flex">
                <span className='mark-icon'><img src='/images/icone/mark-icon.png' /></span>
                {/* <span className='serch-palceholder'>search</span> */}
                <h6>{LoactionData ? `${LoactionData.name}, ${LoactionData?.sys?.country}` : ''}</h6>

            </div>
        </div>

    )
}

export default GeoLoaction