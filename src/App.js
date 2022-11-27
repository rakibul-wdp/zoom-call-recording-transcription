import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Calls from './pages/calls/Calls'
import Deals from './pages/deals/Deals';
import Team from './pages/team/Team';
import Activity from './pages/activity/Activity';
import Recording from './pages/recording/Recording';
import Home from './pages/home/Home';
import Library from './pages/library/Library';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recording' element={<Recording />} />
        <Route path='/calls' element={<Calls />} />
        <Route path='/deals' element={<Deals />} />
        <Route path='/team' element={<Team />} />
        <Route path='/activity' element={<Activity />} />
        <Route path='/library' element={<Library />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
