import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className="container" style={{display:"flex",width:"100%",height:"50px",backgroundColor:"teal",color:"white", justifyContent:"space-between", alignItems:"center"}}>
            <div className="left" style={{width:"40%"}}>
                <h1>Social Media</h1>
            </div>
            <div className="right" style={{width:"60%", display:"flex", justifyContent:"space-between", fontSize:"24px"}}>
                <Link to="/">
                    Home
                </Link>
                <Link to="/users">
                    UserForm
                </Link>
                <Link to="/postusers">
                    Postform
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar