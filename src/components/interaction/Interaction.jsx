import React, { useState } from 'react'
import './interaction.css'

const Interaction = () => {
    const [interactionname, setInteractionName] = useState({
        talkRatio: true,
        longMono: false,
        longStory: false,
        interactivity: false,
        patience: false,
    })

    return (
        <div className='interactionWrapper'>
            <div className="interactionWrapperHead">
                <div className={interactionname.talkRatio ? "changei" : "interactionWrapperHeadName"} onClick={() => setInteractionName({
                    talkRatio: true,
                    longMono: false,
                    longStory: false,
                    interactivity: false,
                    patience: false,
                })}>
                    <div style={{ width: '100%' }}>Talk Ratio</div>
                    <div style={{ fontWeight: '400', width: '100%' }}>45%</div>
                </div>
                <div className={interactionname.longMono ? "changei" : "interactionWrapperHeadName"}  onClick={() => setInteractionName({
                    talkRatio: false,
                    longMono: true,
                    longStory: false,
                    interactivity: false,
                    patience: false,
                })}>
                    <div>LONGEST MONOLOGUE</div>
                    <div style={{ fontWeight: '400' }}>1:12min</div>
                </div>
                <div className={interactionname.longStory ? "changei" : "interactionWrapperHeadName"}  onClick={() => setInteractionName({
                    talkRatio: false,
                    longMono: false,
                    longStory: true,
                    interactivity: false,
                    patience: false,
                })}>
                    <div>LONGEST CUSTOMER STORY</div>
                    <div style={{ fontWeight: '400' }}>1:36min</div>
                </div>
                <div className={interactionname.interactivity ? "changei" : "interactionWrapperHeadName"}  onClick={() => setInteractionName({
                    talkRatio: false,
                    longMono: false,
                    longStory: false,
                    interactivity: true,
                    patience: false,
                })}>
                    <div>INTERACTIVITY</div>
                    <div style={{ fontWeight: '400' }}>8:43</div>
                </div>
                <div className={interactionname.patience ? "changei" : "interactionWrapperHeadName"}  onClick={() => setInteractionName({
                    talkRatio: false,
                    longMono: false,
                    longStory: false,
                    interactivity: false,
                    patience: true,
                })}>
                    <div>PATIENCE</div>
                    <div style={{ fontWeight: '400' }}>0.84sec</div>
                </div>
            </div>
            <div className="interactionWrapperData">
                {interactionname.talkRatio &&
                    <div className="interactionWrapperCallDuration">
                        <div className="talkRatioInfo">
                            <div className="talkRatioInfoHead">Talk Ratio</div>
                            <div className="talkRatioInfoSub">Percentages of call in which team member spoke</div>
                        </div>
                        <div className="barGraph">
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '50%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '41%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '36%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '58%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '69%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '82%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '47%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '63%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '70%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '55%' }}></div>
                            </div>
                        </div>
                    </div>
                }
                {interactionname.longMono &&
                    <div className="interactionWrapperCallDuration">
                        <div className="talkRatioInfo">
                            <div className="talkRatioInfoHead">Longest Monologue</div>
                            <div className="talkRatioInfoSub">Percentages of call in which team member spoke</div>
                        </div>
                        <div className="barGraph">
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '50%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '41%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '36%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '58%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '69%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '82%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '47%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '63%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '70%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '55%' }}></div>
                            </div>
                        </div>
                    </div>
                }
                {interactionname.longStory &&
                    <div className="interactionWrapperCallDuration">
                        <div className="talkRatioInfo">
                            <div className="talkRatioInfoHead">Longest Customer Story</div>
                            <div className="talkRatioInfoSub">Percentages of call in which team member spoke</div>
                        </div>
                        <div className="barGraph">
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '50%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '41%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '36%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '58%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '69%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '82%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '47%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '63%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '70%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '55%' }}></div>
                            </div>
                        </div>
                    </div>
                }
                {interactionname.interactivity &&
                    <div className="interactionWrapperCallDuration">
                        <div className="talkRatioInfo">
                            <div className="talkRatioInfoHead">Interactivity</div>
                            <div className="talkRatioInfoSub">Percentages of call in which team member spoke</div>
                        </div>
                        <div className="barGraph">
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '50%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '41%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '36%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '58%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '69%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '82%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '47%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '63%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '70%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '55%' }}></div>
                            </div>
                        </div>
                    </div>
                }
                {interactionname.patience &&
                    <div className="interactionWrapperCallDuration">
                        <div className="talkRatioInfo">
                            <div className="talkRatioInfoHead">Patience</div>
                            <div className="talkRatioInfoSub">Percentages of call in which team member spoke</div>
                        </div>
                        <div className="barGraph">
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '50%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '41%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '36%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '58%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '69%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '82%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '47%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '63%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '70%' }}></div>
                            </div>
                            <div className="graph">
                                <div className="graphName">Name</div>
                                <div className="graphData" style={{ width: '55%' }}></div>
                            </div>
                        </div>
                    </div>
                }
            </div>

        </div >
    )
}

export default Interaction