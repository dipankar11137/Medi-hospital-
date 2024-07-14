import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const ShowDonner = ({ index, donner, handleDelete, handleDonnerTime }) => {
  return (
    <tr className="text-center">
      <th>{index}</th>
      <td>
        <div className="flex items-center gap-3">
          <img
            className="h-14 w-14 rounded-full"
            src={donner?.img}
            alt={donner?.name}
          />
          <h1 className="font-semibold">{donner?.name}</h1>
        </div>
      </td>
      <td>{donner?.address}</td>
      <td>{donner?.bloodGroup}</td>
      <td>{donner?.phone}</td>
      <td>
        <button
          onClick={() => handleDonnerTime(donner?._id)}
          className={`btn btn-xs  text-white ${
            donner.donnerTime
              ? 'btn-primary cursor-not-allowed'
              : 'btn-primary'
          }`}
          disabled={donner.donnerTime}
        >
          {donner.donnerTime ? 'Not Available' : 'Mark as Done'}
        </button>
      </td>
      <td>
        <button
          onClick={() => handleDelete(donner?._id)}
          className="btn btn-xs btn-primary rounded-md uppercase text-white font-semibold"
        >
          <FaTrashAlt className="animate-pulse" />
        </button>
      </td>
    </tr>
  );
};

export default ShowDonner;
