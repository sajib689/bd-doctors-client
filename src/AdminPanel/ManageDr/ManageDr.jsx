import { Link } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import ManageDrCard from "../ManageDrCard/ManageDrCard";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";

const ManageDr = () => {
    const { user } = useContext(AuthContext);
    const [doctors, setDoctors] = useState([]);
    
    const url = `https://bd-doctors-server.vercel.app/services`;
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setDoctors(data));
    }, [url]);
    const handleDelete = _id => {
      fetch(`https://bd-doctors-server.vercel.app/services/${_id}`,{
          method: 'DELETE',
      })
      .then(res => res.json())
      .then(data => {
          if(data.deletedCount > 0) {
              Swal.fire({
                  icon: 'success',
                  title: 'Oops...',
                  text: 'Delete Success!',
                })
          }
      })
      const filter = doctors.filter(app => app._id !== _id);
      setDoctors(filter)
    }
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="mt-7">
          <Link
            to="/admin"
            className="btn bg-orange-600 text-white hover:bg-orange-700 hover:text-white"
          >
            Back
          </Link>
        </div>
        <div>
            <div>
        <h1 className="text-center text-5xl mt-10 font-[600] ">Doctor List</h1>
      <div className="overflow-x-auto bg-base-200 mt-20 mb-20 rounded-lg">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <th>Image</th>
              </th>
              <th>Dr. Name</th>
              <th>Qualification</th>
              <th>Job</th>
              <th>University & College</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map(doctor => (
              <ManageDrCard
                key={doctor._id}
                doctor={doctor}
                handleDelete={handleDelete}
              ></ManageDrCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ManageDr;
