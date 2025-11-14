import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h2>404- Course Not Found</h2>
        <p>return to <Link to="/">Home</Link>  page</p>
    </div>
  )
}

export default NotFound