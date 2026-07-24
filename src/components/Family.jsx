import { motion } from "framer-motion";

function FamilyCard({ label, childName, family, delay }) {
  return (
    <motion.div
      className="relative w-full sm:w-72 bg-cream-soft rounded-2xl border border-gold/40 shadow-card px-6 py-8 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay }}
    >
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-maroon text-gold-light text-[11px] tracking-[0.2em] uppercase px-4 py-1 rounded-full">
        {label}
      </span>

      <p className="mt-4 font-display text-2xl text-maroon">
        {childName}
      </p>
      <div className="flex-1 flex flex-col justify-center">
        <div className="ornate-divider my-4" />
        <div className={`grid gap-x-3 gap-y-2 text-left ${family.length > 4 ? "grid-cols-2" : "grid-cols-1 text-center"
          }`}>
          {family.map((member) => (
            <p key={member.relation + member.name} className="font-body text-sm text-emerald/90 leading-snug">
              <span className="font-medium">{member.name}</span>{" "}
              <span className="text-maroon block sm:inline text-xs sm:text-sm">
                ({member.relation})
              </span>
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Family({ couple }) {
  return (
    <div>
      <div className="text-center mb-10">
        <p className="font-script text-4xl sm:text-5xl text-gold-dark">With Blessings From</p>
        <div className="ornate-divider mt-3">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-maroon/70">
            Our Families
          </span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <FamilyCard
          label="Bride's Family"
          childName={couple.bride.fullName}
          family={couple.bride.family}
          delay={0}
        />
        <FamilyCard
          label="Groom's Family"
          childName={couple.groom.fullName}
          family={couple.groom.family}
          delay={0.15}
        />
      </div>
    </div>
  );
}
