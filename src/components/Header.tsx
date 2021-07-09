import { Disclosure, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { routes } from "constants/routes";
import Link from "next/link";
import useBreakpoint from "hooks/useBreakpoint";

const Header = () => {
  return (
    <Disclosure
      as="header"
      className="relative flex flex-row flex-wrap items-center justify-between px-6 py-4 antialiased bg-white"
    >
      {({ open }) => (
        <>
          <h1 className="text-2xl font-medium">
            <Link href="/" passHref>
              <a>
                <span className="font-bold text-orange">Joël</span> Kuijper
              </a>
            </Link>
          </h1>
          <nav className="hidden md:flex md:rounded-none md:shadow-none md:bg-transparent md:space-y-0 md:space-x-8 md:relative md:top-0 md:flex-row md:w-auto md:p-0">
            {routes.map((item, index) => (
              <Link href={item.path} passHref key={index}>
                <a className="text-lg font-semibold transition duration-75 border-b-2 border-transparent hover:border-orange max-w-max">
                  {item.name}
                </a>
              </Link>
            ))}
          </nav>

          <Disclosure.Panel className="absolute left-0 flex flex-col w-full top-16 p-6 pt-0 space-y-3 bg-white rounded-lg shadow-md md:hidden">
            {routes.map((item, index) => (
              <Link href={item.path} passHref key={index}>
                <a className="text-lg font-semibold transition duration-75 border-b-2 border-transparent hover:border-orange max-w-max">
                  {item.name}
                </a>
              </Link>
            ))}
          </Disclosure.Panel>

          <Disclosure.Button className="inline-flex items-center justify-center rounded-md md:hidden">
            {open ? (
              <XIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <MenuIcon className="block h-6 w-6" aria-hidden="true" />
            )}
          </Disclosure.Button>
        </>
      )}
    </Disclosure>
  );
};
export default Header;
