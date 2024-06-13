import React from 'react';
import {
  FaTrashAlt
} from 'react-icons/fa';

const ShowDonner = ({ index, donner, handleDelete }) => {
  return (
    <tr className="text-center">
      <th className="">{index}</th>
      <td className=" ">
        <div className="flex items-center gap-3">
          <img
            className="h-14 w-14 rounded-full"
            src={donner?.img}
            alt={donner?.name}
          />
          <h1 className="font-semibold">{donner?.name}</h1>
        </div>
      </td>
      <td className=" ">{donner?.address}</td>
      <td className=" ">{donner?.bloodGroup}</td>
      <td className=" ">{donner?.phone}</td>
      <td className=" "><button className='btn btn-accent btn-xs text-white'>Done</button></td>
     

      <td className=" ">
        <button
          onClick={() => handleDelete(donner?._id)}
          className="btn btn-xs btn-primary  rounded-md uppercase text-white font-semibold  "
        >
          <FaTrashAlt className="animate-pulse" />
        </button>
      </td>
    </tr>
  );
};

export default ShowDonner;