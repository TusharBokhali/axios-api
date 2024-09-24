import React from 'react'
import '../App.css'

function nav() {
    let pagesChange = ()=>{
        
    }
  return (
    <>
    <nav>
              <div className="log">
                <a href="#">
                  <img
                    src="https://banner2.cleanpng.com/20180519/jjs/avq0lgq0t.webp"
                    alt=""
                  />
                </a>
              </div>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#" onClick={() => { pagesChange("Abouts") }}>About</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
              </ul>
            </nav>
    </>
  )
}

export default nav
