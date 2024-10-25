import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";

const Fold5 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Who is Vealthx?",
      answer: "We are a distinguished financial product and services firm that collaborates with account aggregators and leading banks, insurance companies, government entities, mutual fund providers, and various financial institutions. Our core commitment lies in delivering top-notch wealth management solutions to individuals and facilitating the retrieval of lost or unclaimed assets within the financial system. Utilizing our state-of-the-art technology platform, 'Vealthx,' clients can seamlessly uncover financial assets, benefit from expert wealth management advice, investigate unclaimed assets, engage in investment opportunities, and obtain comprehensive net worth summaries."
    },
    {
      question: "What is the problem with Unclaimed assets which Indian families facing today?",
      answer: "Many Indian families now have the opportunity to reclaim lost or unclaimed ancestral assets, such as shares, debentures, deposits, bank accounts, mutual funds, insurances, and other investments. VealthX empowers investors to recover these assets from financial institutions and the IEPF Authority."
    },
    {
      question: 'Why do assets become "Unclaimed"?',
      answer: 'There are several reasons why assets become unclaimed or separated from their rightful owners. Common causes include:<ul> <li>Death of the asset holder, with the legal heirs or nominees not identifying or being aware of the asset.</li> <li>Changing residences and forgetting to update the bank or other providers with your new address.</li> <li>Fraudulent activities, such as unauthorized changes to names or addresses.</li> <li>Making investments and either forgetting about them or failing to inform family members, such as a spouse or children.</li></ul>'
    },
    {
      question: "What are the services provided by VealthX?",
      answer: "<ol> <li><b>Net Worth Overview:</b> Comprehensive display of your total net worth.</li> <li><b>Inheritance Details:</b> Detailed report of your inherited assets.</li> <li><b>Missing Wealth Report:</b> Identification and reporting of unclaimed wealth.</li> <li><b>Nominee Registration/Update:</b> Efficient management of nominee information for your assets.</li> <li><b>Missing Wealth Recovery:</b> Full assistance in claiming unclaimed wealth.</li> <li><b>Inheritance Claims:</b> Support in claiming your rightful inheritance.</li> <li><b>KYC Compliance Services:</b> Streamlined Know Your Customer (KYC) verification services.</li> <li><b>Dynamic Will Management:</b> Make a dynamic, keep it always up to date</li> <li><b>VealthX Expats:</b> Identification and recovery of assets located outside India.</li> <li><b>Insurance Plan Overview:</b> Summary and management of your insurance plans.</li> <li><b>Expert Consultation:</b> Connect with VealthX agents and legal experts for professional advice.</li></ol>"
    },
    {
      question: "Who is Vealthx Agent? How can he help?",
      answer: "VealthX Agents are professional financial advisors dedicated to supporting you with comprehensive wealth management services. They assist in locating unclaimed funds, guiding you through the recovery process, and ensuring peace of mind. Our agents can also provide expert guidance on all the services offered by VealthX, as listed previously."
    },
    {
      question: "Who can use the service of Vealthx?",
      answer: "Anyone who is an adult, aged 18 years or older, and a resident of India can register to become a user of the VealthX platform. Additionally, corporations can centrally onboard VealthX to offer privileged services to their employees."
    }
  ];

  const faqAnswerStyle = {
    '& ul': {
      listStyleType: 'disc',
      paddingLeft: '1.5rem',
      marginTop: '0.5rem',
      marginBottom: '0.5rem',
    },
    '& ol': {
      listStyleType: 'decimal',
      paddingLeft: '1.5rem',
      marginTop: '0.5rem',
      marginBottom: '0.5rem',
    },
    '& li': {
      marginBottom: '0.25rem',
    },
  };

  return (
    <div className='py-8 '>
      <h1 className='text-center text-4xl sm:text-5xl md:text-6xl font-bold text-[#4F37BF]'>Get All the Answers You Need </h1>
      {/* <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold">FAQs!</h2> */}

      

      <div className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 py-12">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 last:border-b-0">
            <button
              className="flex justify-between items-center w-full p-4 text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-base sm:text-lg font-medium pr-4">{faq.question}</span>
              <span className={`transform transition-transform duration-200 ${openIndex === index ? 'rotate-45' : ''} flex-shrink-0`}>
                <FaPlus className='text-green-600'/>
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-50">
                <div 
                  className="text-base sm:text-lg faq-answer"
                  style={faqAnswerStyle}
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Fold5
