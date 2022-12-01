// import React from "react";
// import axios from "axios";

// function Signup() {
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const form = new FormData(e.currentTarget);

//     await axios
//       .post("http://localhost:5000/signup", form)
//       .then((res) => {
//         if (res?.data?.message == "input field cannot be empty") {
//           alert(res?.data?.message);
//         } else if (res?.data?.message == "photo is required") {
//           alert(res?.data?.message);
//         } else if (res?.data?.message == "Account Successfully Created") {
//           navigate("/signin");
//         }
//       })
//       .catch((err) => console.log(err));
//   };
//   return (
//     <div className="signup">
//       <form onSubmit={(e) => handleSubmit(e)}>
//         <div>
//           <label className="form-label">Name</label>
//           <input type="text" name="myname" className="form-control" />
//         </div>

//         <div>
//           <label className="form-label">Email</label>
//           <input type="email" name="email" className="form-control" />
//         </div>
//         <div>
//           <label className="form-label">Password</label>
//           <input type="password" name="pwd" className="form-control" />
//         </div>

//         <div>
//           <label className="form-label">Photo</label>
//           <input type="file" name="photo" className="form-control" />
//         </div>

//         <button className="btn btn-lg btn-info w-100 my-3" type="submit">
//           Register
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Signup;
