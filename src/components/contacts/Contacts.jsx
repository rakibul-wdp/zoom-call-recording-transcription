import './contacts.css'
import isaac from '../../assets/Isaac.png'
import { useState } from 'react';
const Contacts = () => {

    const [open, setOpen] = useState(false);
    const [sort, setsort] = useState("Sort By")

    return (
        <div className='contactsContainer'>
            <div className="contactsContainerHeading">
                <p>Contacts</p>
            </div>
            <div className="contactFilters">
                <div className="findContact">
                    <div className="findInput">
                        <input type="text" placeholder='Find contact' />
                    </div>
                    <div className="findIcon">
                        <img src="https://img.icons8.com/ios-filled/16/000000/search--v1.png" alt="" />
                    </div>
                </div>
                <div className="sortby">
                    <div className="sortContact">
                        <div>{sort}</div>
                    </div>
                    {open &&
                        <div className='openSort'>
                            <div className="sorting" onClick={() => { setsort('Name'); setOpen(!open) }} >Name</div>
                            <div className="divi"></div>
                            <div className="sorting" onClick={() => { setsort('Type'); setOpen(!open) }} >Type</div>
                            <div className="divi"></div>
                            <div className="sorting" onClick={() => { setsort('Time'); setOpen(!open) }} >Time</div>
                        </div>
                    }
                    <div className="sortIcon" onClick={() => setOpen(!open)}>
                        <img src="https://img.icons8.com/ios-glyphs/14/000000/sort-down.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="contactWrapper">
                <div className="contactHistory">
                    <div className="contactImage">
                        <img src={isaac} alt="" />
                    </div>
                    <div className="contactDesc">
                        <div className="contactName">ABC</div>
                        <div className="contactTime">a minute ago</div>
                    </div>
                </div>
                <div className="contactHistory">
                    <div className="contactImage">
                        <img src={isaac} alt="" />
                    </div>
                    <div className="contactDesc">
                        <div className="contactName">ABC</div>
                        <div className="contactTime">a minute ago</div>
                    </div>
                </div>
                <div className="contactHistory">
                    <div className="contactImage">
                        <img src={isaac} alt="" />
                    </div>
                    <div className="contactDesc">
                        <div className="contactName">ABC</div>
                        <div className="contactTime">a minute ago</div>
                    </div>
                </div>
                <div className="contactHistory">
                    <div className="contactImage">
                        <img src={isaac} alt="" />
                    </div>
                    <div className="contactDesc">
                        <div className="contactName">ABC</div>
                        <div className="contactTime">a minute ago</div>
                    </div>
                </div>
                <div className="contactHistory">
                    <div className="contactImage">
                        <img src={isaac} alt="" />
                    </div>
                    <div className="contactDesc">
                        <div className="contactName">ABC</div>
                        <div className="contactTime">a minute ago</div>
                    </div>
                </div>
                <div className="contactHistory">
                    <div className="contactImage">
                        <img src={isaac} alt="" />
                    </div>
                    <div className="contactDesc">
                        <div className="contactName">ABC</div>
                        <div className="contactTime">a minute ago</div>
                    </div>
                </div>
                <div className="contactHistory">
                    <div className="contactImage">
                        <img src={isaac} alt="" />
                    </div>
                    <div className="contactDesc">
                        <div className="contactName">ABC</div>
                        <div className="contactTime">a minute ago</div>
                    </div>
                </div>
                <div className="contactHistory">
                    <div className="contactImage">
                        <img src={isaac} alt="" />
                    </div>
                    <div className="contactDesc">
                        <div className="contactName">ABC</div>
                        <div className="contactTime">a minute ago</div>
                    </div>
                </div>
                <div className="contactHistory">
                    <div className="contactImage">
                        <img src={isaac} alt="" />
                    </div>
                    <div className="contactDesc">
                        <div className="contactName">ABC</div>
                        <div className="contactTime">a minute ago</div>
                    </div>
                </div>
                <div className="contactHistory">
                    <div className="contactImage">
                        <img src={isaac} alt="" />
                    </div>
                    <div className="contactDesc">
                        <div className="contactName">ABC</div>
                        <div className="contactTime">a minute ago</div>
                    </div>
                </div>
                <div className="contactHistory">
                    <div className="contactImage">
                        <img src={isaac} alt="" />
                    </div>
                    <div className="contactDesc">
                        <div className="contactName">ABC</div>
                        <div className="contactTime">a minute ago</div>
                    </div>
                </div>
                <div className="contactHistory">
                    <div className="contactImage">
                        <img src={isaac} alt="" />
                    </div>
                    <div className="contactDesc">
                        <div className="contactName">ABC</div>
                        <div className="contactTime">a minute ago</div>
                    </div>
                </div>
                <div className="contactHistory">
                    <div className="contactImage">
                        <img src={isaac} alt="" />
                    </div>
                    <div className="contactDesc">
                        <div className="contactName">ABC</div>
                        <div className="contactTime">a minute ago</div>
                    </div>
                </div>
                <div className="contactHistory">
                    <div className="contactImage">
                        <img src={isaac} alt="" />
                    </div>
                    <div className="contactDesc">
                        <div className="contactName">ABC</div>
                        <div className="contactTime">a minute ago</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts