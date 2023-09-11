import { Link } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Swal from "sweetalert2";

const Admin = () => {
  const handlePost = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const title = form.title.value;
    const college = form.college.value;
    const visting = form.visting.value;
    const call = form.call.value;
    const img = form.img.value;
    const job = form.job.value;
    const postdata = { name, title, college, visting, call, img, job };
    fetch("http://localhost:3000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postdata),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId) {
          Swal.fire({
            icon: 'success',
            title: 'Success...',
            text: 'Post Success!',
          })
        }
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.message}`,
        })
      })
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer mt-5">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn bg-orange-500 text-white hover:bg-orange-600 hover:text-white drawer-button">
            Manage All
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="mt-20 rounded-lg menu p-4 w-80 h-80 bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to='/managedr'>Manage Dr</Link>
            </li>
            <li>
              <Link to='/appointmentmanage'>Manage Patient</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-10">
        <div>
          <h1 className="text-5xl text-center mt-20">Post DR.</h1>
        </div>
        <form onSubmit={handlePost} className="w-[700px] mx-auto">
          <div className=" mt-20 grid grid-cols-2 gap-3">
            <input
              name="name"
              type="text"
              required
              placeholder="Type dr name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              name="title"
              type="text"
              required
              placeholder="Type dr title"
              className=" input input-bordered w-full max-w-xs"
            />
            <input
              name="college"
              type="text"
              placeholder="Type dr college name"
              className=" input input-bordered w-full max-w-xs"
            />
            <input
              name="visting"
              type="text"
              required
              placeholder="Type your visting time"
              className=" input input-bordered w-full max-w-xs"
            />
            <input
              name="call"
              type="text"
              placeholder="Type your phone number"
              className=" input input-bordered w-full max-w-xs"
            />
            <input
              name="img"
              type="text"
              required
              placeholder="Type your image URL"
              className=" input input-bordered w-full max-w-xs"
            />
            <input
              name="job"
              type="text"
              required
              placeholder="Type your job title"
              className=" input input-bordered w-full max-w-xs"
            />
          </div>
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary mt-4"
          />
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Admin;
