import React from 'react'
import './trackers.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ellipse from '../../assets/Ellipse.png'


export const data = {
  labels: ['One', 'rest'],
  borderWidth: 1,
  datasets: [
    {
      label: '# %',
      data: [12.5, 87.5],
      backgroundColor: [
        '#3F51B5',
        '#C4C4C4'
      ],
      borderWidth: 1,
    },
  ],
};

ChartJS.register(ArcElement, Tooltip, Legend);

const Trackers = () => {

  return (
    <div className='trackersWrapper'>
      <div className="trackersWrapperPart1">
        <div className="trackers1Header">
          <div className="trackers1HeaderHeading">Trackers</div>
          <div className="trackers1HeaderSub">Percentage of calls where each tracker was detected(based on 17 calls)</div>
        </div>
        <div className="trackers1Body">
          <div className="trackers1BodyPart">
            <div className="bodyPartName">Objections- Demo</div>
            <div className="bodyPartPie">
              <Doughnut data={data} options={{
                maintainAspectRatio: false,
                cutout: '75%',
                plugins: {
                  legend: {
                    display: true,
                    position: 'center'
                  }
                }
              }} width='120px' height='120px' />
            </div>
            <div className="percent">12.5%</div>
          </div>
          <div className="trackers1BodyPart">
            <div className="bodyPartName">Economic Buyer- Demo</div>
            <div className="bodyPartPie">
              <Doughnut data={data} options={{
                maintainAspectRatio: false,
                cutout: '75%',
                plugins: {
                  legend: {
                    display: false,
                  }
                }
              }} width='120px' height='120px' />
            </div>
            <div className="percent">12.5%</div>
          </div>
          <div className="trackers1BodyPart">
            <div className="bodyPartName">Decision Criteria- Demo</div>
            <div className="bodyPartPie">
              <Doughnut data={data} options={{
                maintainAspectRatio: false,
                cutout: '75%',
                plugins: {
                  legend: {
                    display: false,
                  }
                }
              }} width='120px' height='120px' />
            </div>
            <div className="percent">12.5%</div>
          </div>
          <div className="trackers1BodyPart">
            <div className="bodyPartName">Competitors- Demo</div>
            <div className="bodyPartPie">
              <Doughnut data={data} options={{
                maintainAspectRatio: false,
                cutout: '75%',
                plugins: {
                  legend: {
                    display: false,
                  }
                }
              }} width='120px' height='120px' />
            </div>
            <div className="percent">12.5%</div>
          </div>
          <div className="trackers1BodyPart">
            <div className="bodyPartName">Microeconomic Risk</div>
            <div className="bodyPartPie">
              <Doughnut data={data} options={{
                maintainAspectRatio: false,
                cutout: '75%',
                plugins: {
                  legend: {
                    display: false,
                  }
                }
              }} width='120px' height='120px' />
            </div>
            <div className="percent">12.5%</div>
          </div>
          <div className="trackers1BodyPart">
            <div className="bodyPartName">Sales Methodology</div>
            <div className="bodyPartPie">
              <Doughnut data={data} options={{
                maintainAspectRatio: false,
                cutout: '75%',
                plugins: {
                  legend: {
                    display: false,
                  }
                }
              }} width='120px' height='120px' />
            </div>
            <div className="percent">12.5%</div>
          </div>
          <div className="trackers1BodyPart">
            <div className="bodyPartName">Discount- Demo</div>
            <div className="bodyPartPie">
              <Doughnut data={data} options={{
                maintainAspectRatio: false,
                cutout: '75%',
                plugins: {
                  legend: {
                    display: false,
                  }
                }
              }} width='120px' height='120px' />
            </div>
            <div className="percent">12.5%</div>
          </div>
          <div className="trackers1BodyPart">
            <div className="bodyPartName">Pitch Script</div>
            <div className="bodyPartPie">
              <Doughnut data={data} options={{
                maintainAspectRatio: false,
                cutout: '75%',
                plugins: {
                  legend: {
                    display: false,
                  }
                }
              }} width='120px' height='120px' />
            </div>
            <div className="percent">12.5%</div>
          </div>
          <div className="trackers1BodyPart">
            <div className="bodyPartName">Impact Questions</div>
            <div className="bodyPartPie">
              <Doughnut data={data} options={{
                maintainAspectRatio: false,
                cutout: '75%',
                plugins: {
                  legend: {
                    display: false,
                  }
                }
              }} width='120px' height='120px' />
            </div>
            <div className="percent">12.5%</div>
          </div>
        </div>
      </div>
      <div className="trackersWrapperPart2">
        <div className="trackers2Header">
          <div className="trackers2HeaderHeading">Details</div>
        </div>
        <div className="trackers2Body">
          <div className="trackers2BodyImg">
            <img src={ellipse} alt="" />
          </div>
          <div className="trackers2BodyDetails">
            <div className="trackers2BodyDetail">Name :</div>
            <div className="trackers2BodyDetail">Mobile :</div>
            <div className="trackers2BodyDetail">Email :</div>
            <div className="trackers2BodyDetail">Work :</div>
            <div className="trackers2BodyDetail">Status :</div>
          </div>
          <div className="trackers2BodyLine"></div>
          <div className="trackers2BodyCalls">
            <div className="trackers2BodyCallsHead">
              <div className="trackers2BodyCallsHeader" style={{color:'#3F51B5'}}>Last 10 calls</div>
            </div>
            <div className="trackers2BodyCallsHead">
              <div className="trackers2BodyCallsHeader">ABC Company</div>
              <div className="trackers2BodyCallsSub">July 18, 2022</div>
            </div>
            <div className="trackers2BodyCallsHead">
              <div className="trackers2BodyCallsHeader">Conversation</div>
              <div className="trackers2BodyCallsSub">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil sed eum ipsa similique ducimus voluptas labore odit, voluptatum architecto quam vel asperiores ipsum, et voluptatem quidem porro saepe odio. Voluptates.</div>
            </div>
            <div className="trackers2BodyMore" style={{color: 'rgba(63, 81, 181, 0.72)'}}>View 2 more ..</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trackers