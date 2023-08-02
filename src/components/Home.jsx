import React ,{useRef}from 'react'
import {animate,motion} from "framer-motion" 
import Typewriter from "typewriter-effect"
import {BsArrowUpRight, BsChevronDown} from "react-icons/bs"
import me from "../assets/logo.jpeg"
const Home = ({ratio}) => {

    const projectCount = useRef(null)

    const animationProjectsCount = ()=>{
        animate(0,10,{
            duration: 1,
            onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
        })
    }

    const animations = {
        h1:{
            initial :{
                x:"-100%",
                opacity:0,
            },
            whileInView :{
                x:0,
                opacity:1,
            },
        },
        button:{
            inital:{
                y: "-100%",
                opacity: 0,
            },
            whileInView:{
                y:0,
                opacity:1,
            },
        },
    }
    return (
        <div id="home">
            <section>
                <div>
                    <motion.h1 {...animations.h1}>
                        Hi, I Am <br/> Shubham Pathak
                    </motion.h1>
                    
                    <Typewriter 
                        options={{
                            strings:["A Developer","A Designer","A Creator"],
                            autoStart: true,
                            loop: true,
                            cursor:"",
                            wrapperClassName:"typewriterpara",
                        }}
                    />

                    <div>
                        <a href="mailto:shubham70254@gmail.com">
                            Hire Me
                        </a>
                        <a href="#work">
                            Projects<BsArrowUpRight/>
                        </a>
                    </div>
                    
                    <aside>
                        <article>
                            <p>
                                +
                                {ratio < 2 && (
                                    <motion.span 
                                        ref={projectCount} 
                                        whileInView={animationProjectsCount}
                                        
                                    >
                                    </motion.span>
                                )} 
                            </p>
                            <span>Designed Projects</span>
                        </article>

                        <article data-special>
                            <p>Contact</p>
                            <span>shubham70254@gmail.com</span>
                        </article>
                    </aside>
                </div>
            </section>
            <section>
                <img src={me} alt="Shubham" />
            </section>
            <BsChevronDown/>
        </div>
  )
}

export default Home