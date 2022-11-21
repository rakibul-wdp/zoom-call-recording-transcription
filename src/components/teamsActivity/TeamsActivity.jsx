import React from 'react'
import { useState } from 'react'
import './teamsActivity.css'

const TeamsActivity = () => {

    const [activityname , setActivityName] = useState({
        callDuration:true,
        weeklyVolume: false,
        weeklyDuration : false,
        totalVolume : false,
        totalDuration : false,
    })

  return (
    <div className='activityWrapper'>
        <div className="activityWrapperHead">
            <div className={activityname.callDuration?"change":"activityWrapperHeadName"} onClick = {()=>setActivityName({
                callDuration:true,
                weeklyVolume: false,
                weeklyDuration : false,
                totalVolume : false,
                totalDuration : false,
            })}>CALL DURATION</div>
            <div className={activityname.weeklyVolume?"change":"activityWrapperHeadName"}  onClick = {()=>setActivityName({
                callDuration:false,
                weeklyVolume: true,
                weeklyDuration : false,
                totalVolume : false,
                totalDuration : false,
            })}>WEEKLY CALL VOLUME</div>
            <div className={activityname.weeklyDuration?"change":"activityWrapperHeadName"}  onClick = {()=>setActivityName({
                callDuration:false,
                weeklyVolume: false,
                weeklyDuration : true,
                totalVolume : false,
                totalDuration : false,
            })}>WEEKLY CALL DURATION</div>
            <div className={activityname.totalVolume?"change":"activityWrapperHeadName"}  onClick = {()=>setActivityName({
                callDuration:false,
                weeklyVolume: false,
                weeklyDuration : false,
                totalVolume : true,
                totalDuration : false,
            })}>TOTAL CALL VOLUME</div>
            <div className={activityname.totalDuration?"change":"activityWrapperHeadName"}  onClick = {()=>setActivityName({
                callDuration:false,
                weeklyVolume: false,
                weeklyDuration : false,
                totalVolume : false,
                totalDuration : true,
            })}>TOTAL CALL DURATION</div>
        </div>
        <div className="activityWrapperData">
            {activityname.callDuration && 
            <div className="activityWrapperCallDuration">
                <div className="callDurationInfo">
                    <div className="callDurationInfoHead">Call Duration</div>
                    <div className="callDurationInfoSub">Based on 625 calls</div>
                </div>
                <div className="callDurationGraph">
                    <div className="graphLabel">Team Members</div>
                    <div className="barGraph">
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'50%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'41%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'36%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'58%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'69%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'82%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'47%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'63%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'70%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'55%'}}></div>
                        </div>
                    </div>
                </div>
            </div>
            }
            {activityname.weeklyVolume && 
            <div className="activityWrapperCallDuration">
                <div className="callDurationInfo">
                    <div className="callDurationInfoHead">Weekly Call Volume</div>
                    <div className="callDurationInfoSub">Based on 625 calls</div>
                </div>
                <div className="callDurationGraph">
                    <div className="graphLabel">Team Members</div>
                    <div className="barGraph">
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'50%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'41%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'36%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'58%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'69%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'82%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'47%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'63%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'70%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'55%'}}></div>
                        </div>
                    </div>
                </div>
            </div>
            }
            {activityname.weeklyDuration && 
            <div className="activityWrapperCallDuration">
                <div className="callDurationInfo">
                    <div className="callDurationInfoHead">Weekly Call Duration</div>
                    <div className="callDurationInfoSub">Based on 625 calls</div>
                </div>
                <div className="callDurationGraph">
                    <div className="graphLabel">Team Members</div>
                    <div className="barGraph">
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'50%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'41%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'36%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'58%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'69%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'82%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'47%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'63%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'70%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'55%'}}></div>
                        </div>
                    </div>
                </div>
            </div>
            }
            {activityname.totalVolume && 
            <div className="activityWrapperCallDuration">
                <div className="callDurationInfo">
                    <div className="callDurationInfoHead">Total Call Volume</div>
                    <div className="callDurationInfoSub">Based on 625 calls</div>
                </div>
                <div className="callDurationGraph">
                    <div className="graphLabel">Team Members</div>
                    <div className="barGraph">
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'50%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'41%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'36%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'58%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'69%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'82%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'47%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'63%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'70%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'55%'}}></div>
                        </div>
                    </div>
                </div>
            </div>
            }
            {activityname.totalDuration && 
            <div className="activityWrapperCallDuration">
                <div className="callDurationInfo">
                    <div className="callDurationInfoHead">Total Call Duration</div>
                    <div className="callDurationInfoSub">Based on 625 calls</div>
                </div>
                <div className="callDurationGraph">
                    <div className="graphLabel">Team Members</div>
                    <div className="barGraph">
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'50%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'41%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'36%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'58%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'69%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'82%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'47%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'63%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'70%'}}></div>
                        </div>
                        <div className="graph">
                            <div className="graphName">Name</div>
                            <div className="graphData" style={{width:'55%'}}></div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
        
    </div>
  )
}

export default TeamsActivity