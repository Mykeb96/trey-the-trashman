import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage';
import Nav from './components/Nav';
import NavMenu from './components/NavMenu';
import { useState } from 'react'
import TwitterPage from './components/TwitterPage';
import YoutubePage from './components/YoutubePage';
import InstaPage from './components/InstaPage';

function App() {

  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleNav = () => {

    setIsNavOpen(false)

  }

  return (
    <div className="App">

      <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      {isNavOpen ? <NavMenu isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} /> : ''}

      <Router>
        <Routes>

          <Route path='' element={<HomePage />} />

          <Route path='/twitter' element={<TwitterPage />} />
          
          <Route path='/youtube' element={<YoutubePage />} />
          <Route path='/youtube/garden' element={<YoutubePage />} />
          <Route path='/youtube/vods' element={<YoutubePage />} />
          <Route path='/youtube/highlights' element={<YoutubePage />} />

          <Route path='/instagram' element={<InstaPage />} />


        </Routes>
      </Router>

    </div>
  );
}

export default App;
