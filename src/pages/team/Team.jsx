import React from 'react'
import './team.css'
import Navbar from '../../components/Navbar/Navbar'
import { useState } from 'react'
import Interaction from '../../components/interaction/Interaction'
import Coaching from '../../components/coaching/Coaching'
import Trackers from '../../components/trackers/Trackers'
import TeamsActivity from '../../components/teamsActivity/TeamsActivity'
import Topic from '../../components/topic/Topic'

const Team = () => {
    const [navActive, setNavActive] = useState({
        teamActivity: true,
        teamInteraction: false,
        teamTopics: false,
        teamTrackers: false,
        teamSmart: false,
        teamScore: false,
        teamCoaching: false,
    })
    return (
        <div className='teamApp'>
            <Navbar type='teams' />
            <div className="teamWrapper">
                <div className="teamWrapperHead">
                    <div className="teamWrapperHead1">
                        <div className="teamWrapperHeading">Team Dashboard</div>
                        <div className="teamWrapperNav">
                            <div className="headNav" style={{ color: (navActive.teamActivity ? '#3F51B5' : '#333333') }} onClick={() => setNavActive({
                                teamActivity: true,
                                teamInteraction: false,
                                teamTopics: false,
                                teamTrackers: false,
                                teamSmart: false,
                                teamScore: false,
                                teamCoaching: false,
                            })}>Activity</div>
                            <div className="headNav" style={{ color: (navActive.teamInteraction ? '#3F51B5' : '#333333') }} onClick={() => setNavActive({
                                teamActivity: false,
                                teamInteraction: true,
                                teamTopics: false,
                                teamTrackers: false,
                                teamSmart: false,
                                teamScore: false,
                                teamCoaching: false,
                            })} >Interaction</div>
                            <div className="headNav" style={{ color: (navActive.teamTopics ? '#3F51B5' : '#333333') }} onClick={() => setNavActive({
                                teamActivity: false,
                                teamInteraction: false,
                                teamTopics: true,
                                teamTrackers: false,
                                teamSmart: false,
                                teamScore: false,
                                teamCoaching: false,
                            })}>Topics</div>
                            <div className="headNav" style={{ color: (navActive.teamTrackers ? '#3F51B5' : '#333333') }} onClick={() => setNavActive({
                                teamActivity: false,
                                teamInteraction: false,
                                teamTopics: false,
                                teamTrackers: true,
                                teamSmart: false,
                                teamScore: false,
                                teamCoaching: false,
                            })}>Trackers</div>
                            <div className="headNav" style={{ color: (navActive.teamSmart ? '#3F51B5' : '#333333') }} onClick={() => setNavActive({
                                teamActivity: false,
                                teamInteraction: false,
                                teamTopics: false,
                                teamTrackers: false,
                                teamSmart: true,
                                teamScore: false,
                                teamCoaching: false,
                            })}>Smart Trackers</div>
                            <div className="headNav" style={{ color: (navActive.teamScore ? '#3F51B5' : '#333333') }} onClick={() => setNavActive({
                                teamActivity: false,
                                teamInteraction: false,
                                teamTopics: false,
                                teamTrackers: false,
                                teamSmart: false,
                                teamScore: true,
                                teamCoaching: false,
                            })}>Scorecard</div>
                            <div className="headNav" style={{ color: (navActive.teamCoaching ? '#3F51B5' : '#333333') }} onClick={() => setNavActive({
                                teamActivity: false,
                                teamInteraction: false,
                                teamTopics: false,
                                teamTrackers: false,
                                teamSmart: false,
                                teamScore: false,
                                teamCoaching: true,
                            })}>Coaching Recieved</div>
                        </div>
                    </div>
                    <div className="teamWrapperHead2">
                        <div className="teamHeadButton">
                            <div className="teamHeadButtonName">STATS</div>
                        </div>
                        <div className="teamHeadButton">
                            <div className="teamHeadButtonName">COACHING</div>
                        </div>
                    </div>
                </div>
                <div className="teamWrapperBody">
                    {navActive.teamActivity && <div className="bodyActivity">
                        <div className="navName">Activity</div>
                        <TeamsActivity />
                    </div>}
                    {navActive.teamInteraction && <div className="bodyInteraction">
                        <div className="navName">Interaction</div>
                        <Interaction/>
                    </div>}
                    {navActive.teamTopics && <div className="bodyTopics" style={{display:'flex', flexDirection:'column', paddingLeft:'50px'}}>
                        <div className="navName">Topics</div>
                        <Topic/>
                    </div>}
                    {navActive.teamTrackers && <div className="bodyTrackers">
                        <Trackers/>
                    </div>}
                    {navActive.teamSmart && <div className="bodyTrackers">
                        <div className="navName">Smart Trackers</div>
                    </div>}
                    {navActive.teamScore && <div className="bodyScore">
                        <div className="navName">ScoreCard</div>
                    </div>}
                    {navActive.teamCoaching && <div className="bodyCoaching">
                        <div className="navName">Team Coaching</div>
                        <Coaching/>
                    </div>}
                </div>

            </div>
        </div>
    )
}

export default Team