import { useState } from "react";
import * as GiIcons from "react-icons/gi";
import * as MdIcons from "react-icons/md";
import Link from "next/link";
import { Transition } from "@headlessui/react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const menu = [
    {
      title: "Playground",
      link: "/playground",
      cta: false,
    },
    {
      title: "About",
      link: "/about",
      cta: false,
    },
    {
      title: "Login",
      link: "/login",
      cta: true,
    },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-30 h-16 shadow-xl">
      <div className="bg-white py-5">
        <div className="container flex justify-between items-center h-full">
          <Link href="/" className="">
            <a className="font-bold text-gray-900">produktifku.</a>
          </Link>
          <div
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className="sm:hidden block cursor-pointer"
          >
            {showMenu ? (
              <MdIcons.MdOutlineClose size={24} className="text-blue-500" />
            ) : (
              <GiIcons.GiHamburgerMenu size={24} className="text-blue-500" />
            )}
          </div>
          <div className="space-x-10 sm:flex items-center hidden ">
            {menu.map((item, key) => {
              return (
                <Link href={item.link}>
                  <a
                    key={key}
                    className={`py-2 ${
                      item.cta &&
                      "bg-blue-500 rounded-full text-white px-5 font-bold"
                    }`}
                  >
                    {item.title}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <Transition
        enter="transition-all transform  duration-200"
        enterFrom="-translate-y-10 opacity-0"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all transform duration-300"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="-translate-y-10 opacity-0"
        show={showMenu}
      >
        <div className="sm:hidden z-10 bg-white shadow-xl pb-5 flex flex-col container space-y-1">
          {menu.map((item, key) => {
            return (
              <Link href={item.link}>
                <a
                  key={key}
                  className={`py-2 ${
                    item.cta &&
                    "bg-blue-500 rounded-full mt-2 text-white px-5 font-bold text-center"
                  }`}
                >
                  {item.title}
                </a>
              </Link>
            );
          })}
        </div>
      </Transition>
    </div>
  );
}
