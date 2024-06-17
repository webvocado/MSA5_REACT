import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <div>Home</div>
      <Link to="/about">링크</Link>
    </div>
  )
}

export default Home