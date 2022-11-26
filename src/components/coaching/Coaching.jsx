import React from 'react'
import msg from '../../assets/msg.png'
import './coaching.css'
export const feedback = [
    { starting: 'July', ending: 'August', num: 2 },
    { starting: 'July', ending: 'August', num: 1 },
    { starting: 'July', ending: 'August', num: 1 },
    { starting: 'July', ending: 'August', num: 1 },
    { starting: 'July', ending: 'August', num: 0 },
    { starting: 'July', ending: 'August', num: 3 },
]
const Coaching = () => {
    return (
        <div className='coachingWrapper'>
            <div className="coachingWrapperHeader">Team Members</div>
            <div className="coachingWrapperBody">
                {feedback.map((feed, i) => (
                    <div className="coachingWrapperDiv">
                        <div className="DivTitle">ABC</div>
                        <div className="DivLine"></div>
                        <div className="DivFeedback">
                            <div className="DivFeedbackHead">
                                <div className="DivFeedbackHeadName">Feedback on calls (Past month)</div>
                                <div className="DivFeedbackHeadNum" key={i}>{feed.num}</div>
                            </div>
                            <div className="DivFeedbackInfo">
                                <div className="DivFeedbackInfoStarting" key={i}>{feed.starting}</div>
                                <div className="DivFeedbackInfoLines">
                                    <div className="msgimg">
                                        {[...Array(feed.num)].map((n, index) => (
                                            <img src={msg} key={index} alt="" />
                                        ))}
                                    </div>
                                    <div className="DivLine"></div>
                                </div>
                                <div className="DivFeedbackInfoEnding" key={i}>{feed.ending}</div>
                            </div>
                        </div>
                        <div className="DivLine"></div>
                        <div className="DivFooter">
                            <div className="coachingFooter">Open Quest</div>
                            <div className="coachingLine"></div>
                            <div className="coachingFooter">View Calls</div>
                            <div className="coachingLine"></div>
                            <div className="coachingFooter">Last Feedback</div>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Coaching