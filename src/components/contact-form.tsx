"use client";

import { FormEvent, Fragment, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState("");

  const form = useRef();

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setFormError("Name is required.");
      return;
    }

    if (!message.trim()) {
      setFormError("Massage is required.");
      return;
    }

    emailjs
      //@ts-ignore
      .sendForm("service_t91p16x", "template_5iggxyq", form.current, {
        publicKey: "E2JtIhypASvQLw0YO",
      })
      .then(
        () => {
          setSent(true);
        },
        (err) => {
          setError(err.text);
        }
      );
  };

  if (error != "") {
    return (
      <Fragment>
        <p className="text-red-700">{error}</p>
      </Fragment>
    );
  } else if (sent) {
    return (
      <Fragment>
        <p>Message sent, thank you.</p>
      </Fragment>
    );
  }

  return (
    <form
      //@ts-ignore
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col space-y-4"
    >
      <p>Fill out a contact form:</p>
      <span className="text-red-700">{formError}</span>
      <input
        name="name"
        placeholder="Enter your name."
        onChange={(e) => setName(e.target.value)}
        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-800 sm:text-sm/6"
      ></input>
      <textarea
        name="message"
        placeholder="Enter your message here, please do not forget to include your contact info."
        onChange={(e) => setMessage(e.target.value)}
        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-800 sm:text-sm/6 h-24"
      ></textarea>
      <button type="submit" className="text-md font-bold">
        Send message
      </button>
    </form>
  );
}
