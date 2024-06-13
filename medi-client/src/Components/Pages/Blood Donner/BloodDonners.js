import React, { useEffect, useState } from 'react';
import BloodDonner from './BloodDonner';

const BloodDonners = () => {
    
  const [donners, setUser] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:5000/donner`)
        .then(res => res.json())
        .then(data => setUser(data));
    }, [donners]);

  console.log(donners)
  
   
  return (
    <div className="pt-[60px]">
      <div className="grid grid-cols-12 ">
        <div className="col-span-3 border-r-[1px] border-slate-400 pt-10">
          <div>
            <div>
              <select
                // onChange={e => setAddress(e.target.value)}
                className="select select-bordered w-full max-w-xs  "
              >
                <option disabled selected>
                  Location
                </option>
                {[...new Set(donners.map(member => member.address))].map(
                  (address, index) => (
                    <option key={index}>{address}</option>
                  )
                )}
              </select>
            </div>
            <div className="mt-5">
              <select
                // onChange={e => setBloodGroup(e.target.value)}
                className="select select-bordered w-full max-w-xs "
              >
                <option disabled selected>
                  Blood Group
                </option>
                {[...new Set(donners.map(member => member.bloodGroup))].map(
                  (bloodGroup, index) => (
                    <option key={index}>{bloodGroup}</option>
                  )
                )}
              </select>
            </div>
          </div>
        </div>
        <div className="col-span-9 pt-10 p-3">
          <div className="grid grid-cols-4 mx-5 mb-10">
            {donners.map((donner,index) => (
              <BloodDonner  key={donner._id} donner={donner} index={index+1}></BloodDonner>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodDonners;