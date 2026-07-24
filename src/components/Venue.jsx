import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";

export default function Venue({ venue }) {
  return (
    <div>
      <div className="text-center mb-10">
        <p className="font-script text-4xl sm:text-5xl text-gold-dark">Where To Find Us</p>
        <div className="ornate-divider mt-3">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-maroon/70">
            The Venue
          </span>
        </div>
      </div>

      <motion.div
        className="max-w-md mx-auto bg-gradient-to-br from-maroon to-maroon-dark text-cream rounded-2xl shadow-card overflow-hidden border border-gold/40"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        <div className="jaali-texture px-6 py-8 text-center">
          <MapPin className="mx-auto mb-3 text-gold-light" size={30} />
          <p className="font-display text-xl sm:text-2xl">{venue.name}</p>
          <p className="font-body text-sm text-cream/80 mt-2 leading-relaxed">
            {venue.address}
          </p>
        </div>

        <div className="flex flex-col gap-3 px-6 pb-6">
          <motion.a
            href={venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gold text-maroon-dark font-body font-semibold text-sm sm:text-base py-3 rounded-full shadow-gold"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            animate={{ boxShadow: ["0 0 0px rgba(212,175,55,0)", "0 0 18px rgba(212,175,55,0.55)", "0 0 0px rgba(212,175,55,0)"] }}
            transition={{ boxShadow: { duration: 2.6, repeat: Infinity } }}
          >
            <MapPin size={18} />
            Open in Google Maps
          </motion.a>

          <motion.a
            href={venue.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-gold-light/70 text-cream font-body font-medium text-sm sm:text-base py-3 rounded-full"
            whileHover={{ scale: 1.03, backgroundColor: "rgba(212,175,55,0.12)" }}
            whileTap={{ scale: 0.97 }}
          >
            <Star size={18} />
            View Venue Reviews &amp; Photos
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
