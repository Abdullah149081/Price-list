import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

const Plan = (props) => {
  const { name, price, features } = props.plan;
  const notify = props.notify;

  return (
    <>
      <div className="card w-full  bg-slate-900 shadow-xl text-primary">
        <div className="card-body items-center text-center relative">
          <h2 className="card-title text-5xl font-bold mb-8 ">{name}</h2>
          <div className="mb-14">
            <p className="font-bold text-4xl mb-3 ">${price}</p>
            <div className=" mt-8">
              <ol className="space-y-4 ">
                {features.map((feature) => (
                  <li className="flex gap-4 text-secondary font-medium">
                    <CheckCircleIcon className="h-6 w-6"> </CheckCircleIcon>
                    {feature}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="card-actions absolute bottom-2 mt-9">
            <button onClick={() => notify(name)} className="btn btn-primary md:w-96 font-bold text-xl">
              Purchase Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plan;
