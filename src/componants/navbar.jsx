import { useState } from "react";
import { RiMenuUnfold2Line } from "react-icons/ri";
import { LuGitPullRequestClosed } from "react-icons/lu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleMenu = () => {
    setIsOpen((is) => !is);
  };
  return (
    <header>
      <nav className="">
        <div className="flex items-center justify-around overflow-hidden pt-12 md:justify-between md:px-16">
          <div className="z-50 flex flex-col items-center justify-center">
            <h1 className="md:text-2xl">Cryptocurrency</h1>
            <span className="mt-[-15px] text-blue-300">CheckYourMoney</span>
          </div>
          <ul
            className={`${isOpen ? "hidden" : "bg-main absolute top-0 right-0 bottom-0 left-0 flex h-screen flex-col"} items-center justify-end gap-10 md:flex`}
          >
            <li>Cryptocurrency</li>
            <li>Learn</li>
            <li>Individuals</li>
            <li>Business</li>
            <li>Developers</li>
            <li>Company</li>
          </ul>
          <div className="z-50 text-2xl md:hidden" onClick={toggleMenu}>
            {isOpen ? <RiMenuUnfold2Line /> : <LuGitPullRequestClosed />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
