import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
let i = 0;
let index = 0;

function App() {
  let [Fname, setFname] = useState("");
  let [Lname, setLname] = useState("");
  let [Mno, setMno] = useState("");
  let [email, setEmail] = useState("");
  let [Nname, setNname] = useState("");
  let [data, setData] = useState([]);
  let [delet, setdelete] = useState([]);

  let submits = () => {
    if (Fname !== "" && Lname !== "" && Mno !== "" && email !== "") {
      let dub = [...data];
      dub[i++] = {
        FirstName: Fname,
        LastName: Lname,
        Mobile: Mno,
        emails: email,
        Nnames: Nname,
      };
      axios({
        method: "POST",
        url: "https://service.apikeeda.com/api/v1/contact-book",
        data: {
          firstName: Fname,
          lastName: Lname,
          mobileNo: Mno,
          email: email,
          nickName: Nname,
        },
        headers: {
          "x-apikeeda-key": "t1726639595295yml880900491jz",
        },
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("Please Enter The Valid Details:");
    }
    setFname("");
    setEmail("");
    setLname("");
    setMno("");
    setNname("");
  };

  useEffect(() => {
    axios
      .get("https://service.apikeeda.com/api/v1/contact-book", {
        headers: {
          "x-apikeeda-key": "t1726639595295yml880900491jz",
        },
      })
      .then((res) => {
        setData(res.data.data);
      });
  }, []);
  let checks = (dele) => {
    let dub = [...delet];
    dub[index++] = dele;
    setdelete(dub);
  };

  let deletes = (el) => {
    console.log(el._id);

    axios
      .delete(`https://service.apikeeda.com/api/v1/contact-book/${el._id}`, {
        headers: {
          "x-apikeeda-key": "i1726723995259moc624653113xw",
        },
      })
      .then(() => {
        setData((values) => {
          return values.filter((item) => item.id !== el.id);
        });
      });
  };

  let Edit = (el) => {
    console.log(el); 

    setFname(el.firstName);
    setLname(el.lastName);
    setEmail(el.email);
    setMno(el.mobileNo);
    setNname(el.nickName);
    axios.patch(`https://service.apikeeda.com/api/v1/contact-book/:${el._id}`, {
      headers: {
        "x-apikeeda-key": "x1726744257649wty300185499mh",
      },
    })
    .then(()=>{
      setData((values)=>{
              return values.filter((el)=>{
                el.FirstName = "Tushar"
              })
      })      
    })
  };

  return (
    <>
      <div className="container">
        <div className="AllForms">
          <div className="getData">
            <div>
              <label htmlFor="first">FirstName</label>
              <input
                type="text"
                id="first"
                placeholder="Enter The Name"
                value={Fname}
                onChange={(event) => {
                  setFname(event.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="last">LastName</label>
              <input
                type="text"
                id="last"
                placeholder="Enter The LastName"
                value={Lname}
                onChange={(event) => {
                  setLname(event.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="last">Mo.No:</label>
              <input
                type="Number"
                id="last"
                placeholder="Enter The Mo.No"
                value={Mno}
                onChange={(event) => {
                  setMno(event.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Enter The Email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="nickName">nickName:</label>
              <input
                type="text"
                id="nickName"
                placeholder="Enter The NickName"
                value={Nname}
                onChange={(event) => {
                  setNname(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="center">
            <button onClick={submits}>Submit</button>
          </div>
        </div>
        <div className="table-Data">
          <table border={1} width={"80%"} cellPadding={0} cellSpacing={0}>
            <tr>
              <th>No</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Mo.No</th>
              <th>Email</th>
              <th>NickName</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>

            {data.map((el, inx) => {
              return (
                <tr>
                  <td>{inx + 1}</td>
                  <td>{el.firstName}</td>
                  <td>{el.lastName}</td>
                  <td>{el.mobileNo}</td>
                  <td>{el.email}</td>
                  <td>{el.nickName}</td>
                  <td className="centers">
                    <button
                      className="edits"
                      onClick={() => {
                        Edit(el);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td className="centers">
                    <button
                      className="delete"
                      onClick={() => {
                        deletes(el);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
