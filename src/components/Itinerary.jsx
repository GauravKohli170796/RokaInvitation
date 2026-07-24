import { motion } from "framer-motion";

export default function Itinerary({ event }) {
  return (
    <div>
      <div className="text-center mb-12">
        <p className="font-script text-4xl sm:text-5xl text-gold-dark">The Celebration</p>
        <div className="ornate-divider mt-3">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-maroon/70">
            {event.title} &middot; {event.timings}
          </span>
        </div>
      </div>

      <div className="relative max-w-md mx-auto">
        {/* vertical spine */}
        <div className="absolute left-[18px] top-1 bottom-1 w-px bg-gradient-to-b from-gold via-gold/60 to-transparent" />

        <div className="space-y-8">
          {event.schedule.map((item, idx) => (
            <motion.div
              key={item.time + item.title}
              className="relative flex items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
            >
              {/* node */}
              <div className="absolute left-[10px] top-1.5 w-4 h-4 rounded-full bg-gold border-2 border-cream-soft shadow-gold z-10" />

              <div className="ml-10 w-full bg-white/60 rounded-xl border border-gold/30 px-5 py-4 shadow-sm">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-rosegold font-semibold">
                  {item.time}
                </p>
                <p className="font-display text-lg text-maroon mt-1">{item.title}</p>
                {item.description && (
                  <p className="font-body text-sm text-emerald/80 mt-1">{item.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
