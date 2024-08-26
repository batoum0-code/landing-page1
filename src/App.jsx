  // use a css global style file 
import './App.css';

  // import components and pages to app component
import MainPage from './pages/MainPage';
import ContactUs from './components/ContactUs';

  //import react router stufs  
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  


  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
      </Routes>
    </Router>
  )
}

export default App
