import { motion } from "framer-motion";
import { AddToCalendarButton } from "add-to-calendar-button-react";

export default function AddToCalendar({ event }) {
  return (
    <div className="text-center">
      <p className="font-script text-4xl sm:text-5xl text-gold-dark">Save The Date</p>
      <div className="ornate-divider mt-3 mb-8">
        <span className="font-body text-xs tracking-[0.3em] uppercase text-maroon/70">
          Never Miss The Moment
        </span>
      </div>

      <motion.div
        className="max-w-sm mx-auto bg-cream-soft border border-gold/40 rounded-2xl shadow-card px-6 py-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-body text-sm text-emerald/80">
          Add our Roka to your calendar so the day arrives with a reminder, not a surprise.
        </p>
        <p className="font-display text-xl text-maroon mt-4">{event.title}</p>

        <div className="flex justify-center mt-6">
                  <AddToCalendarButton
                      name={event.title}
                      description={event.description}
                      startDate={event.startDate}
                      startTime={event.startTime}
                      endTime={event.endTime}
                      timeZone="Asia/Kolkata"
                      location={event.location}
                      options={["Google", "Apple", "Outlook.com", "Yahoo", "iCal"]}
                      trigger="click"
                      buttonStyle="round"
                      alarms={[10080, 1440, 60, 5]}
                      hideBranding
                      styleLight={`
                        --btn-background: #7A1F2B;
                        --btn-text: #F5E1A4;
                        --btn-border: none;
                        --btn-shadow: none;
                        --btn-hover-background: #7A1F2B;
                        --btn-hover-text: #F5E1A4;
                        --btn-hover-border: none;
                        --btn-hover-shadow: none;
                        --font: inherit;
                        --font-size: 14px;

                        --list-background: #FFF8E7;
                        --list-text: #7A1F2B;
                        --list-border: rgba(212,175,55,0.4);
                        --list-shadow: 0 8px 24px rgba(0,0,0,0.08);
  `}
                  />
        </div>
      </motion.div>
    </div>
  );
}