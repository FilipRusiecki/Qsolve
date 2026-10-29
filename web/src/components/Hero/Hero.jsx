import { motion, useReducedMotion } from 'framer-motion'

const Hero = () => {
  const reduce = useReducedMotion()

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-qs-hero"
    >
      <div className="pointer-events-none absolute inset-0 bg-qs-sheen" aria-hidden />
      <div
        className="pointer-events-none absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-qs-green/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-1/4 h-72 w-72 rounded-full bg-qs-gold/15 blur-3xl"
        aria-hidden
      />

      <div
        className="absolute inset-x-0 bottom-0 z-[1] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-[96rem] px-4 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-32 lg:px-12 lg:pb-28 xl:px-16">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <img
            src="/images/qsolve-lockup-white.png"
            alt="QSolve"
            className="mb-10 h-12 w-auto sm:mb-12 sm:h-16 md:h-20"
            width={320}
            height={80}
          />
          <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Clear answers.
            <span className="mt-2 block text-qs-gold">Practical solutions.</span>
          </h1>
          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:mt-8 sm:text-lg"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            QSolve helps organisations cut through complexity and move forward
            with confidence.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-qs-green px-6 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-qs-green-deep sm:text-base"
            >
              Get in touch
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center border border-white/30 px-6 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:border-qs-gold hover:text-qs-gold sm:text-base"
            >
              About QSolve
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
