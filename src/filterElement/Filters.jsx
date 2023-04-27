import React, { useState } from 'react'
import '../index.css'
import './Filters.css'

function Filters({ params, setParams }) {
    const start = 2006;
    const end = 2020;
    const yearOptions = [...Array(end - start + 1).keys()].map(x => x + start);

    const yearSwitch = (e) => {
        setParams({ ...params, launch_year: e.target.defaultValue })
    }
    const launchSwitch = (e) => {
        setParams({ ...params, launch_success: e.target.defaultValue })
    }
    const landingSwitch = (e) => {
        setParams({ ...params, land_success: e.target.defaultValue })
    }
    return (
        <div className="container">
            <div className='filterContainer'>
                <div>
                    <h3>Filters</h3>
                    <div>
                        <form action="/" onChange={(e) => yearSwitch(e)}>
                            <center><p>Launch Year</p></center>
                            <hr />
                            <div className="yearOptions">
                                {
                                    yearOptions.map((val) => {
                                        return <div key={val} className='yearOptionElement'><div className="optioncenter"></div><input type="radio" id={val} name="launchYear" value={val} /><label htmlFor={val}>{val}</label></div>
                                    })
                                }
                            </div>
                        </form>
                        <form action="/" onChange={(e) => launchSwitch(e)}>
                            <center><p>Successful Launch</p></center>
                            <hr />
                            <input type="radio" id="successfullLaunchTrue" name="successfullLaunch" value="true" />
                            <label htmlFor="successfullLaunchTrue">True</label>
                            <input type="radio" id="successfullLaunchFalse" name="successfullLaunch" value="false" />
                            <label htmlFor="successfullLaunchFalse">False</label>
                        </form>
                        <form action="/" onChange={(e) => landingSwitch(e)}>
                            <center><p>Successful Landing</p></center>
                            <hr />
                            <input type="radio" id="successfulLandingTrue" name="successfulLanding" value="true" />
                            <label htmlFor="successfulLandingTrue">True</label>
                            <input type="radio" id="uccessfulLandingFalse" name="successfulLanding" value="false" />
                            <label htmlFor="uccessfulLandingFalse">False</label>
                        </form>
                    </div>
                </div >
            </div >
        </div>
    )
}

export default Filters