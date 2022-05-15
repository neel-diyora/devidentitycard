import React from "react"
import TwitterIcon from "../images/Twitter Icon.png"
import InstagramIcon from "../images/Instagram Icon.png"
import GitHubIcon from "../images/GitHub Icon.png"
import LinkedinIcon from "../images/Linkedin Icon.png"

export default function Footer () {
    return (
        <div className="footer">
            <a href="https://twitter.com/neel_diyora" target="_blank">
                <img src={TwitterIcon}/>
            </a>
            <a href="https://www.instagram.com/_neel_diyora_/?hl=en" target="_blank">
                <img src={InstagramIcon}/>
            </a>
            <a href="https://github.com/neel-diyora" target="_blank">
                <img src={GitHubIcon}/>
            </a>
            <a href="https://www.linkedin.com/in/neel-diyora/" target="_blank">
                <img src={LinkedinIcon}/>
            </a>
        </div>
    )
}