import "./gallery.css"
  
const Gallery = ({data}) => {
    return (
        <div className="Gallery-container">{data.gallery}</div>
    )    
}

export default Gallery;