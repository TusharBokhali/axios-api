import React, { useState } from "react";
import "./App.css";
import left from "./image/left.svg";
import next from "./image/next.svg";
import { wait } from "@testing-library/user-event/dist/utils";
import Ruppe from './image/ruppe.svg'
// import svgs from './image/'
// import navs from "./componets/nav";
function App() {
  let shop;
  let [api, setapi] = useState([])
  let [I, setI] = useState(0);
  let [page, setpage] = useState("Home")
  let Images = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/shoes/2024/GW/Aug/BAU/UNREC/allNEW/3000_PC_ALL._CB565541466_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/GW/BAU/May/Budget/PC_Hero_3000x1200_BS_PC._CB558386585_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/August/Unrec/BAU/21Aug/2-1._CB565867124_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg",
  ];

  let nexts = () => {
    if (I < Images.length - 1) {
      setI(I + 1);
    } else {
      setI(0);
    }
  };

  let previews = () => {
    if (I !== 0) {
      setI(I - 1);
    } else {
      setI(Images.length - 1);
    }
  };
  let product;

  // async function loaded() {
  //   let data = await fetch("https://dummyjson.com/products");
  //   product = await data.json();

  //   return  product;
  // }
  // fetch('https://dummyjson.com/products')
  // .then(res => res.json())
  // .then((res)=>{
  //  product = res.products;
  // //  setapi(product)

  // });

  let pagesChange = (page) => {
    setpage(page);
  }


  return (
    <>
      <div></div>
      <div className="body">
        <div className="container">

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
                  <a href="#" className={page == "Home" ? 'active' : ""} onClick={() => { pagesChange("Home") }}>Home</a>
                </li>
                <li>
                  <a href="#" onClick={() => { pagesChange("Abouts") }}>About</a>
                </li>
                <li>
                  <a href="#" onClick={() => { pagesChange("Privacy") }}>Privacy</a>
                </li>
              </ul>
            </nav>
        </div>
        <div className={page === "Home" ? 'container' : 'none'}>
          <div className="home">
          
            <div className="slider">
              <img src={Images[I]} alt="" />
            </div>
            <div className="button">
              <div>
                <img src={left} onClick={previews} />
              </div>
              <div>
                <img src={next} onClick={nexts} />
              </div>
            </div>
            <div className="Product-Card">
              <div className="cards">
                <div className="image">
                  <img
                    src="https://m.media-amazon.com/images/I/7176xfKE9hL._AC_UL320_.jpg"
                    alt=""
                  />
                  <div className="details">
                    <h2>{"Amazon Brand - Solimo Super Soft Polyester Single Bedsheet with 1 Pillow Cover | 95 GSM (Blue)"}</h2>
                    <h2><img src={Ruppe} alt="" width={"20px"} />{"275"}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={page === 'About' ? 'Abouts' : 'none'}>
            <h1>Hello</h1>
          </div>
        </div>
      </div >
    </>
  );
}

export default App;
