import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <header className=''>
        <div className='flex justify-around'>
      <div className='container mx-auto bg-wheat-100 border-b border-t py-5 text-lime-50 flex justify-between'>
           <Link to="/"><img width={150} src="https://themesflat.co/html/jobtexdemo/images/logo.png" alt="" /></Link>
      </div>
      <nav>
        <ul className='flex gap-5 uppercase text-4xl text-semibold'>
          <li><Link to={`/cat/Demos`}></Link>Demos</li>
          <li><Link to={`/cat/Find jobs`}></Link>Find jobs</li>
          <li><Link to={`/cat/Employers`}></Link>Employers</li>
          <li><Link to={`/cat/Candidates`}></Link>Candidates</li>
          <li><Link to={`/cat/Blog`}></Link>Blog</li>
        </ul>
      </nav>
   
</div>

    </header>
  )
}

export default Header
