import { motion } from "framer-motion";
import caricatureImg from "../../public/rohitPallavi.jpeg";

export default function CoupleShowcase({ couple }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
        {/* Rotating mandala ring (SVG, slow spin) */}
        <motion.svg
          viewBox="0 0 200 200"
          className="absolute inset-0 w-full h-full text-gold"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <g fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.55">
            <circle cx="100" cy="100" r="96" />
            <circle cx="100" cy="100" r="88" strokeDasharray="2 4" />
            {Array.from({ length: 24 }).map((_, i) => {
              const angle = (i * 360) / 24;
              return (
                <line
                  key={i}
                  x1="100"
                  y1="4"
                  x2="100"
                  y2="16"
                  transform={`rotate(${angle} 100 100)`}
                />
              );
            })}
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 360) / 12;
              return (
                <path
                  key={`petal-${i}`}
                  d="M100,12 C106,26 106,34 100,40 C94,34 94,26 100,12 Z"
                  transform={`rotate(${angle} 100 100)`}
                />
              );
            })}
          </g>
        </motion.svg>

        {/* Gentle pulsing glow beneath the portrait */}
        <motion.div
          className="absolute w-52 h-52 sm:w-64 sm:h-64 rounded-full bg-gold/20 blur-2xl"
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Portrait */}
        <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden border-4 border-gold shadow-gold bg-cream-soft">
          <img
            src={caricatureImg}
            alt={`${couple.groom.name} and ${couple.bride.name} caricature`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="font-display text-3xl sm:text-4xl text-maroon">
          {couple.groom.name}
          <span className="font-script text-gold-dark text-4xl sm:text-5xl mx-3">&</span>
          {couple.bride.name}
        </p>
        {couple.coupleHashtag && (
          <p className="mt-2 font-body text-xs sm:text-sm tracking-[0.25em] text-emerald/70 uppercase">
            {couple.coupleHashtag}
          </p>
        )}
      </div>
    </div>
  );
}
