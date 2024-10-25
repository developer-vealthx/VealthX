import React from "react";
import { Link } from "react-router-dom";
import Aboutbg from "./assets/images/aboutbg.png";
import Gurashant from "./assets/images/Gurashant.jpg";
import Parashuram from "./assets/images/Parashuram.jpg";
import Mallikarjun from "./assets/images/Mallikarjun.jpg";
import Rajesh from "./assets/images/Rajesh.png";

const people = [
  {
    name: "Gurashant Hanchinal",
    role: "CEO",
    imageUrl: Gurashant,
  },
  {
    name: "Parashuram Hallur",
    role: "CPO & CGO",
    imageUrl: Parashuram,
  },
  {
    name: "Mallikarjun Patil",
    role: "Chief Logistics Officer",
    imageUrl: Mallikarjun,
  },
  {
    name: "Rajesh G",
    role: "Principal Officer",
    imageUrl: Rajesh,
  },
];

const About = () => {
  return (
    <div>
      {/* Background Section */}
      <div
        style={{
          backgroundImage: `url(${Aboutbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
        className="flex items-center justify-center"
      >
        <div className="hero min-h-screen w-full px-6 sm:px-10 lg:px-20 xl:px-32 py-16 sm:py-24 lg:py-28 xl:py-36 flex flex-col justify-center items-start bg-opacity-70 bg-black">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-snug mb-14">
            About Us
          </h1>
          <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl leading-relaxed max-w-3xl text-justify mb-14">
            We empower families and individuals to secure and preserve their
            financial legacy with our advanced platform that makes managing your
            assets seamless and efficient.
          </p>
          <Link
            to="/TryVealthxNow"
            className="bg-yellow-500 text-black font-semibold py-3 px-8 rounded-lg text-lg sm:text-xl hover:bg-yellow-400 transition-colors"
          >
            Try Vealthx Now
          </Link>
        </div>
      </div>

      {/* Mission Section */}
      <div className="min-h-screen py-16 md:py-24 lg:py-32 xl:py-40 px-8 sm:px-12 md:px-20 lg:px-24 xl:px-32 2xl:px-36">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl mb-16 text-center">
          Our Mission
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="w-full flex flex-col justify-center">
            <div className="pl-4 border-l-4 border-yellow-500">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-justify leading-relaxed font-light">
                Our mission is to bridge the gap between individuals and their
                financial entitlements. At VealthX, we empower people to secure
                their financial future by reclaiming what is rightfully theirs.
                With a focus on transparency, simplicity, and trust, VealthX is
                your partner in safeguarding your financial legacy for the
                future.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="flex flex-col items-center">
        <div className="h-[20vh] w-full flex items-center justify-center font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Our Team
        </div>
        <div className="flex items-center justify-center w-full py-8">
          <div className="flex flex-wrap justify-center gap-6 max-w-7xl">
            {people.map((person, index) => (
              <div
                key={index}
                className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden w-72 transition-transform duration-300 transform hover:scale-105"
              >
                <div className="relative overflow-hidden h-80">
                  <img
                    src={person.imageUrl}
                    alt={`${person.name}-image`}
                    className={`object-cover w-full h-full transition-transform duration-300 hover:scale-110 ${
                      person.name === "Rajesh G" ? "object-top" : "object-center"
                    }`}
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {person.name}
                  </h3>
                  <p className="text-lg text-gray-600">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ready to Get Started Section */}
      <div className="h-[40vh] w-full bg-[#bdbdff] flex flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-between px-8 lg:px-24 xl:px-32 py-10">
        {/* Left side: Heading */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mt-14">
            Ready to get started?
          </h2>
        </div>

        {/* Right side: Description and Button */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left px-10 py-10">
          <p className="text-lg sm:text-xl lg:text-2xl text-black max-w-4xl mb-6 leading-relaxed">
            This is the space to introduce the Services section
            <br /> Briefly describe the types of services offered.
          </p>

          {/* Button placed directly below the content */}
          <button className="flex items-center bg-white py-2 px-6 rounded-full shadow-md hover:shadow-lg transition duration-300">
            <span className="mr-2">Contact Us</span>
            <span className="flex items-center justify-center h-8 w-8 bg-black rounded-full hover:bg-gray-800">
              <span className="text-xl font-bold text-white">{">"}</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
