import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function About() {
  return (
    <>
    <div>
        <h2>About</h2>
        <br/> <hr/><br/>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit temporibus vitae possimus iure recusandae, nostrum saepe cumque molestias explicabo, quidem dolores ab! Ut, quam neque dolores aut labore sit magni? Officia sit consectetur enim est, molestiae commodi eveniet omnis quos neque aliquid nemo quaerat? Asperiores voluptates veritatis nisi vitae id perspiciatis quod quis soluta, porro quam ad sequi quibusdam esse distinctio debitis, odit consequatur? Magni, ipsa quae. Tempora ullam natus iusto maxime, magnam, voluptas, totam soluta earum non autem quas. Illum nam reiciendis est, nisi dolor corrupti illo ab! Molestiae reprehenderit illum minus necessitatibus sequi quaerat? Dolore quidem labore consectetur quos sed porro, possimus pariatur earum explicabo sapiente unde provident natus laborum!</p>
    </div>
    <div className="tabs">
      <Link to="/about/about1">About1</Link> 
      <Link to="/about/about2">About2</Link>   
      <Link to="/about/about3">About3</Link> 
      <Outlet />
    </div>
    </>
  )
}
