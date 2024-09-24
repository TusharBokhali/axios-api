import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function SinginSingup() {
  const [emails, setemail] = useState("");
  const [passwords, setpassswords] = useState("");
  const [names,setnames] = useState("")
  let [page, setpage] = useState("Login");
  let [Blog,setBlog]  = useState(false)
  let [Data,setData] = useState([])
  let [author,setauthor]=useState()
  let [categories,setCategories] = useState("")
  let [views,setViews] = useState(false)

  let clear = localStorage.getItem('Login');
  let LoginUser = JSON.parse(clear)
  console.log(LoginUser);
  
  

  let Logins = () => {
      if (emails !== "" && passwords !== "") {
        axios.post("https://service.apikeeda.com/api/v1/user/login",{
          email:emails,
          password:passwords
        },{
          "headers": {
            "x-apikeeda-key": "w1727025495173wwh183916512zu"
          }
        })
        .then((res)=>{
          setauthor(res.data.authorization);
          alert("Login Succesfully!!");
          setpage("Categries");
          setBlog(true);
          view();
          
              }).catch(err =>alert("Account Not Found Create The New Account!!"))
              
            } 
            let user = [emails,passwords]
            localStorage.setItem('Login',JSON.stringify(user));
            
            setemail("");
            setpassswords("");
            
          }
          
        let SingIn = () => {
          setpage("SingUp");
        };

  let SingUp = () =>{
    console.log(names)
    console.log(passwords)
    console.log(emails)
    axios.post("https://service.apikeeda.com/api/v1/user/signup",{
      "name":names,
      "email":emails,
      "password":passwords
    },{
      "headers": {
        "x-apikeeda-key": "w1727025495173wwh183916512zu"
      }
    })
    .then((res)=>{
      setData(res.data.data)
    }).catch(err=>console.log(err.massage));
    setemail("")
    setnames("")
    setpassswords("")
    setpage("Login")
  }

  useEffect(() => {
    view()
  },[])

    
  let Collection = () => {
      if(names!==""){
        axios.post('https://service.apikeeda.com/api/v1/category',{
            "name":names
        },{
          "headers": {
            "x-apikeeda-key": "w1727025495173wwh183916512zu",
            "authorization": `${author}`
          }
        })
      .then((res)=>{
        setCategories(res.data.data)
        alert("Data Succefully Added!!")
        setViews(true)
        setBlog(false)
        view();
      })
      setnames("")
    }
    else{
      alert("Please Enter The Value!");
    }
  }

function view(){
      axios.get('https://service.apikeeda.com/api/v1/category',{
        "headers": {
          "x-apikeeda-key": "w1727025495173wwh183916512zu",
          "authorization": `${author}`
        }
      })
      .then((res)=>{
        // console.log(res);
      })
}
   
 

  return (
    <>
      <div className="container">
         <div className={Blog || views === true ? 'none' : 'Login-user'}>
          <div className={page === 'Login' ? '' : 'none'}>

                        <h2>Login</h2>
                        <div className="input">
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email"  id="email"  placeholder='Email' value={emails} onChange={(event)=>{setemail(event.target.value)}}/>
                        </div>
                        <div>
                            <label htmlFor="Password">Password</label>
                            <input type="password"  id="Password" placeholder='password' value={passwords} onChange={(event)=>{setpassswords(event.target.value)}}/>
                        </div>
                        <button onClick={Logins}>Login</button>
                        </div>
                        <div className='center'>
                        <h5>Have not account yet?</h5>
                            <span onClick={SingIn}>Sing up</span>
                        </div>

                </div>

           {/* Sing Up Pages  */}
          <div className={page === 'SingUp' ? 'Sing-Up' : 'none'}>
            <h2>Sing Up</h2>
            <div className="input">
              <div>
                <label htmlFor="Name">Name</label>
                <input type="text" id="Name" placeholder="Enter Name" value={names} onChange={(event)=>{setnames(event.target.value)}}/>
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="Email" placeholder="Email" value={emails} onChange={(event)=>{setemail(event.target.value)}}/>
              </div>
              <div>
                <label htmlFor="Passwords">Password</label>
                <input type="password" id="Password" placeholder="Password" value={passwords} onChange={(event)=>{setpassswords(event.target.value)}}/>
              </div>

              <div>
                <button onClick={SingUp}>Sing Up</button>
              </div>
              <div style={{color : 'black',cursor:'pointer'}} onClick={()=>{setpage("Login")}} >Login</div>
            </div>
          </div>
        </div> 
        <div className={Blog === false ? 'none' : 'AllBlog'}>
              {/* <div className= 'AllBlog'> */}
              <h1>Add Categories User</h1>
              <div>
                  <label htmlFor="Datas">Name</label>
                  <input type="text"  id="Datas" placeholder="Enter Categories" value={names} onChange={(event)=>{setnames(event.target.value)}}/>
                </div>
            <button onClick={Collection}>Submit</button>
        </div>
        <div className={views===true ? 'ViewsFinalData' : 'none'}>
          <table border={1} cellSpacing={0} width={'50%'}>
          <tr>
            <th>Name</th>
            <th>Id</th>
            <th>__v</th>
          </tr>
          <tr>
            <td>{categories.name}</td>
            <td>{categories._id}</td>
            <td>{categories.__v}</td>
          </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default SinginSingup;
