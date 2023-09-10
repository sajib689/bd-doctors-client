import { Link } from "react-router-dom";
import d from '../../assets/delete.svg'
const ManageDrCard = ({ doctor, handleDelete }) => {
  const { _id, name, title, job, college, visting, call, img } = doctor;

  return (
    <tr>
      <td className="w-10 ">
        <img className="rounded-lg" src={img} alt="" />
      </td>
      <td>
        <p>{name}</p>
      </td>

      <td>
        <td>{title}</td>
      </td>
      <td>{job}</td>
      <td>{college}</td>

      <th className="flex items-center justify-center">
        <button className="btn btn-ghost btn-xs bg-orange-400">Update</button>
        <Link
          onClick={() => handleDelete(_id)}
          className=" ps-2 bg-red-500 p-1 rounded"
        >
          <img src={d} alt="" />
        </Link>
      </th>
    </tr>
  );
};

export default ManageDrCard;
