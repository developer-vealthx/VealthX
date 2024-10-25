import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import iphone from "./assets/svg/iPhone_16_Pro.svg";
import Discover from "./assets/images/Discover.png";
import Aggregate from "./assets/images/Aggregate.png";
import Will from "./assets/images/Will.png";
import Claim from "./assets/images/claim.png";
gsap.registerPlugin(ScrollTrigger);

const Fold2 = () => {
  // useEffect(() => {
  //   const updateAnimations = () => {
  //     const isMobile = window.innerWidth < 768; // Mobile breakpoint
  //     const isTablet = window.innerWidth >= 768; // Tablet breakpoint
  //     // Desktop is implicitly anything >= 768px

  //     // Clear existing animations
  //     ScrollTrigger.getAll().forEach((st) => st.kill());
  //     gsap.killTweensOf(".iphoneImg");

  //     const t1 = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ".fold22",
  //         start: "0% 100%",
  //         end: "40% 50%",
  //         scrub: true,
  //       },
  //     });

  //     t1.to(".iphoneImg", {
  //       top: isMobile ? "35%" : isTablet ? "28%" : "28%",
  //       left: isMobile ? "50%" : isTablet ? "25%" : "25%",
  //       xPercent: isMobile || isTablet ? -50 : -50,
  //       scale: isMobile ? 0.8 : isTablet ? 1 : 1,
  //     });

  //     const t2 = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ".fold23",
  //         start: "0% 100%",
  //         end: "50% 50%",
  //         scrub: true,
  //       },
  //     });

  //     t2.to(".iphoneImg", {
  //       top: isMobile ? "60%" : isTablet ? "55%" : "55%",
  //       left: isMobile ? "50%" : isTablet ? "75%" : "75%",
  //       xPercent: isMobile || isTablet ? -50 : -50,
  //       scale: isMobile ? 0.8 : isTablet ? 1 : 1,
  //     });

  //     const t3 = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ".fold24",
  //         start: "5% 100%",
  //         end: "50% 50%",
  //         scrub: true,
  //       },
  //     });

  //     t3.to(".iphoneImg", {
  //       top: isMobile ? "85%" : isTablet ? "78%" : "78%",
  //       left: isMobile ? "50%" : isTablet ? "25%" : "25%",
  //       xPercent: isMobile || isTablet ? -50 : -50,
  //       scale: isMobile ? 0.8 : isTablet ? 1 : 1,
  //     });
  //   };

  //   // Initial setup
  //   updateAnimations();

  //   // Update on window resize
  //   window.addEventListener("resize", updateAnimations);

  //   // Cleanup
  //   return () => {
  //     window.removeEventListener("resize", updateAnimations);
  //     ScrollTrigger.getAll().forEach((st) => st.kill());
  //   };
  // }, []);

  return (
    <>
      <div className="fold2 bg-white w-full rounded-t-[2%] relative pt-[10vh]">
        <div className="min-h-screen flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 lg:w-[60%]  px-10 lg:px-24 2xl:pl-52 flex justify-center flex-col py-10 md:py-0">
            <h1 className="font-bold text-5xl md:text-7xl">Discover</h1>
            <p className="text-lg text-justify md:text-xl font-semibold mt-8 md:mt-14 lg:mt-28 lg:w-[85%]">
              Uncover hidden, unclaimed, or forgotten assets. Whether it's lost
              bank accounts, insurance policies, retirement funds, or other
              financial assets, VealthX Discovery searches through multiple
              databases to identify these opportunities. By using advanced
              algorithms and comprehensive data sources, the feature streamlines
              the asset recovery process, making it easy for you and your
              families to find and claim what is rightfully yours. With just a
              few clicks, you can unlock the potential of your untapped
              financial resources.
            </p>

            <Link
              to="/discover"
              className="w-fit text-center mt-8 md:mt-10 lg:mt-24 py-3 px-8 text-xl font-semibold bg-black text-white rounded-full"
            >
              Discover
            </Link>
          </div>
          <div className="w-full md:w-1/2 h-screen lg:w-[40%] flex items-center justify-center py-10 md:py-0">
            <img
              src={Discover}
              alt="iphone"
              className="iphoneImg absolute md:w-[30vh] xl:w-[40vh] h-auto"
              style={{ transition: "all 0.5s cubic-bezier(0.19, 1, 0.22, 1)" }}
            />
          </div>
        </div>

        <div className="fold22 min-h-screen flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-screen lg:w-[40%] order-2 md:order-1  flex items-center justify-center py-10 md:py-0">
            <img
              src={Claim}
              alt="iphone"
              className="w-[35vh] md:w-[30vh] xl:w-[38vh] h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-[60%] order-1 md:order-2 2xl:pl-52  px-10 lg:px-24 flex justify-center flex-col py-10 md:py-0">
            <h1 className="font-bold text-5xl md:text-7xl">Claims</h1>
            <p className="text-lg text-justify md:text-xl font-semibold mt-8 md:mt-14 lg:mt-28 lg:w-[85%]">
              Simplifies the process of claiming unclaimed or undiscovered
              assets once they are identified. After using the Discovery feature
              to locate potential assets, you can initiate and manage claims
              directly through the platform. This feature guides you through the
              necessary steps, helping them complete the required documentation
              and submissions efficiently. VealthX also provides support and
              resources to navigate legal or bureaucratic hurdles, ensuring you
              can successfully recover and reclaim your assets with minimal
              hassle. The Claims feature empowers you to take control of your
              financial recovery with confidence.
            </p>
            <Link
              to="/discover"
              className="w-fit text-center mt-8 md:mt-10 lg:mt-24 py-3 px-8 text-xl font-semibold bg-black text-white rounded-full"
            >
              Claim
            </Link>
          </div>
        </div>

        <div className="fold23 min-h-screen flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 lg:w-[60%]  px-10 lg:px-24 2xl:pl-52 flex justify-center flex-col py-10 md:py-0">
            <h1 className="font-bold text-5xl md:text-7xl">Aggregate</h1>
            <p className="text-lg text-justify md:text-xl font-semibold mt-8 md:mt-14 lg:mt-28 lg:w-[85%]">
              Consolidates all discovered assets into one comprehensive view,
              allowing you to easily manage and track your financial recoveries
              as well as your current assets which you own and inherit. This
              feature gathers information from various asset types—such as bank
              accounts, insurance policies, retirement funds, and more—into a
              single dashboard. By providing a holistic view of your asset
              portfolio, you can stay organized and monitor the status of each
              claim in real-time. The Aggregate feature ensures that nothing is
              overlooked, streamlining the entire recovery process for maximum
              efficiency and clarity.
            </p>
            <Link
              to="/discover"
              className="w-fit text-center mt-8 md:mt-10 lg:mt-24 py-3 px-8 text-xl font-semibold bg-black text-white rounded-full"
            >
              Aggregate
            </Link>
          </div>
          <div className="w-full md:w-1/2 h-screen lg:w-[40%] flex items-center justify-center py-10 md:py-0">
            <img
              src={Aggregate}
              alt="iphone"
              className="md:w-[30vh] xl:w-[40vh] h-auto"
            />
          </div>
        </div>

        <div className="fold24 min-h-screen flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-screen lg:w-[40%] order-2 md:order-1  flex items-center justify-center py-10 md:py-0">
            <img
              src={Will}
              alt="iphone"
              className="md:w-[30vh] xl:w-[40vh] h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-[60%] order-1 md:order-2 2xl:pl-52  px-10 lg:px-24 flex justify-center flex-col py-10 md:py-0">
            <h1 className="font-bold text-5xl md:text-7xl">Make a Will</h1>
            <p className="text-lg text-justify md:text-xl font-semibold mt-8 md:mt-14 lg:mt-28 lg:w-[85%]">
              Empowers you to easily draft and customize your own legal will
              online, ensuring your assets are distributed according to your
              wishes. This feature simplifies the process of estate planning by
              providing a step-by-step guide to creating a will that meets legal
              standards. You can specify beneficiaries, designate asset
              distribution, and include personal instructions—all within a
              user-friendly interface. Additionally, Vealthx offers guidance on
              updating and maintaining the will over time, ensuring it remains
              aligned with life changes and legal requirements. This feature
              gives you peace of mind, knowing your legacy is secured and your
              loved ones are protected.
            </p>
            <Link
              to="/discover"
              className="w-fit text-center mt-8 md:mt-10 lg:mt-24 py-3 px-8 text-xl font-semibold bg-black text-white rounded-full"
            >
              Make a will
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fold2;
