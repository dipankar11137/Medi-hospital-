import React from 'react';

const BloodDonner = ({donner,index}) => {
   const backgroundClass =
     index % 8 === 0
       ? 'bg-red-700'
       : index % 7 === 0
       ? 'bg-blue-700'
       : index % 6 === 0
       ? 'bg-yellow-700'
       : index % 5 === 0
       ? 'bg-green-700'
       : index % 4 === 0
       ? 'bg-purple-700'
       : index % 3 === 0
       ? 'bg-pink-700'
       : index % 2 === 0
       ? 'bg-indigo-500'
       : 'bg-lime-700';
  return (
    <div
      className={`${backgroundClass} text-center text-xl bg-indigo-700 text-white pb-3`}
    >
      <div>
        <img className="w-full h-48" src={donner?.img} alt="" />
      </div>
      <div className="mt-2">
        <h1 className="text-3xl font-semibold">{donner?.bloodGroup}</h1>
        <h1>{donner?.name}</h1>
        {donner.donnerTime ?
          <h1 className='bg-primary'>Not Available</h1>
          : <h1>{donner?.phone}</h1>
        }
        <h1>{donner?.address}</h1>
        <button
          disabled={donner.donnerTime}
          className="btn btn-primary btn-sm text-white mt-3"
        >
          Call Now
        </button>
      </div>
    </div>
  );
};

export default BloodDonner;