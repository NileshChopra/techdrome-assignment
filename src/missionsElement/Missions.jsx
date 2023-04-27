import React, { useState, useEffect } from 'react'
import MissionCard from './MissionCard'
import './Missions.css'
import { formattedSpacexData } from '../services/FetchData'
function Missions({ params }) {
    const [finalData, setFinalData] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            let temp = await formattedSpacexData({ ...params });
            setFinalData(temp);
        }
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            let temp = await formattedSpacexData({ ...params });
            setFinalData(temp);
        }
        fetchData();
    }, [params]);
    return (
        <div className='cards'>
            {
                finalData && finalData.map((element, index) => {
                    return <MissionCard key={index} mission_name={element.mission_name} flight_number={element.flight_number} mission_id={element.mission_id} launch_year={element.launch_year} launch_success={element.launch_success} mission_patch={element.mission_patch} land_success={element.land_success} />
                })
            }
        </div >
    )
}

export default Missions
// 