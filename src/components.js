import mailicon from './mail.svg'
import linkedin from './linkedin.svg'
import profilephoto from './profile-photo.png'

import twitter from './Twitter-Icon.svg'
import facebook from './Facebook-Icon.svg'
import instagram from './Instagram-Icon.svg'
import github from './GitHub-Icon.svg'

function Profile(){
    return(
        <header className="profile">
            <img src={profilephoto} alt=""/>
            <div>
                <h1>Laura Smith</h1>
                <h4>Frontend Developer</h4>
                <h5>laurasmith.website</h5>
            </div>
            <div className="profile-title">
                <button
                className="button-mail">
                    <img src={mailicon} alt=""/>
                    Email
                </button>
                <button
                className="button-linkedin">
                    <img src={linkedin} alt="" />
                    LinkedIn
                </button>
            </div>
        </header>
    )
}

function UserInfo(){
    return(
        <main>
            <article>
                <h3>About</h3>
                <p>
                    I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                </p>
            </article>
            <article>
                <h3>Interests</h3>
                <p>
                Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                </p>
            </article>
        </main>
    )
}

function Footer(){
    return(
        <footer>
            <img src={twitter} alt=""/>
            <img src={facebook} alt=""/>
            <img src={instagram} alt=""/>
            <img src={github} alt=""/>
        </footer>
    )
}

export {Profile, UserInfo, Footer}