import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Link from "../Link/Link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

  const routesArray = [
    {
      id: 1,
      name: "Home",
      path: "/home",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Contact",
      path: "/contact",
    },
    {
      id: 4,
      name: "Products",
      path: "/products",
    },
    {
      id: 5,
      name: "Services",
      path: "/services",
    },
  ];

  return (
    <nav className="md:px-32 bg-slate-900 px-2 flex justify-between pt-5 items-center">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">Embars Membership</h2>

      <div className="relative ">
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span className="pr-12 md:pr-0">
            {" "}
            {isOpen ? <Bars3Icon className="h-7 w-6 mt-7  text-secondary md:hidden cursor-pointer"></Bars3Icon> : <XMarkIcon className="h-7 w-6 mt-7 text-error md:hidden cursor-pointer"></XMarkIcon>}
          </span>
        </div>
        <ul
          className={`md:flex gap-11 bg-slate-900  rounded-bl-lg duration-500 md:duration-0 p-10   font-bold text-xl absolute md:relative md:right-0 md:top-0  ${
            isOpen ? "-right-44" : "-right-2 top-[75px]"
          }`}
        >
          {routesArray.map((route) => (
            <Link route={route} key={route.id}></Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
