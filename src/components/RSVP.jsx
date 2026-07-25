import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function RSVP({ rsvp }) {
  return (
    <div className="text-center">
      <p className="font-script text-4xl sm:text-5xl text-gold-dark">RSVP</p>
      <div className="ornate-divider mt-3 mb-8">
        <span className="font-body text-xs tracking-[0.3em] uppercase text-maroon/70">
          We Can't Wait To Celebrate With You
        </span>
      </div>

      <motion.div
        className="max-w-sm mx-auto bg-cream-soft border border-gold/40 rounded-2xl shadow-card px-6 py-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-body text-sm text-emerald/80">{rsvp.rsvpMessage}</p>
        <p className="font-display text-xl text-maroon mt-4">{rsvp.contactName}</p>
        {/* <p className="font-body text-sm tracking-wide text-emerald/90 mt-1">
          {rsvp.contactPhone}
        </p> */}

        <div className="flex items-center justify-center gap-4 mt-6">
          <motion.a
            href={`tel:${rsvp.contactPhone}`}
            aria-label="Call coordinator"
            className="flex items-center justify-center gap-2 bg-maroon text-cream font-body text-sm font-medium px-5 py-3 rounded-full"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <Phone size={16} /> Call
          </motion.a>
          <motion.a
            href={`https://wa.me/${rsvp.contactPhone.replace(/[^\d]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message coordinator on WhatsApp"
            className="flex items-center justify-center gap-2 bg-emerald text-cream font-body text-sm font-medium px-5 py-3 rounded-full"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <MessageCircle size={16} /> Message
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
