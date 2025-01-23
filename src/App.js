
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin'
import { AppContext } from './ContextApi/AppContext';
import { useState, useEffect } from 'react';
import axios from 'axios' 
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';

function App() {

  const [data, setData] = useState([])


  useEffect(() => {
    const fetchData = async () => {
        try{
          const response = await axios.get("http://localhost:8000/api/contact")
          if(response)
          {
            setData(response.data)
            
          }
        }
        catch(err)
        {
          console.log(err);
          
        }
        
    } 

    fetchData()
  },[])

  const sharedData = {
    data, 
    setData
  }

  return (
    <div className="App">
      <BrowserRouter>
        <AppContext.Provider value={sharedData}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/admin" element= {<Admin />} />
            <Route exact path="/about-us" element={<AboutUs />} />
            <Route exact path="/services" element={<Services/>} />
          </Routes>
        </AppContext.Provider>
      </BrowserRouter>

    </div>
  );
}

export default App;
