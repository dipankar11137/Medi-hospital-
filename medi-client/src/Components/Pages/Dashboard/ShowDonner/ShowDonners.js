import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ShowDonner from './ShowDonner';

const ShowDonners = () => {
   const [donners, setDonner] = useState([]);
   useEffect(() => {
     fetch(`http://localhost:5000/donner`)
       .then(res => res.json())
       .then(data => setDonner(data));
   }, [donners]);

  
   const handleDelete = id => {
     const proceed = window.confirm('Are You Sure ?');
     if (proceed) {
       const url = `http://localhost:5000/donner/${id}`;
       fetch(url, {
         method: 'DELETE',
       })
         .then(res => res.json())
         .then(data => {
           const remaining = donners.filter(product => product._id !== id);
           setDonner(remaining);
           toast.success('Successfully Delete');
         });
     }
   };
  return (
    <div className="mx-7">
      <div>
        <h1 className="text-3xl m-2 font-semibold text-indigo-900">
          {' '}
          All Doctors
        </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table  w-full text-slate-900 border-[1px] rounded-lg">
          <thead>
            <tr className="text-3xl bg-slate-900 text-center ">
              <th className="bg-indigo-700 text-[30px] text-primary"></th>
              <th className="bg-indigo-300 text-[17px] text-primary">
                 Name
              </th>
              <th className="bg-indigo-400  text-[17px] text-primary">
                Location
              </th>

              <th className="bg-indigo-300  text-[17px] text-primary">Blood Group</th>
              <th className="bg-indigo-400  text-[17px] text-primary">Phone</th>
              <th className="bg-indigo-300  text-[17px] text-primary">Status</th>
              <th className="bg-indigo-400  text-[17px] text-primary">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {donners.map((donner, index) => (
              <ShowDonner
                key={donner._id}
                donner={donner}
                index={index + 1}
                handleDelete={handleDelete}
              ></ShowDonner>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowDonners;