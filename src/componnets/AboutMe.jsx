import React from 'react'

const AboutMe = () => {
    return (
    <article id="article">
        <header>
            <h1>About me</h1>
        </header>
        <section>
            <p>My name <b>is Antonio José Lojo Ojeda</b>. I live in Puerto de Santa Maria, Cádiz. 
                I have always loved this world and since I started in computing almost 
                4 years ago. I'm living a dream graduated as <b>Technician in Microcomputer 
                Systems and Networks with awards for the best academic record of my year.</b> 
                recognition of one of the best academic records in the all the province of Cádiz. 
                <b>3 month experience with computer software for the company Bernardino abad</b> as 
                <b>Computer technician</b>. Currently studying <b>CFGS as Web apps Developer</b>
            </p>
            <a alt="go to github" href="https:/www.github.com/ajloinformatico" target="_blank" rel="noreferrer">
                <img className="infolojoHOME" src="./img/me_smaller.jpg" alt="link to my githhub"/>
            </a>
            <br/>
            <i>click me to go to my git</i>
        </section>
    </article>
    )
}
export default AboutMe