import React from 'react'
import { useState } from 'react'
import { RiRobot2Fill } from "react-icons/ri";
import { IoMdContacts } from "react-icons/io";
import { GoGraph } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaCheckCircle, FaCloud, FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaCirclePlus, FaRegCircleCheck } from "react-icons/fa6";
import { IoGift, IoDiamondSharp, IoRibbon, IoCartOutline } from "react-icons/io5";
import { BsShieldFillCheck } from "react-icons/bs";
import { MdCopyright } from "react-icons/md";
import { ImCross } from "react-icons/im";
import Man from '../assets/man-image-2.jpeg'
import Women1 from '../assets/women-image-1.jpg'
import Women2 from '../assets/women-image-2.jpg'
import Logo1 from '../assets/logo1-Photoroom.png'
import hero from '../assets/hero3-Photoroom.png'
import "swiper/css";
import 'swiper/css/autoplay';
import '../App.css'
import { NavLink, Route, Routes } from 'react-router-dom';

const Home = (props) => {
    const url = import.meta.env.VITE_APP_URL;
  const [selectedfaq, setselectedfaq] = useState(null);
  const [formdata, setformdata] = useState({name: "",company: "",email: "",country: "",industry: "",companysize: "",phone: "",message: "",budget:""});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata((prev) => ({ ...prev, [name]: value, }));
  };
  const{ inquiries,setinquiries}=props;
