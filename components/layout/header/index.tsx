import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

import Navbar from "./navbar";
import { default as Logo } from "./logo.svg";

interface MobileButtonProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// logo part
const LogoPart = () => (
  <div className="flex lg:flex-1 items-center">
    <Link href="/">
      <span className="sr-only">Site Logo</span>
      <Image src={Logo} alt="logo" className="lg:w-[81px]" />
    </Link>
  </div>
);

// mobile responsive control button
const MobileButton: React.FC<MobileButtonProps> = ({
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  return (
    <button
      id="mobileMenuButton"
      className={`relative lg:hidden cursor-pointer w-8 h-8 px-1 py-1.5 my-auto transition-all 0.5s ${
        mobileMenuOpen ? "active" : ""
      }`}
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

const Header = () => {
  const navbarRef = useRef<HTMLElement>(null);
  // State to control open or close mobile navbar
  const [isOpen, setIsOpen] = useState(false);
  // State to control open or close mobile navbar submenus
  const [isActive, setIsActive] = useState([false, false, false, false, false]);

  // Handle onClick event on navbar submenus
  const updateIsActive = (index: number) => {
    setIsActive((prevIsActive) => {
      const newIsActive = [false, false, false, false, false];
      newIsActive[index] = !prevIsActive[index];
      return newIsActive;
    });
  };

  // Handle onClick event outside navbar menu on mobile version
  const handleClickOutside = (event: MouseEvent) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
      setIsActive([false, false, false, false, false]);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white relative">
      <nav
        ref={navbarRef}
        className="flex justify-between items-stretch h-[81px] lg:h-[100px] px-4 lg:px-0 lg:max-w-[1140px] lg:mx-auto">
        <LogoPart />
        <Navbar
          open={isOpen}
          isActive={isActive}
          updateIsActive={updateIsActive}
        />
        <MobileButton mobileMenuOpen={isOpen} setMobileMenuOpen={setIsOpen} />
      </nav>
    </header>
  );
};

export default Header;
