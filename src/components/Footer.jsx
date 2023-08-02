import React from "react";
import {
    AiFillGithub,
    AiFillInstagram,
    AiOutlineArrowUp,
} from "react-icons/ai"
import ce from "../assets/footerimg.jpeg"

const Footer = () => {
    return (
        <footer>
            <div>
                <img src={ce}
                    alt="Founder" 
                />

                <h2>Shubham Pathak</h2>
                <p>Be Yourself</p>
            </div>
                <aside>
                    <h2>Social Media</h2>

                    <article>
                        <a href="https://www.instagram.com/" target={"blank"}>
                            <AiFillInstagram />
                        </a>
                        <a href="https://github.com/Pinche14" target={"blank"}>
                            <AiFillGithub />
                        </a>
                    </article>
                </aside>
                <a href="#home">
                    <AiOutlineArrowUp/>
                </a>
        </footer>
    )
}

export default Footer