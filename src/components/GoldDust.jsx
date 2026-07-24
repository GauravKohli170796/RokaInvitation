import { motion } from "framer-motion";
import { useMemo } from "react";

/**
 * A short-lived burst of shimmering gold / rose-gold particles that
 * plays once when the envelope tears open. Purely decorative — unmounts
 * itself after the animation window via the parent's timeout.
 */
export default function GoldDust({ count = 36 }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.6,
        duration: 1.4 + Math.random() * 1.2,
        size: 3 + Math.random() * 6,
        drift: (Math.random() - 0.5) * 120,
        color: Math.random() > 0.5 ? "#D4AF37" : "#B76E79",
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-40">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          initial={{ opacity: 0, y: 0, x: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            y: -260 - Math.random() * 120,
            x: p.drift,
            scale: [0, 1, 0.4],
            rotate: 180,
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            left: `${p.left}%`,
            bottom: "40%",
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: p.color,
            boxShadow: `0 0 6px ${p.color}`,
          }}
        />
      ))}
    </div>
  );
}