const handleform = async (e) => {
  e.preventDefault();
  console.log(formdata);

  try {
    const response = await fetch(`${url}/api/add-inquiry`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    });

    const result = await response.json();

    if (result.success) {
      const updatedInquiries = [...inquiries];
      updatedInquiries.push(result.inquiry);
      setinquiries(updatedInquiries);
      setformdata({name: "",company: "",email: "",country: "",industry: "",companysize: "",phone: "",message: "",budget:""});
    } 
  } catch (error) {
    console.error(error);
  }
};
  const testimonials = [
    {
      id: 1, name: "Sarah Johnson", rating: 5, image: Women1,
      review: "NestHub CRM helped us increase sales by 40% in just six months. It's a game changer!", designation: "CEO", company: "TechNova",
    },
    {
      id: 2, name: "Michael Chen", rating: 5, image: Man,
      review: "The automation features save our sales team hours every week saving time and effort.", designation: "Sales Director", company: "ScaleUp",
    },
    {
      id: 3, name: "Emma Wilson", rating: 4, image: Women2,
      review: "Simple to use and incredibly powerful. Highly recommended To You All!", designation: "Founder", company: "Bright Labs",
    },
    {
      id: 4, name: "David Miller", rating: 5, image: Man,
      review: "The analytics dashboard gives us clear insights that help us make faster business decisions.", designation: "Operations Manager", company: "NextCore",
    },
    {
      id: 5, name: "Olivia Brown", rating: 4, image: Women1,
      review: "Managing customer relationships has never been easier. Our team adopted it within days.", designation: "Customer Success Manager", company: "CloudSync",
    },
    {
      id: 6, name: "James Anderson", rating: 5, image: Man,
      review: "Excellent CRM with outstanding support. The onboarding process was smooth and efficient.", designation: "Managing Director", company: "VisionTech",
    },
    {
      id: 7, name: "Sophia Martinez", rating: 5, image: Women2,
      review: "The email integration and workflow automation have significantly improved our productivity.", designation: "Marketing Head", company: "Elevate Digital",
    },
    {
      id: 8, name: "Daniel Lee", rating: 4, image: Man, review: "We switched from another CRM, and the migration was seamless and super easy.",
      designation: "Product Manager", company: "Innovix",
    },

    {
      id: 9, name: "Ava Thompson", rating: 4, image: Women1, review: "Our sales pipeline is now much more organized than before, and we never miss a follow-up.",
      designation: "Business Development Lead", company: "PrimeWorks",
    },
  ];


  const pricingPlans = [
    {
      id: 1, name: "Starter", price: "₹499/month", billing: "Billed annually",
      features: ["5 Users", "Lead Management", "Contact Management", "Email Support", "Basic Reports",], buttonText: "Start Free", popular: false,
    },
    {
      id: 2, name: "Professional", price: "₹999/month", billing: "Billed annually",
      features: ["Unlimited Leads", "Workflow Automation", "Advanced Analytics", "Email & Chat Support", "API Access",], buttonText: "Start Free", popular: true,
    },
    {
      id: 3, name: "Enterprise", price: "Custom Pricing", billing: "",
      features: ["Unlimited Users", "Dedicated Support", "Advanced Security", "Custom Integrations", "SLA & Onboarding",], buttonText: "Contact Sales", popular: false,
    },
  ];


  const faqs = [
    {
      question: "What is NestHub CRM?",
      answer: "NestHub CRM is a cloud-based customer relationship management platform that helps businesses manage leads, sales, customer interactions, and team collaboration from one centralized dashboard.",
    },
    {
      question: "Can I try NestHub CRM before purchasing?",
      answer: "Yes. We offer a 14-day free trial with full access to all core features. No credit card is required to get started.",
    },
    {
      question: "Is my business data secure?",
      answer: "Absolutely. Your data is protected with enterprise-grade encryption, secure cloud infrastructure, regular backups, and role-based access controls.",
    },
    {
      question: "Can I upgrade or downgrade my plan later?",
      answer: "Yes. You can switch between plans at any time. Your data and settings remain intact during the upgrade or downgrade process.",
    },
    {
      question: "Does NestHub CRM integrate with other tools?",
      answer: "Yes. NestHub CRM integrates with popular tools like Gmail, Outlook, Slack, Zapier, Google Calendar, and many third-party applications through APIs.",
    },

  ];
  return (
    <div class="flex flex-col gap-18">

      <div class="flex  flex-col lg:flex-row gap-8 items-center p-4 bg-blue-50  lg:py-18 pb-18">
        <div class="flex-1">
          <img src={hero} className='md:h-140 w-full object-cover'></img>
        </div>
        <div class="flex flex-col gap-8 items-center md:pl-8 flex-1">
          <div class="text-4xl lg:text-5xl xl:text-6xl text-center">Grow Your Buisness With <span class="text-blue-700">NestHub</span></div>
          <div class="text-xl xl:text-2xl text-center">Manage leads, automate workflows, track sales, and delight customers—all from one powerful platform.</div>
          <div class="flex gap-8">
            <button class="px-8 py-2.5 bg-blue-700 text-white rounded-lg hover:bg-blue-800 hover:shadow-2xl hover:-translate-y-1 transition ease-out duration-400 cursor-pointer">Start Trial</button>
            <button class="px-8 py-2.5 border border-blue-700 rounded-lg font-semibold hover:shadow-2xl hover:-translate-y-1 transition ease-out duration-400 cursor-pointer" >Book Demo</button>
          </div>
          <div class="flex justify-between gap-12 flex-col sm:flex-row">
            <div class="flex gap-2 items-center self-center"><FaRegCircleCheck class="text-green-500" />No Credit Card Required</div>
            <div class="flex  gap-1 items-center text-center">
              <div style={{ display: 'flex', gap: '5px' }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} color="#ffc107" size={20} />
                ))} </div>
              Rated by 10000+ Customers</div>
          </div>
        </div>



      </div>

      <div class="flex items-center flex-col gap-8 p-8 ">
        <div className='text-2xl text-blue-600 font-semibold'>Features</div>
        <div class="text-4xl font-semibold text-center">Everything Your Sales Team Need</div>
        <div className='grid grid-cols-1 sm:grid-rows-2 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-8 mt-4' >
          <div class="flex items-center flex-col gap-4 border border-[#ccc] p-2 rounded-lg">
            <div className="p-2 bg-blue-200 text-blue-500 rounded-lg"><IoMdContacts className='text-6xl' /></div>
            <div className="text-xl font-semibold">Contact Managment</div>
            <div className="text-center text-lg">Store and manage all customer information in one place.</div>
          </div>
          <div class="flex items-center flex-col gap-4 border border-[#ccc] p-2 rounded-lg">
            <div className="p-2 bg-green-200 text-green-500 rounded-lg"><GoGraph className='text-6xl' /></div>

            <div className="text-xl font-semibold text-center">Sales Analytics</div>
            <div className="text-center text-lg">Get real-time insights with powerful reports and dashboards.</div>
          </div>
          <div class="flex items-center flex-col gap-4 border border-[#ccc] p-2 rounded-lg">
            <div className="p-2 bg-purple-200 text-purple-500 rounded-lg"><RiRobot2Fill className="text-6xl" /></div>
            <div className="text-xl font-semibold text-center">Workflow Automation</div>
            <div className="text-center text-lg">Automate repetitive tasks and save valuable time.</div>
          </div>
          <div class="flex items-center flex-col gap-4  border border-[#ccc] p-2 rounded-lg">
            <div className="p-2 bg-orange-100 text-orange-300 rounded-lg"><MdEmail className='text-6xl' /></div>
            <div className="text-xl font-semibold text-center">Email Integration</div>
            <div className="text-center text-lg">Connect with Gmail and Outlook to sync your conversations.</div>
          </div>
          <div class="flex items-center flex-col gap-4 border border-[#ccc] p-2 rounded-lg">
            <div className="p-2 bg-pink-200 text-pink-500 rounded-lg"><SlCalender className='text-6xl' /></div>
            <div className="text-xl font-semibold text-center">Task Management</div>
            <div className="text-center text-lg">Organize tasks and never miss an important follow-up.</div>
          </div>
          <div class="flex items-center flex-col gap-4 border border-[#ccc] p-2 rounded-lg">
            <div className="p-2 bg-blue-100 text-blue-400 rounded-lg"><FaCloud className='text-6xl' /></div>
            <div className="text-xl font-semibold text-center">Cloud Access</div>
            <div className="text-center text-lg">Access your data anywhere, anytime on any device</div>
          </div>
        </div>
      </div>



      <div class="flex flex-col gap-8 items-center w-full bg-blue-50 p-4 md:p-8">
        <div className='text-2xl text-blue-600 font-semibold'>Pricing</div>
        <div class="text-4xl font-semibold text-center">Simple, Transparent Pricing</div>
        <div class="flex flex-wrap justify-center gap-8 xl:gap-12 mt-8 ">
          {pricingPlans.map((plan) => {
            return <div class={`relative flex gap-4 flex-col  ${plan.popular ? " xl:border-2 xl:border-blue-500 xl:scale-105" : "border border-[#ccc]"}  rounded-lg p-8 py-12 w-full max-w-[350px] m:w-80 lg:w-96 bg-white`}>
              <div class={`absolute px-3 py-0.5 rounded-lg bg-blue-500 text-white -top-2 self-center text-sm ${plan.popular ? "hidden xl:block" : "hidden"}`}>POPULAR</div>
              <div class="text-3xl font-semibold text-center">{plan.name}</div>
              <div class="text-xl font-semibold text-center">{plan.price}<div class="text-base text-gray-400 text-center">Billed Anually</div></div>
              <div class="flex flex-col gap-2 mt-4 ">{plan.features.map((feature) => {
                return <div class="flex items-center gap-2"><FaCheck class="text-green-500" />{feature}</div>
              })}</div>
              <button className={`px-8 py-2 rounded-lg ${plan.popular ? " bg-blue-500 text-white" : "border-2 border-blue-500"} `}>{plan.buttonText}</button>
            </div>
          })}
        </div>
      </div>



      <div className='flex flex-col gap-8 items-center w-full md:p-8 px-4 py-6'>
        <div className='text-2xl text-blue-600 font-semibold'>Testimonials</div>
        <div className="text-4xl font-semibold text-center">Loved by Businesses Worldwide</div>

        <div className='w-full h-full mt-4'>
          <Swiper modules={[Autoplay]} loop={true} speed={800} autoplay={{ delay: 3000, disableOnInteraction: false }} className='w-full p-2'
            breakpoints={{ 0: { slidesPerView: 1, spaceBetween: 10, }, 768: { slidesPerView: 2, spaceBetween: 20, }, 1024: { slidesPerView: 3, spaceBetween: 30, }, }}>
            {testimonials.map((testimonial, index) => {
              return (
                <SwiperSlide key={index} className=' h-auto flex'>
                  <div className="flex flex-col items-center border border-gray-200 rounded-xl p-6 h-full shadow-sm hover:shadow-lg transition-all duration-300 bg-white">

                    <div style={{ marginTop: '20px', display: 'flex', gap: '5px' }}>
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <FaStar key={i} color="#ffc107" size={20} />
                      ))} </div>

                    <div className='flex flex-col items-center gap-4 text-center'>

                      <div className="text-xl leading-relaxed">{testimonial.review}</div>
                      <img src={testimonial.image} alt="img" className='h-32 w-32 rounded-full border border-purple-400 p-1' />
                    </div>

                    <div className="mt-auto flex flex-col items-center">
                      <div className="font-semibold text-lg">
                        {testimonial.name}
                      </div>

                      <div className="text-gray-500">
                        {testimonial.designation}
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:p-8 p-4 ">
        <div className='w-full lg:flex-[0.9] flex items-center gap-2 flex-col  rounded-lg'>
          <div className='font-semibold text-2xl text-center mb-8 md:text-4xl'>FAQ</div>
          <div className="text-4xl font-semibold text-center">Frequently Asked Question</div>
          <div className='grid grid-cols-1 auto-rows-max items-start w-full gap-12 mt-8 px-8' > {faqs.map((faq, index) => {
            return <div class={`w-full border ${selectedfaq === index ? "border-2 border-blue-500" : "border-[#ccc]"} h-max p-2 rounded-lg flex flex-col gap-4  transition-all duration-300 ease-in-out `}>
              <div className='flex justify-between cursor-pointer items-center' onClick={() => setselectedfaq(selectedfaq === index ? null : index)}><div>{faq.question}</div><FaCirclePlus className={`transition-transform duration-300 ${selectedfaq === index ? "rotate-45" : "rotate-0"}`} /></div>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${selectedfaq === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0 "}`}>{faq.answer}</div>
            </div>
          })}</div>
        </div>
        <div class="w-full lg:flex-[1.4]">
          <div class="font-semibold text-2xl text-center mb-8 md:text-4xl">Contact US</div>
          <div class="flex gap-8 md:gap-20 flex-col md:flex-row ">

            <form className='flex flex-col gap-4 p-4 rounded-lg w-full   bg-blue-50 ' onSubmit={handleform}>
              <div class='text-3xl font-semibold text-center '>Send Us A Message</div>
              <div class=' flex flex-col md:flex-row  gap-4 md:gap-8'>
                <div class="flex-1">
                  <label class="font-lg mb-[0.2rem]">Name</label>
                  <input type="text" placeholder="Your Name" class="h-9 w-full rounded-lg p-0.5 pl-2 pr-2 border border-[#ddd] bg-white outline-0" value={formdata.name} onChange={handleChange} name="name" required></input>
                </div>
                <div class="flex-1">
                  <label class="font-lg mb-[0.2rem]">Email</label>
                  <input type="text" placeholder="Your Email" class="h-9 w-full rounded-lg p-0.5 pl-2 pr-2 border border-[#ddd] bg-white outline-0" value={formdata.email} onChange={handleChange} name="email" required></input>
                </div>
              </div>
              <div class=' flex flex-col md:flex-row  gap-4 md:gap-8'>
                <div class="flex-1">
                  <label class="font-lg mb-[0.2rem]">Company Name</label>
                  <input type="text" placeholder="Company Name" class="h-9 w-full rounded-lg p-0.5 pl-2 pr-2 border border-[#ddd] bg-white outline-0" value={formdata.company} onChange={handleChange} name="company" required></input>
                </div>
                <div class="flex-1">
                  <label class="font-lg mb-[0.2rem]">Phone Number</label>
                  <input type="text" placeholder="Your Phone Number" class="h-9 w-full rounded-lg p-0.5 pl-2 pr-2 border border-[#ddd] bg-white outline-0"value={formdata.phone} onChange={handleChange} name="phone" required></input>
                </div>
              </div>
              <div class=' flex flex-col md:flex-row  gap-4 md:gap-8'>
                <div class="flex-1">
                  <label class="font-lg mb-[0.2rem]">Indtusry</label>
                  <input type="text" placeholder="Your Industry" class="h-9 w-full rounded-lg p-0.5 pl-2 pr-2 border border-[#ddd] bg-white outline-0" value={formdata.industry} onChange={handleChange} name="industry" required></input>
                </div>
                <div class="flex-1">
                  <label class="font-lg mb-[0.2rem]">Company Size</label>
                  <input type="text" placeholder="Your Company Size" class="h-9 w-full rounded-lg p-0.5 pl-2 pr-2 border border-[#ddd] bg-white outline-0" value={formdata.companysize} onChange={handleChange} name="companysize" required></input>
                </div>
              </div>
              <div class=' flex flex-col md:flex-row  gap-4 md:gap-8'>
                <div class="flex-1">
                  <label class="font-lg mb-[0.2rem]">Country</label>
                  <input type="text" placeholder="Your Country" class="h-9 w-full rounded-lg p-0.5 pl-2 pr-2 border border-[#ddd] bg-white outline-0" value={formdata.country} onChange={handleChange} name="country" required></input>
                </div>
                <div class="flex-1">
                  <label class="font-lg mb-[0.2rem]">Budget</label>
                  <input type="text" placeholder="Your Budget" class="h-9 w-full rounded-lg p-0.5 pl-2 pr-2 border border-[#ddd] bg-white outline-0"  value={formdata.budget} onChange={handleChange} name="budget" required></input>
                </div>
              </div>
              <div className='message-box'>
                <label class="font-lg mb-[0.2rem]">Message</label>
                <textarea placeholder='Your Message' class="h-30 w-full rounded-lg p-0.5 pl-2 pr-2 border border-[#ddd] bg-white outline-0" value={formdata.message} onChange={handleChange} name="message" required></textarea>

              </div>
              <button class="bg-blue-500 p-2.5 pl-6 pr-6 rounded-lg hover:bg-blue-800 cursor-pointer text-white self-center text-center hover:shadow-2xl hover:-translate-y-1 transition ease-out duration-400">Send Inquiry</button>
            </form>
          </div>
        </div>
      </div>








      <div class="flex flex-col gap-6  w-full bg-[#101060] text-[#F4EFE8] pb-4 pt-4">

        <div class="flex p-2 md:pl-4 md:pr-4  w-full justify-between flex-wrap-reverse gap-4 sm:gap-8  items-center">

          <div class="flex flex-col gap-4 flex-wrap ">
            <img src={Logo1} class="h-10 w-24 text-center self-center"></img>
            <div class="flex items-center gap-3 text-sm sm:text-base"><IoDiamondSharp class="text-[#F4BE55]" /> Secure Platform</div>
            <div class="flex items-center gap-3 text-sm sm:text-base"><BsShieldFillCheck class="text-[#F4BE55]" />24/7 Support</div>
            <div class="flex items-center gap-3 text-sm sm:text-base"><BsShieldFillCheck class="text-[#F4BE55]" />Easy To USe </div>
          </div>

          <div class="flex flex-col gap-3 text-base">
            <div class="font-semibold text-[#F4BE55]">Products</div>
            <div class="cursor-pointer hover:underline" >Features</div>
            <div class="cursor-pointer hover:underline  ">Pricing</div>
            <div class="cursor-pointer hover:underline ">Security</div>
            <div class="cursor-pointer hover:underline  ">API</div>
          </div>

          <div class="flex flex-col gap-3 text-base">
            <div class="font-semibold text-[#F4BE55] ">About US</div>
            <div class="cursor-pointer hover:underline ">Contact</div>
            <div class="cursor-pointer hover:underline ">About</div>
            <div class="cursor-pointer hover:underline ">Carrers</div>
            <div class="cursor-pointer hover:underline ">Blog</div>
          </div>

          <div class="flex flex-col gap-4 w-full md:w-auto items-center mb-8 sm:mb-0">
            <div class="font-semibold text-center text-[#F4BE55]">Subscribe to our NewsLetter</div>
            <div class="flex w-full max-w-md overflow-hidden rounded-[0.3rem] ">
              <input type="text" placeholder="Enter Your Email" class="flex-1  px-3 py-1 text-black  focus:outline-none bg-white"></input>
              <button class="bg-blue-500 px-3 font-medium transition-all duration-300 ">Subscribe</button>
            </div>
            <div class="text-center flex items-center gap-3"><FaCheckCircle class="text-[#F4BE55] text-center" />Get Updated Every Day</div>
            <div class="text-center flex items-center gap-3"><FaCheckCircle class="text-[#F4BE55] text-center" />No Spam, unsubscribe anytime</div>
          </div>
        </div>
        <div class=" flex flex-col gap-4 px-8 md:px-30 ">
          <hr class="text-[#F4BE55]" />
          <div class="flex justify-center gap-3 md:gap-6 text-sm flex-col md:flex-row items-center">
            <div class="flex items-center"><MdCopyright />2026 <span class="text-[#F4BE55] px-1"> NestHub.</span>  All Rights Reserved</div>
            <div>Privacy Policy | Terms & Conditions </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
