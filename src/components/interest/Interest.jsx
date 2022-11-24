import './interest.css'

const Interest = () => {
    return (
        <div className='interestWrapper'>
            <div className='interestHeading'>
                <p>Point of Interest</p>
            </div>
            <div className='interestSearch'>
                <input type="text" placeholder='Search for Keywords.' />
            </div>
            <div className="actionItems">
                <div className='actionItemHeading'>ACTION ITEMS</div>
                <div className="actionItemSubHeading">
                    <div className='subText'>ABC Company action-items</div>
                </div>
                <div className="interestDivider"></div>
            </div>
            <div className="actionItems">
                <div className='actionItemHeading'>QUESTIONS</div>
                <div className="actionItemSubHeading">
                    <div className='subText'>Asked by ABC Company</div>
                </div>
                <div className="actionItemSubHeading">
                    <div className='subText'>Asked by Others</div>
                </div>
                <div className="interestDivider"></div>
            </div>
            <div className="actionItems">
                <div className='actionItemHeading'>SMART TRACKERS</div>
                <div className="actionItemSubHeading">
                    <div className='subText'>Discovery Questions</div>
                </div>
                <div className="actionItemSubHeading">
                    <div className='subText'>Pricing Objections</div>
                </div>
                <div className="interestDivider"></div>
            </div>
            <div className="actionItems">
                <div className='actionItemHeading'>TRACKERS</div>
                <div className="trackersItem">
                    <div className="trackerItemHeading">Quantities</div>
                    <div className="trackerItemSubHeading">
                        <div className="trackItem">
                            <div className="itemName">four accounts</div>
                        </div>
                        <div className="trackItem">
                            <div className="itemName">50 calls</div>
                        </div>
                        <div className="trackItem">
                            <div className="itemName">10 users</div>
                        </div>
                    </div>
                </div>
                <div className="trackersItem">
                    <div className="trackerItemHeading">ABC COMPANY NARRATIVE DEMO</div>
                    <div className="trackerItemSubHeading">
                        <div className="trackItem">
                            <div className="itemName">aligned</div>
                        </div>
                    </div>
                </div>
                <div className="trackersItem">
                    <div className="trackerItemHeading">SALES METHODOLOGY</div>
                    <div className="trackerItemSubHeading">
                        <div className="trackItem">
                            <div className="itemName">imagine</div>
                        </div>
                        <div className="trackItem">
                            <div className="itemName">impact</div>
                        </div>
                    </div>
                </div>
                <div className="trackersItem">
                    <div className="trackerItemHeading">DECISION CRITERIA</div>
                    <div className="trackerItemSubHeading">
                        <div className="trackItem">
                            <div className="itemName">four accounts</div>
                        </div>
                        <div className="trackItem">
                            <div className="itemName">50 calls</div>
                        </div>
                        <div className="trackItem">
                            <div className="itemName">10 users</div>
                        </div>
                    </div>
                </div>
                <div className="statsContainer" style={{ borderBottom: "0px", background: '#F4F8FF', borderRadius: '5px', marginBottom: '20px', alignItems: 'center', paddingTop: '10px', gap: '10px',marginTop:'5px' }}>
                    <div className="call_detailshead">Call Details:</div>
                    <div className="call_deatilsbody">
                        <div className="call_detailshead">Raj, Account Executive</div>
                        <ul>
                            <li>Primary Rep</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Interest