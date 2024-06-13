import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const ManageDoctor = ({ doctor, index, handleDelete, handleEdit }) => {
  return (
    <tr className="text-center">
      <th className="">{index}</th>
      <td className=" ">
        <div className='flex items-center gap-3'>
          <img className='h-14 w-14 rounded-full' src={doctor?.img} alt={doctor?.name} />
          <h1 className='font-semibold'>{doctor?.name}</h1>
        </div>
      </td>
      <td className=" ">{doctor?.department}</td>
      <td className=" ">{doctor?.email}</td>
      <td className=" ">{doctor?.phone}</td>
      {/* <td className=" "><h1>off days</h1></td> */}
      <td className=" ">
        <button onClick={() => handleEdit(doctor?._id)}>
          <FaEdit className="text-xl" />
        </button>
      </td>

      <td className=" ">
        <button
          onClick={() => handleDelete(doctor?._id)}
          className="btn btn-xs btn-secondary rounded-md uppercase text-white font-semibold  "
        >
          <FaTrashAlt className="text-xl" />
        </button>
      </td>
    </tr>
  );
};

export default ManageDoctor;