import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
   const activeStyle={
        textDeoration:"underline",
        color:"blue",
        backgroundColor:"lightblue",
        fontSize:"1.5rem"
   }

  return (
    <nav style={{ padding: "1rem", backgroundColor: "#ea423cff" ,textAlign:"center",padding:"15px 5px"}}>
        <NavLink to="/" style={({isActive})=>(isActive ? activeStyle : {color:"black",textDecoration:"none",margin:"10px",fontSize:"1.5rem"})}>Home</NavLink> {" | "}
        <NavLink to="/catalog" style={({isActive})=>(isActive ? activeStyle : {color:"black",textDecoration:"none",margin:"10px",fontSize:"1.5rem"})}>Catalog</NavLink>
    </nav>
  )
}

export default Navbar