import React from 'react'
import './MissionCard.css'
function MissionCard({ mission_name, flight_number, mission_id, launch_year, launch_success, mission_patch, land_success }) {
    return (
        <div className='cardContainer'>
            <img src={mission_patch} alt="" />
            <div className="details">
                <h2>{mission_name}#{flight_number}</h2>
                <h3>Mission ids:</h3>
                <ul>
                    {
                        mission_id.map((element, index) => {
                            return <li key={index}>{element}</li>
                        })
                    }
                </ul>
                <p><strong>Launch Year: </strong><span>{launch_year}</span></p>
                <p><strong>Successful Launch: </strong><span>{launch_success ? "true" : "undefined"}</span></p>
                <p><strong>Successful Landing: </strong><span>{land_success ? "true" : "undefined"}</span></p>
            </div>
        </div>
    )
}

export default MissionCard
