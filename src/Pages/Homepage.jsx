/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Strips from "../components/Strips";
import { Link } from "react-router-dom";
import Cursor from "../components/Cursor";

const Homepage = () => {
  return (
    <>
    <Cursor/>
    <div className="h-full w-full flex-col items-center flex justify-center">
      <h1 className="text-6xl px-24 pt-24 pb-6 text-center">
        "Empowering Minds, Igniting Ideas: TEDxJEC Where{" "}
        <span className="text-red-600 font-semibold">Innovation</span> Meets
        <span className="text-red-600 font-semibold"> Inspiration!"</span>
      </h1>

      <p className="text-center w-1/2 px-12 py-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        maxime non, corrupti doloremque quos laboriosam veritatis quibusdam
        libero unde veniam, esse neque similique alias officia nihil maiores
        culpa ipsum minima.
      </p>
      <Link to="/ticket">
        <button className="py-3 my-4 text-xl ticket rounded-3xl hover:bg-black  border-red-600 hover: border-2 shadow-red-600 shadow-2xl px-12 bg-red-600">
          Get Your Ticket
        </button>
      </Link>
      <div className="my-12 py-12 overflow-hidden w-screen">
        <Strips />
      </div>
    </div>
    </>
  );
};

export default Homepage;
