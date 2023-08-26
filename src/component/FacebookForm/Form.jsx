import { useState } from 'react';
import './Form.css';
const FacebookForm = () => {

  const [userFirstname, setuserFirstname] = useState("");
  const [Firstname, setFirstname] = useState("Enter Your Name")
  const [showuserfirstnameerror, setshowuserfirstnameerror] = useState(false)
  const [userSurname, setuserSurname] = useState("");
  const [Surname, setSurname] = useState("Enter Your Surname")
  const [showuserSurnameerror, setshowSurnameerror] = useState(false)
  const [userMobilenumber, setuserMobilenumber] = useState("");
   const [Mobilenumber, setMobilenumber] = useState("Enter Your Mobile number or Email Address")
  const [showusermobilenumbererror, setshowusermobilenumbererror] = useState(false)
  const [userpassword, setuserpassword] = useState("");
  const [showuserPassworderror, setshowuserPassworderror] = useState(false)
  const [Password, setPassword] = useState("Enter Your Password")

  const userFirstnamehandler = (e) => {
    setuserFirstname(e.target.value)
     if(userFirstname !== ""){
      // setshowuserfirstnameerror(false)
      setFirstname("Looks Good")
    }
  }
  const userSurnamehandler = (e) => {
    setuserSurname(e.target.value)
    if(userSurname !== ""){
      // setshowSurnameerror(false)
      setSurname("Looks Good")
    }
  }
  const userMobilenumberhandler = (e) => {
    setuserMobilenumber(e.target.value)
    if(userMobilenumber !== ""){
      // setshowusermobilenumbererror(false)
      setMobilenumber("Looks Good")
    }

  }
  const userPasswordhandler = (e) =>  {
    setuserpassword(e.target.value)
    if(userpassword !== ""){
      // setshowuserPassworderror(false)
      setPassword("Looks Good")
    }
  }
  const usersubmithandlar = (e) => {
    e.preventDefault()


    if(userFirstname===""){
      setshowuserfirstnameerror (true)
    }

    if(userSurname===""){
      setshowSurnameerror (true)
    }

    if(userMobilenumber===""){
      setshowusermobilenumbererror (true)
    }

    if(userpassword===""){
      setshowuserPassworderror (true)
    }

  }
    return (
        <div>
            
            <h1 className="text-center font-color1 fw-bold">
                
                facebook
                
            </h1>
           
            <section class="container">
      <header>Create a new account</header>
      <p class="text-center">it's quick and easy</p>
      <form onSubmit={usersubmithandlar} class="form">
        <hr />
      <div class="column">
        
          <div class="input-box">
        
            <input value={userFirstname } onChange={userFirstnamehandler} type="text" placeholder="First name"  />
             {showuserfirstnameerror && <p class={`${Firstname ==="Looks Good" ? "text-success":"text-danger"}`}>{Firstname} </p>}
          </div>
          <div class="input-box">
           
            <input value={userSurname} onChange={userSurnamehandler} type="text" placeholder="Surname"  />
          { showuserSurnameerror && <p class={`${Surname ==="Looks Good" ? "text-success":"text-danger"}`}>{Surname} </p>}
          </div>
        </div>
        <div class="input-box">
          
          <input value={userMobilenumber} onChange={userMobilenumberhandler} type="text" placeholder="Mobile number or email address"d />
          {showusermobilenumbererror && <p class={`${Mobilenumber ==="Looks Good" ? "text-success":"text-danger"}`}>{Mobilenumber} </p>}
        </div>
        <div class="input-box">
         
          <input value={userpassword} onChange={userPasswordhandler} type="password" placeholder="New password"  />
          {showuserPassworderror && <p class={`${Password ==="Looks Good" ? "text-success":"text-danger"}`}> {Password} </p>}
        </div>
   
        <center>
        <button class="p-1 px-5 ">Sign up</button>
        </center>
        
        
      </form>
    </section>
    
        </div>

        )
    }
    export default FacebookForm