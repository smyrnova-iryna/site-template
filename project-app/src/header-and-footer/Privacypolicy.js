import "../../src/app.css"

const PrivacyPolicy = ({data}) => {
    return (
        <div className="Privacy-policy-container">{data.privacyPolicy}</div>
    )
}

export default PrivacyPolicy;