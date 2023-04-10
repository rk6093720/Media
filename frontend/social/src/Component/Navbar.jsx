import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className="container">
            <div className="left">
                <h1>Social Media</h1>
            </div>
            <div className="right">
                <Link to="/">
                    Home
                </Link>
                <Link to="/users">
                    UserForm
                </Link>
                <Link to="/">
                    Postform
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar