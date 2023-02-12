import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import "../../src/app.css"

const Footer = ({data}) => {
    return (
        <footer className="App-footer">
            <p className = "Footer-text Copyright-text">{data.footer.copyright}</p>
            <Link className='Footer-text Address-text' to={data.menuPaths.contacts}>{data.footer.address}</Link>
            <Link className = "Footer-text" to={data.menuPaths.privacypolicy}>{data.footer.privacyPolicy}</Link>
            <Button variant="text" sx={{ fontFamily: data.MUIFont, color:"rgb(60, 204, 122)", borderColor:"rgb(60, 204, 122)", marginRight:"3%", 
            ':hover': {borderColor:"rgb(60, 204, 122)"}}}>{data.footer.siteDeveloper}</Button>
      </footer>
    )
}

export default Footer