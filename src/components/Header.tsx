import { Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { routes } from "constants/routes";
import Link from "next/link";
import { Fragment } from "react";

const Header = () => {
  return (
    <Menu as="header" className="py-6 antialiased border-b-2 dark:border-gray-900 border-gray-200">
      {({ open }) => (
        <div className="px-6 mx-auto max-w-7xl relative z-20 flex flex-row flex-wrap items-center justify-between ">
          <h1 className="text-2xl font-medium">
            <Link href="/" passHref>
              <a>
                <span className="font-bold text-primary">Joël</span> Kuijper
              </a>
            </Link>
          </h1>
          <Menu.Button className="inline-flex items-center justify-center rounded-md md:hidden">
            {open ? (
              <XIcon className="block w-6 h-6" aria-hidden="true" />
            ) : (
              <MenuIcon className="block w-6 h-6" aria-hidden="true" />
            )}
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              as="nav"
              className="dark:bg-dark bg-white absolute left-0 z-10 flex flex-col w-full p-6 space-y-3 md:hidden items-center sm:items-start origin-top-right rounded-b-lg shadow-md top-16"
            >
              {routes.map((item, index) => (
                <Link href={item.path} passHref key={index}>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={`${
                          active && "border-primary"
                        } text-2xl font-normal transition duration-75 border-b-2 border-transparent max-w-max`}
                      >
                        {item.name}
                      </a>
                    )}
                  </Menu.Item>
                </Link>
              ))}
            </Menu.Items>
          </Transition>
          <nav className="hidden md:flex md:rounded-none md:shadow-none md:bg-transparent md:space-y-0 md:space-x-12 md:relative md:top-0 md:flex-row md:w-auto md:p-0">
            {routes.map((item, index) => (
              <Link href={item.path} passHref key={index}>
                <a className="text-lg font-normal transition duration-75 border-b-2 border-transparent hover:border-primary focus:border-primary active:border-primary max-w-max">
                  {item.name}
                </a>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </Menu>
  );
  // return (
  //   <Disclosure
  //     as="header"
  //     className="relative flex flex-row flex-wrap items-center justify-between px-6 py-4 antialiased bg-white"
  //   >
  //     {({ open }) => (
  //       <>
  //         <h1 className="text-2xl font-medium ">
  //           <Link href="/" passHref>
  //             <a>
  //               <span className="font-bold text-primary">Joël</span> Kuijper
  //             </a>
  //           </Link>
  //         </h1>
  //         <nav className="hidden md:flex md:rounded-none md:shadow-none md:bg-transparent md:space-y-0 md:space-x-8 md:relative md:top-0 md:flex-row md:w-auto md:p-0">
  //           {routes.map((item, index) => (
  //             <Link href={item.path} passHref key={index}>
  //               <a className="text-lg font-semibold transition duration-75 border-b-2 border-transparent hover:border-primary max-w-max">
  //                 {item.name}
  //               </a>
  //             </Link>
  //           ))}
  //         </nav>

  //         <Disclosure.Panel className="absolute left-0 flex flex-col w-full p-6 pt-0 space-y-3 bg-white rounded-lg shadow-md top-16 md:hidden">
  //           {routes.map((item, index) => (
  //             <Link href={item.path} passHref key={index}>
  //               <a className="text-lg font-semibold transition duration-75 border-b-2 border-transparent hover:border-primary max-w-max">
  //                 {item.name}
  //               </a>
  //             </Link>
  //           ))}
  //         </Disclosure.Panel>

  //         <Disclosure.Button className="inline-flex items-center justify-center rounded-md md:hidden">
  //           {open ? (
  //             <XIcon className="block w-6 h-6" aria-hidden="true" />
  //           ) : (
  //             <MenuIcon className="block w-6 h-6" aria-hidden="true" />
  //           )}
  //         </Disclosure.Button>
  //       </>
  //     )}
  //   </Disclosure>
  // );
};
export default Header;
