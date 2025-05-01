import React from "react";
import Header from "../Components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="rounded-lg flex flex-col border w-[80%] mx-auto mb-10 items-center gap-6">
        <h1>Welcome to the Home Page</h1>
        <p>This is the home page of our my new application.</p>
        <p>Feel free to explore other pages or visit our about page.</p>
        <a href="/about">About</a>
      </div>
    </div>
  );
};

export default Home;
