import { React, useEffect, useState } from "react";
import "./navigation.css";
import Logo from "./../assets/logo.png";
import Menu from "./../assets/hamburgermenu.png";
import Cross from "./../assets/cross.png";
import {
  AnimatePresence,
  easeInOut,
  motion,
  spring,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Link } from "react-router-dom";
const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/" },
  { title: "Skills", href: "/" },
  { title: "Projects", href: "/" },
  { title: "Contact", href: "/" },
];
export const Navigation = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  useMotionValueEvent(scrollY, "change", (prev) => {
    const previous = scrollY.getPrevious();
    if (prev > previous && prev > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const menuVars = {
    initial: {
      y: "-100%",
    },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    exit: {
      y: "-100%",
      transition: {
        delay: 0.7,
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };
  return (
    <>
      <header>
        <motion.div
          variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 1, ease: "backInOut" }}
          className="navigation"
          style={
            hidden
              ? { boxShadow: "none" }
              : { boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }
          }
        >
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <img
            style={{ width: "50px", marginRight: "20px" }}
            onClick={toggleMenu}
            src={Menu}
          />
        </motion.div>

        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="headerContainer"
            >
              <div className="headerContainer-title">
                <div className="decorNav">
                  <svg
                    width="900"
                    height="887"
                    viewBox="0 0 903 887"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M47.2262 320.433L114.319 320.792L118.976 335.892L52.0914 336.238L47.2262 320.433Z"
                      fill="#F4A949"
                    ></path>
                    <path
                      d="M134.246 320.858L201.343 321.227L205.994 336.318L139.104 336.663L134.246 320.858Z"
                      fill="#1C5F9A"
                    ></path>
                    <path
                      d="M97.3566 353.899L164.437 354.261L169.088 369.365L102.209 369.702L97.3566 353.899Z"
                      fill="#1C5F9A"
                    ></path>
                    <path
                      d="M221.413 321.768L485.765 322.185L490.419 337.284L226.28 337.562L221.413 321.768Z"
                      fill="#1C5F9A"
                    ></path>
                    <path
                      d="M202.902 354.015L638.794 357.201L643.448 372.291L207.775 369.82L202.902 354.015Z"
                      fill="#9C27B0"
                    ></path>
                    <path
                      d="M478.267 521.382L894.745 524.805L899.401 539.9L483.124 537.176L478.267 521.382Z"
                      fill="#1C5F9A"
                    ></path>
                    <path
                      d="M177.996 354.168L194.845 354.651L199.501 369.748L182.857 369.972L177.996 354.168Z"
                      fill="#F4A949"
                    ></path>
                    <path
                      d="M358.89 389.3L424.034 390.501L428.68 405.6L363.757 405.092L358.89 389.3Z"
                      fill="#F4A949"
                    ></path>
                    <path
                      d="M299.752 487.208L316.603 487.687L321.258 502.79L304.619 503.005L299.752 487.208Z"
                      fill="#F4A949"
                    ></path>
                    <path
                      d="M326.155 486.923L343.001 487.404L347.649 502.497L331.026 502.73L326.155 486.923Z"
                      fill="#F4A949"
                    ></path>
                    <path
                      d="M107.698 387.455L222.122 388.706L226.773 403.81L112.567 403.258L107.698 387.455Z"
                      fill="#1C5F9A"
                    ></path>
                    <path
                      d="M335.415 421.264L449.857 422.522L454.508 437.619L340.288 437.071L335.415 421.264Z"
                      fill="#1C5F9A"
                    ></path>
                    <path
                      d="M175.659 487.91L290.087 489.164L294.747 504.27L180.515 503.712L175.659 487.91Z"
                      fill="#1C5F9A"
                    ></path>
                    <path
                      d="M342.326 520.75L456.777 521.989L461.425 537.08L347.2 536.54L342.326 520.75Z"
                      fill="#1C5F9A"
                    ></path>
                    <path
                      d="M208.827 454.265L424.046 456.49L428.701 471.576L213.681 470.068L208.827 454.265Z"
                      fill="#1C5F9A"
                    ></path>
                    <path
                      d="M236.887 388.975L351.317 390.227L355.967 405.323L241.747 404.773L236.887 388.975Z"
                      fill="#1C5F9A"
                    ></path>
                    <path
                      d="M78.2267 421.127L145.324 421.484L149.974 436.587L83.0959 436.92L78.2267 421.127Z"
                      fill="#F4A949"
                    ></path>
                    <path
                      d="M156.512 420.877L317.531 421.363L322.181 436.463L161.364 436.688L156.512 420.877Z"
                      fill="#9C27B0"
                    ></path>
                    <path
                      d="M433.682 456.113L745.839 455.683L750.486 470.793L438.556 471.918L433.682 456.113Z"
                      fill="#9C27B0"
                    ></path>
                    <path
                      d="M131.938 454.719L199.041 455.071L203.696 470.177L136.815 470.523L131.938 454.719Z"
                      fill="#F4A949"
                    ></path>
                    <path
                      d="M117.207 488.433L165.999 488.62L170.638 503.714L122.08 504.239L117.207 488.433Z"
                      fill="#9C27B0"
                    ></path>
                    <path
                      d="M275.51 520.95L324.298 521.124L328.953 536.228L280.376 536.745L275.51 520.95Z"
                      fill="#9C27B0"
                    ></path>
                    <path
                      d="M109.231 521.806L254.295 520.887L258.947 535.998L114.098 537.606L109.231 521.806Z"
                      fill="#1C5F9A"
                    ></path>
                  </svg>
                </div>

                <div className="headerContainer-nav">
                  <h1 style={{ color: "white" }}>Mankouchi</h1>
                  <img
                    style={{ width: "50px" }}
                    onClick={toggleMenu}
                    src={Cross}
                  />
                </div>
                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className="navs"
                >
                  {navLinks.map((link, index) => {
                    return (
                      <div style={{ overflow: "hidden" }}>
                        <MobileNavLink
                          key={index}
                          title={link.title}
                          href={link.href}
                        />
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 1,
      ease: easeInOut,
    },
  },
  open: {
    y: 0,
    transition: {
      ease: easeInOut,
      duration: 1,
    },
  },
};
const MobileNavLink = ({ title, href }) => {
  return (
    <motion.div variants={mobileLinkVars} className="text">
      <Link to={href}>{title}</Link>
    </motion.div>
  );
};
