import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Plan from "../Plan/Plan";

const Membership = () => {
  const [plans, setPlans] = useState([]);
  const notify = (name) => {
    toast.success(`Congratulations Your are purchase ${name} plan`, {
      theme: "dark",
    });
  };

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
      <ToastContainer style={{ color: "red" }}></ToastContainer>
      <h2 className="text-xl md:text-5xl text-center font-bold">Choose a plan that's right for you</h2>
      <div className="grid grid-rows-1 md:grid-cols-3 mt-14 gap-5 ">
        {plans.map((plan, index) => (
          <Plan key={index} plan={plan} notify={notify}></Plan>
        ))}
      </div>
    </div>
  );
};

export default Membership;
