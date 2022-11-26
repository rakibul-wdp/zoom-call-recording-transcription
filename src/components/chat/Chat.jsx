import './chat.css'
import Hellen from '../../assets/Hellen.png'
import Hellen2 from '../../assets/hellen2.png'

const Chat = (props) => {

    return (
        <div className='chatContainer'>
            <div className="chatHeading">
                <p>Group Chats</p>
            </div>
            <div className="chatSearch">
                <input type="text" placeholder='Search for meetings.' />
                <img src="https://img.icons8.com/ios-filled/20/ADA8A7/search--v1.png" alt="search" />
            </div>
            <div className="chat">
                <div className="reciever">
                    <img src={Hellen2} alt="" style={{ width: "50px", height: "50px" }} />
                    <div className="recieverText">
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                </div>
                <div className="reciever">
                    <img src={Hellen2} alt="" style={{ width: "50px", height: "50px" }} />
                    <div className="recieverText">
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                </div>
                <div className="sender">
                    <div className="senderText">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <img src={Hellen} alt="" style={{ width: "50px", height: "50px" }} />
                </div>
                <div className="reciever">
                    <img src={Hellen2} alt="" style={{ width: "50px", height: "50px" }} />
                    <div className="recieverText">
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                </div>
                <div className="sender">
                    <div className="senderText">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <img src={Hellen} alt="" style={{ width: "40px", height: "40px" }} />
                </div>
                <div className="reciever">
                    <img src={Hellen2} alt="" style={{ width: "40px", height: "40px" }} />
                    <div className="recieverText">
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                </div>
                <div className="sender">
                    <div className="senderText">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <img src={Hellen} alt="" style={{ width: "50px", height: "50px" }} />
                </div>
                <div className="reciever">
                    <img src={Hellen2} alt="" style={{ width: "50px", height: "50px" }} />
                    <div className="recieverText">
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                </div>
            </div>
            <div className="message">
                <textarea placeholder='Message..' />
                <div className='button1'>
                    <p>Send</p>
                </div>
            </div>
        </div>
    )
}

export default Chat