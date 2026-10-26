import { motion } from "framer-motion";

export default function SectionHeading({ title, subtitle, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mx-auto mb-12 max-w-2xl text-center"
    >
      <h2
        className={`font-display text-2xl font-bold sm:text-3xl lg:text-4xl ${light ? "!text-white" : ""}`}
      >
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded bg-brand" />
      {subtitle && (
        <p
          className={`mt-4 text-lg ${light ? "text-slate-200" : "text-slate-600"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
