import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const ManageVaccine = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = data => {

    const updateData={...data}
    fetch(`http://localhost:5006/vaccin`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updateData),
    })
      .then(res => res.json())
      .then(data => {
        toast.success('done');
      });
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center gap-x-4 text-black">
          <div className="border-2 border-slate-200 p-4 mt-10 rounded-lg">
            {/* Total Vaccines */}
            <div className="form-control w-full   ">
              <label className="label">
                <span className="label-text text-black font-semibold text-xl">
                  Total Vaccines
                </span>
              </label>
              <label className="label">
                <span className="label-text text-black font-semibold ">
                  Covid 19 Vaccines
                </span>
              </label>
              <input
                style={{ width: '300px' }}
                type="text"
                placeholder="Covid 19 Vaccines"
                className="input input-bordered bg-white w-full   "
                {...register('covid19', {})}
              />
              <label className="label">
                <span className="label-text text-black font-semibold ">
                  Others Vaccines
                </span>
              </label>
              <input
                style={{ width: '300px' }}
                type="text"
                placeholder="Others Vaccines"
                className="input input-bordered bg-white w-full   "
                {...register('others', {})}
              />
            </div>
            {/* Push Vaccines */}
            <div className="form-control w-full  mt-3 ">
              <label className="label -mt-2">
                <span className="label-text text-black font-semibold text-xl">
                  Push Vaccines
                </span>
              </label>
              <label className="label">
                <span className="label-text text-black font-semibold -mt-3">
                  Push Covid 19 Vaccines
                </span>
              </label>
              <input
                style={{ width: '300px' }}
                type="text"
                placeholder="Push Covid 19 Vaccines"
                className="input input-bordered bg-white w-full   "
                {...register('pCovid19', {})}
              />
              <label className="label">
                <span className="label-text text-black font-semibold ">
                  Push Others Vaccines
                </span>
              </label>
              <input
                style={{ width: '300px' }}
                type="text"
                placeholder="Push Others Vaccines"
                className="input input-bordered bg-white w-full   "
                {...register('pOthers', {})}
              />
            </div>
            <input
              className="btn btn-primary w-full text-white mt-5"
              type="submit"
              value="Submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ManageVaccine;