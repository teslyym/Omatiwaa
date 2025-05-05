import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="rounded-lg flex flex-col border mt-[8%] w-[80%] mx-auto mb-10 items-center gap-6">
        <div>
          <h1>
            Crafting
            <span className=" text-[#4898A7]">
              user-centric digital products
            </span>
            that
            <span>delight</span> and <span>inspire </span> - I bring expertise
            and creativity to every <span>design</span>.
          </h1>
        </div>
        <div>
          <p>
            Hi, I am Mojeedat, a UX designer with 3+ years of experience
            creating user-centric designs that balance business goals and user
            needs. Skilled in Lean UX and Agile methods, I specialize in
            designing intuitive, engaging experiences for both B2B and B2C
            products. My approach combines strategic insights and creativity to
            deliver optimized, user-focused designs.
          </p>
        </div>
        <div className="flex gap-1">
          <Link to={"/about"}>About</Link>
          <Link to={"/resume"}>Resume</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
