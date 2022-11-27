import { useState } from 'react'
import './all.css'

const All = () => {

  const [selected, setSelected] = useState({
    date: true,
    duration: false,
  })

  return (
    <div className='allContainer'>
      <div className="allContainerHeading">
        <p>All Calls</p>
      </div>
      <div className="allSortBy">
        <div className="allSortBy1">Sort By</div>
        <div className={selected.date ? "allSort2Selected" : "allSortBy2"} style={{ cursor: 'pointer' }} onClick={() => setSelected({
          date: true,
          duration: false,
        })}>
          <div className="allsortLine"></div>
          <div className="allSortDate" style={{paddingLeft:'20px'}}>Date</div>
        </div>
        <div className={selected.duration ? "allSort3Selected" : "allSortBy3"} style={{ cursor: 'pointer' }} onClick={() => setSelected({
          date: false,
          duration: true,
        })}>
          <div className="allsortLine"></div>
          <div className="allSortDuration" style={{paddingLeft:'15px'}}>Call Duration</div>
        </div>
      </div>
      <div className="allCalls">
        <div className="allCall">
          <div className="allBlank"></div>
          <div className="allInfo">
            <div className="allHeading">Heading</div>
            <div className="allSubInfo">Jul 19 , 2022, Reps name, client's name</div>
          </div>
        </div>
        <div className="allCall">
          <div className="allBlank"></div>
          <div className="allInfo">
            <div className="allHeading">Heading</div>
            <div className="allSubInfo">Jul 19 , 2022, Reps name, client's name</div>
          </div>
        </div>
        <div className="allCall">
          <div className="allBlank"></div>
          <div className="allInfo">
            <div className="allHeading">Heading</div>
            <div className="allSubInfo">Jul 19 , 2022, Reps name, client's name</div>
          </div>
        </div>
        <div className="allCall">
          <div className="allBlank"></div>
          <div className="allInfo">
            <div className="allHeading">Heading</div>
            <div className="allSubInfo">Jul 19 , 2022, Reps name, client's name</div>
          </div>
        </div>
        <div className="allCall">
          <div className="allBlank"></div>
          <div className="allInfo">
            <div className="allHeading">Heading</div>
            <div className="allSubInfo">Jul 19 , 2022, Reps name, client's name</div>
          </div>
        </div>
        <div className="allCall">
          <div className="allBlank"></div>
          <div className="allInfo">
            <div className="allHeading">Heading</div>
            <div className="allSubInfo">Jul 19 , 2022, Reps name, client's name</div>
          </div>
        </div>
        <div className="allCall">
          <div className="allBlank"></div>
          <div className="allInfo">
            <div className="allHeading">Heading</div>
            <div className="allSubInfo">Jul 19 , 2022, Reps name, client's name</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default All