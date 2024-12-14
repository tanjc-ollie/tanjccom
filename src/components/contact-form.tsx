"use client";

import { FormEvent, Fragment, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { sendGTMEvent } from "@next/third-parties/google";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState("");

  const form = useRef();

  useEffect(() => {
    if (!!localStorage.getItem("SENT")) {
      const last_sent: Date = new Date(
        decodeHex(localStorage.getItem("SENT") as string)
      );
      const right_now: Date = new Date();
      //@ts-ignore
      const elapsed_minutes = (right_now - last_sent) / (60 * 1000);

      if (elapsed_minutes < 5) {
        setError("Please send another message after 5 minutes.");
      }
    }
  }, []);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    sendGTMEvent({ event: "send_email_click", data: navigator.userAgent });

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

          // remember last sent date
          const right_now = new Date().toString();
          localStorage.setItem("SENT", encodeHex(right_now));
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
        className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-xs focus:ring-2 focus:ring-inset focus:ring-slate-800 sm:text-sm/6"
      ></input>
      <textarea
        name="message"
        placeholder="Enter your message here, please do not forget to include your contact info."
        onChange={(e) => setMessage(e.target.value)}
        className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-xs focus:ring-2 focus:ring-inset focus:ring-slate-800 sm:text-sm/6 h-24"
      ></textarea>
      <span className="italic text-xs text-right text-red-700 font-bold">
        (Your IP address will be logged for regulatory compliance.)
      </span>
      <div className="flex justify-center">
        <button type="submit" className="text-sm font-bold">
          Send message
        </button>
      </div>
    </form>
  );
}

function encodeHex(text: string): string {
  return text
    .split("")
    .map((char) => char.charCodeAt(0).toString(16))
    .join("");
}

function decodeHex(hex: string): string {
  //@ts-ignore
  return hex
    .match(/.{1,2}/g)
    .map((byte) => String.fromCharCode(parseInt(byte, 16)))
    .join("");
}
