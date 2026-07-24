import { motion } from "framer-motion";

/**
 * Wraps any section content and animates it in with a gentle
 * "fade-in-up" effect as it scrolls into view. Keeping this logic
 * in one place means every section behaves consistently.
 */
const fadeUpVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function SectionWrapper({
  children,
  className = "",
  id,
  delay = 0,
}) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
      variants={fadeUpVariants}
    >
      {children}
    </motion.section>
  );
}
