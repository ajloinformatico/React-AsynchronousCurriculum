import React, {useState} from 'react'

const Contact = () => {

    
    //Almacena posibles errores 
    const [errorName, setErrorName] = useState(null);
    const [errorSubject, setErrorSubject] = useState(null);
    const [errorMail, setErrorMail] = useState(null);
    const [errorTextArea, setTextArea] = useState(null);
    const [errorSubmit, setErrorSubmit] = useState(null);
 
    /**
     * Check useStates to send or not email
     */
    const valida = (e) => {
        //e.preventDefault();I want send it
        if(errorName || errorSubject || errorMail || errorTextArea){
            setErrorSubmit("Pleas check fields")
            return
        }
        setErrorSubmit(null);
        alert("The email has been sent successfully");
    }


    /**
     * Check name and surname
     * @param {target} e : name input target
     * @param {setState} setAnError : I pass the setter directly to it and reuse code like this
     */
    const checkName = (e, setAnError) => {
        let error = "";
        !e.value.trim()?error = `${e.id} is required `:error = "";
        const pattern = new RegExp('^[A-ZÁÉÍÓÚÑ ]+$', 'i');
        !pattern.test(e.value)?error += `${e.id} cannot contain numbers `:error += "";
        e.value.length < 2 || e.value.length > 60?error += `${e.id} must be between 3 and 60 characters `:error+="";
        if(error !== ""){
            setAnError(error) 
            e.value = "";
            return
        }
        setAnError(null);
    }

    /**
     * Chacke mail input
     * @param {target} e: mail input 
     */
    const checkMail = e =>{
        let error = "";
        !e.value.trim()?error = `${e.id} is required `:error = "";
        const pattern = new RegExp(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i);
        (e.value.length < 2 || e.value.length > 60 || (!pattern.test(e.value)))
            ?error += `${e.id} must be a real mail with maximum length of 60`
            :error +="";
        if(error !== ""){
            setErrorMail(error);
            e.value = "";
            return
        }
        setErrorMail(null);
    }

    /**
     * check textArea
     * @param {target} e: text-area field 
     */
    const checkTextArea = e => {
        !e.value.trim()?setTextArea(`${e.id} is required `):setTextArea(null);
    }

    




    return (
        <article id="article">
            <header>
                <h1>Contact Form</h1>
            </header>
            <section className="section-form">
                {/**TODO: REFACTORIZAR */}
                <form id="contactForm" onSubmit={e => valida(e)} >
                    <label htmlFor="name">Enter your name:<span title="required field"> * </span></label>
                    <input onBlur={e => checkName(e.target, setErrorName)} type="text" size="30" name="name" id="name" placeholder="your name" required/>
                    {
                       errorName?<i className='error'>{errorName}</i>:<i></i> 
                    }
                    <label htmlFor="subject">Subject:<span title="required field"> * </span></label>
                    <input onBlur={e => checkName(e.target, setErrorSubject)} type="text" size="30" name="subject" id="subject" placeholder="mail subject" required/>
                    {
                        errorSubject?<i className='error'>{errorSubject}</i>:<i></i>
                    }
                    <label htmlFor="mail">Enter your email:<span title="required field"> * </span></label>
                    <input onBlur={e => checkMail(e.target)} type="email" name="mail" id="mail" placeholder="your mail" requried/>
                    {
                        errorMail?<i className='error'>{errorMail}</i>:<i></i>
                    }
                    <label htmlFor="mail-content">Enter mail content<span title="this field is required"> * </span></label>
                    <textarea onBlur={e => checkTextArea(e.target)} id="mail-content" size=""name="mail-content" required></textarea>
                    {
                        errorTextArea?<i className='error'>{errorTextArea}</i>:<i></i>
                    }
                    <label htmlFor="informado">Are you shure you want send mail <span title="this field is required"> * </span></label>
                    <input type="checkbox" name="informado" id="informado" title="informame" required/>
                    <input type="submit" value="submit" id="submit" name="submit"/>            
                    {
                        errorSubmit?<p className='error'>{errorSubmit}</p>:<p></p>
                    }
                </form>
            </section>
        </article>
    )
}

export default Contact
