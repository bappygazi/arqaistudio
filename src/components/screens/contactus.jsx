"use client";
import Head from "next/head";
import { useState } from "react";

const initialForm = {
name: "",
email: "",
subject: "",
message: "",
};

const ContactUs = () => {
const [form, setForm] = useState(initialForm);
const [errors, setErrors] = useState({});

const validate = () => {
const newErrors = {};
if (!form.name) newErrors.name = "Name is required";
if (!form.email) newErrors.email = "Email is required";
else if (!/\S+@\S+.\S+/.test(form.email)) newErrors.email = "Email is invalid";
if (!form.message) newErrors.message = "Message is required";
return newErrors;
};

const handleChange = (e) => {
setForm({ ...form, [e.target.name]: e.target.value });
setErrors({ ...errors, [e.target.name]: "" });
};

const handleSubmit = (e) => {
e.preventDefault();
const validationErrors = validate();
if (Object.keys(validationErrors).length > 0) {
setErrors(validationErrors);
return;
}
alert("Form submitted!");
setForm(initialForm);
};
  return (
    <>
<Head>
<title>Contact Us - Arqai Studio</title>
<meta name="description" content="custom art order, bespoke object inquiry, contact Arqai Studio" />
<meta name="keywords" content="contact, Arqai Studio, art, AI, creative projects, email, form" />
<meta name="robots" content="index, follow" />
</Head>
     <section id="contact" className="bg-black w-full py-12 px-4 md:px-8">
    <div className="relative flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="font-tamil bg-[linear-gradient(90deg,_#95774B_29.17%,_#B89E76_50.03%,_#95774B_70.9%)] 
              bg-clip-text text-transparent text-[24px] md:text-[32px] font-bold"
          >
            Get in touch with us
          </h1>
          <p className="font-avenir mt-5 text-center text-[16px] font-normal leading-[28px] md:leading-[34px] text-[#B4B4B4]">
            Every masterpiece begins with a conversation.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mt-[110px] space-y-[36px]">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-[16px] text-white font-avenir font-medium mb-[30px] leading-[24px]">
              Your name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Abc"
              className="w-full h-[75px] px-[32px] py-[33px] italic font-avenir text-[16px] text-[#9f9f9f] border-[1.5px] border-[#b88e2f] rounded-[10px] bg-transparent placeholder:text-[#9f9f9f] focus:outline-none focus:border-[#95774b]"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-[16px] text-white font-avenir font-medium mb-[30px] leading-[24px]">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Example@gmail.com"
              className="w-full h-[75px] px-[32px] py-[33px] font-avenir italic text-[16px] text-[#9f9f9f] border-[1.5px] border-[#b88e2f] rounded-[10px] bg-transparent placeholder:text-[#9f9f9f] focus:outline-none focus:border-[#95774b]"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-[16px] text-white font-avenir font-medium mb-[30px] leading-[24px]">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Optional"
              className="w-full h-[75px] px-[32px] py-[33px] font-avenir italic text-[16px] text-[#9f9f9f] border-[1.5px] border-[#b88e2f] rounded-[10px] bg-transparent placeholder:text-[#9f9f9f] focus:outline-none focus:border-[#95774b]"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-[16px] text-white font-avenir font-medium mb-[30px] leading-[24px]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Hi! I'd like to ask..."
              rows={4}
              className="w-full h-[166px] px-[32px] pt-[30px] font-avenir italic py-[25px] text-[16px] text-[#9f9f9f] border-[1.5px] border-[#b88e2f] rounded-[10px] bg-transparent placeholder:text-[#9f9f9f] focus:outline-none focus:border-[#95774b] resize-none"
            />
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="pt-[50px] flex justify-end">
            <button
              type="submit"
              className="w-[221px] h-[48px] bg-[#95774B] hover:bg-amber-700 text-white font-avenir text-[16px] font-bold py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-600/25 tracking-wide"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</>

  );
};

export default ContactUs;
