import { useState } from 'react'
import './App.css'
import axios from 'axios';


function App() {
const[da,setdata] = useState({});
const[load,setload] = useState(false)
const[location,setlocation] = useState('');
const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=32ae16e747518d89a0eb4dc8872118fd`;
 
const serachlocation =(e) =>{
if(e.key === 'Enter'){
  setload(true)
  axios.get(url).then((reposive) =>{
    setload(false)
    setdata(reposive.data)
    console.log(reposive.data);
  })

  setlocation('')
}
}
 
  return (
    <>
  <div className="app">
    <div className="serach">
      <input type='text'
      value={location}
      onChange={e=> setlocation(e.target.value)}
      onKeyDown={serachlocation}
      placeholder="enter location" />
    </div>

    <div style={{"textAlign":"center"}}>
     {load && <p>loading....</p>} 
    </div>


    <div className="container">
      <div className="top">
        <div className="location">
          {da.name &&  <p>{da.name}</p>}
          
        </div>


        <div className="tem">
          {da.main && <h1>{da.main.temp.toFixed()}</h1>}
       
        </div>

        <div className="description">
          {da.weather && <p>{da.weather[0].description}</p>}
          
        </div>
      </div>

      <div className="bottom">
      <div className="feels">
        {da.main && <p>{da.main.feels_like.toFixed()}</p>}
          <p>feels like</p>
         </div>


         <div className="humidity">
          {da.main && <p>{da.main.humidity}</p>}
          <p>humidity</p>
         </div>

         <div className="wind">
          {da.wind &&  <p className="bold">{da.wind.speed}KPH</p>}
         
          <p>Wind speed</p>
         </div>
      </div>



    </div>

  </div>
    </>
  )
}

export default App
