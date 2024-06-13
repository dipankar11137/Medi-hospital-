import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddDonner = () => {
  const imageHostKey = 'c70a5fc10619997bd7315f2bf28d0f3e';
  
  const [bloodGroup,setBloodGroup]=useState('')
    const {
      register,
      formState: { errors },
      handleSubmit,
      reset,
  } = useForm();


  const onSubmit = (data) => {

    const image = data.img[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(imageData => {
        const image = imageData.data.url;
        const updateUrl = {
          ...data,  
          bloodGroup,
          img:image,
         
        };

        console.log('aci',updateUrl);
        fetch(`http://localhost:5000/donner`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(updateUrl),
        })
          .then(res => res.json())
          .then(data => {
              toast.success('Add Donner');
            reset();
          });
      });
  }
  return (
    <div className="flex justify-center mt-5">
      <div className="border-[1px] border-primary p-3 rounded-lg bg-slate-300 shadow-2xl">
        <div>
          <h1 className='text-4xl text-center font-bold text-primary'>Add Donner</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* name */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Write your name"
              className="input input-bordered  w-full   "
              {...register('name', {
                required: {
                  value: true,
                  message: 'Name is Required',
                },
              })}
            />
            <label className="label">
              {errors.name?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
          {/* blood group */}
          <select
            onChange={e => setBloodGroup(e.target.value)}
            className="select select-bordered w-full text-xl"
          >
            <option disabled selected>
              Select Blood Group
            </option>
            <option>A+</option>
            <option>A-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>B+</option>
            <option>B-</option>
            <option>O+</option>
            <option>O-</option>
          </select>
          {/* phone */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="text"
              placeholder="Write your phone number"
              className="input input-bordered  w-full   "
              {...register('phone', {
                required: {
                  value: true,
                  message: 'Phone is Required',
                },
              })}
            />
            <label className="label">
              {errors.phone?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors.phone.message}
                </span>
              )}
            </label>
          </div>
          {/* address */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              placeholder="Write your address"
              className="input input-bordered  w-full   "
              {...register('address', {
                required: {
                  value: true,
                  message: 'Address is Required',
                },
              })}
            />
            <label className="label">
              {errors.address?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors.address.message}
                </span>
              )}
            </label>
          </div>
          {/* image */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="file"
              placeholder="Image"
              className="input input-bordered  w-full pt-2"
              {...register('img', {
                required: {
                  value: true,
                  message: 'Image is Required',
                },
              })}
            />
            <label className="label">
              {errors.img?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors.img.message}
                </span>
              )}
            </label>
          </div>

          <input
            className="btn btn-primary w-full text-white mt-3"
            type="submit"
            value="Post"
          />
        </form>
      </div>
    </div>
  );
};

export default AddDonner;