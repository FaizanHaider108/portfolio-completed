import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Faizan Dev
        </motion.span>
        <div className="social">
          
          <a href="https://www.instagram.com/faizicheema10" target="blank">
            <img src="/instagram.png" alt="instagram" />
          </a>
          <a href="https://github.com/FaizanHaider108" target="blank">
            <img src="/github.png" alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/faizanhaiderdev/" target="blank">
            <img src="/linkedin.png" alt="linkedin" />
          </a>
         
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
