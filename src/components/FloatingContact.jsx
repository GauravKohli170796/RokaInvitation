import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function FloatingContact({ phone }) {
  return (
    <motion.a
      href={`tel:${phone}`}
      aria-label="Call the event coordinator"
      className="fixed bottom-5 right-5 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-maroon text-gold-light shadow-gold border border-gold/50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.8, duration: 0.5, type: "spring" }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-gold/40"
        animate={{ scale: [1, 1.7], opacity: [0.6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
      <Phone size={22} className="relative z-10" />
    </motion.a>
  );
}
