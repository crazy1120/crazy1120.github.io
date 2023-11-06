import Link from "next/link";
import { ReactNode } from "react";

interface NavbarSubmenuProps {
  title: string;
  comp: ReactNode;
  isActive: boolean;
  onClick?: () => void;
}

const NavbarSubmenu: React.FC<NavbarSubmenuProps> = ({
  title,
  comp,
  isActive,
  onClick,
}) => {
  return (
    <li onClick={onClick} className={isActive ? "active" : ""}>
      <Link href={"#"}>
        {title}
        <div className="flex items-center justify-center w-6 h-6">
          {isActive ? (
            <i className="fa fa-caret-up" />
          ) : (
            <i className="fa fa-caret-down" />
          )}
        </div>
      </Link>
      {comp}
    </li>
  );
};

export default NavbarSubmenu;
