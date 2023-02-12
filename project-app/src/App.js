import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import dataEg from './data';
// import dataRu from './data';
import Home from './home/Home';
import About from './about/About';
import Catalog from './catalog/Catalog';
import Services from './services/Services';
import FirstService from './services/firstservice/Firstservice';
import SecondService from './services/secondservice/Secondservice';
import Gallery from './gallery/Gallery';
import Contacts from './contacts/Contacts';
import Error from './error/Error';
import Header from './header-and-footer/Header';
import Footer from './header-and-footer/Footer';
import PrivacyPolicy from './header-and-footer/Privacypolicy';
import Address from './header-and-footer/Address';
import dataEn from "./data/dataEn";

function App() {
  const [data, setData] = useState(dataEn);
  const changeLanguage = (currentData) => {
    setData(currentData);
  }
  return (
    <div className="App">
      <Header changeLanguage={changeLanguage} data={data} />
      <Routes> 
        <Route path={data.menuPaths.home} element={<Home data={data} />} />
        <Route path={data.menuPaths.about} element={<About data={data} />} />
        <Route path={data.menuPaths.catalog} element={<Catalog data={data} />} />
        <Route path={data.menuPaths.services} element={<Services data={data} />} />
        <Route path={data.menuPaths.firstservice} element={<FirstService data={data} />} />
        <Route path={data.menuPaths.secondservice} element={<SecondService data={data} />} />
        <Route path={data.menuPaths.gallery} element={<Gallery data={data} />} />
        <Route path={data.menuPaths.contacts} element={<Contacts data={data} />} />
        <Route path={data.menuPaths.privacypolicy} element={<PrivacyPolicy data={data} />} />
        <Route path={data.menuPaths.address} element={<Address data={data} />} />
        <Route path={data.errorPath} element={<Error data={data} />} />
      </Routes>
      <Footer data={data} /> 
    </div>
  );
}

export default App;