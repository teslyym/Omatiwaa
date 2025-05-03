import React from "react";
import Header from "../Components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="rounded-lg flex flex-col border w-[1374px] mx-auto mb-10 items-center gap-6">
        <div>
          <h1>
            Crafting user-centric digital products that delight and inspire - I
            bring expertise and creativity to every design.
          </h1>
        </div>
        <div>
          {" "}
          <p>
            Hi, I am Mojeedat, a UX designer with 3+ years of experience
            creating user-centric designs that balance business goals and user
            needs. Skilled in Lean UX and Agile methods, I specialize in
            designing intuitive, engaging experiences for both B2B and B2C
            products. My approach combines strategic insights and creativity to
            deliver optimized, user-focused designs.
          </p>
        </div>
        <div>
          <p>Feel free to explore other pages or visit our about page.</p>
          <a href="/about">About</a>
          <a href="/resume">Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
