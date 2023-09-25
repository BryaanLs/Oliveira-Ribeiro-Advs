/* eslint-disable react/prop-types */
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const BoxAnimation = ({ animacao, children }) => {
  const control = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px",
  });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }

    // Adicione o ouvinte de evento de rolagem quando o componente é montado
    const scrollListener = () => {
      if (inView) {
        control.start("visible");
      }
    };

    window.addEventListener("scroll", scrollListener, { passive: true });

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={animacao}
      initial="hidden"
      animate={control}
    >
      {children}
    </motion.div>
  );
};

export default BoxAnimation;
