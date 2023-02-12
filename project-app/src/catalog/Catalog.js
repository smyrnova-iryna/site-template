import "./catalog.css"

const Catalog = ({data}) => {
    return (
        <div className="Catalog-container">{data.catalog}</div>
    )
}

export default Catalog;