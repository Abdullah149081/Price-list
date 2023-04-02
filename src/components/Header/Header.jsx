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
    <nav className="md:px-32 flex justify-between pt-5">
      <h2 className="text-3xl font-bold text-primary">Embars Membership</h2>

      <div>
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <Bars3Icon className="h-6 w-6 text-blue-700 md:hidden cursor-pointer"></Bars3Icon> : <XMarkIcon className="h-6 w-6 text-blue-700 md:hidden cursor-pointer"></XMarkIcon>}
        </div>
        <ul className="md:flex gap-11 font-bold text-xl">
          {routesArray.map((route) => (
            <Link route={route} key={route.id}></Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
