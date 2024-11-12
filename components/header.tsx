"use client";
import React from "react";
import { useEffect, useState } from "react";
import HeaderNav from "./header-nav";
import NavBar from "./navbar";

const Header = () => {
  const [showHeaderNav, setShowHeaderNav] = useState(true);

  // Track scrolling to hide HeaderNav on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowHeaderNav(window.scrollY < 50); // Hide HeaderNav when scrolled more than 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* Conditionally render HeaderNav based on scroll position */}
      {showHeaderNav && <HeaderNav />}

      {/* Make NavBar sticky */}
      <div className='sticky top-0 z-50'>
        <NavBar />
      </div>
    </>
  );
};

export default Header;
