import React from 'react'
import './deals.css'
import Navbar from '../../components/Navbar/Navbar'
import activity from '../../assets/activity.png'
import sample from '../../assets/sample.png'
import { Line } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'
import moment from 'moment/moment'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
  );

const labels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

export const options = {
    maintainAscpectRatio:false,
    hover: {
        mode: 'dataset',
        intersect: false
      },
    scales: {
        y: {
            display:false,
          },
        x: {
            display:false,
        }
      },
    responsive: true,
    plugins: {
        legend: {
            display:false
        },
        title: {
            display: false
        },
    },
};

const data = [
    {
        img: sample, name: 'ABC Company', activity: {
            data: {
                labels,
                datasets: [{
                    fill: true,
                    data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                    backgroundColor: '#E5EFFF',
                    hoverBackgroundColor:'#3F51B5',
                }],
            }
        }, nextCall: 'Today', amount: '$20,000', status: 'Validation', closeDate: 'Aug 25, 2022', owner: 'Alex'
    },
    {
        img: sample, name: 'ABC Company', activity: {
            data: {
                labels,
                datasets: [{
                    fill: true,
                    data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                    backgroundColor: '#E5EFFF',
                    hoverBackgroundColor:'#3F51B5',
                }],
            }
        }, nextCall: 'Today', amount: '$20,000', status: 'Validation', closeDate: 'Aug 25, 2022', owner: 'Alex'
    },
    {
        img: sample, name: 'ABC Company', activity: {
            data: {
                labels,
                datasets: [{
                    fill: true,
                    data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                    backgroundColor: '#E5EFFF',
                    hoverBackgroundColor:'#3F51B5',
                }],
            }
        }, nextCall: 'Today', amount: '$20,000', status: 'Validation', closeDate: 'Aug 25, 2022', owner: 'Alex'
    },
    {
        img: sample, name: 'ABC Company', activity: {
            data: {
                labels,
                datasets: [{
                    fill: true,
                    data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                    backgroundColor: '#E5EFFF',
                    hoverBackgroundColor:'#3F51B5',
                }],
            }
        }, nextCall: 'Today', amount: '$20,000', status: 'Validation', closeDate: 'Aug 25, 2022', owner: 'Alex'
    },
    {
        img: sample, name: 'ABC Company', activity: {
            data: {
                labels,
                datasets: [{
                    fill: true,
                    data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                    backgroundColor: '#E5EFFF',
                    hoverBackgroundColor:'#3F51B5',
                }],
            }
        }, nextCall: 'Today', amount: '$20,000', status: 'Validation', closeDate: 'Aug 25, 2022', owner: 'Alex'
    },
    {
        img: sample, name: 'ABC Company', activity: {
            data: {
                labels,
                datasets: [{
                    fill: true,
                    data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                    backgroundColor: '#E5EFFF',
                    hoverBackgroundColor:'#3F51B5',
                }],
            }
        }, nextCall: 'Today', amount: '$20,000', status: 'Validation', closeDate: 'Aug 25, 2022', owner: 'Alex'
    },
    {
        img: sample, name: 'ABC Company', activity: {
            data: {
                labels,
                datasets: [{
                    fill: true,
                    data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                    backgroundColor: '#E5EFFF',
                    hoverBackgroundColor:'#3F51B5',
                }],
            }
        }, nextCall: 'Today', amount: '$20,000', status: 'Validation', closeDate: 'Aug 25, 2022', owner: 'Alex'
    },
    {
        img: sample, name: 'ABC Company', activity: {
            data: {
                labels,
                datasets: [{
                    fill: true,
                    data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                    backgroundColor: '#E5EFFF',
                    hoverBackgroundColor:'#3F51B5',
                }],
            }
        }, nextCall: 'Today', amount: '$20,000', status: 'Validation', closeDate: 'Aug 25, 2022', owner: 'Alex'
    },
]

