import React from 'react'
import './header.css'
import moment from 'moment';
import { useState } from 'react';
const Header = () => {
    const [openInterest, setOpenInterest] = useState(false)
    const [openInteraction, setOpenInteraction] = useState(false)
    const [openSlides, setOpenSlides] = useState(false)
    const [openCompany, setOpenCompany] = useState(false)

    const formatDate = moment().format('LL')
    return (
        <div className='headerWrapper'>
            <div className="topics">
                <div className="topic" onClick={()=>setOpenInterest(!openInterest)}>
                    <p>Point of Interest</p>
                </div>
                <div className="topic" onClick={()=>setOpenInteraction(!openInteraction)}>
                    <p>Interaction stats</p>
                </div>
                <div className="topic" onClick={()=>setOpenSlides(!openSlides)}>
                    <p>Slides</p>
                </div>
                <div className="topic" onClick={()=>setOpenCompany(!openCompany)}>
                    <p>Company</p>
                </div>
            </div>  
            <div className="date">
                {formatDate}
            </div>
        </div>
    )
}

export default Header