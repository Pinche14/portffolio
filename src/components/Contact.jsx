import React, { useState } from 'react'
import vg from '../assets/vg.png'
import {motion} from "framer-motion"
import {addDoc, collection} from 'firebase/firestore'
import {db} from "../firebase"
import toast from "react-hot-toast"

const Contact = () => {
  const [name,setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [disableBtn,setDisableBtn] = useState(false)
  
  const submitHandler = async(e) => {
    e.preventDefault()
    try{
      await addDoc(collection(db,'contacts'),{
        name,
        email,
        message
      })
      setName("")
      setEmail("")
      setMessage("")
      toast.success("Message Sent")
      setDisableBtn(false)
    } catch (error) {
      toast.error("Error")
      setDisableBtn(false)
    }
    
  }
  const animations = {
    form:{
      inital:{
        x:"-100%",
        opacity:0,
      },
      whileInView:{
        x:0,
        opacity:1,
      },
    },

    button: {
      inital:{
        y:"-100%",
        opacity:0,
      },
      whileInView:{
        y:0,
        opacity:1,
      },
      transition:{
        delay:0.5,
      }
    }
  }
  
  return (
    <div id="contact">
        <section>
            <form onSubmit={submitHandler} {...animations.form}>
                <h2>Contact Me</h2>
                <input 
                      type="text" 
                      value={name} 
                      onChange={(e)=>setName(e.target.value)} 
                      placeholder='Your Name' 
                      required
                />
                <input 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='Your Email' 
                      required
                />
                <input 
                      type="text"
                      placeholder='Your Message' 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                />

                <motion.button 
                    onSubmit={submitHandler} 
                    disabled={disableBtn}
                    className={disableBtn ? "disableBtn" : ""}
                    type="submit"
                >
                  Send
                </motion.button>
            </form>
        </section>
        <aside>
          <img src={vg} alt="Graphics" />
        </aside>
    </div>
  )
}

export default Contact