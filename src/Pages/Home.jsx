import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import Fivani from "../assets/Frame 1171278752.png";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="rounded-lg flex flex-col mt-[8%] w-[80%] mx-auto mb-10 items-center gap-4">
        <div className="w-full leading-[92px] text-justify">
          <h1 className="font-semibold text-6xl">
            Crafting{" "}
            <span className="text-[#4898A7]">
              user-centric digital products
            </span>{" "}
            that <span className="text-[#4898A7]">delight</span> and{" "}
            <span className="text-[#4898A7]">inspire</span> – I bring expertise
            and creativity to every{" "}
            <span className="text-[#4898A7]"> design</span>.
          </h1>
        </div>

        <div>
          <p className=" font-normal text-2xl leading-[46px] text-justify">
            Hi, I am Mojeedat, a UX designer with 3+ years of experience
            creating user-centric designs that balance business goals and user
            needs. Skilled in Lean UX and Agile methods, I specialize in
            designing intuitive, engaging experiences for both B2B and B2C
            products. My approach combines strategic insights and creativity to
            deliver optimized, user-focused designs.
          </p>
        </div>
        <div className="flex gap-3 rounded w-[449px] pb-3">
          <div className=" bg-[#0E191B] items-center align-middle text-white rounded border w-[150px]">
            <Link className="" to={"/about"}>
              Find out more
            </Link>
          </div>
          <div className=" bg-[white] items-center align-middle text-black rounded border w-[150px]">
            <Link to={"/resume"}>Send a message</Link>
          </div>
        </div>
        <div className="bg-[blue]"></div>
        <div>
          <p>Projects</p>
          <div className="flex">
            <div>
              <img src={Fivani} alt="" />
            </div>
            <div className="bg-[#05090A] flex-grid gap-6 justify-center px-4 py-4">
              <h1 className="text-[#53BDD1]">Saas Platform</h1>
              <p className="text-white">Fivani</p>
              <h2 className="text-white">Web, Dashboard, and Mobile Design</h2>
              <h3 className="text-white">
                Empowering freelancers to manage contracts, projects, and
                payments seamlessly, all in one secure platform
              </h3>
              c
            </div>
            <div>
              <div>
                <img src={Fivani} alt="" />
              </div>
              <div className="bg-[#05090A] flex-grid gap-6 justify-center px-4 py-4">
                <h1 className="text-[#53BDD1]">Hospitality</h1>
                <p className="text-white">Fivani</p>
                <h2 className="text-white">
                  Web, Dashboard, and Mobile Design
                </h2>
                <h3 className="text-white">
                  Empowering freelancers to manage contracts, projects, and
                  payments seamlessly, all in one secure platform
                </h3>
                <div className="flex gap-3 rounded w-[449px] pb-3">
                  <div className=" bg-[#0E191B] items-center align-middle text-white rounded border w-[150px]">
                    <Link className="" to={"/about"}>
                      View Case-Study
                    </Link>
                  </div>
                  <div className=" bg-[white] items-center align-middle text-black rounded border w-[150px]">
                    <Link to={"/resume"}>Check website Link</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
