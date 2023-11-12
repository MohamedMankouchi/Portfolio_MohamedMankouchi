import React, { useEffect, useRef, useState } from "react";
import "./contact.css";
import { EarthCanvas } from "./canvas/EarthCanvas";
import StarsCanvas from "./canvas/Stars";
import Arrow from "./../assets/arrow.png";
import { useAnimation, useInView, motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formInputs, setFormInputs] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });
  const formRef = useRef();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const containerTitle = {
    visible: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 1.5,
        type: "smooth",
      },
    },
    hidden: { opacity: 0.3 },
  };
  const handleForm = (e) => {
    e.preventDefault();
    if (
      formInputs.user_email == "" ||
      formInputs.user_message == "" ||
      formInputs.user_name == ""
    ) {
      return toast.error("Please fill in the missing fields.", {
        duration: 3000,
        position: "top -center",
        style: {
          backgroundColor: "#20202a",
          color: "white",
        },
      });
    }
    setFormInputs({
      user_name: "",
      user_email: "",
      user_message: "",
    });
    emailjs
      .sendForm(
        "service_ehi9qcb",
        "template_9r7kuur",
        formRef.current,
        "32IBAOZfQ5foD-0TM"
      )
      .then(
        (result) => {
          toast.success("Message sent!", {
            duration: 3000,
            position: "top -center",
            style: {
              backgroundColor: "#20202a",
              color: "white",
            },
          });
        },
        (error) => {
          toast.error("An error has occured while sending the message!", {
            duration: 3000,
            position: "top -center",
            style: {
              backgroundColor: "#20202a",
              color: "white",
            },
          });
        }
      );
  };
  return (
    <>
      <Toaster />
      <div className="contact" id="contact">
        <motion.div
          animate={mainControls}
          variants={containerTitle}
          initial="hidden"
          className="contact-title"
        >
          <h3>CONTACT</h3>
        </motion.div>

        <StarsCanvas />
        <div ref={ref} className="flexContact">
          <EarthCanvas />

          <div className="contact-form">
            <h3 style={{ opacity: "0.7", fontSize: "15px" }}>GET IN TOUCH</h3>
            <form ref={formRef} onSubmit={(event) => handleForm(event)}>
              <label htmlFor="name">Your name</label>
              <input
                type="name"
                name="user_name"
                id="name"
                value={formInputs.user_name}
                onChange={(e) =>
                  setFormInputs((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
              <label htmlFor="email">Your email</label>
              <input
                type="email"
                name="user_email"
                id="email"
                value={formInputs.user_email}
                onChange={(e) =>
                  setFormInputs((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
              <label htmlFor="message ">Your message</label>
              <textarea
                type="text"
                name="user_message"
                id="message"
                value={formInputs.user_message}
                onChange={(e) =>
                  setFormInputs((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </form>
            <div className="send">
              <p onClick={(event) => handleForm(event)}>
                Send <span>message</span>
              </p>
              <img src={Arrow} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
