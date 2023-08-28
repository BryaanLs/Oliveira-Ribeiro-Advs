import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Children, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const BoxAnimation = ({ animacao, children }) => {
  const control = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // A animação será acionada apenas uma vez
    threshold: 0.3, // Elemento é considerado visível quando 20% está na tela
    rootMargin: "0px 0px -50px 0px", // Adiciona um "espaço invisível" acima do elemento
  });

  useEffect(() => {
    if (inView) control.start("visible");
    // inView ? control.start("visible") : control.start("hidden");
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