const Deals = () => {
    const formatDate = moment().format('LL')
    return (
        <div className='dealsApp'>
            <Navbar type='deals' />
            <div className="dealsWrapper">
                <div className="dealsWrapperComponent1">
                    <div className="dealsWrapperComponent1stats">
                        <div className="statsName">Total Deals</div>
                        <div className="statsCount">75</div>
                    </div>
                    <div className="dealsWrapperComponent1stats">
                        <div className="statsName">Closed Deals</div>
                        <div className="statsCount">50</div>
                    </div>
                    <div className="dealsWrapperComponent1stats">
                        <div className="statsName">Active Deals</div>
                        <div className="statsCount">25</div>
                    </div>
                </div>
                <div className="dealsWrapperComponent2">
                    <div className="dealsWrapperComonent2Filter">
                        <div className="dealsWrapperComonent2Filter1">
                            <div className="filter1name">
                                Points of Interest
                            </div>
                            {/* <img src="https://img.icons8.com/material-sharp/14/000000/sort-down.png" alt="" /> */}
                        </div>
                        <div className="dealsWrapperComonent2Filter1">
                            <div className="filter1name">
                                Interaction Stats
                            </div>
                            {/* <img src="https://img.icons8.com/material-sharp/14/000000/sort-down.png" alt="" /> */}
                        </div>
                        <div className="dealsWrapperComonent2Filter1">
                            <div className="filter1name">
                             Company
                            </div>
                            {/* <img src="https://img.icons8.com/material-sharp/14/000000/sort-down.png" alt="" /> */}
                        </div>
                        {/* <img src="https://img.icons8.com/ios-filled/30/3F51B5/appointment-reminders--v1.png" alt='' style={{ cursor: 'pointer' }} /> */}
                        <div className="date">{formatDate}</div>
                    </div>
                    <div className="dealsWrapperComonent2Parameter">
                        <div className="parameter" style={{ flex: 2 }}>
                            <div className="parameterName">Name(Client)</div>
                        </div>
                        <div className="parameter" style={{ flex: 4 }} >
                            <img src={activity} alt="" />
                            <div className="parameterName">Activity</div>
                        </div>
                        <div className="parameter" style={{ flex: 1 }} >
                            <div className="parameterName">Next Call</div>
                        </div>
                        <div className="parameter" style={{ flex: 1 }} >
                            <div className="parameterName">Amount</div>
                        </div>
                        <div className="parameter" style={{ flex: 1 }} >
                            <div className="parameterName">Status</div>
                        </div>
                        <div className="parameter" style={{ flex: 1 }} >
                            <div className="parameterName">Close Date</div>
                        </div>
                        <div className="parameter" style={{ flex: 1 }} >
                            <div className="parameterName">Owner</div>
                        </div>
                        <div className="parameter" style={{ flex: 2 }} >
                            <div className="parameterName">Send to Team</div>
                        </div>
                    </div>
                    <div className="dealsWrapperComonent2Details">
                        {data.map((val) => (
                            <div className='dataWrapper'>
                                <div className="nameData" style={{ flex: 2, justifyContent: 'space-evenly' }}>
                                    <img src={val.img} alt="" />
                                    <div className="Dataname">{val.name}</div>
                                </div>
                                <div className="nameData" style={{ flex: 4 }}>
                                    <div className="areaChart">
                                        <Line data={val.activity.data} options={options} height='40px' />
                                    </div>
                                </div>
                                <div className="nameData" style={{ flex: 1 }}>
                                    <div className="Dataname">{val.nextCall}</div>
                                </div>
                                <div className="nameData" style={{ flex: 1 }}>
                                    <div className="Dataname">{val.amount}</div>
                                </div>
                                <div className="nameData" style={{ flex: 1 }}>
                                    <div className="Dataname">{val.status}</div>
                                </div>
                                <div className="nameData" style={{ flex: 1 }}>
                                    <div className="Dataname">{val.closeDate}</div>
                                </div>
                                <div className="nameData" style={{ flex: 1 }}>
                                    <div className="Dataname">{val.owner}</div>
                                </div>
                                <div className="nameData" style={{ flex: 2 }}>
                                    <div className="buttonWrapper">
                                        <div className="sendButton">
                                            <div className="sendButtonName">Send to</div>
                                            <img src="https://img.icons8.com/material-sharp/14/000000/sort-down.png" alt="" style={{ cursor: 'pointer' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Deals