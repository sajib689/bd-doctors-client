import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateDr = () => {
  const serviceAll = useLoaderData();
  const { _id,name, title, job, college, visting, call, img } = serviceAll;
  const handleUpdate = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const title = form.title.value;
    const college = form.college.value;
    const visting = form.visting.value;
    const call = form.call.value;
    const img = form.img.value;
    const job = form.job.value;
    const updateData = { name, title, college, visting, call, img, job };
    fetch(`https://bd-doctors-server.vercel.app/services/${_id}`,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updateData)
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount > 0) {
            Swal.fire({
                icon: 'success',
                title: 'Success...',
                text: 'Update Success!',
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
        <div className="mt-7">
          <Link
            to="/managedr"
            className="btn bg-orange-600 text-white hover:bg-orange-700 hover:text-white"
          >
            Back
          </Link>
        </div>
      <div className="mb-10">
        <div>
          <h1 className="text-5xl text-center mt-20">Update DR.</h1>
        </div>
        <form onSubmit={handleUpdate} className="w-[700px] mx-auto">
          <div className=" mt-20 grid grid-cols-2 gap-3">
            <input
              name="name"
              defaultValue={name}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              name="title"
              type="text"
              defaultValue={title}
              className=" input input-bordered w-full max-w-xs"
            />
            <input
              name="college"
              type="text"
              defaultValue={college}
              className=" input input-bordered w-full max-w-xs"
            />
            <input
              name="visting"
              type="text"
              defaultValue={visting}
              className=" input input-bordered w-full max-w-xs"
            />
            <input
              name="call"
              type="text"
              defaultValue={call}
              className=" input input-bordered w-full max-w-xs"
            />
            <input
              name="img"
              type="text"
              defaultValue={img}
              className=" input input-bordered w-full max-w-xs"
            />
            <input
              name="job"
              type="text"
              defaultValue={job}
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
    </div>
  );
};

export default UpdateDr;
