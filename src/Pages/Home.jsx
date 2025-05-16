import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import Fivani from "../assets/Frame 1171278752.png";

const Home = () => {
  return (
    <div className=" mt-3">
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
        <div className="flex gap-3 justify-center rounded w-[449px] pb-3">
          <div className=" bg-[#0E191B] text-white text-center rounded-[40px] border w-[240px]">
            <Link className="" to={"/about"}>
              Find out more
            </Link>
          </div>
          <div className=" bg-[white] text-center rounded-[40px] border w-[240px]  text-black">
            <Link to={"/resume"}>Send a message</Link>
          </div>
        </div>
        <div className="bg-[blue]"></div>
        <div>
          <p>Projects</p>
          <div className="">
            <div className="flex py-[5%]">
              <div>
                <img src={Fivani} alt="" />
              </div>
              <div className="bg-[#05090A]  gap-6 justify-center px-4 py-4">
                <h1 className="text-[#53BDD1]">Saas Platform</h1>
                <p className="text-white">Fivani</p>
                <h2 className="text-white">
                  Web, Dashboard, and Mobile Design
                </h2>
                <h3 className="text-white">
                  Empowering freelancers to manage contracts, projects, and
                  payments seamlessly, all in one secure platform
                </h3>
                <div className="flex gap-3 rounded w-[449px] pb-3">
                  <div className=" bg-[#0E191B] text-white text-center rounded-[40px] border w-[240px]">
                    <Link className="" to={"/about"}>
                      View Case-Study
                    </Link>
                  </div>
                  <div className=" bg-[white] text-center rounded-[40px] border w-[240px]  text-black">
                    <Link to={"/resume"}>Check website Link</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex py-[5%]">
              <div>
                <img src={Fivani} alt="" />
              </div>
              <div className="bg-[#05090A] flex-grid gap-6 justify-center px-4 py-4">
                <h1 className="text-[#53BDD1]">Hospitality</h1>
                <p className="text-white">BuddyApp</p>
                <h2 className="text-white">Mobile App</h2>
                <h3 className="text-white">
                  Connecting solo travelers for safer, more enjoyable journeys
                  filled with shared experiences
                </h3>
                <div className="flex gap-3 rounded w-[449px] pb-3">
                  <div className=" bg-[#0E191B] text-white text-center rounded-[40px] border w-[240px]">
                    <Link className="" to={"/about"}>
                      View Case-Study
                    </Link>
                  </div>
                  <div className=" bg-[white] text-center rounded-[40px] border w-[240px]  text-black">
                    <Link to={"/resume"}>Check website Link</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex py-[5%]">
              <div>
                <img src={Fivani} alt="" />
              </div>
              <div className="bg-[#05090A] flex-grid gap-6 justify-center px-4 py-4">
                <h1 className="text-[#53BDD1]">Portfolio Website</h1>
                <p className="text-white">Zorfts Technologies</p>
                <h2 className="text-white">Web and Mobile Design</h2>
                <h3 className="text-white">
                  Bringing fresh produce and essentials directly to your
                  doorstep with convenience and reliability
                </h3>
                <div className="flex gap-3 rounded w-[449px] pb-3">
                  <div className=" bg-[#0E191B] text-white text-center rounded-[40px] border w-[240px]">
                    <Link className="" to={"/about"}>
                      View Case-Study
                    </Link>
                  </div>
                  <div className=" bg-[white] text-center rounded-[40px] border w-[240px]  text-black">
                    <Link to={"/resume"}>Check website Link</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex py-[5%]">
              <div>
                <img src={Fivani} alt="" />
              </div>
              <div className="bg-[#05090A] flex-grid gap-6 justify-center px-4 py-4">
                <h1 className="text-[#53BDD1]">Lifestyle and Home</h1>
                <p className="text-white">HomeVolt</p>
                <h2 className="text-white">Web, Dashboard and Mobile Design</h2>
                <h3 className="text-white">
                  Simplifying Property Rentals, Sales, and Renewable Energy
                  Solutions
                </h3>
                <div className="flex gap-3 rounded w-[449px] pb-3">
                  <div className=" bg-[#0E191B] text-white text-center rounded-[40px] border w-[240px]">
                    <Link className="" to={"/about"}>
                      View Case-Study
                    </Link>
                  </div>
                  <div className=" bg-[white] text-center rounded-[40px] border w-[240px]  text-black">
                    <Link to={"/resume"}>Check website Link</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          Closing div of the container
        </div>
      </div>
    </div>
  );
};

export default Home;
