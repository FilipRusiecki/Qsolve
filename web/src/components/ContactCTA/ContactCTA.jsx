import FadeIn from 'src/components/FadeIn/FadeIn'

const ContactCTA = () => {
  return (
    <section id="contact" className="bg-qs-black text-white">
      <div className="mx-auto w-full max-w-[96rem] px-4 py-20 sm:px-8 sm:py-28 lg:px-12 xl:px-16">
        <FadeIn className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-qs-gold">
            Contact
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Let’s talk about what you need to solve.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
            Reach out and we’ll follow up with next steps.
          </p>
          <a
            href="mailto:hello@qsolve.ie"
            className="mt-10 inline-flex items-center justify-center bg-qs-green px-6 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-qs-green-deep sm:text-base"
          >
            hello@qsolve.ie
          </a>
        </FadeIn>
      </div>
    </section>
  )
}

export default ContactCTA
