// import React from "react";
// import { NavLink } from "reactstrap";
// import axios from "axios";

// function Signin() {
//   const handlesubmit = async (e) => {
//     e.preventDefault();
//     const form = new FormData(e.currentTarget);
//     await axios.post("http://localhost:5000/signin", form).then((res) => {
//       if (res?.data?.message === "input field cannot be empty") {
//         alert(res?.data?.message);
//       } else if (res?.data?.message === "email not found") {
//         alert(res.data.message);
//       } else if (res?.data?.message === "login succesful") {
//         alert("login successful");
//       }
//     });
//   };

//   return (
//     <div className="signin">
//       <form onSubmit={(e) => handlesubmit(e)}>
//         <div>
//           <label className="form-label">Email</label>
//           <input type="text" name="email" className="form-control" />
//         </div>

//         <div>
//           <label className="form-label">Password</label>
//           <input type="password" name="pwd" className="form-control" />
//         </div>

//         <button className="btn btn-lg btn-info w-100 my-3" type="submit">
//           Login
//         </button>
//       </form>

//       <span className="text-white fw-bold">
//         <small>New User?</small>
//         <NavLink href="/signup">Register</NavLink>
//       </span>
//     </div>
//   );
// }

// export default Signin;
