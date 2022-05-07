import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage';
import Nav from './components/nav/Nav';
import NavMenu from './components/nav/NavMenu';
import { useState } from 'react'
import TwitterPage from './components/TwitterPage';
import YoutubePage from './components/youtube/YoutubePage';
import InstaPage from './components/instagram/InstaPage';
import DiscordPage from './components/DiscordPage';
import EventsPage from './components/EventsPage';
import StorePage from './components/StorePage';

function App() {


  // Handles navigation triggers
  const [isNavOpen, setIsNavOpen] = useState(true)

  const handleNav = () => {

    setIsNavOpen(false)

  }

  return (

    // General client-side routing for different pages

    <div className="App">

      <Nav onClick={() => window.location='/nav'} isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

      <Router>
        <Routes>

          <Route path='' element={<HomePage />} />

          <Route path='/nav' element={<NavMenu isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />} />

          <Route path='/twitter' element={<TwitterPage />} />
          
          <Route path='/youtube' element={<YoutubePage />} />
          <Route path='/youtube/garden' element={<YoutubePage />} />
          <Route path='/youtube/vods' element={<YoutubePage />} />
          <Route path='/youtube/highlights' element={<YoutubePage />} />

          <Route path='/instagram' element={<InstaPage />} />

          <Route path='/discord' element={<DiscordPage />} />

          <Route path='/events' element={<EventsPage />} />

          <Route path='/store' element={<StorePage />} />


        </Routes>
      </Router>

    </div>
  );
}

export default App;
