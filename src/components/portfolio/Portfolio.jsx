import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Nextland from "../Assets/Nextland.png"
import Portf from "../Assets/Rehan.png"
import Dashboard from "../Assets/Dashbaord.png"
import Restourant from "../Assets/Restourant.png"
import Ecommerce from "../Assets/Ecommerce.png"
const items = [
  {
    id: 1,
    title: "NextLand.pk",
    img: Nextland,
    desc: "Nextland.pk is a dynamic web platform that seamlessly blends the power of the MERN (MongoDB, Express.js, React.js, Node.js) stack with the convenience of Google Authentication.",
    list: [
      "Frontend: React.js, HTML5, CSS3, JavaScript",
      "Backend: Node.js, Express.js",
      "Database: MongoDB",
      "Authentication: Google Authentication (OAuth 2.0)",
      "Real-Time: WebSocket",
      "DevOps: Git, GitHub Actions"
    ],
    link: "https://nextlandpk.com/",
    Github: "https://github.com/FaizanHaider108/mern-estate"
  },
  {
    id: 2,
    title: "Rehansatelier",
    img: Portf,
    desc: "This project showcases my proficiency in frontend development, utilizing React.js and Framer Motion to deliver a seamless and visually engaging user experience.",
    list: [
      "React.js",
      "Framer Motion",
      "HTML5 and CSS3",
      "Responsive Design",
    ],
    link: "https://rehansatelier.com/",
    Github: "https://github.com/FaizanHaider108/Rehan-s-Atalier-Portfolio"
  },
  {
    id: 3,
    title: "Shoppy Dashboard",
    img: Dashboard,
    desc: "This project merges functionality with aesthetics, featuring interactive charts, a versatile editor, and customizable color theming for a truly immersive user experience.",
    list: [
      "React.js",
      "Charting Libraries",
      "Editor",
      "CSS Styling",
      "Color Theming Options",
      "Responsive Design"
    ],
    link: "https://dashboard-shoppy.netlify.app/",
    Github: "https://github.com/FaizanHaider108/project_syncfusion_dashboard/tree/Dashboard"
  },
  {
    id: 4,
    title: "Restourant Website",
    img: Restourant,
    desc: "This project showcases my proficiency in frontend development, utilizing React.js and Framer Motion to deliver a seamless and visually engaging user experience.",
    list: [
      "React.js",
      "Slider",
      "HTML5 and CSS3",
      "Responsive Design",
    ],
    link: "https://newrestourant.netlify.app/",
    Github: "https://github.com/FaizanHaider108/Restrount-temp-react"
  },
  {
    id: 5,
    title: "Ecommerce Website",
    img: Ecommerce,
    desc: "Ecoommerce Website Design in React.js. Multipage website along with kids, Women, Kids and SignIn page",
    list: [
      "React.js",
      "Multipage Theme",
      "HTML5 and CSS3",
      "Responsive Design",
    ],
    link: "https://idyllic-llama-58a641.netlify.app/",
    Github: "https://github.com/FaizanHaider108/Restrount-temp-react"
  },

];

const Single = ( { item } ) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll( {
    target: ref,
  } );

  const y = useTransform( scrollYProgress, [0, 1], [-300, 300] );

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ ref }>
            <img src={ item.img } alt="" />
          </div>
          <motion.div className="textContainer" style={ { y } }>
            <h2>{ item.title }</h2>
            <p>{ item.desc }</p>
            <b>Technologies Used</b>
            { item.list ? (
              <ul>
                { item.list.map( ( tech, index ) => (
                  <li key={ index }>{ tech }</li>
                ) ) }
              </ul>
            ) : (
              <p>No technologies listed.</p>
            ) }
            <div className="btns">
              { item.link && (
                <a href={ item.link } target="_blank" rel="noopener noreferrer">
                  <button>Demo</button>
                </a>
              ) }
              { item.Github ? (
                <a href={ item.Github } target="_blank" rel="noopener noreferrer">
                  <button>Github</button>
                </a>
              ) : null }

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
