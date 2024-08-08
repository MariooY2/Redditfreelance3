"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function Contact() {
  const form = useRef();
  const [toName, setToName] = useState("");
  const [fromName, setFromName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false); // Submission state

  const sendEmail = (e) => {
    e.preventDefault();

    if (!submitted) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_USER_ID
        )
        .then(
          () => {
            console.log("SUCCESS!");
            setSubmitted(true); // Set submission state to true
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <div className="container mx-auto py-2 px-6 mt-4 lg:mt-10 flex justify-center items-center">
      <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-purple-600 mb-6">Get in Touch</h2>
        <form ref={form} className="space-y-6" onSubmit={sendEmail}>
          <div>
            <label className="block text-xl text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="from_name"
              className="w-full px-4 py-2 border text-gray-700 border-purple-400 rounded-lg focus:outline-none focus:ring-2 focus:border-purple-600"
              placeholder="Your Name"
              value={fromName}
              onChange={(e) => setFromName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-xl  text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="to_name"
              className=" w-full px-4 py-2 border text-gray-700 border-purple-400 rounded-lg focus:outline-none focus:ring-2 focus:border-purple-600 "
              placeholder="Your Email"
              value={toName}
              onChange={(e) => setToName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-xl text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              name="phone_number"
              className=" w-full px-4 py-2 border text-gray-700 border-purple-400 rounded-lg focus:outline-none focus:ring-2 focus:border-purple-600"
              placeholder="Your Phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-xl text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              className=" w-full px-4 py-2 border text-gray-700 border-purple-400 rounded-lg focus:outline-none focus:ring-2 focus:border-purple-600 resize-none"
              placeholder="Your Message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className={`w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:border-purple-600 transition duration-300 ${
              submitted ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={submitted}
          >
            {submitted ? "Message Sent" : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
