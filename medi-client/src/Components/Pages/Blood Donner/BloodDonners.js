import React, { useEffect, useState } from 'react';

const BloodDonners = () => {
    
  const [users, setUser] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:5000/users`)
        .then(res => res.json())
        .then(data => setUser(data));
    }, [users]);

  console.log(users)
  
   
  return (
    <div className="pt-20">
      <div className="grid grid-cols-12 ">
        <div className="col-span-3">
          <div>
            <div>
              <select
                // onChange={e => setAddress(e.target.value)}
                className="select select-bordered w-full max-w-xs  "
              >
                <option disabled selected>
                  Location
                </option>
                {[...new Set(users.map(member => member.address))].map(
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
                {[...new Set(users.map(member => member.bloodGroup))].map(
                  (bloodGroup, index) => (
                    <option key={index}>{bloodGroup}</option>
                  )
                )}
              </select>
            </div>
          </div>
        </div>
        <div className="col-span-9">
          <h1>Sona </h1>
        </div>
      </div>
    </div>
  );
};

export default BloodDonners;