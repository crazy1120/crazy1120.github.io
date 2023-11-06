import { useEffect, useRef, useState } from "react";

const useSticky = (): {
  stickyRef: React.MutableRefObject<any>;
  sticky: boolean;
} => {
  const stickyRef: React.MutableRefObject<any> = useRef(null);

  const [sticky, setSticky]: [boolean, Function] = useState(false);
  const [stickyOffset, setStickyOffset]: [number, Function] = useState(0);

  useEffect(() => {
    if (!stickyRef.current) {
      return;
    }

    setStickyOffset(stickyRef.current.offsetTop);
  }, [stickyRef, setStickyOffset]);

  useEffect(() => {
    const handleScroll = () => {
      if (!stickyRef.current) {
        return;
      }
      const shouldBeSticky = window.scrollY > stickyOffset;
      setSticky(shouldBeSticky);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setSticky, stickyRef, stickyOffset]);

  return { stickyRef, sticky };
};

export default useSticky;
