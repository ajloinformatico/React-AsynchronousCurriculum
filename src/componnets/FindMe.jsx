import React from 'react'

const FindMe = () => {
    return (
        <article id="article">
            <header>
                <h1>Find me</h1>
            </header>
            <section>
                <p>    
                    I'd like to introduce you to something else about myself. 
                    If you are interested in what I do, take a look at the following buttons.
                    Also if you want contact me you can go to <b>contact section</b>
                </p>
                <div className="find-me-flex">
                    <a href="https:/github.com/ajloinformatico" title="Go to my github" alt="go to my github" target="_blank" rel="noreferrer"><i id="icon" className="fab fa-github fa-3x"></i></a>
                    <a href="https://twitter.com/antoniojose_lo9" title="Go to my twitter" alt="go to my twitter" target="_blank" rel="noreferrer"><i id="icon" className="fab fa-twitter fa-3x"></i></a>
                    <a href="https://www.instagram.com/antoniojose_lo98/" title="Go to my instagram" alt="go to my instagram" target="_blank" rel="noreferrer"><i id="icon" className="fab fa-instagram fa-3x"></i></a>
                    <a href="https://www.infolojo.es/" alt="go to my web" title="Go to my website" target="_blank" rel="noreferrer"><i id="icon" className="fab fa-internet-explorer fa-3x"></i></a>
                </div>
            </section>
        </article>
    )
}

export default FindMe
