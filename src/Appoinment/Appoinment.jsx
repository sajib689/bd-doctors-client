import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProviders";
import { useContext } from "react";

const Appoinment = () => {
  const appointment = useLoaderData();
  const {user} = useContext(AuthContext)
  const {  name } = appointment;
  
  const handleAppointment = e => {
        e.preventDefault();
        const form = e.target 
        const patientName = form.patientName.value 
        const date = form.date.value 
        const name = form.name.value 
        const number = form.number.value 
        const email = form.email.value 
        const address = form.address.value 
        const problem = form.problem.value 
        const appointment = {patientName, date, name, number, email, address, problem}
        fetch('https://bd-doctors-server.vercel.app/appointment',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged === true) {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Success!',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            form.reset()
        })
  }
  return (
    <div className="mb-10">
      <div>
        <h1 className="text-5xl text-center mt-20">Appointment Form</h1>
      </div>
      <form onSubmit={handleAppointment} className="w-[700px] mx-auto">
        <div className=" mt-20 grid grid-cols-2 gap-3">
          <input
            name="patientName"
            type="text"
            required
            placeholder="Type your name"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            name="date"
            type="date"
            required
            className=" input input-bordered w-full max-w-xs"
          />
          <input
            name="name"
            type="text"
            readOnly
            defaultValue={name}
            className=" input input-bordered w-full max-w-xs"
          />
          <input
            name="number"
            type="number"
            required
            placeholder="Type your number"
            className=" input input-bordered w-full max-w-xs"
          />
          <input
            name="email"
            type="email"
            defaultValue={user?.email}
            readOnly
            className=" input input-bordered w-full max-w-xs"
          />
          <input
            name="address"
            type="text"
            required
            placeholder="Type your address"
            className=" input input-bordered w-full max-w-xs"
          />
          <input
            name="problem"
            type="text"
            required
            placeholder="Type your problem"
            className=" input input-bordered w-full max-w-xs"
          />
        </div>
        <input type="submit" value="Submit" className="btn btn-primary mt-4" />
      </form>
    </div>
  );
};

export default Appoinment;
