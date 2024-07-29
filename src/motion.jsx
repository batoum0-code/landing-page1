import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Reveal = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    const slideControls = useAnimation();
    useEffect(() => {
        console.log(mainControls);
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        } else {
            mainControls.start("hidden");
            slideControls.start("hidden");
        }
    }, [isInView, mainControls]);    // Added mainControls to the dependency array

    return (
        <div ref={ref} style={{ position: "relative", overflow: "hidden"}}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" }
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.5, ease: "easeIn"}}
                style={{
                    position:"absolute",
                    bottom:4,
                    top:4,
                    left:0,
                    right:0,
                    background:"#00FD2A",
                    zIndex: 20,
                }}
            />
        </div>
    );
};

export default Reveal;
