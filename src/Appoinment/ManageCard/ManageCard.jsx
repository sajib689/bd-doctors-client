import { Link } from 'react-router-dom';
import d from '../../assets/delete.svg'

const ManageCard = ({ appointmentData,handleDelete,handleUpdateRequest }) => {
  const {_id, patientName, date, name, number, email, address, problem } =
    appointmentData;
  return (
    <tr>
     
        <td>
          <p>{patientName}</p>
        </td>
    
      <td>
        <td>{name}</td>
      </td>
      <td>{number}</td>
      <td>{email}</td>
      <td>{date}</td>
      <td>
        {address}
      </td>
      <td>
       {problem}
      </td>
      <th className='flex items-center justify-center'>
      {
        status === 'confirm' ?
         <span className="font-bold bg-green-700 p-2 rounded text-white">Confirmed</span>
         :
         <button onClick={() => handleUpdateRequest(_id)} className="btn btn-ghost btn-xs bg-orange-400">Pending</button>
      }
      <Link onClick={() => handleDelete(_id)} className=' ps-2 bg-red-500 p-1 rounded'><img src={d} alt="" /></Link>
      </th>
    </tr>
  );
};

export default ManageCard;
