import "../../src/app.css"

const Contacts = ({data}) => {
    return (
        <div className="Contacts-container">
            <div className="Contacts-adress-container">
                <h4 className="Contacts-container-heading">{data.contacts.address.heading}</h4>
                <p>{data.contacts.address.text}</p>
            </div>
            <div className="Contacts-feedback-form-container">
                <h4 className="Contacts-container-heading">{data.contacts.feedback.heading}</h4>
                <p>{data.contacts.feedback.description}</p>
                <div className="Contacts-feedback-form-input-container">
                    <div className="Contacts-feedback-form-input-container-without-text-form-input">
                        <input className="Contacts-feedback-form-input" placeholder={data.contacts.feedback.nameInputText}></input>
                        <input className="Contacts-feedback-form-input" placeholder={data.contacts.feedback.phoneInputText}></input>
                    </div>
                    <div className="Contacts-feedback-form-input-container-without-text-form-input">
                        <input className="Contacts-feedback-form-input" placeholder={data.contacts.feedback.emailInputText}></input>
                        <input className="Contacts-feedback-form-input" placeholder={data.contacts.feedback.subjectInputText}></input>
                    </div>
                    <textarea className="Contacts-feedback-form-text-input" placeholder={data.contacts.feedback.messageInputText}></textarea>
                </div>
                <p>{data.contacts.feedback.bottomText}</p>
                <button className="Contacts-feedback-form-button">{data.contacts.feedback.buttonText}</button>
            </div>
        </div>
    )
}

export default Contacts;