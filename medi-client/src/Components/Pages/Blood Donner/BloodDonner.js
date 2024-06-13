import React from 'react';

const BloodDonner = ({donner,index}) => {
   const backgroundClass =
     index % 8 === 0
       ? 'bg-red-600'
       : index % 7 === 0
       ? 'bg-blue-500'
       : index % 6 === 0
       ? 'bg-yellow-600'
       : index % 5 === 0
       ? 'bg-green-700'
       : index % 4 === 0
       ? 'bg-purple-500'
       : index % 3 === 0
       ? 'bg-pink-500'
       : index % 2 === 0
       ? 'bg-indigo-500'
       : 'bg-lime-600';
  return (
    <div
      className={`${backgroundClass} text-center text-xl bg-indigo-700 text-white pb-3`}
    >
      <div>
        <img className="w-full h-40" src={donner?.img} alt="" />
      </div>
      <div className="mt-2">
        <h1 className="text-3xl font-semibold">{donner?.bloodGroup}</h1>
        <h1>{donner?.name}</h1>
        <h1>{donner?.phone}</h1>
        <h1>{donner?.address}</h1>
        <button className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-xl mt-2">
          Call Now
        </button>
      </div>
    </div>
  );
};

export default BloodDonner;