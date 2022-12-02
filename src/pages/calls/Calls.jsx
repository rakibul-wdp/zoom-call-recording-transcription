import './calls.css'
import All from '../../components/all/All'
import Calling from '../../components/calling/Calling'
import Navbar from '../../components/Navbar/Navbar'
import Contacts from '../../components/contacts/Contacts'

const Calls = () => {
  return (
    <>
      <Navbar type = 'calls' />
      <div className="comp">
          <Contacts />
          <All />
          <Calling />
      </div>
    </>
  )
}

export default Calls