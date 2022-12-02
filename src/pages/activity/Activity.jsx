import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import moment from 'moment'

import './activity.css'

const Activity = () => {
  const date = moment().format('D MMM, YYYY')
  const month = moment().format('dddd, MMM D, YYYY')

  return (
    <div className='activityApp'>
      <Navbar type='activity' />
      <div className="activityAppWrapper">
        <div className="activityAppWrapperHeader">
          <div className="activityAppWrapperHeading">
            <div>{month}</div>
            <div className='activityDay' style={{ color: '#3F51B5' }}>Today</div>
            <div className='activitySearch'>
              <input type="text" placeholder='Search...' />
              <img src="https://img.icons8.com/ios-glyphs/20/3F51B5/search--v1.png" alt="" />
            </div>
          </div>
          <div className="activityAppWrapperDate">{date}</div>
        </div>
        <div className="activityAppWrapperBody">
          <div className="activityAppWrapperBodyPart">
            <div className="activityAppWrapperBodyPart1">Pam</div>
            <div className="activityAppWrapperBodyPart1">Monica</div>
            <div className="activityAppWrapperBodyPart1">Alex</div>
            <div className="activityAppWrapperBodyPart1">Tara</div>
            <div className="activityAppWrapperBodyPart1">Emily</div>
            <div className="activityAppWrapperBodyPart1">Raj</div>
          </div>
          <div className="activityAppWrapperBodyPart12">
            <div style={{ display: 'flex', justifyContent: 'space-evenly', color: '#3F51B5' }}>
              <div>9 AM</div>
              <div>10 AM</div>
              <div>11 AM</div>
              <div>12 AM</div>
            </div>
            <div className='bodyPart12'>
              <div className="activityAppWrapperBodyPart2">
                <div className='InnerPart'>Acne Co. | $57,806 | Open Renewal | Close Deal: Dec</div>
                <div className='InnerPart'>Internal Call</div>
              </div>
              <div className="activityAppWrapperBodyPart2"></div>
              <div className="activityAppWrapperBodyPart2"></div>
              <div className="activityAppWrapperBodyPart2"></div>
            </div>
            <div className='bodyPart12'>
              <div className="activityAppWrapperBodyPart2"></div>
              <div className="activityAppWrapperBodyPart2"></div>
              <div className="activityAppWrapperBodyPart2">
                <div className='InnerPart'>Internal Call</div>
              </div>
              <div className="activityAppWrapperBodyPart2"></div>
            </div>
            <div className='bodyPart12'>
              <div className="activityAppWrapperBodyPart2"></div>
              <div className="activityAppWrapperBodyPart2">
                <div className='InnerPart'>Internal Call</div>
                <div className='InnerPart'>Internal Call</div>
              </div>
              <div className="activityAppWrapperBodyPart2"></div>
              <div className="activityAppWrapperBodyPart2"></div>
            </div>
            <div className='bodyPart12'>
              <div className="activityAppWrapperBodyPart2"></div>
              <div className="activityAppWrapperBodyPart2">
                <div className='InnerPart'>Acne Co. | $57,806 | Open Renewal | Close Deal: Dec</div>
                <div className='InnerPart'>Internal Call</div>
              </div>
              <div className="activityAppWrapperBodyPart2"></div>
              <div className="activityAppWrapperBodyPart2"></div>
            </div>
            <div className='bodyPart12'>
              <div className="activityAppWrapperBodyPart2"></div>
              <div className="activityAppWrapperBodyPart2"></div>
              <div className="activityAppWrapperBodyPart2"></div>
              <div className="activityAppWrapperBodyPart2"></div>
            </div>
            <div className='bodyPart12'>
              <div className="activityAppWrapperBodyPart2"></div>
              <div className="activityAppWrapperBodyPart2"></div>
              <div className="activityAppWrapperBodyPart2"></div>
              <div className="activityAppWrapperBodyPart2">
                <div className='InnerPart'>Acne Co. | $57,806 | Open Renewal | Close Deal: Dec</div>
                <div className='InnerPart'>Internal Call</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity