import "../services.css"

const FirstService = ({data}) => {
    return (
        <div className="Services-container">{data.firstService}</div>
    )
}

export default FirstService;