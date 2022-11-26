import './company.css'
import search from '../../assets/search.png'
import caller from '../../assets/caller.png'
import mail from '../../assets/mail.png'
import calendar from '../../assets/calendar.png'
import preview from '../../assets/preview.png'
import Vector from '../../assets/Vector.png'
import Rectangle from '../../assets/Rectangle.png'
import { useState } from 'react'

export const conversations = [
    {
        id: 1, name: "Michael S.", date: '21 Sept 22', convo: "She said ‘Maybe next quarter’ as soon as we talked about pricing? Did I miss something?", icon: caller, details: [
            { id: 1, name: "Michael S.", convo: "Called the KALDI is releasing some models, called the release some models trained on the English. You can find them on the on their website. Called, they have free train, the model for the English." },
            { id: 2, name: "Raj", convo: "Okay, is it written calories written Python or Java? I think it is. Because written Java." },
            { id: 3, name: "Michael S.", convo: "Cultivating in c++, with interface\n with patch interface but so the training can be done easily using this special scripts, but for the production we can build a person engine with that can work. Using the pointers of gold." },
            { id: 4, name: "Raj", convo: "so, initially how much amount of data will be needed for the training,\n we can start, as you say,\n Okay, Salah. I have no one more question." },
            { id: 5, name: "Michael S.", convo: "Okay, go ahead" },
        ], participants: [
            { id: 1, name: "Michael S.", post: "BDR Manager", company: "Acme Co." },
            { id: 1, name: "Raj", post: "Account Executive", company: "Softbuilt" },
        ]
    },
    {
        id: 2, name: "Michael S.", date: '', convo: "She said ‘Maybe next quarter’ as soon as we talked about pricing? Did I miss something?", icon: mail, details: [
            { id: 1, name: "Michael S.", convo: "Called the KALDI is releasing some models, called the release some models trained on the English. You can find them on the on their website. Called, they have free train, the model for the English." },
            { id: 2, name: "Raj", convo: "Okay, is it written calories written Python or Java? I think it is. Because written Java." },
            { id: 3, name: "Michael S.", convo: "Cultivating in c++, with interface\n with patch interface but so the training can be done easily using this special scripts, but for the production we can build a person engine with that can work. Using the pointers of gold." },
            { id: 4, name: "Raj", convo: "so, initially how much amount of data will be needed for the training,\n we can start, as you say,\n Okay, Salah. I have no one more question." },
            { id: 5, name: "Michael S.", convo: "Okay, go ahead" },
        ], participants: [
            { id: 1, name: "Michael S.", post: "BDR Manager", company: "Acme Co." },
            { id: 1, name: "Raj", post: "Account Executive", company: "Softbuilt" },
        ]
    },
    {
        id: 3, name: "Michael S.", date: '', convo: "She said ‘Maybe next quarter’ as soon as we talked about pricing? Did I miss something?", icon: mail, details: [
            { id: 1, name: "Michael S.", convo: "Called the KALDI is releasing some models, called the release some models trained on the English. You can find them on the on their website. Called, they have free train, the model for the English." },
            { id: 2, name: "Raj", convo: "Okay, is it written calories written Python or Java? I think it is. Because written Java." },
            { id: 3, name: "Michael S.", convo: "Cultivating in c++, with interface\n with patch interface but so the training can be done easily using this special scripts, but for the production we can build a person engine with that can work. Using the pointers of gold." },
            { id: 4, name: "Raj", convo: "so, initially how much amount of data will be needed for the training,\n we can start, as you say,\n Okay, Salah. I have no one more question." },
            { id: 5, name: "Michael S.", convo: "Okay, go ahead" },
        ], participants: [
            { id: 1, name: "Michael S.", post: "BDR Manager", company: "Acme Co." },
            { id: 1, name: "Raj", post: "Account Executive", company: "Softbuilt" },
        ]
    },
    {
        id: 4, name: "Michael S.", date: '', convo: "She said ‘Maybe next quarter’ as soon as we talked about pricing? Did I miss something?", icon: caller, details: [
            { id: 1, name: "Michael S.", convo: "Called the KALDI is releasing some models, called the release some models trained on the English. You can find them on the on their website. Called, they have free train, the model for the English." },
            { id: 2, name: "Raj", convo: "Okay, is it written calories written Python or Java? I think it is. Because written Java." },
            { id: 3, name: "Michael S.", convo: "Cultivating in c++, with interface\n with patch interface but so the training can be done easily using this special scripts, but for the production we can build a person engine with that can work. Using the pointers of gold." },
            { id: 4, name: "Raj", convo: "so, initially how much amount of data will be needed for the training,\n we can start, as you say,\n Okay, Salah. I have no one more question." },
            { id: 5, name: "Michael S.", convo: "Okay, go ahead" },
        ], participants: [
            { id: 1, name: "Michael S.", post: "BDR Manager", company: "Acme Co." },
            { id: 1, name: "Raj", post: "Account Executive", company: "Softbuilt" },
        ]
    },
    {
        id: 5, name: "Michael S.", date: '', convo: "She said ‘Maybe next quarter’ as soon as we talked about pricing? Did I miss something?", icon: mail, details: [
            { id: 1, name: "Michael S.", convo: "Called the KALDI is releasing some models, called the release some models trained on the English. You can find them on the on their website. Called, they have free train, the model for the English." },
            { id: 2, name: "Raj", convo: "Okay, is it written calories written Python or Java? I think it is. Because written Java." },
            { id: 3, name: "Michael S.", convo: "Cultivating in c++, with interface\n with patch interface but so the training can be done easily using this special scripts, but for the production we can build a person engine with that can work. Using the pointers of gold." },
            { id: 4, name: "Raj", convo: "so, initially how much amount of data will be needed for the training,\n we can start, as you say,\n Okay, Salah. I have no one more question." },
            { id: 5, name: "Michael S.", convo: "Okay, go ahead" },
        ], participants: [
            { id: 1, name: "Michael S.", post: "BDR Manager", company: "Acme Co." },
            { id: 1, name: "Raj", post: "Account Executive", company: "Softbuilt" },
        ]
    },
    {
        id: 6, name: "Michael S.", date: '', convo: "She said ‘Maybe next quarter’ as soon as we talked about pricing? Did I miss something?", icon: caller, details: [
            { id: 1, name: "Michael S.", convo: "Called the KALDI is releasing some models, called the release some models trained on the English. You can find them on the on their website. Called, they have free train, the model for the English." },
            { id: 2, name: "Raj", convo: "Okay, is it written calories written Python or Java? I think it is. Because written Java." },
            { id: 3, name: "Michael S.", convo: "Cultivating in c++, with interface\n with patch interface but so the training can be done easily using this special scripts, but for the production we can build a person engine with that can work. Using the pointers of gold." },
            { id: 4, name: "Raj", convo: "so, initially how much amount of data will be needed for the training,\n we can start, as you say,\n Okay, Salah. I have no one more question." },
            { id: 5, name: "Michael S.", convo: "Okay, go ahead" },
        ], participants: [
            { id: 1, name: "Michael S.", post: "BDR Manager", company: "Acme Co." },
            { id: 1, name: "Raj", post: "Account Executive", company: "Softbuilt" },
        ]
    },
]

