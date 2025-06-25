"use client";
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
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email is invalid";
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
    // Submit form logic here
    alert("Form submitted!");
    setForm(initialForm);
  };

  return (
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
            <p className="font-avenir mt-5 text-center text-[16px] font-normal leading-[28px] md:leading-[34px] text-[#B4B4B4]">Every masterpiece begins with a conversation.</p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="mt-[110px]">
            {/* Name */}
            <div className="space-y-[36px]">
          {/* Name Field */}
          <div>
            <label className="block text-[16px] text-[#fff] font-avenir font-medium mb-[30px] leading-[24px]">Your name</label>
            <input
              type="text"
              placeholder="Abc"
              className="w-full h-[75px] px-[32px] py-[33px] italic font-avenir text-[16px] text-[#9f9f9f] border-[1.5px] border-[#b88e2f] rounded-[10px] bg-transparent placeholder:text-[#9f9f9f] focus:outline-none focus:border-[#95774b] font-normal"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-[16px] font-avenir text-[#fff] font-medium mb-[30px] leading-[24px]">
              Email address
            </label>
            <input
              type="email"
              placeholder="Example@gmail.com"
              className="w-full h-[75px] px-[32px] py-[33px] font-avenir italic text-[16px] text-[#9f9f9f] border-[1.5px] border-[#b88e2f] rounded-[10px] bg-transparent placeholder:text-[#9f9f9f] focus:outline-none focus:border-[#95774b] font-normal"
            />
          </div>

          {/* Subject Field */}
          <div>
            <label className="block text-[16px] text-[#fff] font-avenir font-medium mb-[30px] leading-[24px]">Subject</label>
            <input
              type="text"
              placeholder="Optional"
              className="w-full h-[75px] px-[32px] py-[33px] font-avenir italic text-[16px] text-[#9f9f9f] border-[1.5px] border-[#b88e2f] rounded-[10px] bg-transparent placeholder:text-[#9f9f9f] focus:outline-none focus:border-[#95774b] font-normal"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-[16px] font-avenir text-[#fff] font-medium mb-[30px] leading-[24px]">Message</label>
            <textarea
              placeholder="Hi! I'd like to ask..."
              rows={4}
              className="w-full h-[166px] px-[32px] pt-[30px] font-avenir italic py-[25px] text-[16px] text-[#9f9f9f] border-[1.5px] border-[#b88e2f] rounded-[10px] bg-transparent placeholder:text-[#9f9f9f] focus:outline-none focus:border-[#95774b] resize-none font-normal leading-[24px]"
            />
          </div>
        </div>

            {/* Submit Button */}
            <div className="pt-[50px] flex justify-end">
              <button
                type="submit"
                className="w-[221px] h-[48px] bg-[#95774B] hover:bg-amber-700 text-white font-avenir text-[16px] font-bold py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-600/25  tracking-wide"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
