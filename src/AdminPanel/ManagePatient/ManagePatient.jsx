import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import ManageCard from "../../Appoinment/ManageCard/ManageCard";

const ManagePatient = () => {
    const { user } = useContext(AuthContext);
  const [appointment, setAppointment] = useState([]);
  
  const url = `https://bd-doctors-server.vercel.app/appointment`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [url]);
  const handleDelete = _id => {
    fetch(`https://bd-doctors-server.vercel.app/appointment/${_id}`,{
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
    const filter = appointment.filter(app => app._id !== _id);
    setAppointment(filter)
  }
    return (
        <div>
            <div>
        <h1 className="text-center text-5xl mt-20 font-[600] ">Appointment List</h1>
      <div className="overflow-x-auto bg-base-200 mt-20 mb-20 rounded-lg">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <th>Patient Name</th>
              </th>
              <th>Dr. Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Date</th>
              <th>Address</th>
              <th>Problem</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {appointment.map((appointmentData) => (
              <ManageCard
                key={appointmentData._id}
                appointmentData={appointmentData}
                handleDelete={handleDelete}
              ></ManageCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
        </div>
    );
};

export default ManagePatient;