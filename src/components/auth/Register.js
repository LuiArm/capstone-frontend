import React from 'react'
import "./Register.css"


export default function Register () {
    return (
       <section className="section_auth">
           <div className="container">
               <h1>Register</h1>
               <form>
               <div className="field">
              <p className="control">
                <input 
                  className="input" 
                  type="text"
                  id="username"
                  aria-describedby="userNameHelp"
                  placeholder="Enter username"
                />
              </p>
            </div>
               </form>
               <form>
               <div className="field">
              <p className="control">
                <input 
                  className="input" 
                  type="text"
                  id="username"
                  aria-describedby="userNameHelp"
                  placeholder="enter password"
                />
              </p>
            </div>
               </form>
               <form>
               <div className="field">
              <p className="control">
                <input 
                  className="input" 
                  type="text"
                  id="username"
                  aria-describedby="userNameHelp"
                  placeholder="verify password"
                />
              </p>
            </div>
               </form>
           </div>
       </section>
    )
}