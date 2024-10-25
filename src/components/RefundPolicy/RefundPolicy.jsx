import React from "react";
import Background from "./assets/images/OurJourneybg.png";
import Boxground from './assets/images/boxbg.png';

const RefundPolicy = () => {
  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden">
      {/* Placeholder for future content */}

      {/* Background Image */}
      <img
        src={Background}
        className="fixed top-0 right-0 z-[-1] h-full w-full object-cover"
        alt="Background"
      />

      {/* Title Section */}
      <div
        className="flex items-center justify-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl h-[20vh] text-center"
      >
        <div className="mt-[15px]">Cancellation & Refund Policy</div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start h-auto md:h-[90%] p-4 md:p-0">
        {/* Left Spacer for layout alignment */}
        <div className="w-[5%] md:w-[10%] h-full hidden md:block"></div>

        {/* Main Content with Black Outline */}
        <div
          className="w-full md:w-[80%] h-full flex flex-col justify-center items-center text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-justify space-y-8"
          style={{ textShadow: "2px 2px 4px #000" }}
        >
          <div 
            className="w-full md:w-[80%] text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl p-8 md:p-12 lg:p-16 rounded-xl shadow-2xl space-y-8"
            style={{
              backgroundImage: `url(${Boxground})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              textShadow: '2px 2px 4px #000',
            }}
          >
            <p className="mb-6">
              1. Refund Policy <br />
              At Vealthx (a unit of Cettlx Services Pvt. Ltd), customer
              satisfaction is our top priority. We understand that sometimes
              things don't go as planned, so we’ve created a refund policy to
              ensure a fair and transparent process. <br />
              We thank you and appreciate your service or product purchase with us
              on our Website www.vealthx.com (hereinafter referred to as
              “Vealthx”). Please read this policy and the Vealthx terms and
              conditions carefully as they will give you important information and
              guidelines about your rights and obligations as our customer, with
              respect to any purchase or service we provide to you. <br />
              We make every effort to provide the service to you as per the
              specifications and timelines mentioned against each service or
              product purchased by you from Vealthx, however if, due to any
              reason, we are unable to provide to you the service or product you
              purchased from us, then you shall be entitled to a refund which
              shall be subject on the following situations: <br />
              The Refund shall be only considered in the event there is a clear,
              visible deficiency with the service or product purchased from
              Vealthx.<br />
              In the event a customer has paid for a service and then requests for
            a refund only because there was a change in mind, the refund shall
            not be considered as there is no fault, defect, or onus on Vealthx.{" "}
            <br />
            Refund requests shall not be entertained after the work has been
            shared with you in the event of change of mind. However, we shall
            give you the option of using the amount paid for by you, for an
            alternative service in Vealthx amounting to the same value and the
            said amount could be applied in part or whole towards the said new
            service;  <br />
            If the request for a refund has been raised 30 (thirty) days after
            the purchase of a service or product has been completed and the same
            has been intimated and indicated via email or through any form of
            communication stating that the work has been completed, then, such
            refund request shall be deemed invalid and shall not be considered.{" "}
            <br />
            If the request for the refund has been approved by Vealthx, the same
            shall be processed and intimated to you via email. This refund
            process could take a minimum of 15 (fifteen) business days to
            process and shall be credited to your bank account accordingly. We
            shall handle the refund process with care and ensure that the money
            spent by you is returned to you at the earliest. <br />
            2. GRIEVANCE OFFICER.
            <br />
            In accordance with Consumer Protection (E-Commerce) Rules, 2020 and
            rules made there under, the name and contact details of the
            Grievance Officers: grievance@vealthx.com <br />
            </p>
          </div>
        </div>

        {/* Right Spacer for layout alignment */}
        <div className="w-[5%] md:w-[10%] h-full hidden md:block"></div>
      </div>
      <div className="w-full h-[10vh]">.</div>
    </div>
  );
};

export default RefundPolicy;
