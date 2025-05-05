import React from "react";
import Logo from "../assets/Frame 113 (1).png";

const Header = () => {
  return (
    <div>
      <div className="rounded-full sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4  border-[#467C86] border-[1px] mx-auto mb-10  gap-6  w-[80%] bg-white top-0 flex items-center text-[#001712] static px-[7vw] py-4 justify-between">
        {/* <button class="hamburger" onclick="toggleMenu()">
          ☰
        </button>
        <div class="mobile-nav" id="navMenu">
</div>  */}

        <div>
          <img src={Logo} />
        </div>
        <div className=" gap-[5px] list-none flex">
          <li>Work</li>
          <li>Services</li>
          <li>About</li>
          <li>Fun</li>
          <li>Resume</li>
        </div>
      </div>
    </div>
  );
};

export default Header;
