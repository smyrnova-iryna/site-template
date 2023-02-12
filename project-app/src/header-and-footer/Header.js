import Nav from '../nav/Nav';
import Callback from './Callback';
import Button from '@mui/material/Button';
import "../../src/app.css";
import dataRu from "../data/dataRu";
import dataEn from "../data/dataEn";


const Header = ({data, changeLanguage}) => {
    const fullPhoneNumber = "tel:" + data.header.phoneNumber;
    const fullEmail = "mailto:" + data.header.email;
    return (
        <header className="App-header">
            <div className="Header-upper-container">
                <div className="Header-logo-container">
                    <p className="Header-logo-text">{data.header.logo}</p>
                </div>
                <div className="Header-contacts-container">
                    <div><p className="Header-contacts"><a className="Header-contacts" href={fullPhoneNumber}>
                        <span className="material-symbols-outlined">call</span>{data.header.phoneNumber}</a></p></div>
                    <div><p className="Header-contacts"><a className="Header-contacts" href={fullEmail}>
                        <span className="material-symbols-outlined">mail</span>{data.header.email}</a></p></div>
                    <div><Callback data={data} /></div>
                </div>
                <div className="Header-language-buttons-container">
                        <Button onClick={() => changeLanguage(dataEn)} className="Header-language-button" variant="outlined" 
                        sx={{ fontFamily: data.MUIFont, border:data.MUIButtonBorder.En, color:"rgb(60, 204, 122)", borderColor:"rgb(60, 204, 122)", 
                        marginRight:"5%", ':hover': {border:data.MUIButtonBorder.En, borderColor:"rgb(60, 204, 122)"}}}>EN</Button>
                        <Button onClick={() => changeLanguage(dataRu)} className="Header-language-button" variant="outlined" 
                        sx={{ fontFamily: data.MUIFont, border:data.MUIButtonBorder.Ru, color:"rgb(60, 204, 122)", borderColor:"rgb(60, 204, 122)", 
                        marginRight:"5%", ':hover': {border:data.MUIButtonBorder.Ru, borderColor:"rgb(60, 204, 122)"}}}>RU</Button>
                        <Button onClick={() => {}} className="Header-language-button" variant="outlined" 
                        sx={{ fontFamily: data.MUIFont, border:data.MUIButtonBorder.Lt, color:"rgb(60, 204, 122)", borderColor:"rgb(60, 204, 122)", 
                        ':hover': {border:data.MUIButtonBorder.Lt, borderColor:"rgb(60, 204, 122)"}}}>LT</Button>
                </div>
            </div>
            <Nav data={data} />
      </header>
    )
}

export default Header

// const Header = () => {
//     const { innerWidth: width, innerHeight: height } = window;
//   return {
//     width,
//     height
//   };
// }

// function useWindowDimensions() {
//   const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

//   useEffect(() => {
//     function handleResize() {
//       setWindowDimensions(getWindowDimensions());
//     }

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);
// }

// export default Header
