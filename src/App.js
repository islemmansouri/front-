import React, { useEffect, useState } from "react";
import Profil from "./pages/Profil";
import Trending from "./pages/Trending";
import Home from "./pages/Home" ;
import {BrowserRouter as Router ,Route ,Routes} from 'react-router-dom';
import { UidContext } from "./appContext";
import axios from "axios";





function  App  () {
  const [uid,setUid]= useState (null);
useEffect (()=> {
  const fetchToken = async () => {
  await axios ({
    method:"get",
    url:`${process.env.REACT_APP_API_URL}jwtid`,
    withCredentials: true
  })
  .then((res)=>{
    console.log(res);
  setUid(res.data);
  })
  .catch ((err)=> console.log("No token"))
};
fetchToken();
},[uid]); 




return (
  <UidContext.Provider.value={uid}>

<Router>
  <Routes>
  <Route  path="/" element={<Home/>}/>
  <Route  path="/Trending" element={<Trending/>}/>
  <Route  path="/Profil" element={<Profil/>}/>
  </Routes>

</Router>
  </UidContext.Provider.value>



);
};
export default App ;