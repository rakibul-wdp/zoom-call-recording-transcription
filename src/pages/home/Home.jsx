import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './home.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import performer from '../../assets/performer.png'
import call from '../../assets/call.png'
import msg2 from '../../assets/msg2.png'
import phone from '../../assets/phone.png'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend);

export const todayHighlight = [
    { id: 1, heading: 'Heading', date: 'Jul 19, 2022', RepsName: 'Reps Name', companyName: 'ABC Company' },
    { id: 2, heading: 'Heading', date: 'Jul 19, 2022', RepsName: 'Reps Name', companyName: 'ABC Company' },
    { id: 3, heading: 'Heading', date: 'Jul 19, 2022', RepsName: 'Reps Name', companyName: 'ABC Company' },
    { id: 3, heading: 'Heading', date: 'Jul 19, 2022', RepsName: 'Reps Name', companyName: 'ABC Company' },
]

export const myChart = {
    labels: ['Extremely well', 'Somewhat well', 'Not so well'],
    datasets: [{
        label: '%',
        data: [40, 230, 90],
        backgroundColor: ['#888888', '#E5EFFF', '#3F51B5'],
    }]
}

const Home = () => {
    return (
        <>
            <Navbar type='home' />
            <div className='homeWrapper'>
                <div className="homeHeader">
                    <div className="homeHeaderHeading">Dashboard</div>
                </div>
                <div className="homeBody">
                    <div className="homeBody1">
                        <div className="homeBody1Part1">
                            <div className="part1part1">
                                <div className="partHead">Total Deals</div>
                                <div className="partNumber">150</div>
                            </div>
                            <div className="part1part1">
                                <div className="partHead">Closed Deals</div>
                                <div className="partNumber">90</div>
                            </div>
                            <div className="part1part1">
                                <div className="partHead">Active Deals</div>
                                <div className="partNumber">60</div>
                            </div>
                        </div>
                        <div className="homeBody1Part2">
                            <div className="partHead">Today's Highlight</div>
                            {
                                todayHighlight.map((data, i) => (
                                    <div className='highlights'>
                                        <div className="partHead" style={{ color: '#3F51B5' }} >{data.heading}</div>
                                        <div className="partSubHead">{data.date}, {data.RepsName}, {data.companyName}</div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="homeBody1Part3">
                            <div className="partHeader">
                                <div className="partHead">Top Performer</div>
                                <div className="partSubHead">Congratulations!</div>
                            </div>
                            <div className="img">
                                <img src={performer} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="homeBody2">
                        <div className="homeBody2Part1">
                            <div className="partHead">Team Performance</div>
                            <div className="pieChart">
                                <Pie data={myChart} options={{
                                    maintainAspectRatio:false,
                                    plugins: {
                                        legend: {
                                            display: true,
                                            position: "right"
                                        }
                                    }
                                }} width='255px' height='255px' />
                            </div>
                        </div>
                        <div className="homeBody2Part2">
                            <div className="homeBodyPerformanceHeader">
                                <div className="partHead" style={{ fontWeight: '700', fontSize: '16px' }} >Recent Calls</div>
                                <div className="homeBodyHeaderGap"></div>
                                <div className="homeBodyHeader2">
                                    <div className="partHead" style={{ fontWeight: '400' }}>Recordings</div>
                                </div>
                            </div>
                            <div className="highlights" style={{ gap: '15px', paddingLeft: '10px' }} >
                                <div className="partHead" style={{ color: '#3F51B5', fonstSize: '15px' }}>Today</div>
                                <div className="performanceHeadingData">
                                    <div className="recentCallsImg">
                                        <img src={call} alt="" />
                                    </div>
                                    <div className="partHeader">
                                        <div className="partHead">ABC Company</div>
                                        <div className="partSubHead">Date</div>
                                        <div className="partSubHead">Deal closing date</div>
                                    </div>
                                    <div className="headingDataIcons">
                                        <img src={msg2} alt="" />
                                        <div className="ImgNumber">23</div>
                                        <div className="imgDiv"></div>
                                        <img src={[phone]} alt="" />
                                        <div className="ImgNumber">23</div>
                                    </div>
                                </div>
                            </div>
                            <div className="highlights" style={{ gap: '15px', paddingLeft: '10px' }} >
                                <div className="partHead" style={{ color: '#3F51B5', fonstSize: '15px' }}>Yesterday</div>
                                <div className="performanceHeadingData">
                                    <div className="recentCallsImg">
                                        <img src={call} alt="" />
                                    </div>
                                    <div className="partHeader">
                                        <div className="partHead">ABC Company</div>
                                        <div className="partSubHead">Date</div>
                                        <div className="partSubHead">Deal closing date</div>
                                    </div>
                                    <div className="headingDataIcons">
                                        <img src={msg2} alt="" />
                                        <div className="ImgNumber">23</div>
                                        <div className="imgDiv"></div>
                                        <img src={[phone]} alt="" />
                                        <div className="ImgNumber">23</div>
                                    </div>
                                </div>
                            </div>
                            <div className="highlights" style={{ gap: '15px', paddingLeft: '10px' }} >
                                <div className="partHead" style={{ color: '#3F51B5', fonstSize: '15px' }}>Tuesday</div>
                                <div className="performanceHeadingData">
                                    <div className="recentCallsImg">
                                        <img src={call} alt="" />
                                    </div>
                                    <div className="partHeader">
                                        <div className="partHead">ABC Company</div>
                                        <div className="partSubHead">Date</div>
                                        <div className="partSubHead">Deal closing date</div>
                                    </div>
                                    <div className="headingDataIcons">
                                        <img src={msg2} alt="" />
                                        <div className="ImgNumber">23</div>
                                        <div className="imgDiv"></div>
                                        <img src={[phone]} alt="" />
                                        <div className="ImgNumber">23</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="homeBody3">
                        <div className="partHead" style={{ fontSize: '16px', fontWeight: '700' }} >To Do List</div>
                        <div className="homeBody3Part1">
                            <div className="partHead" style={{ fontSize: '15px', fontWeight: '700' }} >Today</div>
                            <div className="HoverWrapper">
                                <div className="homeBody3Part1Part" style={{ borderBottom: '1px solid #E5EFFF' }} >
                                    <div className="rectIcon"></div>
                                    <div className='highlights' style={{ borderBottom: '0px' }} >
                                        <div className="partHead" style={{ color: '#3F51B5', fontSize: '16px', fontWeight: '700' }} >Heading</div>
                                        <div className="partSubHead">July 19, 2022, Reps name, ABC company</div>
                                    </div>
                                </div>
                                <div className="homeBody3Part1Part" style={{ borderBottom: '1px solid #E5EFFF' }} >
                                    <div className="rectIcon"></div>
                                    <div className='highlights' style={{ borderBottom: '0px' }} >
                                        <div className="partHead" style={{ color: '#3F51B5', fontSize: '16px', fontWeight: '700' }} >Heading</div>
                                        <div className="partSubHead">July 19, 2022, Reps name, ABC company</div>
                                    </div>
                                </div>
                                <div className="homeBody3Part1Part" style={{ borderBottom: '1px solid #E5EFFF' }} >
                                    <div className="rectIcon"></div>
                                    <div className='highlights' style={{ borderBottom: '0px' }} >
                                        <div className="partHead" style={{ color: '#3F51B5', fontSize: '16px', fontWeight: '700' }} >Heading</div>
                                        <div className="partSubHead">July 19, 2022, Reps name, ABC company</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="homeBody3Part1">
                            <div className="partHead" style={{ fontSize: '15px', fontWeight: '700' }} >Yesterday</div>
                            <div className="HoverWrapper">
                                <div className="homeBody3Part1Part" style={{ borderBottom: '1px solid #E5EFFF' }} >
                                    <div className="rectIcon"></div>
                                    <div className='highlights' style={{ borderBottom: '0px' }} >
                                        <div className="partHead" style={{ color: '#3F51B5', fontSize: '16px', fontWeight: '700' }} >Heading</div>
                                        <div className="partSubHead">July 19, 2022, Reps name, ABC company</div>
                                    </div>
                                </div>
                                <div className="homeBody3Part1Part" style={{ borderBottom: '1px solid #E5EFFF' }} >
                                    <div className="rectIcon"></div>
                                    <div className='highlights' style={{ borderBottom: '0px' }} >
                                        <div className="partHead" style={{ color: '#3F51B5', fontSize: '16px', fontWeight: '700' }} >Heading</div>
                                        <div className="partSubHead">July 19, 2022, Reps name, ABC company</div>
                                    </div>
                                </div>
                                <div className="homeBody3Part1Part" style={{ borderBottom: '1px solid #E5EFFF' }} >
                                    <div className="rectIcon"></div>
                                    <div className='highlights' style={{ borderBottom: '0px' }} >
                                        <div className="partHead" style={{ color: '#3F51B5', fontSize: '16px', fontWeight: '700' }} >Heading</div>
                                        <div className="partSubHead">July 19, 2022, Reps name, ABC company</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="homeBody3Part1">
                            <div className="partHead" style={{ fontSize: '15px', fontWeight: '700' }} >Tuesday</div>
                            <div className="HoverWrapper">
                                <div className="homeBody3Part1Part" style={{ borderBottom: '1px solid #E5EFFF' }} >
                                    <div className="rectIcon"></div>
                                    <div className='highlights' style={{ borderBottom: '0px' }} >
                                        <div className="partHead" style={{ color: '#3F51B5', fontSize: '16px', fontWeight: '700' }} >Heading</div>
                                        <div className="partSubHead">July 19, 2022, Reps name, ABC company</div>
                                    </div>
                                </div>
                                <div className="homeBody3Part1Part" style={{ borderBottom: '1px solid #E5EFFF' }} >
                                    <div className="rectIcon"></div>
                                    <div className='highlights' style={{ borderBottom: '0px' }} >
                                        <div className="partHead" style={{ color: '#3F51B5', fontSize: '16px', fontWeight: '700' }} >Heading</div>
                                        <div className="partSubHead">July 19, 2022, Reps name, ABC company</div>
                                    </div>
                                </div>
                                <div className="homeBody3Part1Part" style={{ borderBottom: '1px solid #E5EFFF' }} >
                                    <div className="rectIcon"></div>
                                    <div className='highlights' style={{ borderBottom: '0px' }} >
                                        <div className="partHead" style={{ color: '#3F51B5', fontSize: '16px', fontWeight: '700' }} >Heading</div>
                                        <div className="partSubHead">July 19, 2022, Reps name, ABC company</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home