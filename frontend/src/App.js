//import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Variable global
//import { URL } from './constants/global';

//Components
import NavBar from "./components/NavBar";
//import NavBarLanding from "./components/NavBarLanding";

//Import screens
import Home from "./screens/Home";
import Landing from "./screens/Landing";
import NotFound from "./screens/NotFound";
import Administrators from "./screens/Administrators";
import Customers from "./screens/Customers";
import Products from "./screens/Products";
import Categories from "./screens/Categories";
import Stores from "./screens/Stores";
import Sales from "./screens/Sales";
import SearchResults from "./screens/SearchResults";
import History from "./screens/History";
import Mission from "./screens/Mission";
import Vision from "./screens/Vision";
import SendMessage from "./screens/SendMessage";
import ReplyMessage from "./screens/ReplyMessage";
import DeveloperInformation from "./screens/DeveloperInformation";
import SiteMap from "./screens/SiteMap";
import Register from "./screens/Register";

import Prueba from "./screens/Prueba";




function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/administrators" element={<Administrators />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/searchresults" element={<SearchResults />} />
          <Route path="/history" element={<History />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/sendmessage" element={<SendMessage />} />
          <Route path="/replymessage" element={<ReplyMessage />} />
          <Route path="/developerinformation" element={<DeveloperInformation />} />
          <Route path="/sitemap" element={<SiteMap />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<NotFound />} />

          <Route path="/prueba" element={<Prueba />} />
                    
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