const Company = () => {

    const [show, setShow] = useState(false)
    const [data, setdata] = useState(null)
    const [ids, setID] = useState(null)

    const handleClick = (id) => {
        setShow(true)
        setID(id)
        const datas = conversations.filter(x => x.id === id)
        console.log(datas)
        setdata(datas)
    }
    return (
        <div className='companyWrapper'>
            <div className="companySideBar">
                <div className="sideBar1">
                    <div className="sideBar1Head">
                        <div style={{ fontFamily: 'Arial', fontSize: '20px', fontWeight: '700' }}>Acme Co.</div>
                    </div>
                    <div className="sideBar1Body">
                        <div style={{ fontFamily: 'Arial', fontSize: '14px', fontWeight: '400' }}>Deal size: $37,500</div>
                        <div style={{ fontFamily: 'Arial', fontSize: '14px', fontWeight: '400' }}>Close Deal: in 1 month</div>
                        <div style={{ fontFamily: 'Arial', fontSize: '14px', fontWeight: '400' }}>Deal Stage: Technical Evalution</div>
                        <div style={{ fontFamily: 'Arial', fontSize: '14px', fontWeight: '400' }}>Deal owner: Alex</div>
                    </div>
                </div>
                <div className="sideBar2">
                    <div className="sideBar2Head">
                        <div className="sideBar2Header">Conversations</div>
                    </div>
                    <div className="sideBar2Body">
                        <div className="sideBarSearch">
                            <input type="text" placeholder='Search for conversations..' />
                            <img src={search} alt="" />
                        </div>
                        {conversations.map((conversation, i) => (
                            <div className="sideBarCard" key={conversation.id} onClick={() => handleClick(conversation.id)} style = {{backgroundColor:conversation.id===ids?'#E5EFFF':''}}>
                                <div className="cardLogo">
                                    <img src={conversation.icon} alt="" />
                                </div>
                                <div className="cardBody">
                                    <div className="cardHeader">
                                        <div className="cardName">{conversation.name}</div>
                                        <div className="cardDate">{conversation.date}</div>
                                    </div>
                                    <div className="cardConvo">{conversation.convo}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="companyRightBar">
                <div className="rightBar1">
                    <div className="timeline">
                        <div className="time1">
                            <div className="lineTime"></div>
                            <div className="month">Sept 22</div>
                        </div>
                        <div className="time1">
                            <div className="lineTime"></div>
                            <div className="month">Oct 22</div>
                        </div>
                        <div className="time1">
                            <div className="lineTime"></div>
                            <div className="month">Nov 22</div>
                        </div>
                    </div>
                    <div className="iconBox">
                        <div className="nextBox">
                            <img src={Rectangle} alt="" />
                            <div className="nextAbsol">
                                <img src={Vector} alt="" />
                            </div>
                        </div>
                        <div className="box1">
                            <img src={caller} alt="" />
                            <img src={mail} alt="" />
                            <img src={mail} alt="" />
                        </div>
                        <div className="box1">
                            <img src={caller} alt="" />
                            <img src={mail} alt="" />
                            <img src={mail} alt="" />
                        </div>
                        <div className="box1">
                            <img src={caller} alt="" />
                            <img src={mail} alt="" />
                            <img src={mail} alt="" />
                        </div>
                        <div className="box1">
                            <img src={caller} alt="" />
                            <img src={mail} alt="" />
                            <img src={mail} alt="" />
                        </div>
                        <div className="box1">
                            <img src={caller} alt="" />
                            <img src={mail} alt="" />
                            <img src={mail} alt="" />
                        </div>
                        <div className="box1">
                            <img src={caller} alt="" />
                            <img src={mail} alt="" />
                            <img src={mail} alt="" />
                        </div>
                        <div className="nextBox" style={{ transform: 'rotate(180deg)' }}>
                            <img src={Rectangle} alt="" />
                            <div className="nextAbsol">
                                <img src={Vector} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={show ? 'rightbar' : 'rightBar2'}>
                    {!show && <>
                        <img src={preview} alt="" />
                        <div>Conversations are shown here</div>
                    </>}
                    {show &&
                        <div className='rightbar__main'>
                            <div className='rightbar__main1'>
                                <div className='rightbar__main11'>
                                    <div>Deal closing meeting</div>
                                    <div style={{borderRight:'2px solid black',borderLeft:'2px solid black',padding:'0px 5px 0px 5px'}}>{data[0].name}</div>
                                    <div>Acme Co.</div>
                                </div>
                                <div className='rightbar__main12'>
                                    <img src={calendar} alt="" />
                                    <div>{data[0].date}</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex',gap:'10px', borderBottom:'1px solid #D1E3FF',paddingBottom:'5px' }}>
                                <div style = {{color:'rgba(0,0,0,0.7'}}>Participants:</div>
                                <div>
                                    {data[0].participants.map((p, i) => (
                                        <div key={i} style={{ color: '#3F51B5', fontWeight: '400', }}>{p.name} ({p.post},{p.company})</div>
                                    ))}
                                </div>
                            </div>
                            {data[0].details.map((d,i)=>(
                                <div style={{paddingBottom:'5px' ,borderBottom: '1px solid #D1E3FF'}}>
                                    <div style={{fontWeight:'400'}}>{d.name}</div>
                                    <div style={{color:'#606060'}}>{d.convo}</div>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Company