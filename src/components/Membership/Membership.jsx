import React, { useEffect, useState } from "react";
import Plan from "../Plan/Plan";

const Membership = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPlans(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="px-2 md:px-32 py-14">
      <h2 className="text-xl md:text-5xl text-center font-bold">Choose a plan that's right for you</h2>
      <div className="grid grid-rows-1 md:grid-cols-3 mt-14 gap-5 ">
        {plans.map((plan, index) => (
          <Plan key={index} plan={plan}></Plan>
        ))}
      </div>
    </div>
  );
};

export default Membership;
