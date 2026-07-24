import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import invitationConfig from "./data/invitationData.js";

import Envelope from "./components/Envelope.jsx";
import SectionWrapper from "./components/SectionWrapper.jsx";
import CoupleShowcase from "./components/CoupleShowcase.jsx";
import Family from "./components/Family.jsx";
import Itinerary from "./components/Itinerary.jsx";
import Venue from "./components/Venue.jsx";
import RSVP from "./components/RSVP.jsx";
import FloatingContact from "./components/FloatingContact.jsx";

function formatEventDate(dateStr) {
  const d = new Date(`${dateStr}T00:00:00`);
  return d.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const { couple, event, venue, rsvp } = invitationConfig;

  // Lock background scroll while the envelope overlay is showing
  useEffect(() => {
    document.body.style.overflow = isOpened ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpened]);

  const coupleInitials = `PR`;

  return (
    <div className="min-h-screen bg-cream text-maroon-dark overflow-x-hidden">
      <Envelope coupleInitials={coupleInitials} onOpened={() => setIsOpened(true)} />

      {isOpened && (
        <>
          {/* HERO */}
          <SectionWrapper className="relative flex flex-col items-center justify-center text-center px-6 pt-20 pb-4 jaali-texture overflow-hidden">
            <motion.div
              className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-gold/10 blur-3xl"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <p className="font-body text-xs sm:text-sm tracking-[0.35em] uppercase text-emerald/80 mb-4">
              With Immense Joy We Invite You To The
            </p>
            <h1 className="font-display text-4xl sm:text-6xl text-maroon leading-tight">
              {event.title}
            </h1>
            <p className="font-script text-3xl sm:text-5xl text-shimmer mt-3">
              {couple.groom.name} &amp; {couple.bride.name}
            </p>
            <div className="ornate-divider mt-6">
              <span className="font-body text-sm sm:text-base tracking-wide text-emerald/90">
                {formatEventDate(event.date)}
              </span>
            </div>
            <p className="font-body text-sm text-maroon/70 mt-1">{event.timings}</p>
          </SectionWrapper>

          {/* COUPLE / CARICATURE */}
          <SectionWrapper className="px-6 py-4" delay={0.05}>
            <CoupleShowcase couple={couple} />
          </SectionWrapper>

          {/* FAMILY DETAILS */}
          <SectionWrapper className="px-6 py-16 bg-white/40">
            <Family couple={couple} />
          </SectionWrapper>

          {/* ITINERARY */}
          <SectionWrapper className="px-6 py-16">
            <Itinerary event={event} />
          </SectionWrapper>

          {/* VENUE */}
          <SectionWrapper className="px-6 py-16 bg-white/40">
            <Venue venue={venue} />
          </SectionWrapper>

          {/* RSVP */}
          <SectionWrapper className="px-6 py-16 pb-24">
            <RSVP rsvp={rsvp} />
          </SectionWrapper>

          <footer className="text-center pb-10 px-6">
            <p className="font-script text-2xl text-gold-dark">
              {couple.groom.name} &amp; {couple.bride.name}
            </p>
            {couple.coupleHashtag && (
              <p className="font-body text-xs tracking-[0.2em] uppercase text-maroon/50 mt-2">
                {couple.coupleHashtag}
              </p>
            )}
            <p className="font-body text-xs tracking-[0.2em] uppercase text-maroon/50 mt-2">
              With Love, the Kohli Family
            </p>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-maroon/50 mt-2">
              Curated by Gaurav Kohli
            </p>
          </footer>

          <FloatingContact phone={rsvp.contactPhone} />
        </>
      )}
    </div>
  );
}
