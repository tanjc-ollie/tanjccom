import { Fragment } from "react";
import LinekdinContact from "./linkedin-contact";
import ContactForm from "./contact-form";

export default function ContactMe() {
  return (
    <Fragment>
      <h1 className="text-4xl font-semibold">Let's connect!</h1>
      <div className="space-y-8">
        <div className="flex flex-row items-center align-middle space-x-2">
          <p>Connect through LinkedIn:</p>
          <LinekdinContact></LinekdinContact>
        </div>
        <div className="divider">
          <span className="flex text-2xl font-semibold">Or</span>
        </div>
        <ContactForm></ContactForm>
      </div>
    </Fragment>
  );
}
