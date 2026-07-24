# Digital Roka Invitation

A premium, mobile-first single-page Roka invitation built with **React**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features
- Animated "tear open" envelope hero with a gold/rose-gold dust burst
- Rotating mandala border around the couple's caricature
- "With Blessings From" family cards for both sides
- Scroll-animated vertical itinerary timeline
- Venue card with **Open in Google Maps** and **View Reviews & Photos** buttons
- RSVP block + a sticky floating call button for lost guests
- 100% content-driven — every string comes from `src/data/invitationData.js`

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:
```bash
npm run build
```
The output goes to `dist/`, ready to deploy to Vercel, Netlify, or any static host.

## 🎨 Customizing the Invitation
Everything is controlled from **one file**:

```
src/data/invitationData.js
```

Edit the `invitationConfig` object to change:
- Couple names, parents' names, and caricature image URL
- Event title, date, timings, and the full ceremony schedule
- Venue name, address, Google Maps link, and Google Reviews link
- RSVP coordinator name and phone number

No component files need to be touched — they all read from this config.

## 📁 Project Structure
```
src/
├── App.jsx                     # Page assembly & envelope-open state
├── data/
│   └── invitationData.js       # 🔧 Single source of truth for all content
├── components/
│   ├── Envelope.jsx            # Hero: animated envelope + reveal
│   ├── GoldDust.jsx            # Particle burst effect
│   ├── CoupleShowcase.jsx      # Caricature + rotating mandala border
│   ├── Family.jsx              # "With Blessings From" cards
│   ├── Itinerary.jsx           # Vertical event timeline
│   ├── Venue.jsx                # Address + map/review buttons
│   ├── RSVP.jsx                # Coordinator contact card
│   ├── FloatingContact.jsx     # Sticky floating call button
│   └── SectionWrapper.jsx      # Shared scroll fade-in-up animation
├── index.css                   # Tailwind + custom decorative styles
└── main.jsx                    # React entry point
```

## 🖼️ Replacing the Caricature
Swap `couple.caricatureUrl` in `invitationData.js` with your own hosted image
(e.g. an uploaded illustration URL, Cloudinary link, or local `/public` asset).
