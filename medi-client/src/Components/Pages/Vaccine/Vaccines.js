import React from 'react';
import Footer from '../../Share/Footer';

const Vaccines = () => {
  return (
    <div>
      <div className="pt-20 pl-10 pb-20 text-indigo-900">
        <h1 className="text-4xl font-semibold uppercase">Vaccines</h1>

        <div>
          <h1 className="text-3xl mt-10 font-semibold">Total Vaccines</h1>
          <p className="mt-2 text-2xl  text-rose-800 ">Covid 19 : 54670</p>
          <p className="mt-2 text-2xl  text-rose-800 ">Others : 34673</p>
        </div>
        <div>
          <h1 className="text-3xl mt-10 font-semibold">Push Vaccine</h1>
          <p className="mt-2 text-2xl  text-indigo-800 ">
            Covid 19 : <span className="text-red-700 ml-5">50000</span>
          </p>
          <p className="mt-2 text-2xl  text-indigo-800 ">
            Others :<span className="text-red-700 ml-5">30000</span>
          </p>
        </div>
        <div>
          <h1 className="text-3xl mt-10 font-semibold">Save vaccine</h1>
          <p className="mt-2 text-2xl  text-indigo-800 ">
            Covid 19 : <span className="text-red-700 ml-5">4670</span>
          </p>
          <p className="mt-2 text-2xl  text-indigo-800 ">
            Others :<span className="text-red-700 ml-5">4673</span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Vaccines;