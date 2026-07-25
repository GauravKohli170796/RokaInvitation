import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import GoldDust from "./GoldDust.jsx";

/**
 * Full-screen animated envelope. Tapping it triggers a tearing/opening
 * sequence — flap lifts, seal cracks, a gold dust burst plays — before
 * calling onOpened() so the parent can reveal the invitation beneath.
 */
export default function Envelope({ coupleInitials, onOpened }) {
  const [stage, setStage] = useState("closed"); // closed -> opening -> torn
  const [showDust, setShowDust] = useState(false);

  const handleTap = () => {
    if (stage !== "closed") return;
    setStage("opening");
    setShowDust(true);

    // Let the flap + seal animation play, then reveal the invitation
    setTimeout(() => setStage("torn"), 900);
    setTimeout(() => onOpened?.(), 1500);
  };

  return (
    <AnimatePresence>
      {stage !== "torn" && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-maroon via-maroon-dark to-emerald px-6"
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          {/* ambient jaali texture */}
          <div className="absolute inset-0 jaali-texture opacity-30" />

          <div className="relative flex flex-col items-center text-center">
            <motion.p
              className="mb-8 font-body text-xs sm:text-sm tracking-[0.35em] text-gold-light uppercase"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: stage === "closed" ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              You are cordially invited
            </motion.p>

            {/* Envelope body */}
            <motion.button
              type="button"
              aria-label="Open your invitation"
              onClick={handleTap}
              className="relative w-[280px] h-[190px] sm:w-[340px] sm:h-[230px] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-light rounded-sm"
              animate={
                stage === "closed"
                  ? { y: [0, -8, 0] }
                  : { scale: 1.08, y: -20, opacity: 0 }
              }
              transition={
                stage === "closed"
                  ? { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
                  : { duration: 0.6, delay: 0.3, ease: "easeIn" }
              }
              whileTap={{ scale: 0.97 }}
            >
              {/* Envelope base */}
              <div className="absolute inset-0 rounded-sm bg-cream-soft shadow-gold border border-gold/60" />
              {/* Side + bottom V-fold shading */}
              <div
                className="absolute inset-0 rounded-sm"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(212,175,55,0.15) 0%, transparent 30%, transparent 70%, rgba(128,0,32,0.1) 100%)",
                }}
              />
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 340 230"
                preserveAspectRatio="none"
              >
                <polyline
                  points="0,0 170,120 340,0"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
                <polyline
                  points="0,230 130,110"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="1"
                  opacity="0.35"
                />
                <polyline
                  points="340,230 210,110"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="1"
                  opacity="0.35"
                />
              </svg>

              {/* Top flap that lifts open */}
              <motion.div
                className="absolute top-0 left-0 w-full origin-top"
                style={{ height: "58%" }}
                animate={
                  stage === "opening" || stage === "torn"
                    ? { rotateX: 165 }
                    : { rotateX: 0 }
                }
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                <svg viewBox="0 0 340 134" className="w-full h-full drop-shadow-md">
                  <polygon
                    points="0,0 340,0 170,134"
                    fill="url(#flapGradient)"
                    stroke="#D4AF37"
                    strokeWidth="1.5"
                  />
                  <defs>
                    <linearGradient id="flapGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#9c1f3d" />
                      <stop offset="100%" stopColor="#800020" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Wax seal / monogram */}
              <motion.div
                className="absolute left-[38%] top-[58%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gold-dark border-2 border-gold-light shadow-gold flex items-center justify-center z-10"
                animate={
                  stage !== "closed"
                    ? { scale: [1, 1.3, 0], opacity: [1, 1, 0] }
                    : { scale: 1 }
                }
                transition={{ duration: 0.6 }}
              >
                <span className="font-script text-2xl sm:text-3xl text-maroon-dark">
                  {coupleInitials}
                </span>
              </motion.div>

              {/* Tap hint — hand pointing straight down at the seal, centered above it */}
              {stage === "closed" && (
                <motion.div
                  className="absolute left-[48%] top-[8%] -translate-x-1/2 flex flex-col items-center pointer-events-none select-none z-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <motion.span
                    className="text-5xl sm:text-6xl leading-none"
                    style={{ filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.35))" }}
                    animate={{
                      y: [0, 12, 0],
                      scale: [1, 0.88, 1],
                    }}
                    transition={{
                      duration: 1.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    👇
                  </motion.span>
                </motion.div>
              )}
            </motion.button>

            <motion.p
              className="mt-8 font-body text-cream/80 text-sm tracking-wide"
              animate={{ opacity: stage === "closed" ? 1 : 0 }}
              transition={{ duration: 0.4 }}
            >
              Tap the seal to see the details
            </motion.p>
          </div>

          {showDust && <GoldDust />}
        </motion.div>
      )}
    </AnimatePresence>
  );
}