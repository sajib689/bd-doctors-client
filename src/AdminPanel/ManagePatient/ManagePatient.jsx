import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ManagePatientCard from './ManagePatientCard';

const ManagePatient = () => {
  const [appointment, setAppointment] = useState([]);
  console.log(appointment)
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
  const handleUpdateRequest = _id => {
    fetch(`https://bd-doctors-server.vercel.app/appointment/${_id}`,{
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({status: 'confirm'})
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount > 0) {
        const remaining = appointment.filter(app => app._id !== _id)
        const updated = appointment.find(p => p._id === _id)
        updated.status ='confirm'
        const newAppointment = [updated, ...remaining]
        setAppointment(newAppointment)
      }
    })
  }
    return (
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
        <h1 className="text-center text-5xl mt-20 font-[600] ">Patient List</h1>
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
              <ManagePatientCard
                key={appointmentData._id}
                appointmentData={appointmentData}
                handleDelete={handleDelete}
                handleUpdateRequest={handleUpdateRequest}
              ></ManagePatientCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
        </div>
    );
};

export default ManagePatient;