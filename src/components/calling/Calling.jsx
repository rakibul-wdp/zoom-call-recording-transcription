import { useState } from 'react'
import './calling.css'
import Group from '../../assets/Group.png'
import building from '../../assets/building.png'
import word from '../../assets/word.png'

const Calling = () => {
    const [advance, isAdvance] = useState(true)
    const [isOpen, setIsOpen] = useState({
        callParticipants: false,
        companyName: false,
        words: false,
        trackers: false,
        callCategory: false,
        basicDetails: false,
        crm: false,
        questions: false,
        video: false,
        interaction: false,
    })
    return (
        <div className="callingContainer">
            <div className="callingFilter">
                <div className="callingFilter-heading">
                    <p>Filter</p>
                </div>
                <div className="callingFilter-wrapper">
                    <div className="filter" style={{ cursor: 'pointer' }}>
                        <div className="filterName" onClick={() => setIsOpen({
                                ...isOpen,
                                callParticipants: !isOpen.callParticipants,
                            })} >
                            <div className="nameIcon1"><img src={Group} width='20px' height='20px' alt="" /></div>
                            <div style={{width : '156px'}}>CALL PARTICIPANTS</div>
                            <div className="nameIcon2"><img src={!isOpen.callParticipants ? "https://img.icons8.com/ios/14/3F51B5/expand-arrow--v2.png" : "https://img.icons8.com/ios/14/3F51B5/collapse-arrow--v2.png"} alt=""  /></div>
                        </div>
                        {isOpen.callParticipants && <div className="filterInput">
                            <input type="text" placeholder='Search for team members' />
                            <div className="filterInputIcon">
                                <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/25/3F51B5/external-plus-user-interface-tanah-basah-glyph-tanah-basah-2.png" alt="" />
                            </div>
                        </div>}
                    </div>
                    <div className="filter" style={{ cursor: 'pointer' }}>
                        <div className="filterName" onClick={() => setIsOpen({
                                ...isOpen,
                                companyName: !isOpen.companyName,
                            })} >
                            <div className="nameIcon1"><img src={building} width='20px' height='20px' alt="" /></div>
                            <div style={{width : '156px'}}>COMPANY NAME</div>
                            <div className="nameIcon2"><img src={!isOpen.callParticipants ? "https://img.icons8.com/ios/14/3F51B5/expand-arrow--v2.png" : "https://img.icons8.com/ios/14/3F51B5/collapse-arrow--v2.png"} alt=""  /></div>
                        </div>
                        {isOpen.companyName && <div className="filterInput">
                            <input type="text" placeholder='Type for search' />
                            <div className="filterInputIcon">
                                <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/25/3F51B5/external-plus-user-interface-tanah-basah-glyph-tanah-basah-2.png" alt="" />
                            </div>
                        </div>}
                    </div>
                    <div className="filter" style={{ cursor: 'pointer' }}>
                        <div className="filterName" onClick={() => setIsOpen({
                                ...isOpen,
                                words: !isOpen.words,
                            })} >
                            <div className="nameIcon1"><img src={word} width='20px' height='20px' alt="" /></div>
                            <div style={{width : '156px'}}>WORDS</div>
                            <div className="nameIcon2"><img src={!isOpen.words ? "https://img.icons8.com/ios/14/3F51B5/expand-arrow--v2.png" : "https://img.icons8.com/ios/14/3F51B5/collapse-arrow--v2.png"} alt="" /></div>
                        </div>
                        {isOpen.words && <div className="filterInput">
                            <input type="text" placeholder='Search for words' />
                            <div className="filterInputIcon">
                                <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/25/3F51B5/external-plus-user-interface-tanah-basah-glyph-tanah-basah-2.png" alt="" />
                            </div>
                        </div>}
                    </div>
                    <div className="filter" style={{ cursor: 'pointer' }}>
                        <div className="filterName" onClick={() => setIsOpen({
                                ...isOpen,
                                trackers: !isOpen.trackers,
                            })} >
                            <div className="nameIcon1"><img src='https://img.icons8.com/sf-black-filled/20/3F51B5/define-location.png' alt="" /></div>
                            <div style={{width : '156px'}}>TRACKERS</div>
                            <div className="nameIcon2"><img src={!isOpen.trackers ? "https://img.icons8.com/ios/14/3F51B5/expand-arrow--v2.png" : "https://img.icons8.com/ios/14/3F51B5/collapse-arrow--v2.png"} alt="" /></div>
                        </div>
                        {isOpen.trackers && <div className="filterInput">
                            <input type="text" placeholder='Select' />
                            <div className="filterInputIcon">
                                <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/25/3F51B5/external-plus-user-interface-tanah-basah-glyph-tanah-basah-2.png" alt="" />
                            </div>
                        </div>}
                    </div>
                    {advance && <div className="filter" onClick={() => isAdvance(!advance)} style={{ cursor: 'pointer', maxWidth: 'max-content' }}>
                        <div className="filterInput" >
                            <div className="filterInputAdv" style={{ fontStyle: 'arial', fontWeight: '650', fontSize: '16px' }}>Additional Filter</div>
                            <div className="filterInputIcon">
                                <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/20/3F51B5/external-plus-user-interface-tanah-basah-glyph-tanah-basah-2.png" alt="" />
                            </div>
                        </div>
                    </div>}
                    {!advance &&
                        <>
                            <div className="filter1">
                                <div className="filterName" style={{ cursor: 'pointer' }} onClick={() => isAdvance(!advance)} >&gt;Advanced</div>
                            </div>
                            <div className="filter1" style={{ cursor: 'pointer' }}>
                                    <div className="filterName" onClick={() => setIsOpen({
                                            ...isOpen,
                                            callCategory: !isOpen.callCategory,
                                        })} >
                                        <div style={{width : '110px'}}>Call Category</div>
                                        <div className="nameIcon2"><img src={!isOpen.callCategory ? "https://img.icons8.com/ios/14/3F51B5/expand-arrow--v2.png" : "https://img.icons8.com/ios/14/3F51B5/collapse-arrow--v2.png"} alt=""/></div>
                                    </div>
                                {isOpen.callCategory && <div className="filterInput">
                                    <input type="text" placeholder='Select' />
                                </div>}
                            </div>
                            <div className="filter1" style={{ cursor: 'pointer' }} >
                            <div className="filterName" onClick={() => setIsOpen({
                                            ...isOpen,
                                            basicDetails: !isOpen.basicDetails,
                                        })} >
                                        <div style={{width : '110px'}}>Basic Details</div>
                                        <div className="nameIcon2"><img src={!isOpen.basicDetails ? "https://img.icons8.com/ios/14/3F51B5/expand-arrow--v2.png" : "https://img.icons8.com/ios/14/3F51B5/collapse-arrow--v2.png"} alt="" /></div>
                                    </div>
                                {isOpen.basicDetails && <div className="filterInput">
                                    <input type="text" placeholder='Select' />
                                </div>}
                            </div>
                            <div className="filter1" style={{ cursor: 'pointer' }} >
                            <div className="filterName" onClick={() => setIsOpen({
                                            ...isOpen,
                                            crm: !isOpen.crm,
                                        })} >
                                        <div style={{width : '110px'}}>CRM</div>
                                        <div className="nameIcon2"><img src={!isOpen.crm ? "https://img.icons8.com/ios/14/3F51B5/expand-arrow--v2.png" : "https://img.icons8.com/ios/14/3F51B5/collapse-arrow--v2.png"} alt=""/></div>
                                    </div>
                                {isOpen.crm && <div className="filterInput">
                                    <input type="text" placeholder='Select' />
                                </div>}
                            </div>
                            <div className="filter1" style={{ cursor: 'pointer' }} >
                            <div className="filterName" onClick={() => setIsOpen({
                                            ...isOpen,
                                            questions: !isOpen.questions,
                                        })} >
                                        <div style={{width : '110px'}}>Questions</div>
                                        <div className="nameIcon2"><img src={!isOpen.questions ? "https://img.icons8.com/ios/14/3F51B5/expand-arrow--v2.png" : "https://img.icons8.com/ios/14/3F51B5/collapse-arrow--v2.png"} alt=""/></div>
                                    </div>
                                {isOpen.questions && <div className="filterInput">
                                    <input type="text" placeholder='Select' />
                                </div>}
                            </div>
                            <div className="filter1" style={{ cursor: 'pointer' }} >
                            <div className="filterName" onClick={() => setIsOpen({
                                            ...isOpen,
                                            interaction: !isOpen.interaction,
                                        })} >
                                        <div style={{width : '110px'}}>Interaction</div>
                                        <div className="nameIcon2"><img src={!isOpen.interaction ? "https://img.icons8.com/ios/14/3F51B5/expand-arrow--v2.png" : "https://img.icons8.com/ios/14/3F51B5/collapse-arrow--v2.png"} alt=""/></div>
                                    </div>
                                {isOpen.interaction && <div className="filterInput">
                                    <input type="text" placeholder='Select' />
                                </div>}
                            </div>
                            <div className="filter1" style={{ cursor: 'pointer' }} >
                            <div className="filterName" onClick={() => setIsOpen({
                                            ...isOpen,
                                            video: !isOpen.video,
                                        })} >
                                        <div style={{width : '110px'}}>Video</div>
                                        <div className="nameIcon2"><img src={!isOpen.video ? "https://img.icons8.com/ios/14/3F51B5/expand-arrow--v2.png" : "https://img.icons8.com/ios/14/3F51B5/collapse-arrow--v2.png"} alt=""/></div>
                                    </div>
                                {isOpen.video && <div className="filterInput">
                                    <input type="text" placeholder='Select' />
                                </div>}
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Calling