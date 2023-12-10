import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          
          <h1>
            <motion.b whileHover={ { color: "orange" } }>Specialize</motion.b>  in crafting dynamic
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={ { color: "orange" } }>and responsive web </motion.b>applications
          </h1>
         
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Full-Stack Expertise</h2>
          <p>
            I am proficient in the complete MERN (MongoDB, Express.js, React.js, Node.js) stack, enabling me to architect and develop end-to-end solutions with efficiency and coherence.
          </p>
          <a href="#Contact">
            <button>Contact Now</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Frontend Mastery</h2>
          <p>
            With a keen eye for design and a passion for user experience, I create engaging and intuitive frontend interfaces using cutting-edge technologies like React.js. Responsive and pixel-perfect design is my commitment.
          </p>
          <a href="#Contact">
            <button>Contact Now</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Backend Brilliance</h2>
          <p>
            On the server side, I leverage the power of Node.js and Express.js to build scalable and performant APIs. My expertise in database management with MongoDB ensures data integrity and efficiency.
          </p>
          <a href="#Contact">
          <button>Contact Now</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Continuous Learning</h2>
          <p>
            In the ever-evolving landscape of web development, I am committed to staying updated on the latest trends and technologies, ensuring that my solutions are always at the forefront of innovation.
          </p>
          <a href="#Contact">
            <button>Contact Now</button>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
