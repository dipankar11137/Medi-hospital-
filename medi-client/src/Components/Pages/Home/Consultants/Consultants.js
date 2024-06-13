import React, { useEffect, useState } from 'react';
import { FaMinus, FaUtensilSpoon } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Consultants = () => {
  const [doctors, setDoctors] = useState([]);
  const navigator = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:5000/doctor`)
      .then(res => res.json())
      .then(data => setDoctors(data));
  }, [doctors]);

  const handleDetails = id => {
    navigator(`/doctorDetails/${id}`);
  };
  return (
    <div
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/previews/006/712/977/original/abstract-health-medical-science-healthcare-icon-digital-technology-doctor-concept-modern-innovation-treatment-medicine-on-hi-tech-future-blue-background-for-wallpaper-template-web-design-vector.jpg')",
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        position: 'relative',
      }}
      className=" px-20 py-12 "
    >
      <div
        style={{
          // position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(61, 61, 61, 0.3)',
        }}
        className="p-4 rounded-xl"
      >
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="flex items-center text-orange-600 text-xl font-semibold">
            <h1 className="mr-2">Doctors</h1>
            <FaMinus />
            <FaUtensilSpoon className="rotate-45" />
          </div>
          <div>
            <h1 className="font-semibold text-3xl mb-10 text-white">
              Our Consultants
            </h1>
          </div>
          <div className="grid grid-cols-4 gap-12 mt-5">
            {doctors
              .slice(0, 4)
              .reverse()
              .map(doctor => (
                <div className="flex justify-center border-b-2 border-secondary pb-2">
                  <div className="text-center">
                    <img
                      className="h-56 w-56 rounded-full bg-slate-200"
                      src={doctor?.img}
                      alt={doctor?.name}
                    />
                    <h1 className="text-2xl font-semibold mt-2 text-orange-600">
                      {doctor?.name}
                    </h1>
                    <p className="text-sm uppercase text-slate-50">
                      {' '}
                      {doctor?.department}
                    </p>
                    <button
                      onClick={() => handleDetails(doctor._id)}
                      className="btn btn-sm btn-warning mt-2"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultants;
