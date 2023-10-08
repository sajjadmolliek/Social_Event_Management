/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const Services = ({ data }) => {

  return (
    <div className="my-20">
      <div>
        <h1 className="text-4xl underline font-bold text-center">
          Services Of Us
        </h1>
      </div>
      <div className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[88%] mx-auto">
          {data.map((event) => (
            <div key={event.id} data-aos="flip-right">
              <div className="card h-[30rem] card-compact bg-base-100 shadow-xl">
                <figure>
                  <img src={event.image} alt="Picture" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-bold">{event.title}</h2>
                  <p className="my-4">{event.description}</p>
                  <div className="card-actions justify-between mb-4 items-center">
                    <button className="btn btn-success text-white">{event.price}</button>
                    <NavLink to={`/photo/${event.id}`} className="btn btn-success text-white">Show Details</NavLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
