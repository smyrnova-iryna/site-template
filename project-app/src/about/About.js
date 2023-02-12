import "./about.css"

const About = ({data}) => {
    return (
        <div className="About-container">{data.about}</div>
    )
}

export default About;