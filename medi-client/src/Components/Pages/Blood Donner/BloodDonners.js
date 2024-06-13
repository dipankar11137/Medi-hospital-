import React, { useEffect, useState } from 'react';
import BloodDonner from './BloodDonner';

const BloodDonners = () => {    
 const [donners, setDonners] = useState([]);
 const [address, setAddress] = useState('');
 const [bloodGroup, setBloodGroup] = useState('');
 const [allDonner, setAllDonner] = useState([]);

 // Fetch all donors once
 useEffect(() => {
   fetch(`http://localhost:5000/donner`)
     .then(res => res.json())
     .then(data => {
       setAllDonner(data);
       setDonners(data); // Initially set all donors
     });
 }, []);

 // Filter donors based on address and blood group
 useEffect(() => {
   if (!address && !bloodGroup) {
     setDonners(allDonner); // If no filters, show all donors
   } else {
     const filteredDonners = allDonner.filter(donner => {
       return (
         (!address || donner.address === address) &&
         (!bloodGroup || donner.bloodGroup === bloodGroup)
       );
     });
     setDonners(filteredDonners);
   }
 }, [address, bloodGroup, allDonner]);
  
   
  return (
    <div className="pt-[60px]">
      <div className="grid grid-cols-12 ">
        <div className="col-span-3 border-r-[1px] h-screen border-slate-400 pt-10">
          <div className="mx-5">
            <div>
              <h1 className=" text-2xl ml-1 my-2 font-semibold text-indigo-900">
                Filter By Location
              </h1>
              <select
                onChange={e => setAddress(e.target.value)}
                className="select select-bordered w-full max-w-xs text-primary"
              >
                <option value="">Select Address</option>
                {[...new Set(allDonner.map(donner => donner.address))].map(
                  (addr, index) => (
                    <option key={index} value={addr}>
                      {addr}
                    </option>
                  )
                )}
              </select>
            </div>

            <div className="mt-5">
              <h1 className=" text-2xl ml-1 my-2 font-semibold text-indigo-900">
                Filter By Blood Group
              </h1>
              <select
                onChange={e => setBloodGroup(e.target.value)}
                className="select select-bordered w-full max-w-xs text-primary"
              >
                <option value="">Select Blood Group</option>
                {[...new Set(allDonner.map(donner => donner.bloodGroup))].map(
                  (group, index) => (
                    <option key={index} value={group}>
                      {group}
                    </option>
                  )
                )}
              </select>
            </div>
          </div>
        </div>
        <div className="col-span-9 pt-5 p-3">
          <div>
            <h1 className="text-4xl font-bold text-primary text-center underline mb-10">
              Our Donner
            </h1>
          </div>
          {donners.length === 0 ? (
            <div className="flex justify-center mt-20 ml-5">
              <img
                src="https://us.123rf.com/450wm/aquir/aquir2008/aquir200806758/153129856-unavailable-round-ribbon-isolated-label-unavailable-sign.jpg"
                alt=""
              />
            </div>
          ) : (
            <div className="grid grid-cols-4 mx-5 mb-10 ">
              {donners.map((donner, index) => (
                <BloodDonner
                  key={donner._id}
                  donner={donner}
                  index={index + 1}
                ></BloodDonner>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BloodDonners;