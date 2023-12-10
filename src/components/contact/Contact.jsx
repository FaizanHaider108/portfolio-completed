import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";
import "./contact.scss";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const form = useRef();
  const formRef = useRef();
  const [submitting, setSubmitting] = useState( false );
  const [error, setError] = useState( false );
  const [success, setSuccess] = useState( false );

  const isInView = useInView( ref, { margin: "-100px" } );

  const sendEmail = ( e ) => {
    e.preventDefault();
    setSubmitting( true );

    emailjs
      .sendForm(
        "service_eems4tf",
        "template_dg89qrl",
        form.current,
        "9fXt5OsMnxib8dybY"
      )
      .then( ( result ) => {
        setSubmitting( false );
        form.current.reset(); // Reset the form
        setSuccess( true );
        setError( false );
        toast( "Form received. Will contact you soon 😊" );
      } )
      .catch( ( error ) => {
        console.log( error.text );
        setSubmitting( false );
        setError( true );
        setSuccess( false );
        alert( "An error occurred while submitting the form 😣" );
      } );
  };

  return (
   
    <motion.div
      ref={ ref }
      className="contact"
      variants={ variants }
      initial="initial"
      animate={ isInView ? "animate" : "initial" }
    >
      <Toaster />
      <motion.div className="textContainer" variants={ variants }>
        <motion.h1 variants={ variants }>Let’s work together</motion.h1>
        <motion.div className="item" variants={ variants }>
          <h2>Mail</h2>
          <span>info@faizanhaiderdev.online</span>
        </motion.div>
        <motion.div className="item" variants={ variants }>
          <h2>Hire me</h2>
          <span>Hire me on <a href="https://www.upwork.com/freelancers/~012635d142c96590c5"
            style={{color:"white", textDecoration:"underline"}}
            target="blank">Upwork</a></span>
        </motion.div>
        <motion.div className="item" variants={ variants }>
          <h2>Phone</h2>
          <span>+92 349 1319235</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={ { opacity: 1 } }
          animate={ { opacity: 0 } }
          transition={ { delay: 3, duration: 1 } }
        >
          <svg width="450px" height="450px" viewBox="0 0 32.666 32.666">
            {/* Your SVG path here */ }
          </svg>
        </motion.div>
        <motion.form
          ref={ formRef }
        
          onSubmit={ sendEmail }
          initial={ { opacity: 0 } }
          animate={ { opacity: 1 } }
          transition={ { delay: 4, duration: 1 } }
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            autoComplete="none"
          />

          <input
            type="email"
            name="email_id"
            placeholder="Your Email"
            autoComplete="none"
          />

          <textarea
            name="message"
            placeholder="Message"
            autoComplete="none"
          />

          <input
            type="submit"
            value={ submitting ? "Sending..." : "Send Message" }
            className="submit"
            disabled={ submitting }
          />

          { error && <div>Error</div> }
          { success && <div>Success</div> }
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
