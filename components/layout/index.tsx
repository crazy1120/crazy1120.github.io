import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";

import Footer from "./footer";
import Header from "./header";
import { actions } from "@/utils/store";
import { NextSeo } from "next-seo";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  desc?: string;
  og?: object;
  canonical?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  desc,
  og,
  canonical,
}) => {
  const dispatch = useDispatch();
  const { setType } = actions;

  // Determine initial device width
  useEffect(() => {
    window.innerWidth <= 640
      ? dispatch(setType("mobile"))
      : window.innerWidth <= 1024
      ? dispatch(setType("tablet"))
      : dispatch(setType("laptop"));
  }, []);

  // Set state for device width
  useEffect(() => {
    const handleResize = () => {
      window.innerWidth <= 640
        ? dispatch(setType("mobile"))
        : window.innerWidth <= 1024
        ? dispatch(setType("tablet"))
        : dispatch(setType("laptop"));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-white">
        <NextSeo
          title={title}
          description={desc}
          openGraph={og}
          canonical={canonical}
        />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
